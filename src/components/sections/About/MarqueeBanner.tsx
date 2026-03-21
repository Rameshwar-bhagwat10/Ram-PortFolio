'use client';

import { useRef, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';

const topRowItems = [
  'Full Stack Developer',
  'AI & ML Integration',
  'SaaS Architect',
  'Product Builder',
  'Next.js Expert',
  'React Specialist',
  'TypeScript Pro',
  'API Designer',
];

const bottomRowItems = [
  '3+ Years Experience',
  'Creative Developer',
  '10+ Projects Delivered',
  'Open Source Contributor',
  'UI/UX Enthusiast',
  'Performance Optimizer',
  'Cloud Native Builder',
  'Problem Solver',
];

/* Lightweight marquee row with pure CSS animation */
function MarqueeRow({
  items,
  direction = 'left',
  duration = 40,
  variant = 'fire',
}: {
  items: string[];
  direction?: 'left' | 'right';
  duration?: number;
  variant?: 'fire' | 'dark';
}) {
  // 2x duplication for seamless loop
  const repeated = useMemo(() => [...items, ...items], [items]);

  return (
    <div className="flex overflow-hidden whitespace-nowrap">
      <div
        className={direction === 'left' ? 'marquee-scroll-left' : 'marquee-scroll-right'}
        style={{ '--marquee-duration': `${duration}s` } as React.CSSProperties}
      >
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span
              className="marquee-text-compact"
              style={{
                color: variant === 'fire' ? '#fff' : 'rgba(255,255,255,0.7)',
              }}
            >
              {item}
            </span>
            <span
              className="text-sm sm:text-base md:text-lg px-3 sm:px-4"
              style={{
                opacity: variant === 'fire' ? 0.5 : 0.25,
                color: variant === 'fire' ? '#fff' : 'rgba(255,255,255,0.5)',
              }}
            >
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
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden select-none"
      style={{
        background: '#080808',
        contain: 'layout style',
        isolation: 'isolate',
      }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at center, rgba(249,115,22,0.08) 0%, rgba(139,92,246,0.04) 40%, transparent 70%)',
        }}
      />

      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 h-40 sm:h-52 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to bottom, #0F0E0E 0%, #0F0E0E 30%, transparent 100%)' }}
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 sm:h-52 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to top, #0F0E0E 0%, #0F0E0E 30%, transparent 100%)' }}
      />

      {/* Strips Container - centered vertically */}
      <div className="relative w-full">
        {/* Strip 1 — Fire gradient (top, angled right) */}
        <motion.div
          className="marquee-strip absolute left-0 right-0 z-[2]"
          style={{ top: '-2rem', rotate: -4 }}
          initial={{ x: '100%', opacity: 0 }}
          animate={isInView ? { x: '0%', opacity: 1 } : undefined}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
        >
          <div className="marquee-strip-compact marquee-strip-fire-bg">
            <MarqueeRow items={topRowItems} direction="right" duration={45} variant="fire" />
          </div>
        </motion.div>

        {/* Strip 2 — Dark (bottom, angled left) */}
        <motion.div
          className="marquee-strip absolute left-0 right-0 z-[1]"
          style={{ top: '2rem', rotate: 4 }}
          initial={{ x: '-100%', opacity: 0 }}
          animate={isInView ? { x: '0%', opacity: 1 } : undefined}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.25 }}
        >
          <div className="marquee-strip-compact marquee-strip-dark-bg">
            <MarqueeRow items={bottomRowItems} direction="left" duration={38} variant="dark" />
          </div>
        </motion.div>
      </div>

      {/* Center intersection highlight */}
      <motion.div
        className="absolute z-[3] pointer-events-none"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : undefined}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.5 }}
      >
        <div
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(236,72,153,0.08) 40%, transparent 70%)',
          }}
        />
      </motion.div>

      {/* Animated corner accents */}
      <motion.div
        className="absolute top-20 left-8 sm:left-16 w-16 h-16 sm:w-24 sm:h-24 pointer-events-none z-[1]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 0.4, scale: 1 } : undefined}
        transition={{ duration: 1.2, delay: 0.6 }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(249,115,22,0.3), transparent 70%)',
          }}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-8 sm:right-16 w-20 h-20 sm:w-28 sm:h-28 pointer-events-none z-[1]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 0.3, scale: 1 } : undefined}
        transition={{ duration: 1.2, delay: 0.8 }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.25), transparent 70%)',
          }}
        />
      </motion.div>

      {/* Scroll hint - bottom */}
      <motion.div
        className="absolute bottom-10 sm:bottom-14 left-1/2 -translate-x-1/2 z-[15] flex flex-col items-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <span
          className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-white/20"
          style={{ fontFamily: 'var(--font-jakarta)' }}
        >
          Continue
        </span>
        <motion.div
          className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border border-white/10 flex justify-center pt-2"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-1 h-2 rounded-full bg-gradient-to-b from-orange-500/60 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
