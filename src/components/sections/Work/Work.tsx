'use client';

import { useState, useCallback, memo, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from './work.data';
import ProjectCard from './ProjectCard';

const INITIAL_PROJECTS_COUNT = 3;
const categories = ['All', 'AI & ML', 'Full-Stack', 'Web Apps'] as const;
type Category = typeof categories[number];

// Memoized stats component
const Stats = memo(function Stats() {
  return (
    <div className="flex items-center justify-center gap-8 sm:gap-12 mt-8 sm:mt-10">
      <div className="text-center">
        <span
          className="block text-2xl sm:text-3xl font-bold font-outfit"
          style={{
            background: 'linear-gradient(135deg, #FF8C00, #FF1493)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {projects.length}
        </span>
        <span className="text-[10px] sm:text-xs text-white/40 uppercase tracking-wider font-semibold">
          Projects
        </span>
      </div>
      <div className="w-px h-8 bg-white/10" />
      <div className="text-center">
        <span
          className="block text-2xl sm:text-3xl font-bold font-outfit"
          style={{
            background: 'linear-gradient(135deg, #FF8C00, #FF1493)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          15+
        </span>
        <span className="text-[10px] sm:text-xs text-white/40 uppercase tracking-wider font-semibold">
          Technologies
        </span>
      </div>
      <div className="w-px h-8 bg-white/10" />
      <div className="text-center">
        <span
          className="block text-2xl sm:text-3xl font-bold font-outfit"
          style={{
            background: 'linear-gradient(135deg, #FF8C00, #FF1493)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          4
        </span>
        <span className="text-[10px] sm:text-xs text-white/40 uppercase tracking-wider font-semibold">
          Industries
        </span>
      </div>
    </div>
  );
});

export default function Work() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [showAll, setShowAll] = useState(false);

  // Filter projects dynamically based on category selection
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      if (activeCategory === 'All') return true;
      if (activeCategory === 'AI & ML') {
        return project.techStack.some((t) =>
          ['Python', 'Scikit-learn', 'TensorFlow', 'OpenAI API'].includes(t)
        );
      }
      if (activeCategory === 'Full-Stack') {
        return project.techStack.some((t) =>
          ['Node.js', 'Express.js', 'MySQL', 'MongoDB', 'PostgreSQL', 'Supabase (PostgreSQL + Auth)', 'Prisma'].includes(t)
        );
      }
      if (activeCategory === 'Web Apps') {
        return project.techStack.some((t) =>
          ['Next.js', 'React', 'Tailwind CSS'].includes(t)
        );
      }
      return true;
    });
  }, [activeCategory]);

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, INITIAL_PROJECTS_COUNT);
  const remainingCount = filteredProjects.length - INITIAL_PROJECTS_COUNT;

  const handleShowMore = useCallback(() => setShowAll(true), []);
  const handleShowLess = useCallback(() => setShowAll(false), []);

  const handleCategoryChange = useCallback((cat: Category) => {
    setActiveCategory(cat);
    setShowAll(false); // Reset list expansion on tab change
  }, []);

  return (
    <section
      id="work"
      className="relative py-16 sm:py-20 md:py-28 lg:py-32"
      aria-label="Featured Projects Portfolio"
      itemScope
      itemType="https://schema.org/CreativeWork"
      style={{ contain: 'layout style' }}
    >
      {/* SEO Microdata */}
      <meta itemProp="name" content="Featured Projects - Rameshwar Bhagwat Portfolio" />
      <meta
        itemProp="description"
        content="Showcase of full-stack and AI-focused web development projects including WebCraft, Safecoast, and AI ML Progress Tracker, built with React, Next.js, TypeScript, and modern scalable architecture."
      />
      <meta itemProp="author" content="Rameshwar Bhagwat" />

      {/* Hidden SEO Content */}
      <div className="sr-only">
        <h2>Featured Projects Portfolio - Full Stack & AI Web Development</h2>
        <p>
          Explore a curated collection of production-ready applications built by Rameshwar
          Bhagwat, highlighting modern full stack engineering and AI-focused product development.
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
      <div className="container mx-auto px-4 sm:px-6 mb-10 sm:mb-12">
        <div className="text-center max-w-4xl mx-auto">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 sm:mb-4 font-outfit"
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
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-[-0.02em] mb-4 sm:mb-5 font-outfit"
          >
            <span className="text-white">Featured </span>
            <span className="text-rainbow-gradient">Projects</span>
          </motion.h2>

          {/* Animated line */}
          <motion.div
            className="flex justify-center mb-5 sm:mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
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
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-sm sm:text-base md:text-lg text-white/50 leading-relaxed max-w-2xl mx-auto font-outfit"
          >
            A curated collection of full-stack applications showcasing modern web technologies, AI integrations, and native experiences.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Stats />
          </motion.div>
        </div>
      </div>

      {/* iOS Segmented Control Switcher */}
      <div className="flex justify-center mb-10 sm:mb-14 px-4 sm:px-0">
        <div className="relative flex p-1 bg-white/5 border border-white/10 rounded-2xl max-w-md w-full sm:w-auto overflow-hidden">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className="relative flex-1 sm:flex-initial px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold rounded-xl text-center cursor-pointer transition-colors duration-200 z-[1] select-none font-outfit"
                style={{
                  color: isActive ? '#000000' : 'rgba(255, 255, 255, 0.6)',
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="segmented-active"
                    className="absolute inset-0 bg-white rounded-xl shadow-md z-[-1]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* See More Button */}
      {remainingCount > 0 && !showAll && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 sm:px-6 mt-16 sm:mt-20 md:mt-24"
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
              onClick={handleShowMore}
              className="group relative flex flex-col items-center gap-4 cursor-pointer"
            >
              {/* Button text */}
              <span
                className="text-sm sm:text-base font-semibold tracking-[0.15em] uppercase transition-all duration-300 group-hover:tracking-[0.2em] font-outfit"
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
              <div
                className="flex flex-col items-center"
                style={{ animation: 'bounce-arrow 1.5s ease-in-out infinite' }}
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
              </div>

              {/* Hover glow effect */}
              <div
                className="absolute -inset-6 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(255,140,0,0.1) 0%, transparent 70%)',
                }}
              />
            </button>

            {/* Subtitle */}
            <p className="text-white/30 text-xs sm:text-sm mt-4 text-center font-outfit">
              Click to reveal more innovative projects
            </p>
          </div>
        </motion.div>
      )}

      {/* Show Less Button (when expanded) */}
      {showAll && projects.length > INITIAL_PROJECTS_COUNT && (
        <div className="container mx-auto px-4 sm:px-6 mt-12 sm:mt-16 flex justify-center">
          <button
            onClick={handleShowLess}
            className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
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
            <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors font-outfit">
              Show Less
            </span>
          </button>
        </div>
      )}

      {/* CSS animation for arrow */}
      <style jsx>{`
        @keyframes bounce-arrow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
      `}</style>
    </section>
  );
}
