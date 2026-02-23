'use client';

import { useCallback } from 'react';

export function useSmoothScroll() {
  const scrollTo = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    // Use native smooth scroll with optimizations
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; // 1 second for smooth scroll
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Easing function for smooth deceleration (ease-out-cubic)
      const ease = (t: number) => 1 - Math.pow(1 - t, 3);
      
      window.scrollTo({
        top: startPosition + distance * ease(progress),
        behavior: 'auto', // Use auto to prevent conflict with our custom animation
      });

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  }, []);
  
  return scrollTo;
}

