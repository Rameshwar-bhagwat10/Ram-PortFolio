'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Hero from '@/components/sections/Hero/Hero';

// Lazy load sections that are below the fold
const About = dynamic(() => import('@/components/sections/About/About'), {
  loading: () => <div className="min-h-screen bg-[#0F0E0E]" />,
  ssr: true, // Still render on server for SEO
});

const Skills = dynamic(() => import('@/components/sections/Skills/Skills'), {
  loading: () => <div className="min-h-screen bg-[#0F0E0E]" />,
  ssr: true,
});

const Work = dynamic(() => import('@/components/sections/Work/Work'), {
  loading: () => <div className="min-h-screen bg-[#0F0E0E]" />,
  ssr: true,
});

const GitHubContributions = dynamic(() => import('@/components/sections/GitHub/GitHubContributions'), {
  loading: () => <div className="min-h-96 bg-[#0F0E0E]" />,
  ssr: true,
});

const Contact = dynamic(() => import('@/components/sections/Contact/Contact'), {
  loading: () => <div className="min-h-screen bg-[#0F0E0E]" />,
  ssr: true,
});

export default function Home() {
  useEffect(() => {
    // Optimize scroll performance with passive listeners
    const optimizeScroll = () => {
      document.documentElement.style.scrollBehavior = 'smooth';
    };
    
    optimizeScroll();
    
    // Debounced scroll handler for performance
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        // Scroll ended - can perform any cleanup if needed
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0F0E0E]" style={{ willChange: 'auto' }}>
      {/* Hero Section - Loads immediately */}
      <Hero />

      {/* Below sections - Lazy loaded */}
      <About />
      <Skills />
      <Work />
      <GitHubContributions />
      <Contact />
    </div>
  );
}
