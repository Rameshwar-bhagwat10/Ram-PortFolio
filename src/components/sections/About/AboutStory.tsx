'use client';

import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiNodedotjs, 
  SiPython, 
  SiAmazon,
  SiTensorflow,
  SiDocker
} from 'react-icons/si';
import { Layers } from 'lucide-react';

const expertise = [
  // Row 1 - 4 items
  [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  ],
  // Row 2 - 3 items
  [
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
    { name: 'AI/ML', icon: SiTensorflow, color: '#FF6F00' },
  ],
  // Row 3 - 2 items
  [
    { name: 'System Design', icon: Layers, color: '#8B5CF6' },
    { name: 'DevOps', icon: SiDocker, color: '#2496ED' },
  ],
];

export default function AboutStory() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-6"
    >
      {/* Core Expertise Heading */}
      <h4 className="text-lg font-bold text-center text-primary-gradient">Core Expertise</h4>
      
      {/* Inverted Triangle Layout */}
      <div className="flex flex-col items-center gap-3">
        {expertise.map((row, rowIndex) => (
          <div 
            key={rowIndex} 
            className="flex gap-3 justify-center"
          >
            {row.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + (rowIndex * row.length + index) * 0.05 }}
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 w-[110px]"
              >
                <skill.icon size={16} style={{ color: skill.color }} className="flex-shrink-0" />
                <motion.span
                  className="text-xs font-medium truncate inline-block"
                  style={{
                    background: 'linear-gradient(90deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.5) 40%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.5) 60%, rgba(255,255,255,0.5) 100%)',
                    backgroundSize: '200% 100%',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.4))',
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '200% 0%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  {skill.name}
                </motion.span>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
