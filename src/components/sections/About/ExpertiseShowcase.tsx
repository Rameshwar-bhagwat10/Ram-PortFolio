'use client';

import { useState } from 'react';
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
  Star
} from 'lucide-react';

// Tech Stack Icons (using Lucide + custom SVGs)
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
interface ExpertiseItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  techStack: {
    name: string;
    color: string;
  }[];
  highlights: string[];
  stats: {
    projects: string;
    experience: string;
  };
}

const expertiseData: ExpertiseItem[] = [
  {
    id: 'fullstack',
    icon: <Layers className="w-6 h-6" />,
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
    icon: <Cpu className="w-6 h-6" />,
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
    icon: <Sparkles className="w-6 h-6" />,
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
    icon: <Cloud className="w-6 h-6" />,
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
    icon: <Code2 className="w-6 h-6" />,
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

export default function ExpertiseShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = expertiseData[activeIndex];

  return (
    <div className="relative bg-[#0F0E0E] py-16 sm:py-20 md:py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#FF8C00]/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#FF1493]/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-primary-gradient text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2 sm:mb-3"
          >
            What I Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-[-0.02em]"
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
          className="grid grid-cols-1 lg:grid-cols-[300px_1fr] xl:grid-cols-[320px_1fr] gap-6 lg:gap-8"
        >
          {/* Left Side - Tab Navigation */}
          <div
            className="relative p-4 lg:p-5 lg:sticky lg:top-24 flex flex-col"
          >

            {/* Mobile: Horizontal scroll / Desktop: Vertical */}
            <div className="flex lg:flex-col gap-2 lg:gap-4 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide">
              {expertiseData.map((item, index) => (
                <TabItem
                  key={item.id}
                  item={item}
                  isActive={activeIndex === index}
                  onClick={() => setActiveIndex(index)}
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
            className="relative rounded-[24px] backdrop-blur-xl border border-white/[0.06] overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.025) 0%, rgba(255, 255, 255, 0.01) 100%)',
            }}
          >
            {/* Top highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Subtle gradient orb */}
            <div
              className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 80% 20%, rgba(255, 140, 0, 0.04) 0%, transparent 50%)',
              }}
            />

            {/* Content */}
            <div className="relative z-10 p-5 sm:p-6 lg:p-8">
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

// Tab Item Component with iOS-style transitions
function TabItem({
  item,
  isActive,
  onClick,
  index,
}: {
  item: ExpertiseItem;
  isActive: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ scale: 1.02, x: isActive ? 0 : 3 }}
      whileTap={{ scale: 0.98 }}
      className="relative flex items-center gap-3 lg:gap-4 p-3 lg:p-4 rounded-[14px] min-w-[180px] lg:min-w-0 w-full text-left overflow-hidden"
    >
      {/* Animated Background - iOS morphing effect */}
      <motion.div
        className="absolute inset-0 rounded-[14px]"
        initial={false}
        animate={{
          background: isActive
            ? 'linear-gradient(135deg, rgba(10, 132, 255, 0.15) 0%, rgba(10, 132, 255, 0.05) 100%)'
            : 'rgba(255, 255, 255, 0)',
          borderColor: isActive ? 'rgba(10, 132, 255, 0.3)' : 'rgba(255, 255, 255, 0.06)',
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 35,
          mass: 0.8,
        }}
        style={{
          border: '1px solid',
        }}
      />

      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 rounded-[14px] opacity-0 hover:opacity-100"
        initial={false}
        whileHover={{
          background: isActive
            ? 'transparent'
            : 'rgba(255, 255, 255, 0.03)',
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Active indicator line with smooth slide */}
      <motion.div
        className="absolute left-0 top-1/2 w-[3px] rounded-r-full"
        initial={false}
        animate={{
          height: isActive ? 32 : 0,
          y: '-50%',
          opacity: isActive ? 1 : 0,
          scaleY: isActive ? 1 : 0.5,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
          mass: 0.6,
        }}
        style={{
          background: 'linear-gradient(180deg, #FF8C00 0%, #FF1493 100%)',
          boxShadow: isActive ? '0 0 12px rgba(255, 140, 0, 0.4)' : 'none',
        }}
      />

      {/* Icon Box with smooth transitions */}
      <motion.div
        className="relative z-10 flex-shrink-0 w-10 h-10 lg:w-11 lg:h-11 rounded-[12px] flex items-center justify-center"
        initial={false}
        animate={{
          background: isActive
            ? 'linear-gradient(135deg, rgba(255, 140, 0, 0.18) 0%, rgba(255, 20, 147, 0.12) 100%)'
            : 'rgba(255, 255, 255, 0.04)',
          borderColor: isActive
            ? 'rgba(255, 140, 0, 0.3)'
            : 'rgba(255, 255, 255, 0.08)',
          scale: isActive ? 1.05 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25,
          mass: 0.8,
        }}
        style={{
          border: '1px solid',
        }}
      >
        <motion.div
          initial={false}
          animate={{
            color: isActive ? '#FF8C00' : 'rgba(255, 255, 255, 0.6)',
            scale: isActive ? 1.1 : 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 20,
          }}
        >
          {item.icon}
        </motion.div>
      </motion.div>

      {/* Text with smooth color transitions */}
      <div className="relative z-10 flex-1 min-w-0">
        <motion.h3
          className="text-[13px] lg:text-[14px] font-semibold truncate"
          initial={false}
          animate={{
            color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.8)',
          }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          {item.title}
        </motion.h3>
        <motion.p
          className="text-[10px] lg:text-[11px] truncate"
          initial={false}
          animate={{
            color: isActive ? 'rgba(255, 255, 255, 0.55)' : 'rgba(255, 255, 255, 0.35)',
          }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          {item.subtitle}
        </motion.p>
      </div>

      {/* Chevron with smooth animation */}
      <motion.div
        className="relative z-10 flex-shrink-0 hidden lg:block"
        initial={false}
        animate={{
          x: isActive ? 4 : 0,
          opacity: isActive ? 1 : 0.3,
          scale: isActive ? 1.1 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25,
        }}
      >
        <ChevronRight
          className="w-4 h-4"
          style={{ color: isActive ? '#0A84FF' : 'rgba(255, 255, 255, 0.2)' }}
        />
      </motion.div>
    </motion.button>
  );
}

// Preview Content Component with enhanced iOS animations
function PreviewContent({ item }: { item: ExpertiseItem }) {
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 30,
        mass: 0.8,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      filter: 'blur(4px)',
      transition: { duration: 0.2 },
    },
  };

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.8, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        type: 'spring' as const,
        stiffness: 500,
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.15 },
    },
  };

  const slideVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 25,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-5">
        {/* Large Icon with bounce effect */}
        <motion.div
          variants={scaleVariants}
          whileHover={{ scale: 1.08, rotate: 3 }}
          whileTap={{ scale: 0.95 }}
          className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-[14px] flex items-center justify-center text-[#FF8C00] cursor-pointer"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 140, 0, 0.15) 0%, rgba(255, 20, 147, 0.1) 100%)',
            border: '1px solid rgba(255, 140, 0, 0.25)',
            boxShadow: '0 4px 20px rgba(255, 140, 0, 0.15)',
          }}
        >
          <motion.div
            className="w-6 h-6 sm:w-7 sm:h-7"
            initial={{ rotate: -10 }}
            animate={{ rotate: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.2 }}
          >
            {item.icon}
          </motion.div>
        </motion.div>

        <div className="flex-1">
          <motion.h3
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-0.5"
            style={{ fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif' }}
          >
            {item.title}
          </motion.h3>
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm font-semibold"
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

        {/* Stats Badges with pop-in effect */}
        <motion.div
          variants={scaleVariants}
          className="hidden sm:flex items-center gap-2"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-[8px] bg-white/[0.04] border border-white/[0.08] cursor-default"
            style={{ boxShadow: '0 2px 8px rgba(10, 132, 255, 0.1)' }}
          >
            <Briefcase className="w-3.5 h-3.5 text-[#0A84FF]" />
            <span className="text-[11px] font-semibold text-white">{item.stats.projects}</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-[8px] bg-white/[0.04] border border-white/[0.08] cursor-default"
            style={{ boxShadow: '0 2px 8px rgba(255, 214, 10, 0.1)' }}
          >
            <Star className="w-3.5 h-3.5 text-[#FFD60A]" />
            <span className="text-[11px] font-semibold text-white">{item.stats.experience}</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Description with smooth fade */}
      <motion.p
        variants={itemVariants}
        className="text-[13px] sm:text-[14px] leading-[1.7] text-white/60 mb-6 max-w-2xl"
      >
        {item.description}
      </motion.p>

      {/* Animated Divider */}
      <motion.div
        variants={{
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
        }}
        className="h-px bg-gradient-to-r from-white/[0.06] via-white/[0.1] to-white/[0.06] mb-6 origin-left"
      />

      {/* Tech Stack */}
      <motion.div variants={itemVariants} className="mb-6">
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="text-[10px] uppercase tracking-[0.1em] text-white/40 font-medium mb-3"
        >
          Tech Stack
        </motion.p>
        <div className="flex flex-wrap gap-2.5">
          {item.techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 15, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 0.35 + index * 0.05,
                type: 'spring',
                stiffness: 500,
                damping: 25,
              }}
              whileHover={{
                y: -3,
                scale: 1.05,
                boxShadow: `0 6px 20px ${tech.color}20`,
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-[8px] border border-white/[0.08] hover:border-white/[0.15] transition-colors duration-200 cursor-default"
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
              }}
            >
              <motion.div
                className="text-white/70"
                style={{ color: tech.color }}
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
              >
                {TechIcons[tech.name] || <Code2 className="w-4 h-4" />}
              </motion.div>
              <span className="text-[12px] font-medium text-white/80">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Key Highlights */}
      <motion.div variants={itemVariants} className="mb-6">
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="text-[10px] uppercase tracking-[0.1em] text-white/40 font-medium mb-3"
        >
          Key Highlights
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {item.highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -15, filter: 'blur(4px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              transition={{
                delay: 0.55 + index * 0.08,
                type: 'spring',
                stiffness: 400,
                damping: 25,
              }}
              whileHover={{ x: 4 }}
              className="flex items-start gap-2.5 group cursor-default"
            >
              <motion.div
                className="flex-shrink-0 w-5 h-5 rounded-[5px] flex items-center justify-center mt-0.5"
                style={{
                  background: 'rgba(48, 209, 88, 0.1)',
                  border: '1px solid rgba(48, 209, 88, 0.2)',
                }}
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <Check className="w-3 h-3 text-[#30D158]" />
              </motion.div>
              <span className="text-[12px] text-white/60 leading-relaxed group-hover:text-white/80 transition-colors duration-200">
                {highlight}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer CTA with enhanced animations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, type: 'spring', stiffness: 300, damping: 25 }}
        className="pt-5 border-t border-white/[0.06]"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ x: 3 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <motion.div
              className="w-10 h-10 rounded-[10px] flex items-center justify-center"
              style={{
                background: 'rgba(10, 132, 255, 0.1)',
                border: '1px solid rgba(10, 132, 255, 0.2)',
              }}
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageSquare className="w-5 h-5 text-[#0A84FF]" />
            </motion.div>
            <div>
              <p className="text-[13px] font-medium text-white">Interested in this service?</p>
              <p className="text-[11px] text-white/40">Let&apos;s discuss your project requirements</p>
            </div>
          </motion.div>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03, x: 4 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-2 px-4 py-2.5 rounded-[10px] border border-white/[0.08] hover:border-[#FF8C00]/40 transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 140, 0, 0.12) 0%, rgba(255, 20, 147, 0.06) 100%)',
              boxShadow: '0 2px 12px rgba(255, 140, 0, 0.1)',
            }}
          >
            <span className="text-[12px] font-semibold text-white/80 group-hover:text-white transition-colors duration-200">
              Get in Touch
            </span>
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            >
              <ArrowRight className="w-3.5 h-3.5 text-[#FF8C00]" />
            </motion.div>
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}
