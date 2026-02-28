'use client';

import { motion } from 'framer-motion';
import { useMemo, useCallback } from 'react';
import Button from '@/components/ui/Button';
import Container from '@/components/layout/Container';
import TypingAnimation from './TypingAnimation';

export default function HeroContent() {
  // Memoize shimmer animation
  const shimmerAnimation = useMemo(() => ({
    backgroundPosition: ['0% 0%', '200% 0%'],
  }), []);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <Container className="relative z-20 px-4 sm:px-6">
      <motion.div 
        className="pt-20 sm:pt-32 md:pt-40 pb-16 sm:pb-28 md:pb-32 space-y-3 sm:space-y-5 md:space-y-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.6, 0.01, 0.05, 0.95],
        }}
      >
        {/* Micro intro badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest border backdrop-blur-sm bg-card/20"
            style={{ borderColor: 'rgba(255, 255, 255, 0.06)' }}
            role="status"
            aria-label="Available for opportunities"
          >
            <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-gradient opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-primary-gradient"></span>
            </span>
            <motion.span
              className="text-muted inline-block"
              style={{
                background: 'linear-gradient(90deg, rgba(179,179,179,0.5) 0%, rgba(179,179,179,0.5) 40%, rgba(255,255,255,1) 50%, rgba(179,179,179,0.5) 60%, rgba(179,179,179,0.5) 100%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.3))',
                willChange: 'background-position',
              }}
              animate={shimmerAnimation}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              Available for Opportunities
            </motion.span>
          </div>
        </div>

        {/* Main heading - SEO optimized with proper h1 */}
        <div className="px-2 sm:px-4">
          <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4rem] font-bold tracking-tight leading-[1.15] sm:leading-[1.2] md:leading-[1.2] text-white" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif', fontWeight: 700 }}>
            <span className="text-primary-gradient">Rameshwar Bhagwat</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-[1.3] mt-2 sm:mt-4 text-white" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif', fontWeight: 600 }}>
            Full Stack & AI Developer
          </h2>
        </div>

        {/* Typing Animation - Below heading */}
        <div className="text-sm sm:text-lg md:text-xl lg:text-2xl font-medium text-white px-2 sm:px-4" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
          <span className="text-white/70">I'm a </span>
          <TypingAnimation 
            phrases={[
              'Full Stack Developer',
              'React Specialist',
              'AI Enthusiast',
              'Problem Solver',
              'Tech Innovator'
            ]}
            typingSpeed={80}
            deletingSpeed={50}
            pauseDuration={2000}
          />
        </div>

        {/* Description - SEO optimized */}
        <p className="text-xs sm:text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed px-4 sm:px-6" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif', fontWeight: 400 }}>
          Building scalable AI-powered SaaS platforms and web applications.
          Specialized in React, Next.js, TypeScript, and Machine Learning integration.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-2.5 sm:gap-4 mt-5 sm:mt-8 px-4 sm:px-0 max-w-md sm:max-w-none mx-auto">
          <Button
            variant="primary"
            size="lg"
            onClick={() => scrollToSection('work')}
            aria-label="View my portfolio work"
            className="w-full sm:w-auto text-sm sm:text-base py-2.5 sm:py-3"
          >
            View My Work
          </Button>
          <Button
            variant="secondary"
            size="lg"
            shimmer={true}
            onClick={() => scrollToSection('contact')}
            aria-label="Get in touch with me"
            className="w-full sm:w-auto text-sm sm:text-base py-2.5 sm:py-3"
          >
            Get In Touch
          </Button>
        </div>

        {/* Hidden SEO content */}
        <div className="sr-only">
          <h3>Rameshwar Bhagwat Portfolio</h3>
          <p>
            Rameshwar Bhagwat is a Full Stack & AI Developer based in Yeola, Maharashtra, India. 
            Specializing in React, Next.js, TypeScript, and AI-powered web applications. 
            Rameshwar Bhagwat builds scalable SaaS platforms and machine learning systems.
            Available for full-time roles and freelance projects.
          </p>
          <ul>
            <li>Full Stack Development (MERN Stack)</li>
            <li>React & Next.js Expert</li>
            <li>AI & Machine Learning Integration</li>
            <li>TypeScript Development</li>
            <li>Open Source Contributor</li>
            <li>Technical Blog Writer</li>
          </ul>
        </div>
      </motion.div>
    </Container>
  );
}
