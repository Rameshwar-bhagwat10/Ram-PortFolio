'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollHeading() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the full journey of the container through the viewport
  // progress 0 = container top reaches viewport bottom (just entering)
  // progress 1 = container bottom reaches viewport top (just left)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Only animate during the middle portion when the heading is FULLY visible
  // [0.25, 0.75] = the container is fully inside the viewport
  // Outside this range, values are clamped (no movement)
  // The heading starts at 10% (visible from left) and scrolls to -60% (to show the right end)
  const x = useTransform(scrollYProgress, [0.25, 0.75], ['10%', '-60%']);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden py-4 sm:py-6 md:py-8 mb-8 sm:mb-10 md:mb-12 lg:mb-16"
    >
      {/* CSS transition provides smooth interpolation without spring lag */}
      <motion.h2
        style={{ x, willChange: 'transform', transition: 'transform 0.15s linear' }}
        className="whitespace-nowrap text-[2.8rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[7rem] xl:text-[9rem] font-extrabold uppercase tracking-[-0.03em] leading-none select-none"
      >
        <span
          className="text-white/20"
          style={{
            fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif',
            fontWeight: 800,
            WebkitTextStroke: '1.5px rgba(255,255,255,0.35)',
          }}
        >
          Featured{' '}
        </span>
        <span
          className="text-rainbow-gradient"
          style={{
            fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif',
            fontWeight: 800,
          }}
        >
          Creative{' '}
        </span>
        <span
          className="text-white/20"
          style={{
            fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif',
            fontWeight: 800,
            WebkitTextStroke: '1.5px rgba(255,255,255,0.35)',
          }}
        >
          Projects
        </span>
      </motion.h2>
    </div>
  );
}
