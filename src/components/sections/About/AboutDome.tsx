'use client';

import { memo } from 'react';

const AboutDome = memo(function AboutDome() {
  return (
    <div
      className="relative mx-auto -mt-1 sm:-mt-1 md:-mt-1.5 -mb-6 sm:-mb-10 md:-mb-12 w-full max-w-[340px] xs:max-w-[420px] sm:max-w-[640px] md:max-w-[800px] h-[95px] xs:h-[125px] sm:h-[220px] md:h-[265px] pointer-events-none overflow-visible z-10 about-dome opacity-0 flex justify-center items-center"
    >
      <svg
        className="w-full h-full overflow-visible"
        viewBox="0 0 600 200"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* Glowing Line Gradient */}
          <linearGradient id="aboutGlowLineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ff3c00" stopOpacity="0" />
            <stop offset="25%" stopColor="#ff5500" stopOpacity="0.6" />
            <stop offset="45%" stopColor="#ffb088" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="55%" stopColor="#ffb088" stopOpacity="0.9" />
            <stop offset="75%" stopColor="#ff5500" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ff3c00" stopOpacity="0" />
          </linearGradient>

          {/* Standard Glow Filter */}
          <filter id="aboutDomeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Main Crisp Glowing Line (Animates via Stroke Dashoffset) */}
        <path
          d="M 50 180 Q 300 30 550 180"
          fill="none"
          stroke="url(#aboutGlowLineGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          filter="url(#aboutDomeGlow)"
          strokeDasharray="1000"
          strokeDashoffset="1000"
          className="about-dome-glow-line"
        />

        {/* Thinner concentric inner line */}
        <path
          d="M 85 180 Q 300 68 515 180"
          fill="none"
          stroke="url(#aboutGlowLineGrad)"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.25"
          strokeDasharray="1000"
          strokeDashoffset="1000"
          className="about-dome-glow-line"
        />
      </svg>
    </div>
  );
});

export default AboutDome;
