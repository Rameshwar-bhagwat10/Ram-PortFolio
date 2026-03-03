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
  SiBitcoin,
  SiTailwindcss,
  SiKotlin,
  SiFirebase,
  SiPrisma,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiJavascript
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

// Tech stack icon mapping with original brand colors
const techConfig: Record<string, { icon: React.ComponentType<{ size?: number; style?: React.CSSProperties; className?: string }>; color: string }> = {
  'Next.js': { icon: SiNextdotjs, color: '#FFFFFF' },
  'React': { icon: SiReact, color: '#61DAFB' },
  'TypeScript': { icon: SiTypescript, color: '#3178C6' },
  'JavaScript': { icon: SiJavascript, color: '#F7DF1E' },
  'Python': { icon: SiPython, color: '#3776AB' },
  'Kotlin': { icon: SiKotlin, color: '#7F52FF' },
  'Node.js': { icon: SiNodedotjs, color: '#339933' },
  'FastAPI': { icon: SiFastapi, color: '#009688' },
  'GraphQL': { icon: SiGraphql, color: '#E10098' },
  'TensorFlow': { icon: SiTensorflow, color: '#FF6F00' },
  'PostgreSQL': { icon: SiPostgresql, color: '#4169E1' },
  'MongoDB': { icon: SiMongodb, color: '#47A248' },
  'TimescaleDB': { icon: SiPostgresql, color: '#FDB515' },
  'Redis': { icon: SiRedis, color: '#DC382D' },
  'Prisma': { icon: SiPrisma, color: '#2D3748' },
  'Firebase': { icon: SiFirebase, color: '#FFCA28' },
  'Firestore': { icon: SiFirebase, color: '#FFCA28' },
  'Firebase Auth': { icon: SiFirebase, color: '#FFCA28' },
  'Stripe': { icon: SiStripe, color: '#635BFF' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4' },
  'AWS': { icon: SiAmazon, color: '#FF9900' },
  'Docker': { icon: SiDocker, color: '#2496ED' },
  'Kafka': { icon: SiApachekafka, color: '#FFFFFF' },
  'WebRTC': { icon: SiWebrtc, color: '#FFFFFF' },
  'Blockchain': { icon: SiBitcoin, color: '#F7931A' },
  'Scikit-learn': { icon: SiScikitlearn, color: '#F7931E' },
  'Pandas': { icon: SiPandas, color: '#150458' },
  'NumPy': { icon: SiNumpy, color: '#013243' },
  'NLTK': { icon: SiPython, color: '#3776AB' },
  'Matplotlib': { icon: SiPython, color: '#11557C' },
  'OpenWeather API': { icon: TbApi, color: '#EB6E4B' },
  'Android SDK': { icon: SiKotlin, color: '#3DDC84' },
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Generate Article JSON-LD Schema for each project
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": project.title,
    "description": `${project.tagline}. ${project.description}`,
    "author": {
      "@type": "Person",
      "name": "Rameshwar Bhagwat",
      "url": "https://rameshwarbhagwat.me"
    },
    "image": `https://rameshwarbhagwat.me${project.image}`,
    "applicationCategory": "WebApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "keywords": project.techStack.join(', '),
    ...(project.liveUrl && { "url": project.liveUrl }),
    ...(project.githubUrl && { "codeRepository": project.githubUrl }),
    "programmingLanguage": project.techStack,
    "featureList": project.features
  };

  return (
    <article 
      className="w-full h-full flex items-center justify-center px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 xs:py-6 sm:py-8 md:py-0"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      {/* JSON-LD Schema for Project */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      
      {/* SEO Microdata for each project */}
      <meta itemProp="name" content={project.title} />
      <meta itemProp="description" content={`${project.tagline}. ${project.description}`} />
      <meta itemProp="author" content="Rameshwar Bhagwat" />
      <meta itemProp="image" content={project.image} />
      <meta itemProp="keywords" content={project.techStack.join(', ')} />
      {project.liveUrl && <meta itemProp="url" content={project.liveUrl} />}
      
      <div className="w-full max-w-7xl mx-auto h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 w-full">
          
          {/* Image Container - Left 50% */}
          <figure
            className="relative order-1 md:order-none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            itemProp="image"
          >
            {/* Ambient glow - Static, no animation */}
            <div
              className="absolute inset-0 -m-3 xs:-m-4 sm:-m-5 md:-m-6 lg:-m-8 rounded-full blur-2xl sm:blur-3xl pointer-events-none opacity-15 sm:opacity-20"
              style={{
                background: `radial-gradient(circle, rgba(${project.color}, 0.4) 0%, transparent 70%)`,
              }}
            />
            
            {/* Fixed Image Box - Transparent */}
            <div 
              className="relative h-[28vh] xs:h-[32vh] sm:h-[36vh] md:h-[45vh] lg:h-[55vh] xl:h-[65vh] rounded-lg xs:rounded-xl sm:rounded-xl md:rounded-2xl overflow-hidden"
            >
              {/* First Image - Back layer */}
              <motion.div
                className="absolute inset-0 rounded-lg xs:rounded-xl sm:rounded-xl md:rounded-2xl overflow-hidden bg-[#171616]"
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
                  alt={`${project.title} - Rameshwar Bhagwat Project Screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain md:object-cover"
                  priority={index === 0}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Project number */}
                <div className="absolute top-2 xs:top-3 sm:top-4 md:top-6 left-2 xs:left-3 sm:left-4 md:left-6 text-white/40 text-[10px] xs:text-xs sm:text-sm font-medium tabular-nums z-10">
                  {String(project.id).padStart(2, '0')} / 04
                </div>
              </motion.div>

              {/* Second Image - Front layer */}
              <motion.div
                className="absolute inset-0 rounded-lg xs:rounded-xl sm:rounded-xl md:rounded-2xl overflow-hidden bg-[#171616]"
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
                  alt={`${project.title} - Rameshwar Bhagwat Project Interface`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain md:object-cover"
                  loading="lazy"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </motion.div>
            </div>
          </figure>

          {/* Content Container - Right 50% - No animations for better performance */}
          <div className="flex flex-col justify-center space-y-2 xs:space-y-2.5 sm:space-y-3 md:space-y-4 lg:space-y-5 order-2">
            {/* Title */}
            <h3 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight" itemProp="name">
              {project.title}
            </h3>

            {/* Tagline */}
            <p className="text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg text-muted" itemProp="headline">
              {project.tagline}
            </p>

            {/* Divider */}
            <div className="w-8 xs:w-9 sm:w-10 md:w-12 h-[2px] bg-primary-gradient" aria-hidden="true" />

            {/* Description */}
            <p className="text-[11px] xs:text-xs sm:text-xs md:text-sm lg:text-base text-white/80 leading-relaxed" itemProp="description">
              {project.description}
            </p>

            {/* Features */}
            <ul className="space-y-1 xs:space-y-1.5 sm:space-y-1.5 md:space-y-2 lg:space-y-2.5" itemProp="about">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-1.5 xs:gap-2 sm:gap-2 md:gap-3">
                  <div className="w-1 h-1 xs:w-1.5 xs:h-1.5 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 rotate-45 bg-primary-gradient mt-1 xs:mt-1.5 sm:mt-1.5 md:mt-2 flex-shrink-0" aria-hidden="true" />
                  <p className="text-[10px] xs:text-[11px] sm:text-xs md:text-sm text-white/70 leading-relaxed">
                    {feature}
                  </p>
                </li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1 xs:gap-1.5 sm:gap-1.5 md:gap-2" role="list" aria-label="Technologies used">
              {project.techStack.map((tech, idx) => {
                const config = techConfig[tech];
                const Icon = config?.icon || SiReact;
                const iconColor = config?.color || '#FFFFFF';
                
                return (
                  <span
                    key={idx}
                    className="px-1.5 xs:px-2 sm:px-2 md:px-2.5 py-0.5 xs:py-0.5 sm:py-0.5 md:py-1 text-[9px] xs:text-[10px] sm:text-[10px] md:text-xs font-medium rounded-full bg-white/5 border border-white/10 inline-flex items-center gap-1 xs:gap-1 sm:gap-1 md:gap-1.5 hover:bg-white/10 transition-colors duration-300"
                    role="listitem"
                    itemProp="keywords"
                  >
                    <Icon size={9} className="flex-shrink-0 xs:w-2.5 xs:h-2.5 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3" style={{ color: iconColor }} aria-hidden="true" />
                    <span className="text-white/70">{tech}</span>
                  </span>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <nav className="flex items-center gap-2 xs:gap-2 sm:gap-2.5 md:gap-3 pt-1 xs:pt-1 sm:pt-1.5 md:pt-2 lg:pt-3" aria-label="Project links">
              {project.liveUrl && (
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => window.open(project.liveUrl, '_blank')}
                  rightIcon={<ExternalLink size={12} className="xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5" />}
                  aria-label={`View ${project.title} live demo`}
                  className="text-[10px] xs:text-[11px] sm:text-xs px-2.5 xs:px-3 sm:px-3.5 py-1 xs:py-1.5 sm:py-1.5 whitespace-nowrap"
                >
                  View Live
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                  rightIcon={<Github size={12} className="xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5" />}
                  aria-label={`View ${project.title} source code on GitHub`}
                  className="text-[10px] xs:text-[11px] sm:text-xs px-2.5 xs:px-3 sm:px-3.5 py-1 xs:py-1.5 sm:py-1.5 whitespace-nowrap"
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
