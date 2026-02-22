'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Container from '@/components/layout/Container';
import TypingAnimation from './TypingAnimation';

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
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-gradient opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-gradient"></span>
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
              }}
              animate={{
                backgroundPosition: ['0% 0%', '200% 0%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              Available for Opportunities
            </motion.span>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight"
          variants={fadeUpVariant}
        >
          <span className="block text-white">Hi, I'm <span className="text-primary-gradient">Rameshwar Bhagwat</span></span>
          <span className="block mt-2 text-white">
            Building AI-Driven Products
          </span>
        </motion.h1>

        {/* Typing Animation - Below heading */}
        <motion.div
          className="text-xl md:text-2xl lg:text-3xl font-semibold text-white"
          variants={fadeUpVariant}
        >
          <span className="text-white/80">I'm a </span>
          <TypingAnimation 
            phrases={[
              'Full Stack Developer',
              'React Specialist',
              'Open Source Contributor',
              'Tech Blogger',
              'Startup Advisor'
            ]}
            typingSpeed={80}
            deletingSpeed={50}
            pauseDuration={2000}
          />
        </motion.div>

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
            shimmer={true}
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </Button>
        </motion.div>
      </motion.div>
    </Container>
  );
}
