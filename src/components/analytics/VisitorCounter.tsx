'use client';

import { motion } from 'framer-motion';
import { useVisitorTracking } from '@/hooks/useVisitorTracking';
import { formatNumber } from '@/lib/visitor-utils';

interface VisitorCounterProps {
  variant?: 'navbar' | 'footer' | 'hero' | 'floating';
  showDetails?: boolean;
}

export default function VisitorCounter({ 
  variant = 'navbar',
  showDetails = false 
}: VisitorCounterProps) {
  const { stats, isLoading, error } = useVisitorTracking();

  if (error && !stats.uniqueVisitors) {
    return null; // Gracefully hide if error and no data
  }

  // Navbar variant - compact badge
  if (variant === 'navbar') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
        title={stats.usingFallback ? 'Demo mode - Set up Vercel KV for real tracking' : 'Live visitor count'}
      >
        <div className="relative">
          <div className={`w-2 h-2 rounded-full ${stats.usingFallback ? 'bg-orange-500' : 'bg-green-500'} animate-pulse`} />
          <div className={`absolute inset-0 w-2 h-2 rounded-full ${stats.usingFallback ? 'bg-orange-500' : 'bg-green-500'} animate-ping opacity-75`} />
        </div>
        <span className="text-sm text-white/80 font-medium">
          {isLoading ? (
            <span className="animate-pulse">...</span>
          ) : (
            <>
              {formatNumber(stats.uniqueVisitors)}
              <span className="text-white/50 ml-1">visitors</span>
            </>
          )}
        </span>
      </motion.div>
    );
  }

  // Footer variant - detailed stats
  if (variant === 'footer') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/60"
      >
        <div className="flex items-center gap-2">
          <span className="text-lg">👥</span>
          <span>
            {isLoading ? (
              <span className="animate-pulse">Loading...</span>
            ) : (
              <>
                <span className="text-white font-semibold">
                  {stats.uniqueVisitors.toLocaleString()}
                </span>
                {' '}Total Visitors
              </>
            )}
          </span>
        </div>
        
        {showDetails && !isLoading && (
          <>
            <span className="text-white/30">|</span>
            <div className="flex items-center gap-2">
              <span className="text-lg">👀</span>
              <span>
                <span className="text-white font-semibold">
                  {stats.todayVisitors.toLocaleString()}
                </span>
                {' '}Today
              </span>
            </div>
            
            <span className="text-white/30">|</span>
            <div className="flex items-center gap-2">
              <span className="text-lg">📊</span>
              <span>
                <span className="text-white font-semibold">
                  {stats.totalVisits.toLocaleString()}
                </span>
                {' '}Total Views
              </span>
            </div>
          </>
        )}
      </motion.div>
    );
  }

  // Hero variant - large display
  if (variant === 'hero') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        {isLoading ? (
          <div className="text-white/50 animate-pulse">Loading visitors...</div>
        ) : (
          <div className="text-lg text-white/70">
            Join{' '}
            <span className="text-primary-gradient font-bold text-xl">
              {formatNumber(stats.uniqueVisitors)}+
            </span>
            {' '}developers who visited
          </div>
        )}
      </motion.div>
    );
  }

  // Floating variant - bottom right badge
  if (variant === 'floating') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="fixed bottom-6 right-6 z-40 px-4 py-2 rounded-full bg-black/80 backdrop-blur-md border border-white/20 shadow-2xl"
      >
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-500 animate-ping opacity-75" />
          </div>
          <span className="text-sm text-white font-medium">
            {isLoading ? (
              <span className="animate-pulse">...</span>
            ) : (
              <>
                {formatNumber(stats.uniqueVisitors)}
                <span className="text-white/60 ml-1">visitors</span>
              </>
            )}
          </span>
        </div>
      </motion.div>
    );
  }

  return null;
}
