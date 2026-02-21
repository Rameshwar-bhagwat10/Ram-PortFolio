'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Container from '@/components/layout/Container';
import MarqueeRow from './MarqueeRow';
import { skills } from './skills.data';

export default function Skills() {
  // Split skills into two groups for different rows
  const midPoint = Math.ceil(skills.length / 2);
  const topRowSkills = skills.slice(0, midPoint);
  const bottomRowSkills = skills.slice(midPoint);

  return (
    <section
      id="skills"
      className="relative py-28 px-6 bg-[#0F0E0E] overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">My Arsenal</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-white">
            Technologies <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">I Master</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">Building modern web experiences with cutting-edge tools and frameworks</p>
        </motion.div>

        {/* Marquee Rows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-16"
        >
          {/* Top Row - Left to Right */}
          <MarqueeRow skills={topRowSkills} speed={15} />

          {/* Bottom Row - Right to Left (Reverse) */}
          <MarqueeRow skills={bottomRowSkills} speed={15} reverse />
        </motion.div>
      </Container>
    </section>
  );
}
