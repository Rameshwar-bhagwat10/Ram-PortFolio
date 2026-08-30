'use client';

import { memo } from 'react';
import AboutDome from './AboutDome';

const AboutHeader = memo(function AboutHeader() {
  return (
    <div className="text-center mb-8 sm:mb-12 md:mb-16 about-header-container">
      {/* Visual Dome Crown just above heading */}
      <AboutDome />

      {/* Badge container */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] mb-3 sm:mb-4 text-[#ff6b3d] text-[11px] sm:text-xs font-semibold tracking-wider uppercase font-outfit about-badge opacity-0">
        <div className="w-3.5 h-3.5 rounded-full bg-[#ff6b3d] flex items-center justify-center text-[#0F0E0E] flex-shrink-0">
          <svg className="w-[50%] h-[50%]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
            <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
          </svg>
        </div>
        <span>Get to Know Me</span>
      </div>

      {/* Title */}
      <h2
        className="text-[2.35rem] xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[96px] font-black tracking-[-0.03em] leading-[0.95] sm:leading-[0.9] text-white about-title opacity-0 px-2 sm:px-0"
        style={{
          fontFamily: '"Plus Jakarta Sans", sans-serif',
        }}
      >
        Turning ideas into{' '}
        <span
          className="font-bold px-1 text-white animate-pulse"
          style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            textTransform: 'none',
          }}
        >
          reality
        </span>
      </h2>

      {/* Subtitle */}
      <p
        className="text-xs xs:text-sm sm:text-xl md:text-2xl mt-2.5 sm:mt-4 max-w-2xl mx-auto about-subtitle opacity-0 italic px-3 sm:px-0"
        style={{
          fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif',
          color: 'rgba(255,255,255,0.95)',
        }}
      >
        Developer by day, problem solver by nature. Let&apos;s build something amazing together.
      </p>
    </div>
  );
});

export default AboutHeader;
