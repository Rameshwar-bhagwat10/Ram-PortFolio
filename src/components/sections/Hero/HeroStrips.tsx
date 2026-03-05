'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useIntroAnimation } from '@/context/IntroAnimationContext';

const STRIP_COUNT = 5;
const STRIP_DURATION = 0.85;
const STRIP_STAGGER = 0.2;

// Center strip animates first, then outward
function getStripDelay(index: number): number {
  const center = Math.floor(STRIP_COUNT / 2);
  return Math.abs(index - center) * STRIP_STAGGER;
}

export default function HeroStrips() {
  const { isIntroComplete, completeIntro } = useIntroAnimation();
  const shouldReduceMotion = useReducedMotion();
  const hasCompleted = useRef(false);

  const maxDelay = getStripDelay(0); // outer strips have max delay
  const totalTime = (maxDelay + STRIP_DURATION) * 1000;

  useEffect(() => {
    if (hasCompleted.current) return;

    if (shouldReduceMotion) {
      completeIntro();
      hasCompleted.current = true;
      return;
    }

    // Lock scroll during strip animation
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      document.body.style.overflow = originalOverflow;
      completeIntro();
      hasCompleted.current = true;
    }, totalTime + 200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalOverflow;
    };
  }, [completeIntro, shouldReduceMotion, totalTime]);

  return (
    <>
      {/* Permanent gap background — base dark color always visible */}
      <div
        className="absolute inset-0 z-0 rounded-b-[40px] sm:rounded-b-[60px] bg-[#1c1b1a]"
        aria-hidden="true"
      />

      {/* Subtle warm glow at bottom of gaps — always present after intro */}
      <motion.div
        className="absolute inset-0 z-[1] rounded-b-[40px] sm:rounded-b-[60px]"
        style={{
          background:
            'linear-gradient(to top, rgba(255, 60, 0, 0.15) 0%, rgba(255, 20, 147, 0.06) 25%, transparent 55%)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isIntroComplete ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        aria-hidden="true"
      />

      {/* White glow sweep — dot with trailing line moves top→bottom through strip gaps */}
      <div
        className="absolute inset-0 z-[2] rounded-b-[40px] sm:rounded-b-[60px] overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <motion.div
          className="absolute inset-x-0 flex flex-col items-center"
          style={{ height: '30%' }}
          initial={{ top: '-30%' }}
          animate={isIntroComplete ? { top: '130%' } : { top: '-30%' }}
          transition={{
            duration: 2.4,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Trailing line */}
          <div
            className="w-px flex-1"
            style={{
              background:
                'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.15) 40%, rgba(255,255,255,0.6) 100%)',
            }}
          />
          {/* Glowing dot */}
          <div
            className="shrink-0 rounded-full"
            style={{
              width: '6px',
              height: '6px',
              background: 'rgba(255,255,255,1)',
              boxShadow:
                '0 0 6px 2px rgba(255,255,255,0.9), 0 0 16px 6px rgba(255,255,255,0.5), 0 0 30px 10px rgba(255,255,255,0.2)',
            }}
          />
          {/* Short leading fade below dot */}
          <div
            className="w-px shrink-0"
            style={{
              height: '12px',
              background:
                'linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, transparent 100%)',
            }}
          />
        </motion.div>
      </div>

      {/* Light overlay — clean white backdrop during intro, fades out after */}
      <motion.div
        className="absolute inset-0 z-0 rounded-b-[40px] sm:rounded-b-[60px]"
        initial={{ opacity: 1 }}
        animate={{ opacity: isIntroComplete ? 0 : 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          background: '#ffffff',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      {/* 5 permanent vertical strips */}
      <div
        className="absolute inset-0 z-[10] flex rounded-b-[40px] sm:rounded-b-[60px] overflow-hidden"
        style={{ gap: '1px' }}
        aria-hidden="true"
      >
        {Array.from({ length: STRIP_COUNT }).map((_, i) => (
          <motion.div
            key={i}
            className="flex-1 relative overflow-hidden"
            initial={{ scaleY: shouldReduceMotion ? 1 : 0 }}
            animate={{ scaleY: 1 }}
            transition={{
              duration: shouldReduceMotion ? 0 : STRIP_DURATION,
              delay: shouldReduceMotion ? 0 : getStripDelay(i),
              ease: [0.76, 0, 0.24, 1],
            }}
            style={{ transformOrigin: 'bottom center' }}
          >
            {/* Background image — positioned full-viewport-width, clipped by strip overflow */}
            <div
              className="absolute top-0 h-full"
              style={{
                width: '100vw',
                left: `calc(-${i} * (100vw + 1px) / ${STRIP_COUNT})`,
                backgroundImage: "url('/images/hero/fqFMYPML0dnHcBSTlRpnEZd4.avif')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />

            {/* Subtle dark overlay for content readability */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Heading text — positioned full-viewport-width, clipped by strip overflow */}
            <div
              className="absolute top-0 h-full pointer-events-none select-none"
              style={{
                width: '100vw',
                left: `calc(-${i} * (100vw + 1px) / ${STRIP_COUNT})`,
              }}
            >
              <div className="h-full">
                <div
                  className="text-center w-full container mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-40 md:pt-48"
                >
                  <div
                    className="text-[2.2rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.02em] leading-[1.1] sm:leading-[1.1] md:leading-[1.1] text-white whitespace-nowrap"
                    style={{
                      fontFamily: 'var(--font-space-grotesk), "Space Grotesk", sans-serif',
                      fontWeight: 800,
                    }}
                  >
                    Hi, I&apos;m{' '}
                    <span
                      style={{
                        background: 'linear-gradient(135deg, #ff8a3d 0%, #ff3c6f 50%, #c06dff 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      Rameshwar Bhagwat
                    </span>
                  </div>
                  <div
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-[0.02em] leading-[1.1] mt-2 sm:mt-3 text-white/80"
                    style={{
                      fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif',
                      fontWeight: 600,
                    }}
                  >
                    Full Stack &amp; AI Developer
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Heading overlay — sits above strip gaps so text isn't cut by 1px lines */}
      <motion.div
        className="absolute inset-0 z-[15] pointer-events-none select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isIntroComplete ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        aria-hidden="true"
      >

      {/* Gradient transition to About — hidden during intro so no black shadow */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-transparent to-[#0F0E0E] pointer-events-none z-[3] rounded-b-[40px] sm:rounded-b-[60px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: isIntroComplete ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        aria-hidden="true"
      />
        <div
          className="text-center w-full container mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-40 md:pt-48"
        >
          <div
            className="text-[2.2rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.02em] leading-[1.1] sm:leading-[1.1] md:leading-[1.1] text-white whitespace-nowrap"
            style={{
              fontFamily: 'var(--font-space-grotesk), "Space Grotesk", sans-serif',
              fontWeight: 800,
            }}
          >
            Hi, I&apos;m{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #ff8a3d 0%, #ff3c6f 50%, #c06dff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Rameshwar Bhagwat
            </span>
          </div>
          <div
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-[0.02em] leading-[1.1] mt-2 sm:mt-3 text-white/80"
            style={{
              fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif',
              fontWeight: 600,
            }}
          >
            Full Stack &amp; AI Developer
          </div>
        </div>
      </motion.div>
    </>
  );
}
