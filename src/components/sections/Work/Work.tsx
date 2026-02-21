'use client';

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { projects } from './work.data';
import ProjectCard from './ProjectCard';

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(
    scrollYProgress,
    [0.07, 0.15, 0.40, 0.65, 0.90, 1],
    ['0%', '0%', '-100vw', '-200vw', '-300vw', '-300vw']
  );

  return (
    <div id="work" ref={containerRef} className="relative" style={{ height: '430vh' }}>
      {/* Intro Section */}
      <div className="h-[30vh] flex items-center justify-center bg-[#0F0E0E]">
        <div className="text-center px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="text-sm md:text-base text-muted mb-6"
          >
            Crafting digital experiences that make an impact
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="flex items-center justify-center gap-2 text-white/40 text-sm"
          >
            <span>Scroll to explore</span>
            <span className="text-xl">↓</span>
          </motion.div>
        </div>
      </div>

      {/* Sticky Projects Section */}
      <div className="sticky top-0 h-screen overflow-hidden bg-[#0F0E0E]">
        <motion.div
          style={{ x }}
          className="flex h-full will-change-transform"
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 30,
            mass: 0.5,
          }}
        >
          {projects.map((project) => (
            <div key={project.id} className="w-screen h-full flex-shrink-0">
              <ProjectCard project={project} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
