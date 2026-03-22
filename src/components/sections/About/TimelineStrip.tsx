'use client';

import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Briefcase, GraduationCap, Rocket, Award } from 'lucide-react';

const milestones = [
  {
    year: '2022',
    title: 'The Curiosity Phase',
    description: 'Discovered the world of web development. Started with HTML, CSS, and JavaScript fundamentals. Built my first static websites and fell in love with creating things for the web.',
    icon: Code2,
  },
  {
    year: '2024',
    title: 'Engineering Foundation',
    description: 'Started B.Tech in Information Technology. Diving deep into data structures, algorithms, and software engineering principles. Building full-stack applications with React, Node.js, and databases.',
    icon: GraduationCap,
  },
  {
    year: '2025',
    title: 'Product Builder',
    description: 'Launched ThinkVerse - a SaaS platform for structured idea management. Learned product development, user experience design, and the importance of shipping real products to real users.',
    icon: Briefcase,
  },
  {
    year: '2026',
    title: 'AI Development',
    description: 'Currently building Devory, an AI-driven platform helping students showcase and manage their projects. Exploring machine learning, natural language processing, and intelligent automation.',
    icon: Award,
    isCurrent: true,
  },
  {
    year: '2027',
    title: 'Scaling Vision',
    description: 'Aiming to master advanced AI/ML systems and production-grade engineering. Goal: Build technology that impacts millions and contribute to open-source communities.',
    icon: Rocket,
  },
];

function TimelineItem({
  milestone,
  index,
  total,
}: {
  milestone: (typeof milestones)[0];
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Desktop layout */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-8 lg:items-center">
        {/* Left content */}
        <div className={`${isLeft ? 'text-right' : 'opacity-0 pointer-events-none'}`}>
          {isLeft && (
            <div className="group cursor-default">
              {/* Year badge */}
              <motion.div
                className="inline-flex items-center gap-2 mb-2"
                whileHover={{ x: -5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-xs font-bold tracking-wider text-[#FF8C00]">
                  {milestone.year}
                </span>
                <div className="w-8 h-[1px] bg-gradient-to-l from-[#FF8C00] to-transparent" />
              </motion.div>

              {/* Title with icon */}
              <div className="flex items-center justify-end gap-3 mb-2">
                <h4
                  className="text-lg font-bold text-white group-hover:text-[#FF8C00] transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-jakarta)' }}
                >
                  {milestone.title}
                </h4>
                <div className="w-9 h-9 rounded-lg bg-[#FF8C00]/10 border border-[#FF8C00]/20 flex items-center justify-center group-hover:bg-[#FF8C00]/20 group-hover:border-[#FF8C00]/40 transition-all duration-300">
                  <milestone.icon size={18} className="text-[#FF8C00]" strokeWidth={1.5} />
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-white/50 leading-[1.7] group-hover:text-white/70 transition-colors duration-300">
                {milestone.description}
              </p>
            </div>
          )}
        </div>

        {/* Center - Timeline marker */}
        <div className="relative flex justify-center">
          <motion.div
            className="w-3 h-3 rounded-full bg-[#FF8C00] relative z-10"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            style={{
              boxShadow: '0 0 20px rgba(255, 140, 0, 0.5), 0 0 40px rgba(255, 140, 0, 0.2)',
            }}
          >
            {/* Current pulse */}
            {milestone.isCurrent && (
              <>
                <motion.span
                  className="absolute inset-0 rounded-full bg-[#FF8C00]"
                  animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <motion.span
                  className="absolute inset-0 rounded-full bg-[#FF8C00]"
                  animate={{ scale: [1, 2], opacity: [0.3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                />
              </>
            )}
          </motion.div>
        </div>

        {/* Right content */}
        <div className={`${!isLeft ? 'text-left' : 'opacity-0 pointer-events-none'}`}>
          {!isLeft && (
            <div className="group cursor-default">
              {/* Year badge */}
              <motion.div
                className="inline-flex items-center gap-2 mb-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-8 h-[1px] bg-gradient-to-r from-[#FF8C00] to-transparent" />
                <span className="text-xs font-bold tracking-wider text-[#FF8C00]">
                  {milestone.year}
                </span>
              </motion.div>

              {/* Title with icon */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-[#FF8C00]/10 border border-[#FF8C00]/20 flex items-center justify-center group-hover:bg-[#FF8C00]/20 group-hover:border-[#FF8C00]/40 transition-all duration-300">
                  <milestone.icon size={18} className="text-[#FF8C00]" strokeWidth={1.5} />
                </div>
                <h4
                  className="text-lg font-bold text-white group-hover:text-[#FF8C00] transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-jakarta)' }}
                >
                  {milestone.title}
                </h4>
              </div>

              {/* Description */}
              <p className="text-sm text-white/50 leading-[1.7] group-hover:text-white/70 transition-colors duration-300">
                {milestone.description}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile layout */}
      <div className="lg:hidden flex gap-4">
        {/* Timeline marker */}
        <div className="relative flex flex-col items-center">
          <motion.div
            className="w-2.5 h-2.5 rounded-full bg-[#FF8C00] relative z-10 flex-shrink-0"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              boxShadow: '0 0 15px rgba(255, 140, 0, 0.5)',
            }}
          >
            {milestone.isCurrent && (
              <motion.span
                className="absolute inset-0 rounded-full bg-[#FF8C00]"
                animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            )}
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex-1 pb-6 group">
          {/* Year */}
          <span className="text-[11px] font-bold tracking-wider text-[#FF8C00]">
            {milestone.year}
          </span>

          {/* Title with icon */}
          <div className="flex items-center gap-2.5 mt-1 mb-1.5">
            <div className="w-7 h-7 rounded-md bg-[#FF8C00]/10 border border-[#FF8C00]/20 flex items-center justify-center">
              <milestone.icon size={14} className="text-[#FF8C00]" strokeWidth={1.5} />
            </div>
            <h4
              className="text-base font-bold text-white"
              style={{ fontFamily: 'var(--font-jakarta)' }}
            >
              {milestone.title}
            </h4>
          </div>

          {/* Description */}
          <p className="text-xs text-white/50 leading-[1.6]">
            {milestone.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function TimelineStrip() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 50%'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%']);
  const dotY = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="my-journey" ref={containerRef} className="relative py-16 sm:py-20">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-10 sm:mb-12 px-4"
      >
        <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-white/25 mb-3">
          The Story So Far
        </p>
        <h3
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase tracking-[-0.02em]"
          style={{ fontFamily: 'var(--font-jakarta)' }}
        >
          My{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #FF8C00, #FF1493)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Journey
          </span>
        </h3>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto px-6" ref={timelineRef}>
        {/* Desktop: Centered line */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/[0.06]" />

        {/* Desktop: Animated progress line */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 pointer-events-none">
          <motion.div
            className="w-[2px] bg-[#FF8C00] origin-top"
            style={{
              height: lineHeight,
              boxShadow: '0 0 10px rgba(255, 140, 0, 0.4)',
            }}
          />
          {/* Moving dot */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#FF8C00]"
            style={{
              top: dotY,
              marginTop: '-8px',
              boxShadow: '0 0 20px rgba(255, 140, 0, 0.8), 0 0 40px rgba(255, 140, 0, 0.4)',
            }}
          >
            <div className="absolute inset-1 rounded-full bg-white/80" />
          </motion.div>
        </div>

        {/* Mobile: Left-aligned line */}
        <div className="lg:hidden absolute left-[17px] top-0 bottom-0 w-[2px] bg-white/[0.06]" />

        {/* Mobile: Animated progress line */}
        <div className="lg:hidden absolute left-[17px] top-0 bottom-0 pointer-events-none">
          <motion.div
            className="w-[2px] bg-[#FF8C00] origin-top"
            style={{
              height: lineHeight,
              boxShadow: '0 0 8px rgba(255, 140, 0, 0.4)',
            }}
          />
          {/* Moving dot */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#FF8C00]"
            style={{
              top: dotY,
              marginTop: '-6px',
              boxShadow: '0 0 15px rgba(255, 140, 0, 0.8)',
            }}
          >
            <div className="absolute inset-0.5 rounded-full bg-white/80" />
          </motion.div>
        </div>

        {/* Timeline Items */}
        <div className="relative space-y-4 lg:space-y-6">
          {milestones.map((milestone, index) => (
            <TimelineItem
              key={milestone.year}
              milestone={milestone}
              index={index}
              total={milestones.length}
            />
          ))}
        </div>

        {/* End marker */}
        <motion.div
          className="flex justify-center lg:justify-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="hidden lg:flex flex-col items-center gap-2">
            <div className="w-6 h-6 rounded-full border-2 border-[#FF8C00]/30 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#FF8C00]/50" />
            </div>
            <span className="text-[10px] text-white/20 uppercase tracking-wider">
              To be continued
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
