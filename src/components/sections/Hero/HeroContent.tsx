'use client';

import { motion } from 'framer-motion';
import { useCallback, useMemo, memo, useEffect, useRef } from 'react';
import Button from '@/components/ui/Button';
import { useIntroAnimation } from '@/context/IntroAnimationContext';
import gsap from 'gsap';

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

// B&W Monolithic Design Theme

// ─── Letter-by-letter reveal (memoized for performance) ─────────────────────

const AnimatedLetters = memo(function AnimatedLetters({
  text,
  baseDelay = 0,
  isActive,
  className,
  style,
  letterStyle,
  getLetterStyle,
}: {
  text: string;
  baseDelay?: number;
  isActive: boolean;
  className?: string;
  style?: React.CSSProperties;
  letterStyle?: React.CSSProperties;
  getLetterStyle?: (index: number, total: number, char: string) => React.CSSProperties;
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
          style={
            getLetterStyle
              ? { ...baseLetterStyle, ...getLetterStyle(i, letters.length, char) }
              : baseLetterStyle
          }
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
  const textWrapperRef = useRef<HTMLDivElement>(null);
  const blobsRef = useRef<(SVGCircleElement | null)[]>([]);

  useEffect(() => {
    // Initialize blobs off-screen
    gsap.set(blobsRef.current, { x: -1000, y: -1000 });

    const handleMouseMove = (e: MouseEvent) => {
      if (!textWrapperRef.current) return;

      const rect = textWrapperRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Update custom CSS variables for the soft background gradient circle
      textWrapperRef.current.style.setProperty('--mouse-x', `${x}px`);
      textWrapperRef.current.style.setProperty('--mouse-y', `${y}px`);

      gsap.to(blobsRef.current, {
        x: x,
        y: y,
        duration: 1.2,
        stagger: 0.05,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const renderHeroContent = (isReveal: boolean) => {
    return (
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isIntroComplete ? 'visible' : 'hidden'}
      >
        {/* ── Pre-title: FULL STACK & AI DEVELOPER ── */}
        <motion.div
          variants={fadeUpItem}
          className="text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem] tracking-wide mb-3 sm:mb-4"
          style={{
            fontFamily: 'var(--font-instrument), Georgia, serif',
            fontStyle: 'italic',
            fontWeight: 400,
            textTransform: 'none',
            color: isReveal ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.4)',
            transition: 'color 0.3s ease',
          }}
        >
          Full Stack &amp; AI Developer
        </motion.div>

        {/* ── Main Heading with Name (H1 for SEO) ── */}
        <header className="mb-4 sm:mb-6">
          <p className="sr-only">
            Rameshwar Bhagwat - Full Stack &amp; AI Developer | React, Next.js, TypeScript Expert
          </p>

          <h1
            className="group hero-heading flex flex-col items-center gap-y-1 sm:gap-y-2"
            itemProp="name"
            aria-label="Rameshwar Bhagwat - Full Stack Developer"
            style={{
              fontFamily: 'var(--font-outfit), sans-serif',
              fontSize: 'clamp(3rem, 10vw, 8rem)',
              lineHeight: '1.05',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              maxWidth: '1400px',
              margin: '0px auto',
              textAlign: 'center',
              color: isReveal ? '#ffffff' : 'rgb(153, 153, 153)',
              textShadow: isReveal ? '0 0 10px rgba(255, 255, 255, 0.3)' : 'none',
              opacity: 1,
              userSelect: 'none',
              transition: 'color 0.3s ease, text-shadow 0.3s ease',
            }}
          >
            {/* Desktop Layout: Single line for better spacing */}
            <span className="hidden sm:block whitespace-nowrap" aria-hidden="true">
              <AnimatedLetters
                text="Rameshwar Bhagwat"
                baseDelay={0.05}
                isActive={isIntroComplete}
              />
            </span>

            {/* Mobile Layout: Split line to fit screen widths */}
            <span className="block sm:hidden whitespace-nowrap" aria-hidden="true">
              <AnimatedLetters
                text="Rameshwar"
                baseDelay={0.05}
                isActive={isIntroComplete}
              />
            </span>

            <span className="block sm:hidden whitespace-nowrap" aria-hidden="true">
              <AnimatedLetters
                text="Bhagwat"
                baseDelay={0.2}
                isActive={isIntroComplete}
              />
            </span>
          </h1>

          {/* Animated divider line — below heading */}
          <motion.div
            className="mt-4 sm:mt-5 lg:mt-6 flex justify-center"
            initial={{ scaleX: 0 }}
            animate={isIntroComplete ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'center center' }}
            aria-hidden="true"
          >
            <div
              className="h-[1px] w-full max-w-[180px] sm:max-w-[280px] lg:max-w-[320px]"
              style={{
                background: isReveal
                  ? 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.6) 50%, transparent 100%)'
                  : 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.15) 50%, transparent 100%)',
                transition: 'background 0.3s ease',
              }}
            />
          </motion.div>
        </header>

        {/* ── Sub-Title (Description) ── */}
        <motion.p
          variants={fadeUpItem}
          className="text-[1.5rem] sm:text-[1.9rem] md:text-[2.2rem] max-w-5xl mx-auto leading-[1.3] mb-6 sm:mb-8 px-4 normal-case tracking-[-0.01em]"
          style={{
            fontFamily: 'var(--font-instrument), Georgia, serif',
            fontStyle: 'italic',
            fontWeight: 400,
            color: isReveal ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.35)',
            textShadow: isReveal ? '0 0 8px rgba(255, 255, 255, 0.2)' : 'none',
            transition: 'color 0.3s ease, text-shadow 0.3s ease',
          }}
          itemProp="description"
        >
          &ldquo;Crafting{' '}
          <span
            style={{
              background: isReveal
                ? 'linear-gradient(90deg, #FF7C52 0%, #FF45A3 100%)'
                : 'linear-gradient(90deg, #B2401C 0%, #B20D64 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 500,
              transition: 'background 0.3s ease',
            }}
          >
            AI-powered
          </span>{' '}
          platforms for
          <br className="hidden sm:block" />
          <span
            style={{
              background: isReveal
                ? 'linear-gradient(90deg, #FF7C52 0%, #FF45A3 100%)'
                : 'linear-gradient(90deg, #B2401C 0%, #B20D64 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 500,
              transition: 'background 0.3s ease',
            }}
          >
            SaaS
          </span>{' '}
          &amp; web{' '}
          <span
            style={{
              background: isReveal
                ? 'linear-gradient(90deg, #FF7C52 0%, #FF45A3 100%)'
                : 'linear-gradient(90deg, #B2401C 0%, #B20D64 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 500,
              transition: 'background 0.3s ease',
            }}
          >
            innovators
          </span>.&rdquo;
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
            onClick={isReveal ? undefined : () => scrollToSection('work')}
            aria-label="View Rameshwar Bhagwat's portfolio projects and work samples"
            className="w-full sm:w-auto sm:min-w-[180px] text-sm sm:text-base font-bold tracking-wide"
            style={{
              background: isReveal ? '#ffffff' : 'rgba(255, 255, 255, 0.03)',
              color: isReveal ? '#000000' : 'rgba(255, 255, 255, 0.3)',
              border: isReveal ? '1px solid #ffffff' : '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: isReveal ? '0 0 10px rgba(255, 255, 255, 0.15)' : 'none',
              pointerEvents: isReveal ? 'none' : 'auto',
              transition: 'all 0.3s ease',
            }}
          >
            View My Work
          </Button>
          <Button
            variant="secondary"
            size="lg"
            shimmer={isReveal}
            onClick={isReveal ? undefined : () => scrollToSection('contact')}
            aria-label="Contact Rameshwar Bhagwat for Full Stack Development and AI Engineering projects"
            className="w-full sm:w-auto sm:min-w-[180px] text-sm sm:text-base font-bold tracking-wide"
            style={{
              background: 'transparent',
              color: isReveal ? '#ffffff' : 'rgba(255, 255, 255, 0.3)',
              border: isReveal ? '1px solid rgba(255, 255, 255, 0.6)' : '1px solid rgba(255, 255, 255, 0.1)',
              pointerEvents: isReveal ? 'none' : 'auto',
              transition: 'all 0.3s ease',
            }}
          >
            Get In Touch
          </Button>
        </motion.nav>
      </motion.div>
    );
  };

  return (
    <div
      ref={textWrapperRef}
      className="absolute inset-0 z-20 flex items-center justify-center pointer-events-auto"
      role="banner"
    >
      {/* Base Layer (spans full viewport width and height) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        <div className="w-full max-w-[900px] mx-auto px-4 sm:px-6 md:px-8 text-center pointer-events-auto">
          {renderHeroContent(false)}
        </div>
      </div>

      {/* Reveal Layer (spans full viewport width and height, masked, pointer events none) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mask: 'url(#fluid-mask)',
          WebkitMask: 'url(#fluid-mask)',
          pointerEvents: 'none',
        }}
      >
        <div className="w-full max-w-[900px] mx-auto px-4 sm:px-6 md:px-8 text-center">
          {renderHeroContent(true)}
        </div>
      </div>

      {/* SVG definition of the goo filter and mask - Spans full width and height to prevent boundary clipping */}
      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0, zIndex: -1 }} aria-hidden="true">
        <defs>
          <filter id="goo" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -9"
              result="goo"
            />
          </filter>
          <mask id="fluid-mask">
            <rect x="0" y="0" width="100%" height="100%" fill="black" />
            <g filter="url(#goo)">
              {[...Array(6)].map((_, i) => (
                <circle
                  key={i}
                  ref={(el) => {
                    blobsRef.current[i] = el;
                  }}
                  cx="0"
                  cy="0"
                  r={80 - i * 10}
                  fill="white"
                />
              ))}
            </g>
          </mask>
        </defs>
      </svg>
    </div>
  );
}
