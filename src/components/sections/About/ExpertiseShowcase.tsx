'use client';

import { useState, memo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  Cpu,
  Sparkles,
  Cloud,
  Code2,
  ChevronRight,
  Check,
  Clock,
  Target,
  MessageSquare,
  ArrowRight,
  Briefcase,
  Star,
  LucideIcon
} from 'lucide-react';

// Tech Stack Icons (using Lucide + custom SVGs) - moved outside component
const TechIcons: Record<string, React.ReactNode> = {
  React: (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
      <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/>
      <path fill="none" stroke="currentColor" strokeWidth="1" d="M12 21c-4.97 0-9-2.686-9-6s4.03-6 9-6 9 2.686 9 6-4.03 6-9 6Z"/>
      <path fill="none" stroke="currentColor" strokeWidth="1" d="M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3s-4.5 4.03-4.5 9 2.015 9 4.5 9Z" transform="rotate(60 12 12)"/>
      <path fill="none" stroke="currentColor" strokeWidth="1" d="M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3s-4.5 4.03-4.5 9 2.015 9 4.5 9Z" transform="rotate(-60 12 12)"/>
    </svg>
  ),
  'Next.js': (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm-1.5 14.5V10l6 8h-2l-4-5.333V16.5h-1.5v-6l1.5 2v4Z"/>
    </svg>
  ),
  'Node.js': (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5Zm0 2.18L18.36 7.5 12 10.82 5.64 7.5 12 4.18ZM5 8.82l6 3.32v6.36l-6-3.32V8.82Zm8 9.68V12.14l6-3.32v6.36l-6 3.32Z"/>
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
      <path d="M3 3h18v18H3V3Zm10.71 13.44c.33.26.78.44 1.33.54v-1.44c-.26-.09-.42-.22-.5-.4-.08-.18-.08-.44.02-.78.1-.35.3-.65.58-.9.28-.25.6-.38.96-.38.39 0 .72.12.99.38.27.25.47.55.58.9.1.34.1.6.02.78-.08.18-.24.31-.5.4v1.44c.55-.1 1-.28 1.33-.54.33-.26.55-.58.67-.96.12-.38.12-.78 0-1.2-.12-.42-.36-.8-.72-1.14-.36-.34-.82-.6-1.38-.8-.56-.2-1.18-.3-1.86-.3-.68 0-1.3.1-1.86.3-.56.2-1.02.46-1.38.8-.36.34-.6.72-.72 1.14-.12.42-.12.82 0 1.2.12.38.34.7.67.96ZM8 11h2v6H8v-6Zm4-3H6v2h6V8Z"/>
    </svg>
  ),
  JavaScript: (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
      <path d="M3 3h18v18H3V3Zm4.5 15c.83 0 1.5-.34 2-.76V15.5c-.37.36-.88.5-1.5.5-.83 0-1.5-.67-1.5-1.5v-1c0-.83.67-1.5 1.5-1.5.62 0 1.13.14 1.5.5v-1.74c-.5-.42-1.17-.76-2-.76-1.66 0-3 1.34-3 3v1c0 1.66 1.34 3 3 3Zm7.5 0c.83 0 1.5-.34 2-.76V15.5c-.37.36-.88.5-1.5.5-.83 0-1.5-.67-1.5-1.5v-4h3V9h-3V7h-2v7.5c0 1.66 1.34 3 3 3Z"/>
    </svg>
  ),
  MongoDB: (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
      <path d="M12 2C9.24 2 7 4.24 7 7c0 2.85 2.92 7.21 5 9.88 2.08-2.67 5-7.03 5-9.88 0-2.76-2.24-5-5-5Zm0 7.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/>
      <path d="M12 22c-.55 0-1-.45-1-1v-3h2v3c0 .55-.45 1-1 1Z"/>
    </svg>
  ),
  PostgreSQL: (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm-1-13h2v6h-2V7Zm0 8h2v2h-2v-2Z"/>
    </svg>
  ),
  OpenAI: (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
      <path d="M22.2 11.2c.4-1.3.2-2.8-.6-4-1.2-1.9-3.5-2.7-5.6-2.1-.8-.9-1.9-1.6-3.2-1.8-2.2-.4-4.4.6-5.5 2.5-1.2-.1-2.4.3-3.4 1.2-1.5 1.4-1.9 3.6-1 5.4-.4 1.3-.2 2.8.6 4 1.2 1.9 3.5 2.7 5.6 2.1.8.9 1.9 1.6 3.2 1.8 2.2.4 4.4-.6 5.5-2.5 1.2.1 2.4-.3 3.4-1.2 1.5-1.4 1.9-3.6 1-5.4Z"/>
    </svg>
  ),
  TensorFlow: (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
      <path d="M12 2 4 6v12l8 4 8-4V6l-8-4Zm6 14.5-6 3-6-3v-9l6-3 6 3v9Z"/>
    </svg>
  ),
  LangChain: (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm-1-13h2v6h-2V7Zm0 8h2v2h-2v-2Z"/>
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
      <path d="M12 2c-1.66 0-3 1.34-3 3v2H6c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h1v3c0 1.66 1.34 3 3 3h4c1.66 0 3-1.34 3-3v-2h3c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2h-1V5c0-1.66-1.34-3-3-3h-4Zm-1 3c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1Zm2 12c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Z"/>
    </svg>
  ),
  'Framer Motion': (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
      <path d="M4 4h16v5.33H9.33L4 4Zm0 5.33h5.33L14.67 14.67H4V9.33Zm0 5.34h10.67l5.33 5.33H4v-5.33Z"/>
    </svg>
  ),
  'Three.js': (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
      <path d="M12 2L2 19.5h20L12 2Zm0 4l6.5 11.5h-13L12 6Z"/>
    </svg>
  ),
  GSAP: (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 3c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.14-7-7 3.14-7 7-7Z"/>
    </svg>
  ),
  WebGL: (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
      <path d="M12 2 2 7l10 5 10-5-10-5ZM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  ),
  Stripe: (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
      <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305Z"/>
    </svg>
  ),
  Auth0: (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5Zm0 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z"/>
    </svg>
  ),
  Redis: (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 14.5L5.5 12 12 7.5l6.5 4.5-6.5 4.5Z"/>
    </svg>
  ),
  REST: (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
      <path d="M4 4h16v4H4V4Zm0 6h16v4H4v-4Zm0 6h16v4H4v-4Z"/>
    </svg>
  ),
  GraphQL: (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
      <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 2.18L18.36 7.5 12 10.82 5.64 7.5 12 4.18ZM5 8.82l6 3.32v6.36l-6-3.32V8.82Zm8 9.68V12.14l6-3.32v6.36l-6 3.32Z"/>
    </svg>
  ),
  Prisma: (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
      <path d="M12 2 2 22h20L12 2Zm0 4 7 14H5l7-14Z"/>
    </svg>
  ),
  Docker: (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
      <path d="M13 3h2v2h-2V3Zm-3 0h2v2h-2V3Zm-3 0h2v2H7V3ZM4 6h2v2H4V6Zm3 0h2v2H7V6Zm3 0h2v2h-2V6Zm3 0h2v2h-2V6Zm3 0h2v2h-2V6ZM4 9h2v2H4V9Zm3 0h2v2H7V9Zm3 0h2v2h-2V9Zm3 0h2v2h-2V9Zm5.5 0c2.49 0 4.5 2.01 4.5 4.5S20.49 18 18 18H3v-4h17v4h-2.5c1.38 0 2.5-1.12 2.5-2.5S18.88 13 17.5 13H3V9h16.5Z"/>
    </svg>
  ),
};

// Expertise Data
interface TechStackItem {
  name: string;
  color: string;
}

interface ExpertiseItem {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  techStack: TechStackItem[];
  highlights: string[];
  stats: {
    projects: string;
    experience: string;
  };
}

const expertiseData: ExpertiseItem[] = [
  {
    id: 'fullstack',
    icon: Layers,
    title: 'Full Stack Development',
    subtitle: 'End-to-End Solutions',
    description: 'Building complete web applications from database architecture to pixel-perfect user interfaces. I specialize in creating scalable, maintainable codebases that power modern digital experiences.',
    techStack: [
      { name: 'React', color: '#61DAFB' },
      { name: 'Next.js', color: '#ffffff' },
      { name: 'Node.js', color: '#68A063' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'MongoDB', color: '#47A248' },
      { name: 'PostgreSQL', color: '#336791' },
    ],
    highlights: [
      'Scalable architecture design with microservices',
      'Server-side rendering & static generation',
      'Real-time features with WebSockets',
      'Database optimization & query performance',
    ],
    stats: { projects: '6+', experience: '3 Years' },
  },
  {
    id: 'ai',
    icon: Cpu,
    title: 'AI Integration',
    subtitle: 'Intelligent Solutions',
    description: 'Integrating cutting-edge AI and machine learning capabilities into production applications. From conversational AI to custom ML pipelines, I bring intelligence to your products.',
    techStack: [
      { name: 'OpenAI', color: '#00A67E' },
      { name: 'TensorFlow', color: '#FF6F00' },
      { name: 'LangChain', color: '#1C3C3C' },
      { name: 'Python', color: '#3776AB' },
    ],
    highlights: [
      'Custom AI chatbots & assistants',
      'RAG implementations with vector databases',
      'ML model deployment & optimization',
      'Prompt engineering & fine-tuning',
    ],
    stats: { projects: '3+', experience: '1 Year' },
  },
  {
    id: 'creative',
    icon: Sparkles,
    title: 'Creative Development',
    subtitle: 'Visual Excellence',
    description: 'Crafting immersive, animated websites that captivate users. I blend creative design with technical precision to deliver memorable digital experiences.',
    techStack: [
      { name: 'Framer Motion', color: '#BB4B96' },
      { name: 'Three.js', color: '#000000' },
      { name: 'GSAP', color: '#88CE02' },
      { name: 'WebGL', color: '#990000' },
    ],
    highlights: [
      '3D graphics & WebGL experiences',
      'Micro-interactions & animations',
      'Scroll-based storytelling',
      'Performance-optimized visuals',
    ],
    stats: { projects: '4+', experience: '2 Years' },
  },
  {
    id: 'saas',
    icon: Cloud,
    title: 'SaaS Platforms',
    subtitle: 'Scalable Products',
    description: 'Building multi-tenant SaaS products with robust authentication, payment processing, and analytics. Designed for scale from day one.',
    techStack: [
      { name: 'Stripe', color: '#635BFF' },
      { name: 'Auth0', color: '#EB5424' },
      { name: 'PostgreSQL', color: '#336791' },
      { name: 'Redis', color: '#DC382D' },
    ],
    highlights: [
      'Multi-tenant architecture design',
      'Subscription & billing integration',
      'Role-based access control',
      'Analytics dashboards & reporting',
    ],
    stats: { projects: '2+', experience: '2 Years' },
  },
  {
    id: 'api',
    icon: Code2,
    title: 'API Development',
    subtitle: 'Backend Architecture',
    description: 'Designing RESTful and GraphQL APIs with clean architecture principles. Building robust backends that power web and mobile applications.',
    techStack: [
      { name: 'REST', color: '#009688' },
      { name: 'GraphQL', color: '#E10098' },
      { name: 'Prisma', color: '#2D3748' },
      { name: 'Docker', color: '#2496ED' },
    ],
    highlights: [
      'RESTful API design & documentation',
      'GraphQL schema & resolvers',
      'API versioning & backwards compatibility',
      'Containerization & deployment',
    ],
    stats: { projects: '5+', experience: '3 Years' },
  },
];

// Animation variants - defined outside component for stability
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 400,
      damping: 30,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.15 },
  },
};

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 500,
      damping: 25,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.12 },
  },
};

// Spring configs
const springConfig = {
  type: 'spring' as const,
  stiffness: 400,
  damping: 30,
};

const fastSpring = {
  type: 'spring' as const,
  stiffness: 500,
  damping: 35,
};

// Additional variants for PreviewContent
const dividerVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 300,
      damping: 30,
    },
  },
};

const techStackItemVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.9 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.35 + index * 0.04,
      type: 'spring' as const,
      stiffness: 500,
      damping: 25,
    },
  }),
};

const highlightItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.45 + index * 0.06,
      type: 'spring' as const,
      stiffness: 400,
      damping: 25,
    },
  }),
};

const footerVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6,
      type: 'spring' as const,
      stiffness: 300,
      damping: 25,
    },
  },
};

export default function ExpertiseShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = expertiseData[activeIndex];

  const handleTabClick = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <div className="relative py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background is transparent to merge with portfolio default bg */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 xs:px-5 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-primary-gradient text-[10px] xs:text-xs sm:text-sm font-semibold tracking-wider uppercase mb-1.5 xs:mb-2 sm:mb-3"
          >
            What I Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-[-0.02em]"
            style={{ fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif' }}
          >
            My <span className="text-rainbow-gradient">Expertise</span>
          </motion.h2>
        </div>

        {/* Split Screen Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr] gap-4 xs:gap-5 sm:gap-6 lg:gap-8"
        >
          {/* Left Side - Tab Navigation */}
          <div className="relative lg:p-5 lg:sticky lg:top-24 flex flex-col">
            {/* Mobile: Horizontal scroll / Desktop: Vertical */}
            <div className="flex lg:flex-col gap-1.5 xs:gap-2 lg:gap-4 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide -mx-4 xs:-mx-5 sm:-mx-6 px-4 xs:px-5 sm:px-6 lg:mx-0 lg:px-0">
              {expertiseData.map((item, index) => (
                <TabItem
                  key={item.id}
                  item={item}
                  isActive={activeIndex === index}
                  onClick={handleTabClick}
                  index={index}
                />
              ))}
            </div>

            {/* Footer - Compact Stats Row */}
            <div className="hidden lg:flex items-center gap-3 mt-4 pt-4 border-t border-white/[0.06]">
              <div className="flex items-center gap-2 px-3 py-2 rounded-[10px] bg-white/[0.02] border border-white/[0.06] flex-1">
                <Clock className="w-3.5 h-3.5 text-[#0A84FF]" />
                <span className="text-[12px] font-semibold text-white">3+ Years</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-[10px] bg-white/[0.02] border border-white/[0.06] flex-1">
                <Target className="w-3.5 h-3.5 text-[#30D158]" />
                <span className="text-[12px] font-semibold text-white">6+ Projects</span>
              </div>
            </div>
          </div>

          {/* Right Side - Preview Area */}
          <div
            className="relative rounded-xl xs:rounded-2xl lg:rounded-[24px] backdrop-blur-xl border border-white/[0.06] overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.025) 0%, rgba(255, 255, 255, 0.01) 100%)',
              contain: 'layout style',
            }}
          >
            {/* Top highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Subtle gradient orb */}
            <div
              className="absolute top-0 right-0 w-[200px] xs:w-[300px] sm:w-[400px] h-[200px] xs:h-[300px] sm:h-[400px] pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 80% 20%, rgba(255, 140, 0, 0.04) 0%, transparent 50%)',
              }}
              aria-hidden="true"
            />

            {/* Content */}
            <div className="relative z-10 p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8">
              <AnimatePresence mode="wait">
                <PreviewContent key={activeItem.id} item={activeItem} />
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Tab Item Component - memoized with optimized animations
const TabItem = memo(function TabItem({
  item,
  isActive,
  onClick,
  index,
}: {
  item: ExpertiseItem;
  isActive: boolean;
  onClick: (index: number) => void;
  index: number;
}) {
  const handleClick = useCallback(() => {
    onClick(index);
  }, [onClick, index]);

  const Icon = item.icon;

  return (
    <motion.button
      onClick={handleClick}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative flex items-center gap-2 xs:gap-2.5 lg:gap-4 p-2 xs:p-2.5 sm:p-3 lg:p-4 rounded-lg xs:rounded-xl lg:rounded-[14px] min-w-[140px] xs:min-w-[160px] sm:min-w-[180px] lg:min-w-0 w-full text-left overflow-hidden flex-shrink-0 lg:flex-shrink"
      style={{ contain: 'layout style' }}
    >
      {/* Animated Background - simplified */}
      <motion.div
        className="absolute inset-0 rounded-lg xs:rounded-xl lg:rounded-[14px]"
        initial={false}
        animate={{
          background: isActive
            ? 'linear-gradient(135deg, rgba(10, 132, 255, 0.15) 0%, rgba(10, 132, 255, 0.05) 100%)'
            : 'rgba(255, 255, 255, 0)',
          borderColor: isActive ? 'rgba(10, 132, 255, 0.3)' : 'rgba(255, 255, 255, 0.06)',
        }}
        transition={fastSpring}
        style={{ border: '1px solid' }}
      />

      {/* Active indicator line */}
      <motion.div
        className="absolute left-0 top-1/2 w-[2px] xs:w-[3px] rounded-r-full"
        initial={false}
        animate={{
          height: isActive ? 24 : 0,
          y: '-50%',
          opacity: isActive ? 1 : 0,
        }}
        transition={fastSpring}
        style={{
          background: 'linear-gradient(180deg, #FF8C00 0%, #FF1493 100%)',
          boxShadow: isActive ? '0 0 12px rgba(255, 140, 0, 0.4)' : 'none',
        }}
      />

      {/* Icon Box */}
      <motion.div
        className="relative z-10 flex-shrink-0 w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-lg xs:rounded-[10px] lg:rounded-[12px] flex items-center justify-center"
        initial={false}
        animate={{
          background: isActive
            ? 'linear-gradient(135deg, rgba(255, 140, 0, 0.18) 0%, rgba(255, 20, 147, 0.12) 100%)'
            : 'rgba(255, 255, 255, 0.04)',
          borderColor: isActive ? 'rgba(255, 140, 0, 0.3)' : 'rgba(255, 255, 255, 0.08)',
          scale: isActive ? 1.05 : 1,
        }}
        transition={springConfig}
        style={{ border: '1px solid' }}
      >
        <Icon 
          className="w-4 h-4 xs:w-[18px] xs:h-[18px] sm:w-5 sm:h-5 lg:w-6 lg:h-6 transition-colors duration-200"
          style={{ color: isActive ? '#FF8C00' : 'rgba(255, 255, 255, 0.6)' }}
        />
      </motion.div>

      {/* Text */}
      <div className="relative z-10 flex-1 min-w-0">
        <h3
          className="text-[11px] xs:text-[12px] sm:text-[13px] lg:text-[14px] font-semibold truncate transition-colors duration-200"
          style={{ color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.8)' }}
        >
          {item.title}
        </h3>
        <p
          className="text-[9px] xs:text-[10px] lg:text-[11px] truncate transition-colors duration-200"
          style={{ color: isActive ? 'rgba(255, 255, 255, 0.55)' : 'rgba(255, 255, 255, 0.35)' }}
        >
          {item.subtitle}
        </p>
      </div>

      {/* Chevron */}
      <motion.div
        className="relative z-10 flex-shrink-0 hidden lg:block"
        initial={false}
        animate={{
          x: isActive ? 4 : 0,
          opacity: isActive ? 1 : 0.3,
        }}
        transition={springConfig}
      >
        <ChevronRight
          className="w-4 h-4"
          style={{ color: isActive ? '#0A84FF' : 'rgba(255, 255, 255, 0.2)' }}
        />
      </motion.div>
    </motion.button>
  );
});

// Preview Content Component - memoized with optimized animations
const PreviewContent = memo(function PreviewContent({ item }: { item: ExpertiseItem }) {
  const Icon = item.icon;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{ contain: 'layout style' }}
    >
      {/* Header */}
      <div className="flex items-start gap-2.5 xs:gap-3 sm:gap-4 mb-3 xs:mb-4 sm:mb-5">
        {/* Large Icon - simplified animation */}
        <motion.div
          variants={scaleVariants}
          className="flex-shrink-0 w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg xs:rounded-xl lg:rounded-[14px] flex items-center justify-center text-[#FF8C00]"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 140, 0, 0.15) 0%, rgba(255, 20, 147, 0.1) 100%)',
            border: '1px solid rgba(255, 140, 0, 0.25)',
            boxShadow: '0 4px 20px rgba(255, 140, 0, 0.15)',
          }}
        >
          <Icon className="w-5 h-5 xs:w-[22px] xs:h-[22px] sm:w-6 sm:h-6 md:w-7 md:h-7" />
        </motion.div>

        <div className="flex-1 min-w-0">
          <motion.h3
            variants={itemVariants}
            className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-white mb-0.5 truncate"
            style={{ fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif' }}
          >
            {item.title}
          </motion.h3>
          <motion.p
            variants={itemVariants}
            className="text-[10px] xs:text-xs sm:text-sm font-semibold"
            style={{
              background: 'linear-gradient(90deg, #FF8C00, #FF1493)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {item.subtitle}
          </motion.p>
        </div>

        {/* Stats Badges - hidden on mobile, shown on sm+ */}
        <motion.div
          variants={scaleVariants}
          className="hidden sm:flex items-center gap-1.5 sm:gap-2"
        >
          <div
            className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-md sm:rounded-[8px] bg-white/[0.04] border border-white/[0.08] cursor-default hover:scale-105 hover:-translate-y-0.5 transition-transform duration-200"
            style={{ boxShadow: '0 2px 8px rgba(10, 132, 255, 0.1)' }}
          >
            <Briefcase className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#0A84FF]" />
            <span className="text-[10px] sm:text-[11px] font-semibold text-white">{item.stats.projects}</span>
          </div>
          <div
            className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-md sm:rounded-[8px] bg-white/[0.04] border border-white/[0.08] cursor-default hover:scale-105 hover:-translate-y-0.5 transition-transform duration-200"
            style={{ boxShadow: '0 2px 8px rgba(255, 214, 10, 0.1)' }}
          >
            <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FFD60A]" />
            <span className="text-[10px] sm:text-[11px] font-semibold text-white">{item.stats.experience}</span>
          </div>
        </motion.div>
      </div>

      {/* Mobile Stats - visible only on mobile */}
      <motion.div
        variants={itemVariants}
        className="flex sm:hidden items-center gap-2 mb-3"
      >
        <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-white/[0.04] border border-white/[0.08]">
          <Briefcase className="w-3 h-3 text-[#0A84FF]" />
          <span className="text-[10px] font-semibold text-white">{item.stats.projects}</span>
        </div>
        <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-white/[0.04] border border-white/[0.08]">
          <Star className="w-3 h-3 text-[#FFD60A]" />
          <span className="text-[10px] font-semibold text-white">{item.stats.experience}</span>
        </div>
      </motion.div>

      {/* Description */}
      <motion.p
        variants={itemVariants}
        className="text-[11px] xs:text-[12px] sm:text-[13px] md:text-[14px] leading-[1.6] sm:leading-[1.7] text-white/60 mb-4 xs:mb-5 sm:mb-6 max-w-2xl"
      >
        {item.description}
      </motion.p>

      {/* Animated Divider */}
      <motion.div
        variants={dividerVariants}
        className="h-px bg-gradient-to-r from-white/[0.06] via-white/[0.1] to-white/[0.06] mb-4 xs:mb-5 sm:mb-6 origin-left"
      />

      {/* Tech Stack */}
      <motion.div variants={itemVariants} className="mb-4 xs:mb-5 sm:mb-6">
        <p className="text-[9px] xs:text-[10px] uppercase tracking-[0.1em] text-white/40 font-medium mb-2 xs:mb-2.5 sm:mb-3">
          Tech Stack
        </p>
        <div className="flex flex-wrap gap-1.5 xs:gap-2 sm:gap-2.5">
          {item.techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={techStackItemVariants}
              custom={index}
              className="flex items-center gap-1 xs:gap-1.5 px-2 xs:px-2.5 sm:px-3 py-1 xs:py-1.5 sm:py-2 rounded-md xs:rounded-[8px] border border-white/[0.08] hover:border-white/[0.15] hover:-translate-y-0.5 hover:scale-105 transition-all duration-200 cursor-default"
              style={{ background: 'rgba(255, 255, 255, 0.04)' }}
            >
              <span style={{ color: tech.color }} className="[&>svg]:w-3 [&>svg]:h-3 xs:[&>svg]:w-[14px] xs:[&>svg]:h-[14px] sm:[&>svg]:w-[18px] sm:[&>svg]:h-[18px]">
                {TechIcons[tech.name] || <Code2 className="w-3 h-3 xs:w-[14px] xs:h-[14px] sm:w-4 sm:h-4" />}
              </span>
              <span className="text-[10px] xs:text-[11px] sm:text-[12px] font-medium text-white/80">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Key Highlights */}
      <motion.div variants={itemVariants} className="mb-4 xs:mb-5 sm:mb-6">
        <p className="text-[9px] xs:text-[10px] uppercase tracking-[0.1em] text-white/40 font-medium mb-2 xs:mb-2.5 sm:mb-3">
          Key Highlights
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 xs:gap-2 sm:gap-2.5">
          {item.highlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={highlightItemVariants}
              custom={index}
              className="flex items-start gap-1.5 xs:gap-2 sm:gap-2.5 group cursor-default hover:translate-x-1 transition-transform duration-200"
            >
              <div
                className="flex-shrink-0 w-4 h-4 xs:w-[18px] xs:h-[18px] sm:w-5 sm:h-5 rounded-[4px] xs:rounded-[5px] flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-200"
                style={{
                  background: 'rgba(48, 209, 88, 0.1)',
                  border: '1px solid rgba(48, 209, 88, 0.2)',
                }}
              >
                <Check className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 text-[#30D158]" />
              </div>
              <span className="text-[10px] xs:text-[11px] sm:text-[12px] text-white/60 leading-relaxed group-hover:text-white/80 transition-colors duration-200">
                {highlight}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer CTA - simplified */}
      <motion.div
        variants={footerVariants}
        className="pt-3 xs:pt-4 sm:pt-5 border-t border-white/[0.06]"
      >
        <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-3 xs:gap-4">
          <div className="flex items-center gap-2 xs:gap-3 hover:translate-x-0.5 transition-transform duration-200">
            <div
              className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-lg xs:rounded-[10px] flex items-center justify-center hover:scale-110 transition-transform duration-200"
              style={{
                background: 'rgba(10, 132, 255, 0.1)',
                border: '1px solid rgba(10, 132, 255, 0.2)',
              }}
            >
              <MessageSquare className="w-4 h-4 xs:w-[18px] xs:h-[18px] sm:w-5 sm:h-5 text-[#0A84FF]" />
            </div>
            <div>
              <p className="text-[11px] xs:text-[12px] sm:text-[13px] font-medium text-white">Interested in this service?</p>
              <p className="text-[9px] xs:text-[10px] sm:text-[11px] text-white/40">Let&apos;s discuss your project</p>
            </div>
          </div>
          <a
            href="#contact"
            className="group flex items-center gap-1.5 xs:gap-2 px-3 xs:px-3.5 sm:px-4 py-2 xs:py-2.5 rounded-lg xs:rounded-[10px] border border-white/[0.08] hover:border-[#FF8C00]/40 hover:scale-[1.03] hover:translate-x-1 active:scale-[0.97] transition-all duration-300 w-full xs:w-auto justify-center xs:justify-start"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 140, 0, 0.12) 0%, rgba(255, 20, 147, 0.06) 100%)',
              boxShadow: '0 2px 12px rgba(255, 140, 0, 0.1)',
            }}
          >
            <span className="text-[11px] xs:text-[12px] font-semibold text-white/80 group-hover:text-white transition-colors duration-200">
              Get in Touch
            </span>
            <ArrowRight className="w-3 h-3 xs:w-3.5 xs:h-3.5 text-[#FF8C00] group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
});
