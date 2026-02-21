'use client';

import { motion } from 'framer-motion';
import Badge from '@/components/ui/Badge';

const highlights = [
  {
    title: 'Product-Focused',
    description: 'Building scalable solutions that solve real problems',
  },
  {
    title: 'AI-Driven',
    description: 'Leveraging modern AI to enhance user experiences',
  },
  {
    title: 'Performance-First',
    description: 'Optimizing for speed, efficiency, and reliability',
  },
  {
    title: 'Team Collaboration',
    description: 'Working seamlessly with cross-functional teams',
  },
  {
    title: 'Continuous Learning',
    description: 'Staying updated with latest technologies and best practices',
  },
];

const expertise = [
  'React & Next.js',
  'TypeScript',
  'Node.js',
  'Python',
  'AWS & Cloud',
  'AI/ML Integration',
  'System Design',
  'DevOps',
];

export default function AboutStory() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-8 h-full flex flex-col"
    >
      {/* Positioning Statement */}
      <div>
        <p className="text-lg leading-relaxed text-white/90 mb-4">
          I craft high-performance web applications with a focus on clean architecture, 
          modern technologies, and exceptional user experiences.
        </p>
        <p className="text-base leading-relaxed text-white/80">
          With over 5 years of experience in full-stack development, I specialize in 
          building scalable applications that combine cutting-edge technology with 
          intuitive design. Currently focused on AI-powered developer tools.
        </p>
      </div>

      {/* Highlights with vertical line */}
      <div className="relative space-y-6 pl-6 flex-1">
        {/* Vertical gradient line */}
        <div 
          className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-primary via-primary/50 to-transparent"
        />

        {highlights.map((highlight, index) => (
          <motion.div
            key={highlight.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            className="relative"
          >
            {/* Glowing dot */}
            <div className="absolute -left-6 top-1">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
            </div>

            <h4 className="text-lg font-bold mb-1">{highlight.title}</h4>
            <p className="text-muted text-sm">{highlight.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Expertise Tags */}
      <div>
        <h4 className="text-lg font-bold mb-4">Core Expertise</h4>
        <div className="flex flex-wrap gap-2">
          {expertise.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
            >
              <Badge variant="outline" className="text-sm">
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
