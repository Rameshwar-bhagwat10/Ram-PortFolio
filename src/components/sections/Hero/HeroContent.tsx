'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Container from '@/components/layout/Container';

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUpVariant = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

export default function HeroContent() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Container className="relative z-20">
      <motion.div
        className="pt-40 pb-32 space-y-6 text-center"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        {/* Micro intro badge */}
        <motion.div
          className="flex justify-center"
          variants={fadeUpVariant}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-widest border backdrop-blur-sm bg-card/20"
            style={{ borderColor: 'rgba(255, 255, 255, 0.06)' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-muted">Available for Opportunities</span>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight"
          variants={fadeUpVariant}
        >
          <span className="block text-white">Full Stack Developer</span>
          <span className="block mt-2">
            Building{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AI-Driven Products
            </span>
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed"
          variants={fadeUpVariant}
        >
          Crafting scalable web applications with modern technologies.
          Specialized in React, TypeScript, and Next.js.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
          variants={fadeUpVariant}
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => scrollToSection('work')}
          >
            View My Work
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </Button>
        </motion.div>
      </motion.div>
    </Container>
  );
}
