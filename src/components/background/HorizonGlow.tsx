'use client';

import { motion } from 'framer-motion';

export default function HorizonGlow() {
  return (
    <div className="absolute bottom-0 left-0 w-full h-[500px] z-[5] pointer-events-none overflow-hidden">
      {/* Sharp curved horizon arc with proper glow */}
      <motion.div
        className="relative w-full h-full"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
      >
        {/* SVG Sharp Curved Arc - Upward curve (planetary horizon) */}
        <svg
          className="absolute bottom-0 inset-x-0 w-full h-48 z-10"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* White gradient for the line */}
            <linearGradient id="whiteHorizonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="15%" stopColor="#FFFFFF" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="85%" stopColor="#FFFFFF" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
            
            {/* Glow filter */}
            <filter id="horizonGlow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Glow layer - wider and blurred */}
          <path
            d="M 0 200 Q 600 50, 1200 200"
            stroke="url(#whiteHorizonGradient)"
            strokeWidth="8"
            fill="none"
            opacity="0.5"
            style={{ filter: 'blur(8px)' }}
          />
          
          {/* Main bold curved line with glow filter */}
          <path
            d="M 0 200 Q 600 50, 1200 200"
            stroke="url(#whiteHorizonGradient)"
            strokeWidth="3"
            fill="none"
            filter="url(#horizonGlow)"
          />
        </svg>

        {/* Glow bars - DJ style pulsing from arc upward */}
        <div className="absolute bottom-[48px] left-0 w-full h-[450px]">
          {/* Glow bar 1 - Fast pulse */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%]"
            animate={{
              height: ['200px', '350px', '200px'],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              background: 'radial-gradient(ellipse at center bottom, rgba(220, 60, 20, 0.3) 0%, rgba(200, 50, 20, 0.2) 20%, rgba(180, 40, 15, 0.15) 40%, rgba(140, 30, 10, 0.08) 60%, rgba(100, 20, 5, 0.04) 80%, transparent 100%)',
              filter: 'blur(50px)',
            }}
          />

          {/* Glow bar 2 - Medium pulse */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%]"
            animate={{
              height: ['180px', '320px', '180px'],
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{
              duration: 1.3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.2,
            }}
            style={{
              background: 'radial-gradient(ellipse at center bottom, rgba(255, 80, 30, 0.25) 0%, rgba(220, 60, 20, 0.18) 25%, rgba(180, 40, 15, 0.12) 50%, rgba(120, 25, 10, 0.06) 75%, transparent 100%)',
              filter: 'blur(60px)',
            }}
          />

          {/* Glow bar 3 - Slow pulse */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%]"
            animate={{
              height: ['160px', '280px', '160px'],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 1.7,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.4,
            }}
            style={{
              background: 'radial-gradient(ellipse at center bottom, rgba(255, 100, 40, 0.2) 0%, rgba(200, 60, 25, 0.14) 30%, rgba(150, 40, 15, 0.08) 60%, rgba(100, 25, 10, 0.03) 85%, transparent 100%)',
              filter: 'blur(70px)',
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
