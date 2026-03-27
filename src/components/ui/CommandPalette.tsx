'use client';

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Home,
  User,
  Briefcase,
  Code2,
  Mail,
  Github,
  ExternalLink,
  MessageCircle,
  FileDown,
  ArrowRight,
  Sparkles,
  Zap,
  Linkedin,
  Twitter,
} from 'lucide-react';
import { projects } from '@/components/sections/Work/work.data';
import { skills } from '@/components/sections/Skills/skills.data';
import { SOCIAL_LINKS, PERSONAL_INFO } from '@/lib/constants';

type CommandType = 'navigation' | 'project' | 'skill' | 'action' | 'social';

interface CommandItem {
  id: string;
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  type: CommandType;
  action: () => void;
  keywords?: string[];
}

const typeLabels: Record<CommandType, string> = {
  navigation: 'Navigation',
  project: 'Projects',
  skill: 'Skills',
  action: 'Quick Actions',
  social: 'Social',
};

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Scroll to section helper
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  }, []);

  // Open chatbot helper
  const openChatbot = useCallback(() => {
    // Find and click the chatbot button
    const chatButton = document.querySelector('[aria-label="Open chat"]') as HTMLButtonElement;
    if (chatButton) {
      chatButton.click();
    }
    setIsOpen(false);
  }, []);

  // Download resume helper
  const downloadResume = useCallback(() => {
    // Create a link to download resume
    const link = document.createElement('a');
    link.href = '/resume/Rameshwar_Bhagwat_Resume.pdf';
    link.download = 'Rameshwar_Bhagwat_Resume.pdf';
    link.click();
    setIsOpen(false);
  }, []);

  // Open contact form helper
  const openContact = useCallback(() => {
    scrollToSection('contact');
    // Trigger the contact form after scrolling
    setTimeout(() => {
      const contactButton = document.querySelector('[aria-label="Open contact form"]') as HTMLButtonElement;
      if (contactButton) {
        contactButton.click();
      }
    }, 800);
  }, [scrollToSection]);

  // Build command items
  const commands: CommandItem[] = useMemo(() => {
    const items: CommandItem[] = [];

    // Navigation commands
    const navigationItems: CommandItem[] = [
      {
        id: 'nav-home',
        title: 'Home',
        subtitle: 'Go to hero section',
        icon: <Home size={18} />,
        type: 'navigation',
        action: () => scrollToSection('hero'),
        keywords: ['home', 'hero', 'top', 'start'],
      },
      {
        id: 'nav-about',
        title: 'About',
        subtitle: 'Learn about me',
        icon: <User size={18} />,
        type: 'navigation',
        action: () => scrollToSection('about'),
        keywords: ['about', 'me', 'bio', 'profile', 'info'],
      },
      {
        id: 'nav-skills',
        title: 'Skills',
        subtitle: 'View my tech stack',
        icon: <Code2 size={18} />,
        type: 'navigation',
        action: () => scrollToSection('skills'),
        keywords: ['skills', 'tech', 'stack', 'technologies', 'expertise'],
      },
      {
        id: 'nav-work',
        title: 'Work',
        subtitle: 'Browse my projects',
        icon: <Briefcase size={18} />,
        type: 'navigation',
        action: () => scrollToSection('work'),
        keywords: ['work', 'projects', 'portfolio', 'showcase'],
      },
      {
        id: 'nav-github',
        title: 'GitHub Activity',
        subtitle: 'View contribution graph',
        icon: <Github size={18} />,
        type: 'navigation',
        action: () => {
          const element = document.querySelector('.relative.py-20.px-6.bg-\\[\\#0F0E0E\\].overflow-hidden');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
          setIsOpen(false);
        },
        keywords: ['github', 'contributions', 'commits', 'activity'],
      },
      {
        id: 'nav-contact',
        title: 'Contact',
        subtitle: 'Get in touch with me',
        icon: <Mail size={18} />,
        type: 'navigation',
        action: () => scrollToSection('contact'),
        keywords: ['contact', 'email', 'hire', 'message', 'reach'],
      },
    ];
    items.push(...navigationItems);

    // Project commands
    projects.forEach((project) => {
      items.push({
        id: `project-${project.id}`,
        title: project.title,
        subtitle: project.tagline,
        icon: <Sparkles size={18} />,
        type: 'project',
        action: () => {
          scrollToSection('work');
          // Highlight the project card after scrolling
          setTimeout(() => {
            const projectCard = document.querySelector(`[data-project-id="${project.id}"]`);
            if (projectCard) {
              projectCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }, 500);
        },
        keywords: [project.title.toLowerCase(), ...project.techStack.map(t => t.toLowerCase())],
      });
    });

    // Skill commands (top 10 most relevant)
    const topSkills = skills.slice(0, 12);
    topSkills.forEach((skill) => {
      items.push({
        id: `skill-${skill.name}`,
        title: skill.name,
        subtitle: 'Technology',
        icon: <Zap size={18} />,
        type: 'skill',
        action: () => scrollToSection('skills'),
        keywords: [skill.name.toLowerCase()],
      });
    });

    // Quick action commands
    const actionItems: CommandItem[] = [
      {
        id: 'action-chat',
        title: 'Open AI Assistant',
        subtitle: 'Chat with my AI assistant',
        icon: <MessageCircle size={18} />,
        type: 'action',
        action: openChatbot,
        keywords: ['chat', 'assistant', 'ai', 'bot', 'talk'],
      },
      {
        id: 'action-resume',
        title: 'Download Resume',
        subtitle: 'Get my latest CV',
        icon: <FileDown size={18} />,
        type: 'action',
        action: downloadResume,
        keywords: ['resume', 'cv', 'download', 'pdf'],
      },
      {
        id: 'action-hire',
        title: 'Hire Me',
        subtitle: 'Send a project inquiry',
        icon: <Mail size={18} />,
        type: 'action',
        action: openContact,
        keywords: ['hire', 'contact', 'project', 'inquiry', 'work together'],
      },
      {
        id: 'action-email',
        title: 'Send Email',
        subtitle: PERSONAL_INFO.email,
        icon: <Mail size={18} />,
        type: 'action',
        action: () => {
          window.location.href = `mailto:${PERSONAL_INFO.email}`;
          setIsOpen(false);
        },
        keywords: ['email', 'mail', 'send'],
      },
    ];
    items.push(...actionItems);

    // Social commands
    const socialItems: CommandItem[] = [
      {
        id: 'social-github',
        title: 'GitHub Profile',
        subtitle: 'View my repositories',
        icon: <Github size={18} />,
        type: 'social',
        action: () => {
          window.open(SOCIAL_LINKS.find(l => l.name === 'GitHub')?.url, '_blank');
          setIsOpen(false);
        },
        keywords: ['github', 'code', 'repos', 'repositories'],
      },
      {
        id: 'social-linkedin',
        title: 'LinkedIn',
        subtitle: 'Connect professionally',
        icon: <Linkedin size={18} />,
        type: 'social',
        action: () => {
          window.open(SOCIAL_LINKS.find(l => l.name === 'LinkedIn')?.url, '_blank');
          setIsOpen(false);
        },
        keywords: ['linkedin', 'connect', 'professional', 'network'],
      },
      {
        id: 'social-twitter',
        title: 'Twitter / X',
        subtitle: 'Follow me',
        icon: <Twitter size={18} />,
        type: 'social',
        action: () => {
          window.open(SOCIAL_LINKS.find(l => l.name === 'Twitter')?.url, '_blank');
          setIsOpen(false);
        },
        keywords: ['twitter', 'x', 'follow', 'tweets'],
      },
    ];
    items.push(...socialItems);

    return items;
  }, [scrollToSection, openChatbot, downloadResume, openContact]);

  // Filter commands based on search
  const filteredCommands = useMemo(() => {
    if (!search.trim()) {
      // Show a subset when no search
      return commands.filter(cmd =>
        cmd.type === 'navigation' || cmd.type === 'action'
      );
    }

    const searchLower = search.toLowerCase();
    return commands.filter((cmd) => {
      const titleMatch = cmd.title.toLowerCase().includes(searchLower);
      const subtitleMatch = cmd.subtitle?.toLowerCase().includes(searchLower);
      const keywordMatch = cmd.keywords?.some(k => k.includes(searchLower));
      return titleMatch || subtitleMatch || keywordMatch;
    });
  }, [commands, search]);

  // Group filtered commands by type
  const groupedCommands = useMemo(() => {
    const groups: Record<CommandType, CommandItem[]> = {
      navigation: [],
      project: [],
      skill: [],
      action: [],
      social: [],
    };

    filteredCommands.forEach((cmd) => {
      groups[cmd.type].push(cmd);
    });

    return groups;
  }, [filteredCommands]);

  // Flatten for keyboard navigation
  const flattenedCommands = useMemo(() => {
    return Object.values(groupedCommands).flat();
  }, [groupedCommands]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Open with Cmd/Ctrl + K
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }

      // Close with Escape
      if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Navigation within palette
  useEffect(() => {
    if (!isOpen) return;

    const handleNavigation = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < flattenedCommands.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : flattenedCommands.length - 1
        );
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const selected = flattenedCommands[selectedIndex];
        if (selected) {
          selected.action();
        }
      }
    };

    window.addEventListener('keydown', handleNavigation);
    return () => window.removeEventListener('keydown', handleNavigation);
  }, [isOpen, selectedIndex, flattenedCommands]);

  // Reset selection when search changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setSearch('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Scroll selected item into view
  useEffect(() => {
    if (isOpen && listRef.current) {
      const selectedElement = listRef.current.querySelector(`[data-index="${selectedIndex}"]`);
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex, isOpen]);

  // Get flat index for an item
  const getFlatIndex = (type: CommandType, index: number): number => {
    let flatIndex = 0;
    const typeOrder: CommandType[] = ['navigation', 'action', 'project', 'skill', 'social'];

    for (const t of typeOrder) {
      if (t === type) {
        return flatIndex + index;
      }
      flatIndex += groupedCommands[t].length;
    }
    return flatIndex + index;
  };

  return (
    <>
      {/* Keyboard Shortcut Hint - Glassmorphism Style */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-2.5 px-3.5 py-2.5 rounded-full backdrop-blur-md border border-white/[0.15] transition-all duration-200 group"
        style={{
          background: 'rgba(255, 255, 255, 0.03)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
        }}
        whileHover={{ scale: 1.02, borderColor: 'rgba(255, 255, 255, 0.25)' }}
        whileTap={{ scale: 0.98 }}
      >
        <Search size={14} className="text-white/50 group-hover:text-white/70 transition-colors" />
        <span className="text-[12px] text-white/50 group-hover:text-white/70 transition-colors">
          Search
        </span>
        <div className="flex items-center gap-0.5 ml-0.5">
          <kbd className="px-1.5 py-0.5 text-[10px] font-medium bg-white/[0.08] rounded-md text-white/50 border border-white/[0.08]">
            {typeof window !== 'undefined' && navigator.platform.includes('Mac') ? '⌘' : 'Ctrl'}
          </kbd>
          <kbd className="px-1.5 py-0.5 text-[10px] font-medium bg-white/[0.08] rounded-md text-white/50 border border-white/[0.08]">
            K
          </kbd>
        </div>
      </motion.button>

      {/* Command Palette Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop - Subtle dim with minimal blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[100]"
              style={{
                background: 'rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(1px)',
                WebkitBackdropFilter: 'blur(1px)',
              }}
            />

            {/* Command Palette - Glassmorphism Style */}
            <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 40 }}
                transition={{
                  type: 'spring',
                  damping: 20,
                  stiffness: 300,
                  mass: 1,
                  duration: 0.4
                }}
                className="w-full max-w-[540px] pointer-events-auto"
              >
                <div
                  className="relative overflow-hidden rounded-[20px] backdrop-blur-md border border-white/[0.15]"
                  style={{
                    background: 'rgba(20, 20, 22, 0.6)',
                    boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.5), 0 8px 32px 0 rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
                  }}
                >

                {/* Search Input - Glassmorphism Style */}
                <div className="relative flex items-center px-5 py-4 border-b border-white/[0.08]">
                  <Search size={17} className="text-white/45 mr-3.5 flex-shrink-0" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search commands..."
                    className="flex-1 bg-transparent text-white text-[16px] placeholder-white/35 outline-none font-normal tracking-[-0.01em]"
                    autoComplete="off"
                    autoCorrect="off"
                    spellCheck="false"
                  />
                  <kbd className="px-2 py-1 text-[10px] font-medium bg-white/[0.08] rounded-md text-white/45 border border-white/[0.08]">
                    esc
                  </kbd>
                </div>

                {/* Results - Glassmorphism Style List */}
                <div
                  ref={listRef}
                  className="max-h-[360px] overflow-y-auto py-2"
                  style={{
                    scrollbarWidth: 'none',
                    WebkitOverflowScrolling: 'touch',
                    scrollBehavior: 'smooth',
                    willChange: 'scroll-position',
                    overscrollBehavior: 'contain',
                    scrollPaddingTop: '4px',
                    scrollPaddingBottom: '4px',
                  }}
                >
                  {flattenedCommands.length === 0 ? (
                    <div className="px-5 py-12 text-center">
                      <div className="text-white/45 text-[15px] font-medium">No results found</div>
                      <div className="text-white/30 text-[13px] mt-1.5">
                        Try searching for sections, projects, or skills
                      </div>
                    </div>
                  ) : (
                    <>
                      {(['navigation', 'action', 'project', 'skill', 'social'] as CommandType[]).map((type) => {
                        const items = groupedCommands[type];
                        if (items.length === 0) return null;

                        return (
                          <motion.div
                            key={type}
                            className="mb-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                          >
                            {/* Group Label */}
                            <div className="px-5 py-2">
                              <span className="text-[12px] font-semibold uppercase tracking-wide text-white/35">
                                {typeLabels[type]}
                              </span>
                            </div>

                            {/* Group Items */}
                            {items.map((cmd, index) => {
                              const flatIndex = getFlatIndex(type, index);
                              const isSelected = flatIndex === selectedIndex;

                              return (
                                <motion.button
                                  key={cmd.id}
                                  data-index={flatIndex}
                                  onClick={cmd.action}
                                  onMouseEnter={() => setSelectedIndex(flatIndex)}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.3,
                                    delay: flatIndex * 0.02,
                                    ease: 'easeOut'
                                  }}
                                  className={`w-[calc(100%-16px)] mx-2 px-3.5 py-3 flex items-center gap-3.5 rounded-[14px] will-change-[background-color] transition-all duration-75 ${
                                    isSelected
                                      ? 'bg-white/[0.1]'
                                      : 'hover:bg-white/[0.05]'
                                  }`}
                                  style={{
                                    willChange: isSelected ? 'background-color, box-shadow' : 'auto',
                                    contain: 'layout style paint',
                                  }}
                                >
                                  {/* Icon */}
                                  <div
                                    className={`w-9 h-9 rounded-[11px] flex items-center justify-center transition-all duration-100 ${
                                      isSelected
                                        ? 'bg-[#0A84FF] text-white shadow-lg shadow-blue-500/25'
                                        : 'bg-white/[0.08] text-white/60'
                                    }`}
                                  >
                                    {React.cloneElement(cmd.icon as React.ReactElement<{ size?: number; strokeWidth?: number }>, { size: 16, strokeWidth: 1.8 })}
                                  </div>

                                  {/* Content */}
                                  <div className="flex-1 text-left min-w-0">
                                    <div className={`text-[15px] truncate transition-colors tracking-[-0.01em] ${
                                      isSelected ? 'text-white font-medium' : 'text-white/85'
                                    }`}>
                                      {cmd.title}
                                    </div>
                                    {cmd.subtitle && (
                                      <div className={`text-[12px] truncate transition-colors ${
                                        isSelected ? 'text-white/55' : 'text-white/40'
                                      }`}>
                                        {cmd.subtitle}
                                      </div>
                                    )}
                                  </div>

                                  {/* Action hint */}
                                  {isSelected && (
                                    <div className="flex items-center gap-1 flex-shrink-0">
                                      {cmd.type === 'social' ? (
                                        <ExternalLink size={15} className="text-white/45" />
                                      ) : (
                                        <ArrowRight size={15} className="text-white/45" />
                                      )}
                                    </div>
                                  )}
                                </motion.button>
                              );
                            })}
                          </motion.div>
                        );
                      })}
                    </>
                  )}
                </div>

                {/* Footer - Glassmorphism Style */}
                <div className="px-5 py-3 border-t border-white/[0.08] flex items-center justify-between bg-white/[0.02]">
                  <div className="flex items-center gap-5 text-[11px] text-white/40">
                    <div className="flex items-center gap-2">
                      <kbd className="px-1.5 py-0.5 bg-white/[0.08] rounded-md text-[10px] font-medium border border-white/[0.08]">↑↓</kbd>
                      <span>navigate</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <kbd className="px-1.5 py-0.5 bg-white/[0.08] rounded-md text-[10px] font-medium border border-white/[0.08]">↵</kbd>
                      <span>select</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
