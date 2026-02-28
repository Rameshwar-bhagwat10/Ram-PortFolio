'use client';

import { motion } from 'framer-motion';
import { Code2, Briefcase, GraduationCap, Rocket, Award } from 'lucide-react';

const milestones = [
  { 
    year: '2022', 
    title: 'The Curiosity Phase',
    description: 'Started exploring the world of web development. Learned HTML, CSS, and JavaScript fundamentals and built small experimental projects.',
    icon: Code2,
    color: 'from-[#7c2d12] to-[#9a3412]', // Deep orange
  },
  { 
    year: '2024', 
    title: 'Engineering Foundation',
    description: 'Took admission in B.Tech IT. Transitioned from learning basics to building structured full-stack applications using modern technologies.',
    icon: GraduationCap,
    color: 'from-[#9a3412] to-[#c2410c]', // Dark orange
  },
  { 
    year: '2025', 
    title: 'Product Builder Mindset',
    description: 'Designed and developed ThinkVerse, a SaaS platform focused on structured idea management with authentication, APIs, and analytics.',
    icon: Briefcase,
    color: 'from-[#c2410c] to-[#ea580c]', // Bright orange
  },
  { 
    year: '2026', 
    title: 'AI-Powered Development',
    description: 'Started building Devory, an AI-driven student project platform. Focused on scalable architecture and intelligent workflows.',
    icon: Award,
    color: 'from-[#ea580c] to-[#f97316]', // Orange
  },
  { 
    year: '2027', 
    title: 'Scaling Vision',
    description: 'Moving towards advanced AI/ML systems, scalable SaaS infrastructure, and production-grade engineering practices.',
    icon: Rocket,
    color: 'from-[#f97316] to-[#fb923c]', // Light orange
  },
];

export default function TimelineStrip() {
  return (
    <div id="my-journey" className="relative py-12 sm:py-16 md:py-20">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-16 md:mb-20"
      >
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2 sm:mb-3">The Story So Far</p>
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent px-4">
          From Code to Impact
        </h3>
        <p className="text-muted text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">Every line of code tells a story. Here&apos;s mine—from curious beginner to building products that matter.</p>
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
            className="absolute top-12 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-900/30 via-orange-500 to-orange-400/30 origin-left shadow-[0_0_20px_rgba(249,115,22,0.5)]"
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
            className="absolute top-[46px] w-2 h-2 rounded-full bg-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.8)] z-20"
          />

          {/* Timeline Items */}
          <div className="grid grid-cols-5 gap-4">
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
                  <div className={`relative w-24 h-24 rounded-full bg-gradient-to-br from-card to-background border-2 border-orange-500/30 flex items-center justify-center group-hover:border-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/20`}>
                    <milestone.icon 
                      className="text-orange-400 group-hover:scale-110 transition-transform duration-300" 
                      size={32} 
                      strokeWidth={1.5} 
                    />
                    
                    {/* Animated ring on hover */}
                    <span className="absolute inset-0 rounded-full border-2 border-orange-400/50 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></span>
                  </div>

                  {/* Pulsing effect for latest milestone */}
                  {index === milestones.length - 1 && (
                    <motion.span
                      className="absolute inset-0 rounded-full border-2 border-orange-400"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.div>

                {/* Year Badge with gradient */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gradient-to-r ${milestone.color} bg-opacity-10 border border-orange-500/30 mb-4 group-hover:border-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/10`}
                >
                  <span className="font-bold text-sm tracking-wider text-white">
                    {milestone.year}
                  </span>
                </motion.div>

                {/* Title */}
                <h4 className="text-base font-bold mb-2 text-white group-hover:text-orange-300 transition-colors duration-300 leading-tight">
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
        <div className="lg:hidden space-y-6 sm:space-y-8 px-4">
          {/* Vertical connecting line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="absolute left-6 sm:left-8 top-0 bottom-0 w-[2px] sm:w-[3px] bg-gradient-to-b from-orange-900/30 via-orange-500 to-orange-400/30 origin-top shadow-[0_0_15px_rgba(249,115,22,0.4)]"
          />

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex gap-3 sm:gap-6 group"
            >
              {/* Icon Node */}
              <div className="relative flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className={`relative w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-card to-background border-2 border-orange-500/30 flex items-center justify-center group-hover:border-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/20 z-10`}
                >
                  <milestone.icon 
                    className="text-orange-400 w-5 h-5 sm:w-6 sm:h-6" 
                    strokeWidth={1.5} 
                  />
                  
                  {/* Glow effect with gradient */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${milestone.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                </motion.div>

                {/* Vertical connector */}
                {index < milestones.length - 1 && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-12 sm:top-16 w-[2px] h-6 sm:h-8 bg-gradient-to-b from-orange-500/50 to-orange-500/20" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-6 sm:pb-8">
                {/* Year with gradient background */}
                <div className={`inline-flex items-center justify-center px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-gradient-to-r ${milestone.color} bg-opacity-20 border border-orange-500/30 mb-2 sm:mb-3`}>
                  <span className="font-bold text-xs sm:text-sm text-white">
                    {milestone.year}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-base sm:text-lg font-bold mb-1.5 sm:mb-2 text-white group-hover:text-orange-300 transition-colors">
                  {milestone.title}
                </h4>

                {/* Description */}
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
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
        className="mt-12 sm:mt-16 md:mt-20 h-[1px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent origin-center"
      />
    </div>
  );
}
