'use client';

import { motion } from 'framer-motion';
import { projects } from './work.data';
import ProjectCard from './ProjectCard';

export default function Work() {
  return (
    <section
      id="work"
      className="relative bg-[#0F0E0E] py-16 sm:py-20 md:py-28 lg:py-32"
      aria-label="Featured Projects Portfolio"
      itemScope
      itemType="https://schema.org/CreativeWork"
    >
      {/* SEO Microdata */}
      <meta itemProp="name" content="Featured Projects - Rameshwar Bhagwat Portfolio" />
      <meta
        itemProp="description"
        content="Showcase of full-stack web development projects including AI SaaS platforms, e-commerce marketplaces, healthcare portals, and fintech dashboards built with React, Next.js, TypeScript, and modern technologies."
      />
      <meta itemProp="author" content="Rameshwar Bhagwat" />

      {/* Hidden SEO Content */}
      <div className="sr-only">
        <h2>Featured Projects Portfolio - Full Stack Web Development</h2>
        <p>
          Explore a curated collection of production-ready web applications built by Rameshwar
          Bhagwat, showcasing expertise in full-stack development, modern JavaScript frameworks,
          and scalable architecture.
        </p>
        <h3>Project Highlights</h3>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <h4>{project.title}</h4>
              <p>
                {project.tagline} - {project.description}
              </p>
              <p>Technologies: {project.techStack.join(', ')}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Header Section */}
      <div className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-16 md:mb-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-4 sm:mb-5"
            style={{
              background: 'linear-gradient(90deg, #FF8C00, #FF1493)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Portfolio
          </motion.p>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-[-0.02em] mb-5 sm:mb-6"
            style={{ fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif' }}
          >
            <span className="text-white">Featured </span>
            <span
              style={{
                background: 'linear-gradient(135deg, #FF8C00 0%, #FF1493 50%, #FF8C00 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Projects
            </span>
          </motion.h2>

          {/* Animated line */}
          <motion.div
            className="flex justify-center mb-6 sm:mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'center' }}
          >
            <div
              className="h-[2px] w-20 sm:w-28 md:w-36"
              style={{
                background:
                  'linear-gradient(90deg, transparent, #FF8C00, #FF1493, #FF8C00, transparent)',
              }}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg text-white/50 leading-relaxed max-w-2xl mx-auto"
            style={{
              fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif',
            }}
          >
            A curated collection of full-stack applications showcasing modern web technologies and
            innovative solutions.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-8 sm:gap-12 mt-8 sm:mt-10"
          >
            <div className="text-center">
              <span
                className="block text-2xl sm:text-3xl font-bold"
                style={{
                  background: 'linear-gradient(135deg, #FF8C00, #FF1493)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {projects.length}
              </span>
              <span className="text-[10px] sm:text-xs text-white/40 uppercase tracking-wider">
                Projects
              </span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <span
                className="block text-2xl sm:text-3xl font-bold"
                style={{
                  background: 'linear-gradient(135deg, #FF8C00, #FF1493)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                15+
              </span>
              <span className="text-[10px] sm:text-xs text-white/40 uppercase tracking-wider">
                Technologies
              </span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <span
                className="block text-2xl sm:text-3xl font-bold"
                style={{
                  background: 'linear-gradient(135deg, #FF8C00, #FF1493)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                4
              </span>
              <span className="text-[10px] sm:text-xs text-white/40 uppercase tracking-wider">
                Industries
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Project Cards */}
      <div className="container mx-auto px-4 sm:px-6 space-y-16 sm:space-y-20 md:space-y-28 lg:space-y-36">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
