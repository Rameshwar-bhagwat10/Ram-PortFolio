'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from './work.data';
import { useState } from 'react';
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
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article 
      className="w-full h-full flex items-center justify-center px-6 md:px-12 lg:px-16"
      itemScope
      itemType="https://schema.org/CreativeWork"
    >
      {/* SEO Microdata for each project */}
      <meta itemProp="name" content={project.title} />
      <meta itemProp="description" content={`${project.tagline}. ${project.description}`} />
      <meta itemProp="author" content="Rameshwar Bhagwat" />
      <meta itemProp="image" content={project.image} />
      <meta itemProp="keywords" content={project.techStack.join(', ')} />
      {project.liveUrl && <meta itemProp="url" content={project.liveUrl} />}
      
      <div className="w-full max-w-7xl mx-auto h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 w-full">
          
          {/* Image Container - Left 50% */}
          <figure
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            itemProp="image"
          >
            {/* Ambient glow - Static, no animation */}
            <div
              className="absolute inset-0 -m-8 rounded-full blur-3xl pointer-events-none opacity-20"
              style={{
                background: `radial-gradient(circle, rgba(${project.color}, 0.4) 0%, transparent 70%)`,
              }}
            />
            
            {/* Fixed Image Box */}
            <div 
              className="relative h-[55vh] md:h-[60vh] lg:h-[65vh] rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
              style={{
                background: `radial-gradient(circle at 30% 50%, rgba(${project.color}, 0.15) 0%, rgba(${project.color}, 0.08) 40%, #0F0E0E 100%)`
              }}
            >
              {/* First Image - Back layer */}
              <motion.div
                className="absolute inset-0 rounded-2xl overflow-hidden bg-[#171616]"
                animate={{
                  rotate: isHovered ? -8 : 0,
                  scale: isHovered ? 0.7 : 1,
                  x: isHovered ? -40 : 0,
                  y: isHovered ? 20 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                  mass: 0.8,
                }}
                style={{
                  transformOrigin: 'center center',
                  willChange: 'transform',
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority={index === 0}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Project number */}
                <div className="absolute top-6 left-6 text-white/40 text-sm font-medium tabular-nums z-10">
                  {String(project.id).padStart(2, '0')} / 04
                </div>
              </motion.div>

              {/* Second Image - Front layer */}
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
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                  mass: 0.8,
                }}
                style={{
                  transformOrigin: 'center center',
                  willChange: 'transform',
                }}
              >
                <Image
                  src={project.hoverImage}
                  alt={`${project.title} - Hover`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </motion.div>
            </div>
          </figure>

          {/* Content Container - Right 50% - No animations for better performance */}
          <div className="flex flex-col justify-center space-y-4 md:space-y-5">
            {/* Title */}
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight" itemProp="name">
              {project.title}
            </h3>

            {/* Tagline */}
            <p className="text-base md:text-lg text-muted" itemProp="headline">
              {project.tagline}
            </p>

            {/* Divider */}
            <div className="w-12 h-[2px] bg-primary-gradient" aria-hidden="true" />

            {/* Description */}
            <p className="text-sm md:text-base text-white/80 leading-relaxed" itemProp="description">
              {project.description}
            </p>

            {/* Features */}
            <ul className="space-y-2 md:space-y-2.5" itemProp="about">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rotate-45 bg-primary-gradient mt-2 flex-shrink-0" aria-hidden="true" />
                  <p className="text-xs md:text-sm text-white/70 leading-relaxed">
                    {feature}
                  </p>
                </li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
              {project.techStack.map((tech, idx) => {
                const config = techConfig[tech];
                const Icon = config?.icon || SiReact;
                const iconColor = config?.color || '#FFFFFF';
                
                return (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 inline-flex items-center gap-1.5 hover:bg-white/10 transition-colors duration-300"
                    role="listitem"
                    itemProp="keywords"
                  >
                    <Icon size={12} className="flex-shrink-0" style={{ color: iconColor }} aria-hidden="true" />
                    <span className="text-white/70">{tech}</span>
                  </span>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <nav className="flex flex-wrap gap-3 md:gap-4 pt-2 md:pt-3" aria-label="Project links">
              {project.liveUrl && (
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => window.open(project.liveUrl, '_blank')}
                  rightIcon={<ExternalLink size={16} />}
                  aria-label={`View ${project.title} live demo`}
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
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  Source Code
                </Button>
              )}
            </nav>
          </div>
        </div>
      </div>
    </article>
  );
}
