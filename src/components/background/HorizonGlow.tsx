'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

export default function HorizonGlow() {
  // Memoize animation variants - Reduced to 2 layers for better performance
  const glowVariants = useMemo(() => ({
    glow1: {
      height: ['200px', '380px', '200px'],
      opacity: [0.2, 0.32, 0.2],
    },
    glow2: {
      height: ['180px', '350px', '180px'],
      opacity: [0.18, 0.28, 0.18],
    },
  }), []);

  return (
    <div className="absolute bottom-0 left-0 w-full h-[600px] z-[5] pointer-events-none overflow-visible">
      <motion.div
        className="relative w-full h-full"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
      >
        {/* SVG Sharp Curved Arc */}
        <svg
          className="absolute bottom-0 inset-x-0 w-full h-48 z-10"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="whiteHorizonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="15%" stopColor="#FFFFFF" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="85%" stopColor="#FFFFFF" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
            
            <filter id="horizonGlow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          <path
            d="M 0 200 Q 600 50, 1200 200"
            stroke="url(#whiteHorizonGradient)"
            strokeWidth="8"
            fill="none"
            opacity="0.5"
            style={{ filter: 'blur(8px)' }}
          />
          
          <path
            d="M 0 200 Q 600 50, 1200 200"
            stroke="url(#whiteHorizonGradient)"
            strokeWidth="3"
            fill="none"
            filter="url(#horizonGlow)"
          />
        </svg>

        {/* Optimized glow bars - Reduced from 3 to 2 layers */}
        <div className="absolute bottom-[48px] left-0 w-full h-[550px]">
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%]"
            animate={glowVariants.glow1}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              background: 'radial-gradient(ellipse at center bottom, rgba(255, 20, 147, 0.2) 0%, rgba(255, 60, 100, 0.14) 20%, rgba(255, 100, 60, 0.1) 40%, rgba(255, 140, 40, 0.06) 60%, rgba(255, 140, 20, 0.03) 80%, rgba(255, 140, 10, 0.015) 90%, transparent 100%)',
              filter: 'blur(50px)',
              willChange: 'height, opacity',
            }}
          />

          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%]"
            animate={glowVariants.glow2}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            style={{
              background: 'radial-gradient(ellipse at center bottom, rgba(255, 0, 0, 0.18) 0%, rgba(255, 20, 147, 0.13) 25%, rgba(255, 100, 80, 0.09) 50%, rgba(255, 140, 60, 0.045) 75%, rgba(255, 140, 30, 0.02) 90%, transparent 100%)',
              filter: 'blur(65px)',
              willChange: 'height, opacity',
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
