'use client';

import { motion } from 'framer-motion';
import { Code2, Briefcase, GraduationCap, Rocket, Award, Users } from 'lucide-react';

const milestones = [
  { 
    year: '2018', 
    title: 'First Steps',
    description: 'Started coding journey with HTML, CSS & JavaScript',
    icon: Code2,
    color: 'from-[#1e3a8a] to-[#1e40af]', // Deep blue
  },
  { 
    year: '2020', 
    title: 'Professional Start',
    description: 'Joined tech startup as Junior Developer',
    icon: GraduationCap,
    color: 'from-[#0e7490] to-[#0891b2]', // Ocean teal
  },
  { 
    year: '2021', 
    title: 'First Startup',
    description: 'Co-founded SaaS platform serving 10K+ users',
    icon: Briefcase,
    color: 'from-[#0891b2] to-[#06b6d4]', // Bright teal
  },
  { 
    year: '2022', 
    title: 'Team Leadership',
    description: 'Led development team of 8 engineers',
    icon: Users,
    color: 'from-[#06b6d4] to-[#0ea5e9]', // Cyan
  },
  { 
    year: '2023', 
    title: 'Senior Developer',
    description: 'Architected enterprise-scale applications',
    icon: Award,
    color: 'from-[#0ea5e9] to-[#38bdf8]', // Sky blue
  },
  { 
    year: '2024', 
    title: 'Building Devory',
    description: 'Creating next-gen AI-powered developer tools',
    icon: Rocket,
    color: 'from-[#38bdf8] to-[#7dd3fc]', // Light sky
  },
];

export default function TimelineStrip() {
  return (
    <div id="my-journey" className="relative py-20">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 text-sm font-semibold tracking-wider uppercase mb-3">The Story So Far</p>
        <h3 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
          From Code to Impact
        </h3>
        <p className="text-muted text-lg max-w-2xl mx-auto">Every line of code tells a story. Here&apos;s mine—from curious beginner to building products that matter.</p>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block">
          {/* Connecting Line - Multi-color gradient */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}
            className="absolute top-12 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-900/30 via-cyan-500 to-sky-400/30 origin-left shadow-[0_0_20px_rgba(6,182,212,0.5)]"
          />

          {/* Animated traveling dot */}
          <motion.div
            initial={{ left: '0%' }}
            animate={{ left: '100%' }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: 'linear',
              repeatDelay: 2 
            }}
            className="absolute top-[46px] w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.8)] z-20"
          />

          {/* Timeline Items */}
          <div className="grid grid-cols-6 gap-4">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 + index * 0.12 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Icon Node */}
                <motion.div
                  whileHover={{ scale: 1.2, y: -4 }}
                  className="relative mb-8 cursor-pointer z-10"
                >
                  {/* Outer glow ring - unique color per milestone */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${milestone.color} blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-500`} />
                  
                  {/* Icon container with gradient border */}
                  <div className={`relative w-24 h-24 rounded-full bg-gradient-to-br from-card to-background border-2 border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/20`}>
                    <milestone.icon 
                      className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" 
                      size={32} 
                      strokeWidth={1.5} 
                    />
                    
                    {/* Animated ring on hover */}
                    <span className="absolute inset-0 rounded-full border-2 border-cyan-400/50 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></span>
                  </div>

                  {/* Pulsing effect for latest milestone */}
                  {index === milestones.length - 1 && (
                    <motion.span
                      className="absolute inset-0 rounded-full border-2 border-sky-400"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.div>

                {/* Year Badge with gradient */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gradient-to-r ${milestone.color} bg-opacity-10 border border-cyan-500/30 mb-4 group-hover:border-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/10`}
                >
                  <span className="text-cyan-300 font-bold text-sm tracking-wider">
                    {milestone.year}
                  </span>
                </motion.div>

                {/* Title */}
                <h4 className="text-base font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors duration-300 leading-tight">
                  {milestone.title}
                </h4>

                {/* Description */}
                <p className="text-xs text-muted leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet: Vertical Timeline */}
        <div className="lg:hidden space-y-8">
          {/* Vertical connecting line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="absolute left-8 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-900/30 via-cyan-500 to-sky-400/30 origin-top shadow-[0_0_15px_rgba(6,182,212,0.4)]"
          />

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex gap-6 group"
            >
              {/* Icon Node */}
              <div className="relative flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className={`relative w-16 h-16 rounded-full bg-gradient-to-br from-card to-background border-2 border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/20 z-10`}
                >
                  <milestone.icon 
                    className="text-cyan-400" 
                    size={24} 
                    strokeWidth={1.5} 
                  />
                  
                  {/* Glow effect with gradient */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${milestone.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                </motion.div>

                {/* Vertical connector */}
                {index < milestones.length - 1 && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-16 w-[2px] h-8 bg-gradient-to-b from-cyan-500/50 to-cyan-500/20" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                {/* Year with gradient background */}
                <div className={`inline-flex items-center justify-center px-3 py-1 rounded-full bg-gradient-to-r ${milestone.color} bg-opacity-20 border border-cyan-500/30 mb-3`}>
                  <span className="text-cyan-300 font-bold text-sm">
                    {milestone.year}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-lg font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors">
                  {milestone.title}
                </h4>

                {/* Description */}
                <p className="text-sm text-muted leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom decorative line with gradient */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="mt-20 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent origin-center"
      />
    </div>
  );
}
