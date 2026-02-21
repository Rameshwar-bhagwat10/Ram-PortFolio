'use client';

import { useEffect, useState } from 'react';

export default function ParticlesBackground() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [Particles, setParticles] = useState<any>(null);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    if (window.innerWidth >= 768) {
      import('@tsparticles/react').then((mod) => {
        setParticles(() => mod.default);
      });
    }

    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  if (!isDesktop || !Particles) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Particles
        id="tsparticles"
        options={async () => {
          const { particlesConfig } = await import('./particles.config');
          return particlesConfig;
        }}
        className="w-full h-full"
      />
    </div>
  );
}
