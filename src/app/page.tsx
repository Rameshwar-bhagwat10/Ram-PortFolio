'use client';

import Hero from '@/components/sections/Hero/Hero';
import About from '@/components/sections/About/About';
import Skills from '@/components/sections/Skills/Skills';
import Work from '@/components/sections/Work/Work';
import Contact from '@/components/sections/Contact/Contact';

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

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
