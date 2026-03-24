'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from './work.data';
import ProjectCard from './ProjectCard';

const INITIAL_PROJECTS_COUNT = 3;

export default function Work() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_PROJECTS_COUNT);
  const remainingCount = projects.length - INITIAL_PROJECTS_COUNT;

  return (
    <section
      id="work"
      className="relative py-16 sm:py-20 md:py-28 lg:py-32"
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
            <span className="text-rainbow-gradient">Projects</span>
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
        <AnimatePresence mode="wait">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </AnimatePresence>
      </div>

      {/* See More Button */}
      {remainingCount > 0 && !showAll && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="container mx-auto px-4 sm:px-6 mt-16 sm:mt-20 md:mt-28"
        >
          <div className="flex flex-col items-center justify-center">
            {/* Decorative line */}
            <div
              className="w-px h-16 sm:h-20 mb-8"
              style={{
                background: 'linear-gradient(to bottom, transparent, rgba(255,140,0,0.3), transparent)',
              }}
            />

            <button
              onClick={() => setShowAll(true)}
              className="group relative flex flex-col items-center gap-4 cursor-pointer"
            >
              {/* Button text */}
              <span
                className="text-sm sm:text-base font-semibold tracking-[0.15em] uppercase transition-all duration-300 group-hover:tracking-[0.2em]"
                style={{
                  background: 'linear-gradient(90deg, #FF8C00, #FF1493)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Explore {remainingCount} More Project{remainingCount > 1 ? 's' : ''}
              </span>

              {/* Animated arrow */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="flex flex-col items-center"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="url(#arrowGradient)"
                  strokeWidth={2}
                >
                  <defs>
                    <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FF8C00" />
                      <stop offset="100%" stopColor="#FF1493" />
                    </linearGradient>
                  </defs>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>

              {/* Hover glow effect */}
              <div
                className="absolute -inset-6 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(255,140,0,0.1) 0%, transparent 70%)',
                }}
              />
            </button>

            {/* Subtitle */}
            <p className="text-white/30 text-xs sm:text-sm mt-4 text-center">
              Click to reveal more innovative projects
            </p>
          </div>
        </motion.div>
      )}

      {/* Show Less Button (when expanded) */}
      {showAll && projects.length > INITIAL_PROJECTS_COUNT && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="container mx-auto px-4 sm:px-6 mt-16 sm:mt-20 flex justify-center"
        >
          <button
            onClick={() => setShowAll(false)}
            className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <svg
              className="w-4 h-4 rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors">
              Show Less
            </span>
          </button>
        </motion.div>
      )}
    </section>
  );
}
