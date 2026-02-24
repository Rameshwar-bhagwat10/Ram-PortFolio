import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';
import {
  generateVisitorFingerprint,
  isBot,
  getClientIP,
  getTodayKey,
} from '@/lib/visitor-utils';

// Redis keys
const KEYS = {
  UNIQUE_VISITORS: 'visitors:unique',
  TOTAL_VISITS: 'visitors:total',
  TODAY_PREFIX: 'visitors:today:',
  FINGERPRINT_PREFIX: 'visitors:fingerprint:',
};

// Fallback values when KV is not configured
const FALLBACK_STATS = {
  uniqueVisitors: 19,
  totalVisits: 47,
  todayVisitors: 3,
};

// Check if KV is configured
function isKVConfigured(): boolean {
  return !!(
    process.env.KV_REST_API_URL &&
    process.env.KV_REST_API_TOKEN
  );
}

export async function GET() {
  try {
    // If KV is not configured, return fallback stats
    if (!isKVConfigured()) {
      return NextResponse.json({
        ...FALLBACK_STATS,
        lastUpdated: new Date().toISOString(),
        usingFallback: true,
      });
    }

    // Get stats from Redis
    const [uniqueVisitors, totalVisits, todayVisitors] = await Promise.all([
      kv.scard(KEYS.UNIQUE_VISITORS), // Count of unique visitor IDs
      kv.get<number>(KEYS.TOTAL_VISITS) || Promise.resolve(0), // Total visit count
      kv.scard(`${KEYS.TODAY_PREFIX}${getTodayKey()}`), // Today's unique visitors
    ]);

    return NextResponse.json({
      uniqueVisitors: uniqueVisitors || 0,
      totalVisits: totalVisits || 0,
      todayVisitors: todayVisitors || 0,
      lastUpdated: new Date().toISOString(),
      usingFallback: false,
    });
  } catch (error) {
    console.error('Error fetching visitor stats:', error);
    
    // Return fallback stats on error
    return NextResponse.json({
      ...FALLBACK_STATS,
      lastUpdated: new Date().toISOString(),
      usingFallback: true,
    });
  }
}

export async function POST(request: Request) {
  try {
    // If KV is not configured, return fallback stats (don't track)
    if (!isKVConfigured()) {
      return NextResponse.json({
        success: true,
        isNewVisitor: false,
        stats: {
          ...FALLBACK_STATS,
          lastUpdated: new Date().toISOString(),
          usingFallback: true,
        },
      });
    }

    // Get visitor information
    const userAgent = request.headers.get('user-agent') || '';
    const ip = getClientIP(request);

    // Filter out bots
    if (isBot(userAgent)) {
      return NextResponse.json({ message: 'Bot detected, not counted' });
    }

    // Generate unique fingerprint
    const fingerprint = generateVisitorFingerprint(ip, userAgent);
    const fingerprintKey = `${KEYS.FINGERPRINT_PREFIX}${fingerprint}`;
    const todayKey = `${KEYS.TODAY_PREFIX}${getTodayKey()}`;

    // Check if visitor exists
    const lastVisit = await kv.get<string>(fingerprintKey);
    const isNewVisitor = !lastVisit;

    // Update visitor data using pipeline
    const pipeline = kv.pipeline();

    // Always increment total visits
    pipeline.incr(KEYS.TOTAL_VISITS);

    // If new visitor, add to unique visitors set
    if (isNewVisitor) {
      pipeline.sadd(KEYS.UNIQUE_VISITORS, fingerprint);
    }

    // Add to today's visitors (set automatically handles duplicates)
    pipeline.sadd(todayKey, fingerprint);

    // Set today's key to expire at end of day
    const now = new Date();
    const endOfDay = new Date(now);
    endOfDay.setHours(23, 59, 59, 999);
    const secondsUntilEndOfDay = Math.floor((endOfDay.getTime() - now.getTime()) / 1000);
    pipeline.expire(todayKey, secondsUntilEndOfDay);

    // Update last visit timestamp
    pipeline.set(fingerprintKey, new Date().toISOString(), {
      ex: 60 * 60 * 24, // Expire after 24 hours
    });

    // Execute all commands
    await pipeline.exec();

    // Get updated stats
    const [uniqueVisitors, totalVisits, todayVisitors] = await Promise.all([
      kv.scard(KEYS.UNIQUE_VISITORS),
      kv.get<number>(KEYS.TOTAL_VISITS),
      kv.scard(todayKey),
    ]);

    return NextResponse.json({
      success: true,
      isNewVisitor,
      stats: {
        uniqueVisitors: uniqueVisitors || 0,
        totalVisits: totalVisits || 0,
        todayVisitors: todayVisitors || 0,
        lastUpdated: new Date().toISOString(),
        usingFallback: false,
      },
    });
  } catch (error) {
    console.error('Error tracking visitor:', error);
    
    // Return fallback stats on error - don't break the site
    return NextResponse.json({
      success: false,
      error: 'Failed to track visitor',
      stats: {
        ...FALLBACK_STATS,
        lastUpdated: new Date().toISOString(),
        usingFallback: true,
      },
    });
  }
}
