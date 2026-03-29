'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

/**
 * Lenis Smooth Scroll Provider
 * Provides butter-smooth scrolling experience across the portfolio
 */
export default function SmoothScrollWrapper({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Initialize Lenis with butter-smooth settings
    const lenis = new Lenis({
      duration: 1.4, // Longer duration = smoother, more luxurious feel
      easing: (t) => {
        // Custom easing: slow start, smooth middle, gentle end
        // This creates a more natural, premium feel
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      },
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8, // Slightly reduced for smoother feel
      touchMultiplier: 1.5, // Good balance for touch devices
      infinite: false,
      autoResize: true,
      lerp: 0.08, // Linear interpolation - lower = smoother (0.1 is default)
      syncTouch: false, // Better performance on touch
      syncTouchLerp: 0.075, // Smooth touch interpolation
    });

    lenisRef.current = lenis;

    // High-performance animation frame loop
    let lastTime = 0;
    function raf(time: number) {
      // Calculate delta for consistent timing
      const _delta = time - lastTime;
      lastTime = time;
      
      // Update Lenis with timestamp
      lenis.raf(time);
      
      rafRef.current = requestAnimationFrame(raf);
    }

    rafRef.current = requestAnimationFrame(raf);

    // Expose lenis instance globally for other components
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).lenis = lenis;

    // Handle anchor link clicks for smooth scroll to sections
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetId = href.slice(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            lenis.scrollTo(targetElement, {
              offset: -80, // Account for fixed navbar
              duration: 1.8, // Smooth scroll to anchor
              easing: (t) => 1 - Math.pow(1 - t, 4), // Ease out quart
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Stop Lenis when modal/dialog is open
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't interfere with normal scrolling behavior
      if (e.key === 'Escape') {
        lenis.start();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      document.removeEventListener('keydown', handleKeyDown);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
