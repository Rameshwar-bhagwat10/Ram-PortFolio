'use client';

import { useState, useEffect } from 'react';

export default function useScrollSpy(ids: string[]): string {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-10% 0px -40% 0px',
        threshold: [0, 0.1, 0.2],
      }
    );

    // Observe all sections
    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Fallback: Check if we're at the bottom of the page
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // If we're within 100px of the bottom, activate contact
      if (documentHeight - scrollPosition < 100) {
        setActiveId('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      ids.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ids]);

  return activeId;
}
