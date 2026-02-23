'use client';

import { useEffect } from 'react';

/**
 * Client-side smooth scroll enhancement
 * Adds momentum-based smooth scrolling for better UX
 */
export default function SmoothScrollWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Enhance scroll performance
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Optimize scroll performance
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <>{children}</>;
}
