'use client';

import ParticleBackground from '@/components/background/ParticleBackground';
import HorizonGlow from '@/components/background/HorizonGlow';

export default function HeroBackground() {
  return (
    <>
      {/* Floating Particles */}
      <ParticleBackground />

      {/* Animated Horizon Glow */}
      <HorizonGlow />
    </>
  );
}
