'use client';

import { useState, memo, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/components/sections/Work/work.data';
import {
  Layers,
  Cpu,
  Sparkles,
  Cloud,
  Code2,
  Check,
  Clock,
  Target,
  MessageSquare,
  ArrowRight,
  Briefcase,
  Star,
  LucideIcon
} from 'lucide-react';

import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiOpenai,
  SiTensorflow,
  SiPython,
  SiScikitlearn,
  SiFramer,
  SiTailwindcss,
  SiCss3,
  SiGreensock,
  SiSupabase,
  SiStripe,
  SiExpress,
  SiDocker,
  SiRedis,
  SiPrisma,
  SiGraphql,
  SiJsonwebtokens,
  SiAuth0,
  SiThreedotjs,
  SiWebgl,
} from 'react-icons/si';

// Tech Stack Icons (using official high-fidelity branded icons from react-icons)
const TechIcons: Record<string, React.ReactNode> = {
  React: <SiReact className="w-4 h-4 xs:w-4.5 xs:h-4.5" />,
  'Next.js': <SiNextdotjs className="w-4 h-4 xs:w-4.5 xs:h-4.5" />,
  'Node.js': <SiNodedotjs className="w-4 h-4 xs:w-4.5 xs:h-4.5" />,
  TypeScript: <SiTypescript className="w-4 h-4 xs:w-4.5 xs:h-4.5" />,
  JavaScript: <SiJavascript className="w-4 h-4 xs:w-4.5 xs:h-4.5" />,
  MongoDB: <SiMongodb className="w-4 h-4 xs:w-4.5 xs:h-4.5" />,
  PostgreSQL: <SiPostgresql className="w-4 h-4 xs:w-4.5 xs:h-4.5" />,
  MySQL: <SiMysql className="w-4 h-4 xs:w-4.5 xs:h-4.5" />,
  'MySQL Triggers': <SiMysql className="w-4 h-4 xs:w-4.5 xs:h-4.5" />,
  OpenAI: <SiOpenai className="w-4 h-4 xs:w-4.5 xs:h-4.5" />,
  TensorFlow: <SiTensorflow className="w-4 h-4 xs:w-4.5 xs:h-4.5" />,
  Python: <SiPython className="w-4 h-4 xs:w-4.5 xs:h-4.5" />,
  'Scikit-learn': <SiScikitlearn className="w-4 h-4 xs:w-4.5 xs:h-4.5" />,
  NLTK: <Cpu className="w-4 h-4 xs:w-4.5 xs:h-4.5" />,
  'Framer Motion': <SiFramer className="w-4 h-4 xs:w-4.5 xs:h-4.5" />,
  'Tailwind CSS': <SiTailwindcss className="w-4 h-4 xs:w-4.5 xs:h-4.5" />,
  'CSS Grid/Flexbox': <SiCss3 className="w-4 h-4 xs:w-4.5 xs:h-4.5" />,
  GSAP: <SiGreensock className="w-4 h-4 xs:w-4.5 xs:h-4.5" />,
  'Three.js': <SiThreedotjs className="w-4 h-4 xs:w-4.5 xs:h-4.5" />,
  WebGL: <SiWebgl className="w-4 h-4 xs:w-4.5 xs:h-4.5" />,
  Supabase: <SiSupabase className="w-4 h-4 xs:w-4.5 xs:h-4.5" />,
  Stripe: <SiStripe className="w-4 h-4 xs:w-4.5 xs:h-4.5" />,
  'Auth / RLS': <SiJsonwebtokens className="w-4 h-4 xs:w-4.5 xs:h-4.5" />,
  Auth0: <SiAuth0 className="w-4 h-4 xs:w-4.5 xs:h-4.5" />,
  Redis: <SiRedis className="w-4 h-4 xs:w-4.5 xs:h-4.5" />,
  REST: <Code2 className="w-4 h-4 xs:w-4.5 xs:h-4.5" />,
  'Express.js': <SiExpress className="w-4 h-4 xs:w-4.5 xs:h-4.5" />,
  GraphQL: <SiGraphql className="w-4 h-4 xs:w-4.5 xs:h-4.5" />,
  Prisma: <SiPrisma className="w-4 h-4 xs:w-4.5 xs:h-4.5" />,
  Docker: <SiDocker className="w-4 h-4 xs:w-4.5 xs:h-4.5" />,
};

// Expertise Data
interface TechStackItem {
  name: string;
  color: string;
  level: number; // Proficiency percentage (e.g. 95)
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

// Expertise configurations type definitions

// Animation variants
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

const headerContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.7, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 350,
      damping: 20,
    }
  }
};

const titleContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    }
  }
};

const wordVariants = {
  hidden: { 
    y: '102%', 
    opacity: 0 
  },
  visible: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
    }
  }
};

const cardContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
};

const leftCardVariants = {
  hidden: { 
    opacity: 0, 
    x: -30, 
    rotateY: -8,
    transformPerspective: 1000
  },
  visible: { 
    opacity: 1, 
    x: 0, 
    rotateY: 0,
    transition: { 
      type: 'spring' as const,
      stiffness: 140,
      damping: 20,
      mass: 1.0
    }
  }
};

const rightCardVariants = {
  hidden: { 
    opacity: 0, 
    x: 30, 
    rotateY: 8,
    transformPerspective: 1000
  },
  visible: { 
    opacity: 1, 
    x: 0, 
    rotateY: 0,
    transition: { 
      type: 'spring' as const,
      stiffness: 140,
      damping: 20,
      mass: 1.0
    }
  }
};

export default function ExpertiseShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  const overallExp = useMemo(() => currentYear - 2025, [currentYear]);

  const expertiseData = useMemo<ExpertiseItem[]>(() => {
    const fullstackCount = projects.filter(p => 
      p.techStack.some(t => ['React', 'Next.js', 'Node.js', 'Express.js', 'Express', 'Supabase (PostgreSQL + Auth)', 'TypeScript', 'MongoDB', 'MySQL'].includes(t))
    ).length;

    const aiCount = projects.filter(p => 
      p.techStack.some(t => ['Python', 'OpenAI API', 'Scikit-learn', 'NLTK', 'Pandas', 'NumPy'].includes(t))
    ).length;

    const creativeCount = projects.filter(p => 
      p.techStack.some(t => ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'GSAP'].includes(t))
    ).length;

    const saasCount = projects.filter(p => 
      p.category?.toLowerCase().includes('saas') || 
      p.category?.toLowerCase().includes('commerce') || 
      p.techStack.some(t => ['Stripe', 'Supabase (PostgreSQL + Auth)', 'Supabase'].includes(t))
    ).length;

    const apiCount = projects.filter(p => 
      p.techStack.some(t => ['Node.js', 'Express.js', 'Express', 'MySQL', 'Supabase (PostgreSQL + Auth)', 'REST API', 'PostgreSQL', 'Prisma'].includes(t))
    ).length;

    return [
      {
        id: 'fullstack',
        icon: Layers,
        title: 'Full Stack Development',
        subtitle: 'End-to-End Web Applications',
        description: 'Building complete, transaction-safe web platforms with robust database schemas, secure session management, and highly optimized search capabilities. I focus on creating high-performance, modular architectures.',
        techStack: [
          { name: 'React', color: '#61DAFB', level: 95 },
          { name: 'Next.js', color: '#ffffff', level: 95 },
          { name: 'Node.js', color: '#339933', level: 90 },
          { name: 'TypeScript', color: '#3178C6', level: 92 },
          { name: 'MongoDB', color: '#47A248', level: 88 },
          { name: 'MySQL', color: '#336791', level: 85 },
        ],
        highlights: [
          'Production Next.js (App Router) & React architectures',
          'Transaction-safe database operations (MySQL, MongoDB, PostgreSQL)',
          'Performance optimization (Lighthouse audits & fast page load)',
          'Responsive MERN & Next.js layouts with clean state flows',
        ],
        stats: { projects: `${fullstackCount} Projects`, experience: `${currentYear - 2025}+ Years` },
      },
      {
        id: 'ai',
        icon: Cpu,
        title: 'AI & ML Integration',
        subtitle: 'Intelligent Systems',
        description: 'Integrating cutting-edge language models and text classifiers into production-ready platforms. I build semantic search tools, conversational agents, and data preprocessing pipelines.',
        techStack: [
          { name: 'OpenAI', color: '#00A67E', level: 88 },
          { name: 'Python', color: '#3776AB', level: 90 },
          { name: 'Scikit-learn', color: '#FF6F00', level: 82 },
          { name: 'NLTK', color: '#3B82F6', level: 85 },
        ],
        highlights: [
          'Intelligent recommendation engines (Devory)',
          'NLP text classification & spam filtering (Spam Detection)',
          'OpenAI Function Calling & structured JSON parsing',
          'Semantic caching & LLM rate-limit management',
        ],
        stats: { projects: `${aiCount} Projects`, experience: `1.5 Years` },
      },
      {
        id: 'creative',
        icon: Sparkles,
        title: 'Creative Development',
        subtitle: 'Premium Interfaces',
        description: 'Developing rich user interfaces with fluid animations, custom layouts, and interactive visuals. I combine clean styling conventions with visual choreography to create highly polished portfolio sites.',
        techStack: [
          { name: 'Framer Motion', color: '#BB4B96', level: 92 },
          { name: 'Tailwind CSS', color: '#06B6D4', level: 95 },
          { name: 'CSS Grid/Flexbox', color: '#FF5733', level: 95 },
          { name: 'GSAP', color: '#88CE02', level: 80 },
        ],
        highlights: [
          'Fluid transition animations & page fades (Journey Timeline)',
          'Dynamic parallax & sticky-scroll layouts',
          'Micro-animations, spring physics & hover feedbacks',
          'Zero-layout-shift responsive components',
        ],
        stats: { projects: `${creativeCount} Projects`, experience: `${currentYear - 2025}+ Years` },
      },
      {
        id: 'saas',
        icon: Cloud,
        title: 'SaaS Platforms',
        subtitle: 'Scale & Multi-Tenancy',
        description: 'Engineering SaaS-style dashboards with secure authentication, isolated tenant workspaces, and real-time activity metrics. Built with a focus on data privacy and analytics.',
        techStack: [
          { name: 'Supabase', color: '#3ECF8E', level: 88 },
          { name: 'Stripe', color: '#635BFF', level: 85 },
          { name: 'MongoDB', color: '#47A248', level: 88 },
          { name: 'Auth / RLS', color: '#F00000', level: 90 },
        ],
        highlights: [
          'Multi-user progress dashboards & trackers (AI/ML Tracker)',
          'Stripe webhook checkout & stock pipelines (Moungiri Store)',
          'Row Level Security (RLS) policies in PostgreSQL',
          'Real-time activity logs & metric counters',
        ],
        stats: { projects: `${saasCount} Projects`, experience: `${currentYear - 2025}+ Years` },
      },
      {
        id: 'api',
        icon: Code2,
        title: 'API & System Design',
        subtitle: 'Robust Backend Systems',
        description: 'Designing modular backend systems and RESTful APIs with clean folder architecture. I construct secure endpoints, write analytical database queries, and integrate third-party webhooks.',
        techStack: [
          { name: 'REST', color: '#009688', level: 92 },
          { name: 'Express.js', color: '#ffffff', level: 90 },
          { name: 'MySQL Triggers', color: '#336791', level: 85 },
          { name: 'PostgreSQL', color: '#2D3748', level: 88 },
        ],
        highlights: [
          'Secure endpoints & token authentication',
          'Automated database triggers & transaction safety (DBMS project)',
          'Integration of OpenWeather & OpenAI API services (Safecoast)',
          'Clean MVC backend folder architecture',
        ],
        stats: { projects: `${apiCount} Projects`, experience: `${currentYear - 2025}+ Years` },
      },
    ];
  }, [currentYear]);

  const activeItem = expertiseData[activeIndex];

  const handleTabClick = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <div className="relative py-12 xs:py-14 sm:py-20 md:py-24 overflow-hidden bg-[#0F0E0E]">
      <div className="relative z-10 max-w-6xl mx-auto px-3 xs:px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={headerContainerVariants}
          className="text-center mb-8 xs:mb-10 sm:mb-14 md:mb-16"
        >
          <motion.div
            variants={badgeVariants}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] mb-3 sm:mb-4 text-[#C2EF3A] text-[11px] sm:text-xs font-semibold tracking-wider uppercase font-outfit"
          >
            <div className="w-3.5 h-3.5 rounded-full bg-[#C2EF3A] flex items-center justify-center text-[#0F0E0E] flex-shrink-0">
              <svg className="w-[50%] h-[50%]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
                <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
              </svg>
            </div>
            <span>My Core Expertise</span>
          </motion.div>
          
          <motion.h2
            variants={titleContainerVariants}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] sm:leading-[1.05] text-white max-w-2xl mx-auto font-jakarta flex flex-wrap justify-center gap-x-[0.25em] gap-y-[0.05em] px-2 sm:px-0"
          >
            {"Professional disciplines engineered for high performance.".split(" ").map((word, i) => (
              <span key={i} className="inline-block overflow-hidden py-0.5">
                <motion.span
                  variants={wordVariants}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h2>
        </motion.div>

        {/* Split Screen Container */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={cardContainerVariants}
          className="grid grid-cols-1 lg:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr] gap-3 xs:gap-4 sm:gap-6 lg:gap-8 items-stretch"
        >
          {/* Left Side - Tab Navigation Panel */}
          <motion.div 
            variants={leftCardVariants}
            className="relative flex flex-col justify-between rounded-[20px] xs:rounded-[24px] sm:rounded-[30px] border border-white/[0.04] p-3 xs:p-3.5 sm:p-5 lg:p-7 xl:p-8 overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, rgba(30, 28, 28, 0.45) 0%, rgba(21, 19, 19, 0.95) 100%)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.03)',
            }}
          >
            {/* Glossy sheen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.01] via-transparent to-white/[0.02] pointer-events-none" />

            {/* Content wrapper */}
            <div className="relative z-10 flex flex-col gap-3 lg:gap-6 flex-1 justify-start">
              <div className="hidden lg:block">
                <p className="text-[10px] font-mono font-bold tracking-[0.15em] text-white/35 uppercase mb-1">
                  Disciplines
                </p>
                <h3 className="text-sm font-extrabold text-white font-jakarta tracking-tight">
                  Expertise Areas
                </h3>
              </div>

              {/* Tab items list */}
              <div 
                className="flex lg:flex-col gap-2 xs:gap-2.5 overflow-x-auto lg:overflow-visible pb-1 lg:pb-0 scrollbar-hide -mx-1 xs:-mx-1.5 sm:mx-0 px-1 xs:px-1.5 sm:px-0"
                data-lenis-prevent
              >
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
            </div>

            {/* Footer - Compact Stats Row (Desktop only, mobile has it in detail card) */}
            <div className="relative z-10 hidden lg:flex items-center gap-3 mt-6 pt-4 border-t border-white/[0.04]">
              <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-[16px] bg-[#0E0D0D] border border-white/[0.03] flex-1 justify-center lg:justify-start">
                <Clock className="w-3.5 h-3.5 text-[#C2EF3A]" />
                <span className="text-[10px] font-bold font-mono text-white/55 uppercase tracking-wide whitespace-nowrap">
                  {overallExp < 10 ? `0${overallExp}` : overallExp}+ Years Exp
                </span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-[16px] bg-[#0E0D0D] border border-white/[0.03] flex-1 justify-center lg:justify-start">
                <Target className="w-3.5 h-3.5 text-[#C2EF3A]" />
                <span className="text-[10px] font-bold font-mono text-white/55 uppercase tracking-wide whitespace-nowrap">
                  {projects.length < 10 ? `0${projects.length}` : projects.length}+ Projects
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Preview Area */}
          <motion.div
            variants={rightCardVariants}
            className="relative rounded-[22px] xs:rounded-[26px] sm:rounded-[30px] border border-white/[0.04] overflow-hidden h-full flex flex-col"
            style={{
              background: 'linear-gradient(180deg, rgba(30, 28, 28, 0.45) 0%, rgba(21, 19, 19, 0.95) 100%)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.03)',
            }}
          >
            {/* Glossy sheen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.01] via-transparent to-white/[0.02] pointer-events-none" />

            {/* Subtle gradient orb */}
            <div
              className="absolute top-0 right-0 w-[200px] xs:w-[300px] sm:w-[400px] h-[200px] xs:h-[300px] sm:h-[400px] pointer-events-none opacity-20"
              style={{
                background: 'radial-gradient(circle at 80% 20%, rgba(194, 239, 58, 0.15) 0%, transparent 60%)',
              }}
              aria-hidden="true"
            />

            {/* Content */}
            <div className="relative z-10 p-4 xs:p-5 sm:p-7 md:p-8 lg:p-10 flex-1 flex flex-col">
              <AnimatePresence mode="wait">
                <PreviewContent key={activeItem.id} item={activeItem} />
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

// Tab Item Component - styled like Bento Grid cards
// Tab Item Component - styled like Bento Grid cards
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
      whileHover={{ y: -2, scale: 1.01 }}
      className={`group relative flex items-center gap-2.5 xs:gap-3 lg:gap-4 p-2.5 xs:p-3 sm:p-3.5 lg:p-4 rounded-[16px] lg:rounded-[20px] min-w-[140px] xs:min-w-[160px] sm:min-w-[180px] lg:min-w-0 lg:w-full text-left overflow-hidden flex-shrink-0 lg:flex-shrink transition-all duration-300 ${
        isActive ? 'border-white/10' : 'border-white/[0.04]'
      }`}
      style={{
        background: isActive
          ? 'linear-gradient(180deg, rgba(40, 36, 36, 0.6) 0%, rgba(26, 23, 23, 0.95) 100%)'
          : 'linear-gradient(180deg, rgba(30, 28, 28, 0.4) 0%, rgba(21, 19, 19, 0.85) 100%)',
        boxShadow: isActive 
          ? '0 6px 20px 0 rgba(0, 0, 0, 0.3), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)'
          : '0 4px 12px 0 rgba(0, 0, 0, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.02)',
        borderWidth: '1px',
      }}
    >
      {/* Glossy sheen */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.01] via-transparent to-white/[0.02] pointer-events-none" />

      {/* Active indicator bar - bottom on mobile, left on desktop */}
      {isActive && (
        <motion.div 
          layoutId="activeIndicator"
          className="absolute left-2.5 right-2.5 lg:left-0 bottom-0 lg:bottom-3.5 lg:top-3.5 h-[2px] lg:h-auto w-auto lg:w-[3px] rounded-t-full lg:rounded-r-full bg-[#C2EF3A]"
          style={{
            boxShadow: '0 0 8px rgba(194, 239, 58, 0.6)'
          }}
        />
      )}

      {/* Icon Box */}
      <div
        className={`w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-[10px] sm:rounded-[12px] flex items-center justify-center border flex-shrink-0 transition-all duration-300 ${
          isActive 
            ? 'bg-[#C2EF3A]/10 border-[#C2EF3A]/30 text-[#C2EF3A]' 
            : 'bg-white/5 border-white/5 text-white/50 group-hover:text-white/80 group-hover:bg-white/10'
        }`}
      >
        <Icon className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5" />
      </div>

      {/* Text block */}
      <div className="flex-1 min-w-0">
        <h3
          className={`text-[11px] xs:text-[12px] sm:text-[13px] font-bold font-jakarta truncate transition-colors duration-300 ${
            isActive ? 'text-white' : 'text-white/70 group-hover:text-white'
          }`}
        >
          {item.title}
        </h3>
        <p
          className={`text-[8.5px] xs:text-[9px] sm:text-[10px] font-medium font-jakarta truncate transition-colors duration-300 ${
            isActive ? 'text-white/45' : 'text-white/30 group-hover:text-white/40'
          }`}
        >
          {item.subtitle}
        </p>
      </div>
    </motion.button>
  );
});

// Preview Content Component
const PreviewContent = memo(function PreviewContent({ item }: { item: ExpertiseItem }) {
  const Icon = item.icon;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex flex-col flex-grow justify-between gap-4 sm:gap-6 h-full"
      style={{ contain: 'layout style' }}
    >
      <div className="flex-1 flex flex-col justify-start">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="flex items-center gap-2.5 xs:gap-3">
            {/* Large Icon Box */}
            <div
              className="flex-shrink-0 w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-[14px] sm:rounded-[16px] flex items-center justify-center text-[#C2EF3A] border"
              style={{
                background: 'linear-gradient(135deg, rgba(194, 239, 58, 0.1) 0%, rgba(194, 239, 58, 0.02) 100%)',
                borderColor: 'rgba(194, 239, 58, 0.25)',
                boxShadow: '0 4px 20px rgba(194, 239, 58, 0.12)',
              }}
            >
              <Icon className="w-5 h-5 xs:w-5.5 xs:h-5.5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </div>

            <div className="min-w-0">
              <h3 className="text-base xs:text-lg sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-0.5 truncate font-jakarta">
                {item.title}
              </h3>
              <p className="text-[9.5px] xs:text-[10px] sm:text-xs md:text-sm font-bold text-[#C2EF3A] tracking-wider uppercase font-mono">
                {item.subtitle}
              </p>
            </div>
          </div>

          {/* Stats Badges (Visible on mobile & desktop with responsive styling) */}
          <div className="flex items-center gap-1.5 xs:gap-2">
            <div className="flex items-center gap-1.5 px-2 xs:px-2.5 py-1 xs:py-1.5 rounded-lg bg-[#0E0D0D] border border-white/[0.04] text-[9px] xs:text-[10px] sm:text-[11px] font-mono font-bold text-white/55 select-none uppercase tracking-wide">
              <Briefcase className="w-3 h-3 xs:w-3.5 xs:h-3.5 text-[#C2EF3A]" />
              <span>{item.stats.projects}</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 xs:px-2.5 py-1 xs:py-1.5 rounded-lg bg-[#0E0D0D] border border-white/[0.04] text-[9px] xs:text-[10px] sm:text-[11px] font-mono font-bold text-white/55 select-none uppercase tracking-wide">
              <Star className="w-3 h-3 xs:w-3.5 xs:h-3.5 text-[#C2EF3A]" />
              <span>{item.stats.experience}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-[11.5px] xs:text-xs sm:text-[13px] md:text-[14px] leading-relaxed text-white/50 mb-4 sm:mb-6 max-w-3xl font-jakarta"
        >
          {item.description}
        </motion.p>

        {/* Animated Divider */}
        <motion.div
          variants={dividerVariants}
          className="h-px bg-gradient-to-r from-white/[0.04] via-white/[0.08] to-white/[0.04] mb-4 sm:mb-6 origin-left"
        />

        {/* Tech Stack Grid (2-column on mobile, 3-column on desktop) */}
        <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
          <p className="text-[9px] xs:text-[10px] uppercase tracking-[0.15em] text-white/35 font-mono font-bold mb-2.5 sm:mb-3">
            Tech Stack & Proficiency
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 xs:gap-2.5 sm:gap-3 w-full">
            {item.techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={techStackItemVariants}
                custom={index}
                className="group relative flex items-center justify-between px-2.5 xs:px-3 py-2 xs:py-2.5 rounded-[12px] xs:rounded-[14px] sm:rounded-[16px] border border-white/[0.04] hover:border-white/[0.12] transition-all duration-300 bg-neutral-900/40 cursor-default select-none shadow-sm"
                style={{
                  background: 'linear-gradient(180deg, rgba(24, 22, 22, 0.45) 0%, rgba(14, 13, 13, 0.95) 100%)',
                  boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.01)'
                }}
              >
                {/* Glossy sheen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.005] to-transparent rounded-[12px] xs:rounded-[14px] sm:rounded-[16px] pointer-events-none" />

                <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-2.5 min-w-0 flex-1 mr-1.5 xs:mr-2">
                  <span style={{ color: tech.color }} className="flex-shrink-0 [&>svg]:w-3.5 [&>svg]:h-3.5 xs:[&>svg]:w-4 xs:[&>svg]:h-4 sm:[&>svg]:w-4.5 sm:[&>svg]:h-4.5">
                    {TechIcons[tech.name] || <Code2 className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4.5 sm:h-4.5" />}
                  </span>
                  <span className="text-[10px] xs:text-[11px] sm:text-xs font-bold font-jakarta text-white/80 truncate group-hover:text-white transition-colors duration-200">{tech.name}</span>
                </div>

                {/* Progress visual bar */}
                <div className="flex flex-col items-end gap-0.5 xs:gap-1 flex-shrink-0 w-10 xs:w-12 sm:w-16">
                  <span className="text-[8px] xs:text-[8.5px] sm:text-[9px] font-mono font-bold text-white/40 group-hover:text-[#C2EF3A] transition-colors duration-200">{tech.level}%</span>
                  <div className="w-full h-1 bg-[#1C1A1A] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#C2EF3A]/60 to-[#C2EF3A] rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.04, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Highlights */}
        <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
          <p className="text-[9px] xs:text-[10px] uppercase tracking-[0.15em] text-white/35 font-mono font-bold mb-2.5 sm:mb-3">
            Core Focus & Competencies
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 xs:gap-2.5 sm:gap-3">
            {item.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={highlightItemVariants}
                custom={index}
                className="flex items-start gap-2 xs:gap-2.5 group cursor-default hover:translate-x-0.5 transition-transform duration-200"
              >
                <div
                  className="flex-shrink-0 w-4 h-4 xs:w-[18px] xs:h-[18px] rounded-[5px] xs:rounded-[6px] flex items-center justify-center mt-0.5 bg-[#C2EF3A]/10 border border-[#C2EF3A]/20 group-hover:scale-105 transition-transform duration-200"
                >
                  <Check className="w-2.5 h-2.5 xs:w-3 xs:h-3 text-[#C2EF3A]" />
                </div>
                <span className="text-[10.5px] xs:text-[11px] sm:text-xs text-white/55 leading-relaxed font-jakarta group-hover:text-white/80 transition-colors duration-200">
                  {highlight}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer CTA */}
      <motion.div
        variants={footerVariants}
        className="pt-3 sm:pt-4 border-t border-white/[0.04] mt-auto"
      >
        <div className="flex flex-col xs:flex-row items-stretch xs:items-center justify-between gap-3 xs:gap-4">
          <div className="flex items-center gap-2.5 xs:gap-3 hover:translate-x-0.5 transition-transform duration-200">
            <div
              className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-[10px] sm:rounded-[12px] flex items-center justify-center border hover:scale-110 transition-transform duration-200 bg-[#C2EF3A]/10 border-[#C2EF3A]/20 text-[#C2EF3A] flex-shrink-0"
            >
              <MessageSquare className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5" />
            </div>
            <div>
              <p className="text-[11px] xs:text-[12px] sm:text-[13px] font-bold text-white font-jakarta">Interested in this service?</p>
              <p className="text-[9.5px] xs:text-[10px] sm:text-[11px] text-white/30 font-jakarta">Let&apos;s discuss your project</p>
            </div>
          </div>
          <a
            href="#contact"
            className="group flex items-center gap-2 px-3.5 py-2 xs:px-4 xs:py-2.5 rounded-[12px] xs:rounded-[16px] border border-white/[0.05] hover:border-[#C2EF3A]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 w-full xs:w-auto justify-center xs:justify-start"
            style={{
              background: 'linear-gradient(135deg, rgba(194, 239, 58, 0.1) 0%, rgba(194, 239, 58, 0.02) 100%)',
              boxShadow: '0 2px 12px rgba(194, 239, 58, 0.05)',
            }}
          >
            <span className="text-[11px] xs:text-[12px] font-bold text-white/85 group-hover:text-white transition-colors duration-200 font-jakarta">
              Get in Touch
            </span>
            <NavbarArrowRight />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
});

// Small helper component to wrap arrow rendering to avoid build/import/lint issues
const NavbarArrowRight = () => {
  return <ArrowRight className="w-4 h-4 text-[#C2EF3A] group-hover:translate-x-0.5 transition-transform duration-200" />;
};
