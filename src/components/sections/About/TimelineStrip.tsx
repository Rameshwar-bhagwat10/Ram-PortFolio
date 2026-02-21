'use client';

import { motion } from 'framer-motion';
import { Code2, Briefcase, GraduationCap, Rocket, Award, Users } from 'lucide-react';

const milestones = [
  { 
    year: '2018', 
    title: 'First Steps',
    description: 'Started coding journey with HTML, CSS & JavaScript',
    icon: Code2,
  },
  { 
    year: '2020', 
    title: 'Professional Start',
    description: 'Joined tech startup as Junior Developer',
    icon: GraduationCap,
  },
  { 
    year: '2021', 
    title: 'First Startup',
    description: 'Co-founded SaaS platform serving 10K+ users',
    icon: Briefcase,
  },
  { 
    year: '2022', 
    title: 'Team Leadership',
    description: 'Led development team of 8 engineers',
    icon: Users,
  },
  { 
    year: '2023', 
    title: 'Senior Developer',
    description: 'Architected enterprise-scale applications',
    icon: Award,
  },
  { 
    year: '2024', 
    title: 'Building Devory',
    description: 'Creating next-gen AI-powered developer tools',
    icon: Rocket,
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
        <h3 className="text-4xl font-bold mb-3 bg-gradient-to-r from-white via-white to-primary bg-clip-text text-transparent">
          My Journey
        </h3>
        <p className="text-muted text-lg">From first line of code to building the future</p>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block">
          {/* Connecting Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}
            className="absolute top-12 left-0 right-0 h-[3px] bg-gradient-to-r from-primary/20 via-primary to-primary/20 origin-left"
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
                  {/* Outer glow ring */}
                  <div className="absolute inset-0 rounded-full bg-primary/30 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Icon container */}
                  <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-card to-background border-2 border-primary/30 flex items-center justify-center group-hover:border-primary transition-all duration-300 shadow-lg">
                    <milestone.icon 
                      className="text-primary group-hover:scale-110 transition-transform duration-300" 
                      size={32} 
                      strokeWidth={1.5} 
                    />
                    
                    {/* Animated ring on hover */}
                    <span className="absolute inset-0 rounded-full border-2 border-primary/50 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></span>
                  </div>
                </motion.div>

                {/* Year Badge */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-4 group-hover:bg-primary/20 group-hover:border-primary transition-all duration-300"
                >
                  <span className="text-primary font-bold text-sm tracking-wider">
                    {milestone.year}
                  </span>
                </motion.div>

                {/* Title */}
                <h4 className="text-base font-bold mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
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
                  className="relative w-16 h-16 rounded-full bg-gradient-to-br from-card to-background border-2 border-primary/30 flex items-center justify-center group-hover:border-primary transition-all duration-300 shadow-lg z-10"
                >
                  <milestone.icon 
                    className="text-primary" 
                    size={24} 
                    strokeWidth={1.5} 
                  />
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                {/* Vertical connector */}
                {index < milestones.length - 1 && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-16 w-[2px] h-8 bg-gradient-to-b from-primary/50 to-primary/20" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                {/* Year */}
                <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 border border-primary/30 mb-3">
                  <span className="text-primary font-bold text-sm">
                    {milestone.year}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
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

      {/* Bottom decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="mt-20 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent origin-center"
      />
    </div>
  );
}
