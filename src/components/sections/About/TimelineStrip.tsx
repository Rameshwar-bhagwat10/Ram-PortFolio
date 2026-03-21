'use client';

import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Briefcase, GraduationCap, Rocket, Award } from 'lucide-react';

const milestones = [
  {
    year: '2022',
    title: 'The Curiosity Phase',
    description: 'Started exploring web development with HTML, CSS, and JavaScript.',
    icon: Code2,
    accent: '#a855f7',
  },
  {
    year: '2024',
    title: 'Engineering Foundation',
    description: 'B.Tech IT admission. Building full-stack apps with modern tech.',
    icon: GraduationCap,
    accent: '#3b82f6',
  },
  {
    year: '2025',
    title: 'Product Builder',
    description: 'Built ThinkVerse - a SaaS platform for idea management.',
    icon: Briefcase,
    accent: '#f97316',
  },
  {
    year: '2026',
    title: 'AI Development',
    description: 'Building Devory, an AI-driven student project platform.',
    icon: Award,
    accent: '#ef4444',
    isCurrent: true,
  },
  {
    year: '2027',
    title: 'Scaling Vision',
    description: 'Advanced AI/ML systems and production-grade engineering.',
    icon: Rocket,
    accent: '#10b981',
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
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const isLeft = index % 2 === 0;
  const isLast = index === total - 1;

  return (
    <div ref={ref} className="relative flex items-start lg:items-center">
      {/* Left content (desktop) */}
      <motion.div
        className={`hidden lg:flex flex-1 ${isLeft ? 'justify-end pr-10' : 'justify-end pr-10 opacity-0 pointer-events-none'}`}
        initial={{ opacity: 0, x: -30 }}
        animate={isInView && isLeft ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {isLeft && (
          <div className="text-right max-w-xs">
            <span
              className="text-xs font-bold tracking-wider"
              style={{ color: milestone.accent }}
            >
              {milestone.year}
            </span>
            <h4
              className="text-lg font-bold text-white mt-1 mb-1"
              style={{ fontFamily: 'var(--font-jakarta)' }}
            >
              {milestone.title}
            </h4>
            <p className="text-sm text-white/40 leading-relaxed">
              {milestone.description}
            </p>
          </div>
        )}
      </motion.div>

      {/* Center - Node */}
      <div className="relative flex-shrink-0 z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Node */}
          <div
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border-2"
            style={{
              borderColor: milestone.accent,
              background: `radial-gradient(circle, ${milestone.accent}20 0%, transparent 70%)`,
            }}
          >
            <milestone.icon
              size={18}
              className="sm:w-5 sm:h-5"
              style={{ color: milestone.accent }}
              strokeWidth={2}
            />
          </div>
          {/* Current pulse */}
          {milestone.isCurrent && (
            <motion.span
              className="absolute inset-0 rounded-full border-2"
              style={{ borderColor: milestone.accent }}
              animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          )}
        </motion.div>

        {/* Connector line to next */}
        {!isLast && (
          <div
            className="absolute left-1/2 -translate-x-1/2 top-full w-[2px] h-12 sm:h-14"
            style={{
              background: `linear-gradient(to bottom, ${milestone.accent}60, ${milestones[index + 1].accent}60)`,
            }}
          />
        )}
      </div>

      {/* Right content (desktop) */}
      <motion.div
        className={`hidden lg:flex flex-1 ${!isLeft ? 'justify-start pl-10' : 'justify-start pl-10 opacity-0 pointer-events-none'}`}
        initial={{ opacity: 0, x: 30 }}
        animate={isInView && !isLeft ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {!isLeft && (
          <div className="text-left max-w-xs">
            <span
              className="text-xs font-bold tracking-wider"
              style={{ color: milestone.accent }}
            >
              {milestone.year}
            </span>
            <h4
              className="text-lg font-bold text-white mt-1 mb-1"
              style={{ fontFamily: 'var(--font-jakarta)' }}
            >
              {milestone.title}
            </h4>
            <p className="text-sm text-white/40 leading-relaxed">
              {milestone.description}
            </p>
          </div>
        )}
      </motion.div>

      {/* Mobile content - always on right */}
      <motion.div
        className="lg:hidden flex-1 pl-5 pb-14"
        initial={{ opacity: 0, x: 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <span
          className="text-[11px] font-bold tracking-wider"
          style={{ color: milestone.accent }}
        >
          {milestone.year}
        </span>
        <h4
          className="text-base font-bold text-white mt-0.5 mb-1"
          style={{ fontFamily: 'var(--font-jakarta)' }}
        >
          {milestone.title}
        </h4>
        <p className="text-xs text-white/40 leading-relaxed">
          {milestone.description}
        </p>
      </motion.div>
    </div>
  );
}

export default function TimelineStrip() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 60%'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  return (
    <div id="my-journey" ref={containerRef} className="relative py-16 sm:py-20">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-14 sm:mb-16 px-4"
      >
        <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/25 mb-3">
          The Story So Far
        </p>
        <h3
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase tracking-[-0.02em]"
          style={{ fontFamily: 'var(--font-jakarta)' }}
        >
          My{' '}
          <span
            style={{
              backgroundImage: 'linear-gradient(90deg, #a855f7, #3b82f6, #f97316, #ef4444, #10b981)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Journey
          </span>
        </h3>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto px-6">
        {/* Background line (desktop center) */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/[0.06]" />

        {/* Animated progress line (desktop) */}
        <motion.div
          className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 w-[2px] origin-top"
          style={{
            height: lineHeight,
            background: 'linear-gradient(180deg, #a855f7, #3b82f6, #f97316, #ef4444, #10b981)',
          }}
        />

        {/* Background line (mobile left) */}
        <div className="lg:hidden absolute left-6 top-0 bottom-0 w-[2px] bg-white/[0.06]" />

        {/* Animated progress line (mobile) */}
        <motion.div
          className="lg:hidden absolute left-6 top-0 w-[2px] origin-top -translate-x-[1px]"
          style={{
            height: lineHeight,
            background: 'linear-gradient(180deg, #a855f7, #3b82f6, #f97316, #ef4444, #10b981)',
          }}
        />

        {/* Items */}
        <div className="relative">
          {/* Mobile: offset for left-aligned timeline */}
          <div className="lg:hidden pl-[6px]">
            {milestones.map((milestone, index) => (
              <TimelineItem
                key={milestone.year}
                milestone={milestone}
                index={index}
                total={milestones.length}
              />
            ))}
          </div>

          {/* Desktop: centered timeline */}
          <div className="hidden lg:block space-y-10">
            {milestones.map((milestone, index) => (
              <TimelineItem
                key={milestone.year}
                milestone={milestone}
                index={index}
                total={milestones.length}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
