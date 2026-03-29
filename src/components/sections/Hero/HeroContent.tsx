'use client';

import { motion } from 'framer-motion';
import { useCallback, useMemo, memo } from 'react';
import Button from '@/components/ui/Button';
import { useIntroAnimation } from '@/context/IntroAnimationContext';

// ─── Animation Variants ─────────────────────────────────────────────────────

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// ─── Custom easing for GPU-optimized transforms ─────────────────────────────
const customEase = [0.22, 1, 0.36, 1] as const;

// ─── Letter-by-letter reveal (memoized for performance) ─────────────────────

const AnimatedLetters = memo(function AnimatedLetters({
  text,
  baseDelay = 0,
  isActive,
  className,
  style,
  letterStyle,
}: {
  text: string;
  baseDelay?: number;
  isActive: boolean;
  className?: string;
  style?: React.CSSProperties;
  letterStyle?: React.CSSProperties;
}) {
  // Memoize letter styles to prevent recalculation
  const letters = useMemo(() => text.split(''), [text]);
  
  // Base letter style with GPU acceleration hint
  const baseLetterStyle = useMemo(() => ({
    display: 'inline-block',
    willChange: isActive ? 'auto' : 'transform, opacity',
    ...letterStyle,
  }), [letterStyle, isActive]);

  return (
    <span className={className} style={style}>
      {letters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={
            isActive
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 40 }
          }
          transition={{
            duration: 0.5,
            delay: baseDelay + i * 0.03,
            ease: customEase,
          }}
          style={baseLetterStyle}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
});

// ─── Main Component ──────────────────────────────────────────────────────────

export default function HeroContent() {
  const { isIntroComplete } = useIntroAnimation();

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div
      className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
      role="banner"
    >
      <div className="w-full max-w-[900px] mx-auto px-4 sm:px-6 md:px-8 text-center pointer-events-auto">

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isIntroComplete ? 'visible' : 'hidden'}
        >
          {/* ── Main Heading with Name (H1 for SEO) ── */}
          <header className="mb-2 sm:mb-3">
            <h1
              className="sr-only"
              itemProp="name"
            >
              Rameshwar Bhagwat - Full Stack Developer & AI Engineer | React, Next.js, TypeScript Expert
            </h1>

            <div
              style={{
                fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif',
                fontWeight: 800,
              }}
              aria-label="Rameshwar Bhagwat - Full Stack Developer"
            >
              {/* Greeting line */}
              <div
                className="text-[1.75rem] sm:text-5xl md:text-[4rem] lg:text-[5rem] xl:text-[5.5rem] leading-[1.05] tracking-[-0.04em] text-white"
                aria-hidden="true"
              >
                <AnimatedLetters
                  text="Hey, I'm"
                  baseDelay={0.05}
                  isActive={isIntroComplete}
                />
              </div>

              {/* Full name — always single line */}
              <div
                className="text-[1.75rem] sm:text-5xl md:text-[4rem] lg:text-[5rem] xl:text-[5.5rem] leading-[1.05] tracking-[-0.04em] whitespace-nowrap"
                itemProp="name"
              >
                <AnimatedLetters
                  text="Rameshwar"
                  baseDelay={0.3}
                  isActive={isIntroComplete}
                  letterStyle={{
                    background: 'linear-gradient(180deg, #FF8C00 0%, #FF1493 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                />
                <span className="text-white">
                  <AnimatedLetters
                    text=" Bhagwat"
                    baseDelay={0.6}
                    isActive={isIntroComplete}
                  />
                </span>
              </div>
            </div>

            {/* Role title with shimmer stripes effect */}
            <motion.div
              className="mt-3 sm:mt-5 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isIntroComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span
                className="text-xs sm:text-base md:text-lg lg:text-xl font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase"
                style={{
                  background: 'linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.4) 60%, rgba(255,255,255,0.4) 100%)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))',
                }}
                animate={{
                  backgroundPosition: ['0% 0%', '200% 0%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                itemProp="jobTitle"
              >
                Full Stack & AI Developer
              </motion.span>
            </motion.div>

            {/* Animated divider line — below role */}
            <motion.div
              className="mt-3 sm:mt-4 lg:mt-5 flex justify-center"
              initial={{ scaleX: 0 }}
              animate={isIntroComplete ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: 'center center' }}
              aria-hidden="true"
            >
              <div
                className="h-[2px] sm:h-[3px] w-full max-w-[180px] sm:max-w-[280px] lg:max-w-[320px]"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, #FF4500 20%, #FF1493 50%, #FF8C00 80%, transparent 100%)',
                }}
              />
            </motion.div>
          </header>

          <div className="mb-8 sm:mb-14" aria-hidden="true" />

          {/* ── Description (H2 equivalent for SEO) ── */}
          <motion.p
            variants={fadeUpItem}
            className="text-base sm:text-xl md:text-2xl lg:text-[1.7rem] max-w-2xl mx-auto leading-relaxed mb-5 sm:mb-8 px-2 sm:px-0"
            style={{
              fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif',
              fontWeight: 400,
              letterSpacing: '0.01em',
              color: 'rgba(255,255,255,0.75)',
              textShadow: '0 2px 12px rgba(0, 0, 0, 0.4), 0 1px 4px rgba(0, 0, 0, 0.25)',
            }}
            itemProp="description"
          >
            Crafting{' '}
            <em
              className="not-italic font-medium"
              style={{
                background: 'linear-gradient(to right, #FF6347, #FF1493)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              AI-Powered
            </em>{' '}
            platforms that elevate{' '}
            <em
              className="not-italic font-medium"
              style={{
                background: 'linear-gradient(to right, #FF8C00, #FF1493)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              SaaS &amp; Web Innovators
            </em>
          </motion.p>

          {/* ── CTA Buttons ── */}
          <motion.nav
            variants={fadeUpItem}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
            aria-label="Primary navigation - View portfolio or contact Rameshwar Bhagwat"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('work')}
              aria-label="View Rameshwar Bhagwat's portfolio projects and work samples"
              className="w-full sm:w-auto sm:min-w-[180px] text-sm sm:text-base"
            >
              View My Work
            </Button>
            <Button
              variant="secondary"
              size="lg"
              shimmer={true}
              onClick={() => scrollToSection('contact')}
              aria-label="Contact Rameshwar Bhagwat for Full Stack Development and AI Engineering projects"
              className="w-full sm:w-auto sm:min-w-[180px] text-sm sm:text-base"
            >
              Get In Touch
            </Button>
          </motion.nav>
        </motion.div>

      </div>
    </div>
  );
}
