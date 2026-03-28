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

const PORTFOLIO_BACKGROUND = '#0F0E0E';

/* Enhanced marquee row with smooth animations */
function MarqueeRow({
  items,
  direction = 'left',
  duration = 40,
  variant = 'primary',
}: {
  items: string[];
  direction?: 'left' | 'right';
  duration?: number;
  variant?: 'primary' | 'secondary';
}) {
  // 3x duplication for seamless loop
  const repeated = useMemo(() => [...items, ...items, ...items], [items]);

  return (
    <div className="flex overflow-hidden whitespace-nowrap">
      <motion.div
        className={direction === 'left' ? 'marquee-scroll-left' : 'marquee-scroll-right'}
        style={{ '--marquee-duration': `${duration}s` } as React.CSSProperties}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span
              className="marquee-text-enhanced"
              style={{
                color: variant === 'primary' ? '#ffffff' : 'rgba(255,255,255,0.85)',
                textShadow: variant === 'primary'
                  ? '0 2px 20px rgba(255,255,255,0.15)'
                  : '0 1px 10px rgba(255,255,255,0.05)',
              }}
            >
              {item}
            </span>
            <span
              className="marquee-separator"
              style={{
                opacity: variant === 'primary' ? 0.6 : 0.3,
                color: variant === 'primary' ? '#fff' : 'rgba(255,255,255,0.5)',
              }}
            >
              ◆
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function MarqueeBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden select-none"
      style={{
        backgroundColor: PORTFOLIO_BACKGROUND,
        contain: 'layout style',
        isolation: 'isolate',
      }}
    >
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary glow */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : undefined}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          style={{
            background:
              'radial-gradient(ellipse 100% 60% at 50% 50%, rgba(255, 140, 0, 0.08) 0%, rgba(255, 95, 0, 0.04) 35%, transparent 70%)',
          }}
        />
        {/* Secondary glow - warm */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : undefined}
          transition={{ duration: 2, delay: 0.3, ease: 'easeOut' }}
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 30% 50%, rgba(255, 95, 0, 0.06) 0%, transparent 50%)',
          }}
        />
        {/* Accent glow - purple */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : undefined}
          transition={{ duration: 2, delay: 0.5, ease: 'easeOut' }}
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 70% 50%, rgba(255, 20, 147, 0.05) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
        }}
      />

      {/* Top fade - enhanced gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-48 sm:h-60 pointer-events-none z-10"
        style={{
          background: `linear-gradient(to bottom, ${PORTFOLIO_BACKGROUND} 0%, ${PORTFOLIO_BACKGROUND} 20%, rgba(15,14,14,0.85) 60%, transparent 100%)`
        }}
      />
      {/* Bottom fade - enhanced gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 sm:h-60 pointer-events-none z-10"
        style={{
          background: `linear-gradient(to top, ${PORTFOLIO_BACKGROUND} 0%, ${PORTFOLIO_BACKGROUND} 20%, rgba(15,14,14,0.85) 60%, transparent 100%)`
        }}
      />

      {/* Strips Container - properly positioned for X crossing */}
      <div className="relative w-full h-32 sm:h-40">
        {/* Strip 1 — Primary gradient (vibrant cyan-blue-purple) */}
        <motion.div
          className="marquee-strip absolute left-0 right-0 z-[2]"
          style={{ top: '50%', translateY: '-50%' }}
          initial={{
            x: '100vw',
            opacity: 0,
            rotate: -5,
            filter: 'blur(10px)',
          }}
          animate={isInView ? {
            x: '0%',
            opacity: 1,
            rotate: -5,
            filter: 'blur(0px)',
          } : undefined}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.1,
            opacity: { duration: 0.8 },
            filter: { duration: 0.8 },
          }}
        >
          <div className="marquee-strip-enhanced marquee-strip-fire-bg">
            <MarqueeRow items={topRowItems} direction="right" duration={50} variant="primary" />
          </div>
        </motion.div>

        {/* Strip 2 — Secondary (dark glassmorphism) */}
        <motion.div
          className="marquee-strip absolute left-0 right-0 z-[1]"
          style={{ top: '50%', translateY: '-50%' }}
          initial={{
            x: '-100vw',
            opacity: 0,
            rotate: 5,
            filter: 'blur(10px)',
          }}
          animate={isInView ? {
            x: '0%',
            opacity: 1,
            rotate: 5,
            filter: 'blur(0px)',
          } : undefined}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.25,
            opacity: { duration: 0.8 },
            filter: { duration: 0.8 },
          }}
        >
          <div className="marquee-strip-enhanced marquee-strip-secondary">
            <MarqueeRow items={bottomRowItems} direction="left" duration={42} variant="secondary" />
          </div>
        </motion.div>
      </div>

      {/* Animated corner accents - top left */}
      <motion.div
        className="absolute top-24 left-8 sm:left-20 w-20 h-20 sm:w-32 sm:h-32 pointer-events-none z-[1]"
        initial={{ opacity: 0, scale: 0.3, x: -50, y: -50 }}
        animate={isInView ? { opacity: 0.5, scale: 1, x: 0, y: 0 } : undefined}
        transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 140, 0, 0.32), transparent 70%)',
            filter: 'blur(20px)',
          }}
        />
      </motion.div>

      {/* Animated corner accents - bottom right */}
      <motion.div
        className="absolute bottom-24 right-8 sm:right-20 w-24 h-24 sm:w-36 sm:h-36 pointer-events-none z-[1]"
        initial={{ opacity: 0, scale: 0.3, x: 50, y: 50 }}
        animate={isInView ? { opacity: 0.4, scale: 1, x: 0, y: 0 } : undefined}
        transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 20, 147, 0.3), transparent 70%)',
            filter: 'blur(25px)',
          }}
        />
      </motion.div>

      {/* Additional accent - top right */}
      <motion.div
        className="absolute top-32 right-16 sm:right-32 w-16 h-16 sm:w-24 sm:h-24 pointer-events-none z-[1]"
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 0.3, scale: 1 } : undefined}
        transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 149, 0, 0.35), transparent 70%)',
            filter: 'blur(15px)',
          }}
        />
      </motion.div>

      {/* Scroll hint - enhanced iOS style */}
      <motion.div
        className="absolute bottom-12 sm:bottom-16 left-1/2 -translate-x-1/2 z-[15] flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 1, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.span
          className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] font-medium"
          style={{
            fontFamily: 'var(--font-jakarta)',
            background: 'linear-gradient(90deg, rgba(255,255,255,0.25), rgba(255,255,255,0.15))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          Continue
        </motion.span>
        <motion.div
          className="w-6 h-10 sm:w-7 sm:h-12 rounded-full flex justify-center pt-2.5"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <motion.div
            className="w-1 h-2.5 rounded-full"
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 140, 0, 0.8), rgba(255, 20, 147, 0.4), transparent)',
            }}
            animate={{ y: [0, 8, 0], opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
