'use client';

import { useRef, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const fireItems = [
  'Full Stack Developer',
  'AI & ML Integration',
  'SaaS Architect',
  'Product Builder',
  'Next.js Expert',
  'React Specialist',
  'TypeScript Pro',
  'API Designer',
];

const neonItems = [
  '3+ Years of Experience',
  'Creative Developer',
  '10+ Projects Delivered',
  'Open Source Contributor',
  'UI/UX Enthusiast',
  'Performance Optimizer',
  'Cloud Native Builder',
  'Problem Solver',
];

/* ── Lightweight marquee row — pure CSS animation, minimal DOM ── */
function MarqueeRow({
  items,
  direction = 'left',
  duration = 40,
}: {
  items: string[];
  direction?: 'left' | 'right';
  duration?: number;
}) {
  // Only 2x duplication needed for seamless loop
  const repeated = useMemo(() => [...items, ...items], [items]);

  return (
    <div className="flex overflow-hidden whitespace-nowrap">
      <div
        className={direction === 'left' ? 'marquee-scroll-left' : 'marquee-scroll-right'}
        style={{ '--marquee-duration': `${duration}s` } as React.CSSProperties}
      >
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="marquee-text">
              {item}
            </span>
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl opacity-30 px-2 sm:px-3">
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function MarqueeBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  return (
    <div
      ref={containerRef}
      className="relative h-[50vh] sm:h-[55vh] flex items-center justify-center overflow-hidden select-none"
      style={{
        background: '#080808',
        contain: 'strict',
        isolation: 'isolate',
      }}
    >
      {/* ── Background — single combined layer ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(249,115,22,0.06) 0%, rgba(139,92,246,0.03) 30%, transparent 60%), radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.6) 100%)',
        }}
      />

      {/* Top blend */}
      <div
        className="absolute top-0 left-0 right-0 h-32 sm:h-40 pointer-events-none z-[5]"
        style={{ background: 'linear-gradient(to bottom, #0F0E0E, transparent)' }}
      />
      {/* Bottom blend */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 pointer-events-none z-[5]"
        style={{ background: 'linear-gradient(to top, #0F0E0E, transparent)' }}
      />

      {/* ── Strip 1 — Orange (top-left to bottom-right) ── */}
      <motion.div
        className="marquee-strip absolute left-0 right-0 z-[2]"
        style={{ top: 'calc(50% - 4rem)', rotate: -6 }}
        initial={{ x: '110%', opacity: 0 }}
        animate={isInView ? { x: '0%', opacity: 1 } : undefined}
        transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1], delay: 0.15 }}
      >
        <div className="marquee-strip-inner marquee-strip-fire-bg">
          <MarqueeRow items={fireItems} direction="right" duration={50} />
        </div>
      </motion.div>

      {/* ── Strip 2 — Dark/Black (bottom-left to top-right, crossing) ── */}
      <motion.div
        className="marquee-strip absolute left-0 right-0 z-[1]"
        style={{ top: 'calc(50% + 1rem)', rotate: 6 }}
        initial={{ x: '-110%', opacity: 0 }}
        animate={isInView ? { x: '0%', opacity: 1 } : undefined}
        transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1], delay: 0.35 }}
      >
        <div className="marquee-strip-inner marquee-strip-dark-bg">
          <MarqueeRow items={neonItems} direction="left" duration={40} />
        </div>
      </motion.div>

      {/* ── Center Orb ── */}
      <motion.div
        className="absolute z-[3] pointer-events-none"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : undefined}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1], delay: 0.7 }}
      >
        <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36">
          {/* Simple glow — no blur filter */}
          <div
            className="absolute -inset-8 sm:-inset-12 rounded-full opacity-60"
            style={{
              background:
                'radial-gradient(circle, rgba(249,115,22,0.3) 0%, rgba(124,58,237,0.15) 40%, transparent 70%)',
            }}
          />
          {/* Border ring — static gradient, no animation */}
          <div
            className="absolute -inset-[3px] sm:-inset-1 rounded-full"
            style={{
              background:
                'conic-gradient(from 45deg, #f97316, #ef4444, #7c3aed, #3b82f6, #06b6d4, #10b981, #f97316)',
            }}
          >
            <div className="absolute inset-[2px] sm:inset-[3px] rounded-full bg-[#080808]" />
          </div>
          {/* Logo */}
          <div className="absolute inset-0 rounded-full flex items-center justify-center overflow-hidden bg-[#080808]/80">
            <Image
              src="/favicon.svg"
              alt="Logo"
              width={80}
              height={80}
              className="w-[55%] h-[55%] object-contain"
              priority
            />
          </div>
        </div>
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <div
        className={`absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-[4] flex flex-col items-center gap-2 transition-opacity duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}
      >
        <span
          className="text-[10px] uppercase tracking-[0.25em] text-white/25"
          style={{ fontFamily: 'var(--font-jakarta)' }}
        >
          Scroll
        </span>
        <div className="w-[1px] h-8 marquee-scroll-indicator" />
      </div>
    </div>
  );
}
