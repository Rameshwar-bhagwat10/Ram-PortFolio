'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { ExternalLink, Github } from 'lucide-react';
import { Project, projects } from './work.data';
import { useState, useRef, memo, useCallback, useMemo } from 'react';
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
  SiJavascript,
  SiExpress,
  SiMysql,
  SiAxios
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
  'Express.js': { icon: SiExpress, color: '#FFFFFF' },
  'FastAPI': { icon: SiFastapi, color: '#009688' },
  'GraphQL': { icon: SiGraphql, color: '#E10098' },
  'TensorFlow': { icon: SiTensorflow, color: '#FF6F00' },
  'PostgreSQL': { icon: SiPostgresql, color: '#4169E1' },
  'MySQL': { icon: SiMysql, color: '#4479A1' },
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
  'Axios': { icon: SiAxios, color: '#5A29E4' },
  'Android SDK': { icon: SiKotlin, color: '#3DDC84' },
};

// Optimized spring config
const imageSpring = {
  type: 'spring' as const,
  stiffness: 150,
  damping: 20,
  mass: 0.8,
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = memo(function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Alternating layout: even index = image left, odd index = image right
  const isReversed = index % 2 !== 0;

  // Slide direction based on layout side
  const imageSlideX = isReversed ? 60 : -60;
  const contentSlideX = isReversed ? -60 : 60;

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);
  const handleLiveClick = useCallback(() => window.open(project.liveUrl, '_blank'), [project.liveUrl]);
  const handleGithubClick = useCallback(() => window.open(project.githubUrl, '_blank'), [project.githubUrl]);

  // Memoize project schema
  const projectSchema = useMemo(() => ({
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
  }), [project]);

  // Pre-computed styles
  const ambientGlowStyle = useMemo(() => ({
    background: `radial-gradient(circle, rgba(${project.color}, 0.4) 0%, transparent 70%)`,
  }), [project.color]);

  const borderGradientStyle = useMemo(() => ({
    background: `conic-gradient(from var(--border-angle, 0deg), rgba(${project.color}, 0.15) 0%, rgba(${project.color}, 1) 12%, rgba(255,255,255,0.9) 15%, rgba(${project.color}, 1) 18%, rgba(${project.color}, 0.15) 30%)`,
  }), [project.color]);

  const staticBorderStyle = useMemo(() => ({
    background: `linear-gradient(135deg, rgba(${project.color}, 0.35) 0%, rgba(${project.color}, 0.12) 50%, rgba(${project.color}, 0.35) 100%)`,
  }), [project.color]);

  return (
    <article
      ref={ref}
      className="w-full max-w-7xl mx-auto"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
      data-project-id={project.id}
      style={{ contain: 'layout style' }}
    >
      {/* JSON-LD Schema for Project */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      
      {/* SEO Microdata */}
      <meta itemProp="name" content={project.title} />
      <meta itemProp="description" content={`${project.tagline}. ${project.description}`} />
      <meta itemProp="author" content="Rameshwar Bhagwat" />
      <meta itemProp="image" content={project.image} />
      <meta itemProp="keywords" content={project.techStack.join(', ')} />
      {project.liveUrl && <meta itemProp="url" content={project.liveUrl} />}
      
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-14 xl:gap-16 items-center ${isReversed ? 'md:[direction:rtl]' : ''}`}>
        
        {/* Image Container - simplified animation */}
        <figure
          className={`relative ${isReversed ? 'md:[direction:ltr]' : ''}`}
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateX(0)' : `translateX(${imageSlideX}px)`,
            transition: 'opacity 0.7s ease-out 0.1s, transform 0.7s ease-out 0.1s',
          }}
          itemProp="image"
        >
          {/* Ambient glow */}
          <div
            className="absolute inset-0 -m-4 sm:-m-6 md:-m-8 rounded-full blur-3xl pointer-events-none opacity-15 sm:opacity-20"
            style={ambientGlowStyle}
          />
          
          {/* Image Box */}
          <div className="relative h-[32vh] xs:h-[36vh] sm:h-[40vh] md:h-[45vh] lg:h-[55vh] xl:h-[60vh] rounded-xl md:rounded-2xl overflow-visible">
            {/* Center hover detection zone */}
            <div
              className="absolute inset-[25%] z-[5] cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            {/* First Image - Back layer */}
            <motion.div
              className="absolute inset-0 rounded-xl md:rounded-2xl overflow-hidden"
              animate={{
                rotate: isHovered ? -8 : 0,
                scale: isHovered ? 0.7 : 1,
                x: isHovered ? -40 : 0,
                y: isHovered ? 20 : 0,
              }}
              transition={imageSpring}
              style={{ transformOrigin: 'center center', willChange: 'transform' }}
            >
              {/* Solid dark ring base */}
              <div className="absolute -inset-[3px] rounded-xl md:rounded-2xl z-0 bg-[#1a1a1a]" />
              {/* Animated gradient border */}
              <div className="absolute -inset-[3px] rounded-xl md:rounded-2xl animate-border-rotate z-0" style={borderGradientStyle} />
              {/* Static border glow underneath */}
              <div className="absolute -inset-[3px] rounded-xl md:rounded-2xl z-0" style={staticBorderStyle} />
              {/* Inner image with gap */}
              <div className="absolute inset-0 m-[3px] rounded-[9px] md:rounded-[13px] overflow-hidden bg-[#171616] z-[1]">
                <Image
                  src={project.image}
                  alt={`${project.title} - Rameshwar Bhagwat Project Screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain md:object-cover"
                  priority={index === 0}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-3 sm:top-4 md:top-6 left-3 sm:left-4 md:left-6 text-white/40 text-[10px] xs:text-xs sm:text-sm font-medium tabular-nums z-10">
                  {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                </div>
              </div>
            </motion.div>

            {/* Second Image - Front layer (on hover) */}
            <motion.div
              className="absolute inset-0 rounded-xl md:rounded-2xl overflow-hidden"
              animate={{
                rotate: isHovered ? 8 : 0,
                scale: isHovered ? 0.7 : 1,
                x: isHovered ? 40 : 0,
                y: isHovered ? -20 : 0,
                opacity: isHovered ? 1 : 0,
              }}
              transition={imageSpring}
              style={{ transformOrigin: 'center center', willChange: 'transform' }}
            >
              {/* Solid dark ring base */}
              <div className="absolute -inset-[3px] rounded-xl md:rounded-2xl z-0 bg-[#1a1a1a]" />
              {/* Animated gradient border */}
              <div className="absolute -inset-[3px] rounded-xl md:rounded-2xl animate-border-rotate z-0" style={borderGradientStyle} />
              {/* Static border glow underneath */}
              <div className="absolute -inset-[3px] rounded-xl md:rounded-2xl z-0" style={staticBorderStyle} />
              {/* Inner image with gap */}
              <div className="absolute inset-0 m-[3px] rounded-[9px] md:rounded-[13px] overflow-hidden bg-[#171616] z-[1]">
                <Image
                  src={project.hoverImage}
                  alt={`${project.title} - Rameshwar Bhagwat Project Interface`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain md:object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </figure>

        {/* Content Container - simplified with CSS transitions */}
        <div
          className={`flex flex-col justify-center space-y-3 sm:space-y-4 md:space-y-5 ${isReversed ? 'md:[direction:ltr]' : ''}`}
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateX(0)' : `translateX(${contentSlideX}px)`,
            transition: 'opacity 0.7s ease-out 0.2s, transform 0.7s ease-out 0.2s',
          }}
        >
          {/* Title */}
          <h3
            className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight"
            itemProp="name"
          >
            {project.title}
          </h3>

          {/* Tagline */}
          <p className="text-sm sm:text-base md:text-base lg:text-lg text-muted" itemProp="headline">
            {project.tagline}
          </p>

          {/* Divider */}
          <div
            className="w-10 md:w-12 h-[2px] bg-primary-gradient"
            aria-hidden="true"
            style={{
              transform: isInView ? 'scaleX(1)' : 'scaleX(0)',
              transformOrigin: 'left',
              transition: 'transform 0.5s ease-out 0.3s',
            }}
          />

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-sm lg:text-base text-white/80 leading-relaxed" itemProp="description">
            {project.description}
          </p>

          {/* Features */}
          <ul className="space-y-1.5 sm:space-y-2 md:space-y-2.5" itemProp="about">
            {project.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 md:gap-3"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? 'translateX(0)' : 'translateX(15px)',
                  transition: `opacity 0.4s ease-out ${0.35 + idx * 0.06}s, transform 0.4s ease-out ${0.35 + idx * 0.06}s`,
                }}
              >
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rotate-45 bg-primary-gradient mt-1.5 md:mt-2 flex-shrink-0" aria-hidden="true" />
                <p className="text-[11px] sm:text-xs md:text-sm text-white/70 leading-relaxed">
                  {feature}
                </p>
              </li>
            ))}
          </ul>

          {/* Tech Stack */}
          <div
            className="flex flex-wrap gap-1.5 md:gap-2"
            role="list"
            aria-label="Technologies used"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.5s ease-out 0.5s, transform 0.5s ease-out 0.5s',
            }}
          >
            {project.techStack.map((tech, idx) => {
              const config = techConfig[tech];
              const Icon = config?.icon || SiReact;
              const iconColor = config?.color || '#FFFFFF';
              
              return (
                <span
                  key={idx}
                  className="px-2 md:px-2.5 py-0.5 md:py-1 text-[10px] md:text-xs font-medium rounded-full bg-white/5 border border-white/10 inline-flex items-center gap-1 md:gap-1.5 hover:bg-white/10 transition-colors duration-200"
                  role="listitem"
                  itemProp="keywords"
                >
                  <Icon size={10} className="flex-shrink-0 md:w-3 md:h-3" style={{ color: iconColor }} aria-hidden="true" />
                  <span className="text-white/70">{tech}</span>
                </span>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <nav
            className="flex items-center gap-2.5 md:gap-3 pt-1 md:pt-2 lg:pt-3"
            aria-label="Project links"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.5s ease-out 0.6s, transform 0.5s ease-out 0.6s',
            }}
          >
            {project.liveUrl && (
              <Button
                variant="primary"
                size="sm"
                onClick={handleLiveClick}
                rightIcon={<ExternalLink size={13} className="sm:w-3.5 sm:h-3.5" />}
                aria-label={`View ${project.title} live demo`}
                className="text-[11px] sm:text-xs px-3 sm:px-3.5 py-1.5 whitespace-nowrap"
              >
                View Live
              </Button>
            )}
            {project.githubUrl && (
              <Button
                variant="secondary"
                size="sm"
                onClick={handleGithubClick}
                rightIcon={<Github size={13} className="sm:w-3.5 sm:h-3.5" />}
                aria-label={`View ${project.title} source code on GitHub`}
                className="text-[11px] sm:text-xs px-3 sm:px-3.5 py-1.5 whitespace-nowrap"
              >
                Source Code
              </Button>
            )}
          </nav>
        </div>
      </div>
    </article>
  );
});

export default ProjectCard;
