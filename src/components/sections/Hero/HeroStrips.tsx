'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useMemo } from 'react';
import { useIntroAnimation } from '@/context/IntroAnimationContext';

const STRIP_COUNT = 11;
const STRIP_DURATION = 0.9;
const STRIP_STAGGER = 0.08;

// Center strip animates first, then outward
function getStripDelay(index: number): number {
  const center = Math.floor(STRIP_COUNT / 2);
  return Math.abs(index - center) * STRIP_STAGGER;
}

// Gentle start, smooth flow, no jerk at bottom
const STRIP_EASING = 'cubic-bezier(0.4, 0, 0.2, 1)';

export default function HeroStrips() {
  const { isIntroComplete, completeIntro } = useIntroAnimation();
  const shouldReduceMotion = useReducedMotion();
  const hasCompleted = useRef(false);

  const maxDelay = getStripDelay(0);
  const totalTime = (maxDelay + STRIP_DURATION) * 1000;

  // Generate CSS keyframes + per-strip animation styles (runs on GPU compositor thread)
  const stripStyles = useMemo(() => {
    const keyframes = `
      @keyframes stripReveal {
        0% {
          transform: scaleY(0) translateZ(0);
        }
        100% {
          transform: scaleY(1) translateZ(0);
        }
      }
    `;

    const strips = Array.from({ length: STRIP_COUNT }, (_, i) => ({
      animation: shouldReduceMotion
        ? 'none'
        : `stripReveal ${STRIP_DURATION}s ${STRIP_EASING} ${getStripDelay(i)}s both`,
    }));

    return { keyframes, strips };
  }, [shouldReduceMotion]);

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
      {/* Inject CSS keyframes for GPU-composited strip animation */}
      <style dangerouslySetInnerHTML={{ __html: stripStyles.keyframes }} />

      {/* Base dark background — always visible behind strips */}
      <div
        className="absolute inset-0 z-0 rounded-b-[40px] sm:rounded-b-[60px] bg-[#0F0E0E]"
        aria-hidden="true"
      />

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

      {/* 11 seamless vertical strips — pure CSS animation on GPU compositor */}
      <div
        className="absolute inset-0 z-[10] flex rounded-b-[40px] sm:rounded-b-[60px] overflow-hidden"
        style={{ gap: 0 }}
        aria-hidden="true"
      >
        {stripStyles.strips.map((stripStyle, i) => (
          <div
            key={i}
            style={{
              flex: '1 0 0%',
              transformOrigin: 'top center',
              transform: shouldReduceMotion ? 'scaleY(1) translateZ(0)' : 'scaleY(0) translateZ(0)',
              animation: stripStyle.animation,
              margin: '0 -0.5px',
              padding: 0,
              background: '#0F0E0E',
              boxShadow: '0 0 0 0.5px #0F0E0E',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden' as const,
              contain: 'strict',
            }}
          />
        ))}
      </div>

      {/* Gradient transition to About — hidden during intro */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-transparent to-[#0F0E0E] pointer-events-none z-[3] rounded-b-[40px] sm:rounded-b-[60px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: isIntroComplete ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        aria-hidden="true"
      />
    </>
  );
}
