'use client';

import { motion } from 'framer-motion';
import { useCallback } from 'react';
import Button from '@/components/ui/Button';
import Container from '@/components/layout/Container';
import { useIntroAnimation } from '@/context/IntroAnimationContext';

// Staggered reveal variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function HeroContent() {
  const { isIntroComplete } = useIntroAnimation();

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <Container className="relative z-20 px-4 sm:px-6">
      <div className="pt-28 sm:pt-40 md:pt-48 pb-16 sm:pb-28 md:pb-32 text-center">
        {/* Invisible heading placeholder — reserves exact same space as the visual heading
           rendered inside HeroStrips for the strip-reveal effect. */}
        <div className="invisible px-2 sm:px-4" aria-hidden="true">
          <div className="text-[2.2rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.02em] leading-[1.1] sm:leading-[1.1] md:leading-[1.1] whitespace-nowrap" style={{ fontFamily: 'var(--font-space-grotesk), "Space Grotesk", sans-serif', fontWeight: 800 }}>
            Hi, I&apos;m Rameshwar Bhagwat
          </div>
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-[0.02em] leading-[1.1] mt-2 sm:mt-3" style={{ fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif', fontWeight: 600 }}>
            Full Stack &amp; AI Developer
          </div>
        </div>
        <h1 className="sr-only">Rameshwar Bhagwat — Full Stack &amp; AI Developer</h1>

        {/* Content below heading — animates in after strips complete */}
        <motion.div
          className="mt-6 sm:mt-8 md:mt-10 space-y-4 sm:space-y-5 md:space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate={isIntroComplete ? 'visible' : 'hidden'}
        >

        {/* Description - SEO optimized */}
        <motion.div
          variants={childVariants}
          className="text-base sm:text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto leading-snug px-4 sm:px-6"
          style={{
            fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif',
            fontWeight: 400,
            letterSpacing: '0.01em',
            color: 'rgba(255,255,255,0.85)',
          }}
        >
          <p>
            Crafting <em className="italic" style={{ backgroundImage: 'linear-gradient(to right, #f97316, #ef4444, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>AI-Powered</em> Platforms that
            Elevate <em className="italic" style={{ backgroundImage: 'linear-gradient(to right, #f97316, #ef4444, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>SaaS &amp; Web Innovators</em>
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={childVariants} className="flex flex-col sm:flex-row justify-center gap-2.5 sm:gap-4 mt-5 sm:mt-8 px-4 sm:px-0 max-w-md sm:max-w-none mx-auto">
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
        </motion.div>
        </motion.div>

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
      </div>
    </Container>
  );
}
