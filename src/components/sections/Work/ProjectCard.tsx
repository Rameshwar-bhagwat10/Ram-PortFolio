'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from './work.data';
import { useRef, useState } from 'react';
import { 
  SiNextdotjs, 
  SiReact, 
  SiTypescript, 
  SiPython, 
  SiNodedotjs, 
  SiMongodb, 
  SiPostgresql, 
  SiRedis,
  SiAmazon,
  SiDocker,
  SiStripe,
  SiGraphql,
  SiTensorflow,
  SiApachekafka,
  SiFastapi,
  SiWebrtc,
  SiBitcoin
} from 'react-icons/si';

// Tech stack icon mapping with original brand colors
const techConfig: Record<string, { icon: React.ComponentType<{ size?: number; style?: React.CSSProperties; className?: string }>; color: string }> = {
  'Next.js': { icon: SiNextdotjs, color: '#FFFFFF' }, // Changed from black to white
  'React': { icon: SiReact, color: '#61DAFB' },
  'TypeScript': { icon: SiTypescript, color: '#3178C6' },
  'Python': { icon: SiPython, color: '#3776AB' },
  'Node.js': { icon: SiNodedotjs, color: '#339933' },
  'FastAPI': { icon: SiFastapi, color: '#009688' },
  'GraphQL': { icon: SiGraphql, color: '#E10098' },
  'TensorFlow': { icon: SiTensorflow, color: '#FF6F00' },
  'PostgreSQL': { icon: SiPostgresql, color: '#4169E1' },
  'MongoDB': { icon: SiMongodb, color: '#47A248' },
  'TimescaleDB': { icon: SiPostgresql, color: '#FDB515' },
  'Redis': { icon: SiRedis, color: '#DC382D' },
  'Stripe': { icon: SiStripe, color: '#008CDD' },
  'AWS': { icon: SiAmazon, color: '#FF9900' },
  'Docker': { icon: SiDocker, color: '#2496ED' },
  'Kafka': { icon: SiApachekafka, color: '#FFFFFF' }, // Changed from black to white
  'WebRTC': { icon: SiWebrtc, color: '#FFFFFF' }, // Changed from dark gray to white
  'Blockchain': { icon: SiBitcoin, color: '#F7931A' },
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Track this card's scroll progress for smooth animations
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  // Smooth opacity transition - fade in when entering, fade out when leaving
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.4, 1, 1, 0.4]);
  
  // Smooth scale transition - subtle zoom effect
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.96, 1, 1, 0.96]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, scale }}
      className="w-full h-full flex items-center justify-center px-6 md:px-12 lg:px-16"
    >
      <div className="w-full max-w-7xl mx-auto h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 w-full">
          
          {/* Image Container - Left 50% */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1],
              type: 'spring',
              stiffness: 80,
              damping: 20
            }}
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Ambient glow */}
            <motion.div
              className="absolute inset-0 -m-8 rounded-full blur-3xl pointer-events-none"
              animate={{
                opacity: [0.15, 0.25, 0.15],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                background: `radial-gradient(circle, rgba(${project.color}, 0.4) 0%, transparent 70%)`,
              }}
            />
            
            {/* Fixed Image Box - Container stays in place with project-specific gradient */}
            <div 
              className="relative h-[55vh] md:h-[60vh] lg:h-[65vh] rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
              style={{
                background: `radial-gradient(circle at 30% 50%, rgba(${project.color}, 0.15) 0%, rgba(${project.color}, 0.08) 40%, #0F0E0E 100%)`
              }}
            >
              {/* First Image - Back layer, rotates on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl overflow-hidden bg-[#171616]"
                animate={{
                  rotate: isHovered ? -8 : 0,
                  scale: isHovered ? 0.7 : 1,
                  x: isHovered ? -40 : 0,
                  y: isHovered ? 20 : 0,
                  opacity: isHovered ? 1 : 1,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  type: 'spring',
                  stiffness: 100,
                  damping: 20,
                }}
                style={{
                  transformOrigin: 'center center',
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Project number */}
                <div className="absolute top-6 left-6 text-white/40 text-sm font-medium tabular-nums z-10">
                  {String(project.id).padStart(2, '0')} / 04
                </div>
              </motion.div>

              {/* Second Image - Front layer, rotates on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl overflow-hidden bg-[#171616]"
                animate={{
                  rotate: isHovered ? 8 : 0,
                  scale: isHovered ? 0.7 : 1,
                  x: isHovered ? 40 : 0,
                  y: isHovered ? -20 : 0,
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  type: 'spring',
                  stiffness: 100,
                  damping: 20,
                }}
                style={{
                  transformOrigin: 'center center',
                }}
              >
                <Image
                  src={project.hoverImage}
                  alt={`${project.title} - Hover`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content Container - Right 50% */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1], 
              delay: 0.2,
              type: 'spring',
              stiffness: 80,
              damping: 20
            }}
            className="flex flex-col justify-center space-y-4 md:space-y-5"
          >
            {/* Title */}
            <motion.h3 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {project.title}
            </motion.h3>

            {/* Tagline */}
            <motion.p 
              className="text-base md:text-lg text-muted"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {project.tagline}
            </motion.p>

            {/* Divider */}
            <motion.div 
              className="w-12 h-[2px] bg-primary-gradient"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            />

            {/* Description */}
            <motion.p 
              className="text-sm md:text-base text-white/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {project.description}
            </motion.p>

            {/* Features */}
            <motion.div 
              className="space-y-2 md:space-y-2.5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {project.features.map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 + idx * 0.1 }}
                >
                  <div className="w-2 h-2 rotate-45 bg-primary-gradient mt-2 flex-shrink-0" />
                  <p className="text-xs md:text-sm text-white/70 leading-relaxed">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Tech Stack */}
            <motion.div 
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              {project.techStack.map((tech, idx) => {
                const config = techConfig[tech];
                const Icon = config?.icon || SiReact; // Default icon
                const iconColor = config?.color || '#FFFFFF';
                
                return (
                  <motion.span
                    key={idx}
                    className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 inline-flex items-center gap-1.5"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 1.1 + idx * 0.05 }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 140, 0, 0.1)' }}
                  >
                    <Icon size={12} className="flex-shrink-0" style={{ color: iconColor }} />
                    <motion.span
                      className="inline-block"
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
                      {tech}
                    </motion.span>
                  </motion.span>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-3 md:gap-4 pt-2 md:pt-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              {project.liveUrl && (
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => window.open(project.liveUrl, '_blank')}
                  rightIcon={<ExternalLink size={16} />}
                >
                  View Live
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  variant="secondary"
                  size="md"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                  rightIcon={<Github size={16} />}
                >
                  Source Code
                </Button>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
