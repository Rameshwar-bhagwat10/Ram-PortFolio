'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

export default function AboutHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <SectionHeading
        subtitle=""
        title="Building Modern Web Experiences"
        highlightWord="Modern"
        description="Passionate about creating scalable, performant applications"
      />
    </motion.div>
  );
}
