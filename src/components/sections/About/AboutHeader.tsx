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
        subtitle="Get to Know Me"
        title="Turning Ideas Into Reality"
        highlightWord="Reality"
        description="Developer by day, problem solver by nature. Let's build something amazing together."
      />
    </motion.div>
  );
}
