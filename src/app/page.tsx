'use client';

import Hero from '@/components/sections/Hero/Hero';
import About from '@/components/sections/About/About';
import Skills from '@/components/sections/Skills/Skills';
import Work from '@/components/sections/Work/Work';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F0E0E]">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Work Section */}
      <Work />

      {/* Placeholder contact section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 bg-[#0F0E0E]">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-4">Contact</h2>
          <p className="text-muted">Coming soon...</p>
        </div>
      </section>
    </div>
  );
}
