'use client';

import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/lib/constants';
import { Home, User, Code2, Briefcase, Mail, LucideIcon } from 'lucide-react';
import React, { useEffect, useRef } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

const navIcons: Record<string, LucideIcon> = {
  hero: Home,
  about: User,
  skills: Code2,
  work: Briefcase,
  contact: Mail,
};

const navLabels: Record<string, string> = {
  hero: 'Home',
  about: 'About',
  skills: 'Skills',
  work: 'Work',
  contact: 'Contact',
};

// Fluid spring & smooth acceleration curves for vertical unfold / collapse
const menuVariants: Variants = {
  closed: {
    opacity: 0,
    scaleY: 0.2,
    scaleX: 0.75,
    y: -14,
    filter: 'blur(10px)',
    transformOrigin: 'top center',
    transition: {
      duration: 0.26,
      ease: [0.32, 0, 0.67, 0], // Smooth acceleration into collapse
      when: 'afterChildren',
      staggerChildren: 0.025,
      staggerDirection: -1, // Collapses bottom-up
    },
  },
  open: {
    opacity: 1,
    scaleY: 1,
    scaleX: 1,
    y: 0,
    filter: 'blur(0px)',
    transformOrigin: 'top center',
    transition: {
      type: 'spring',
      stiffness: 380,
      damping: 24,
      mass: 0.7,
      staggerChildren: 0.045,
      delayChildren: 0.02,
    },
  },
};

// Child item spring pop & blur dissolve
const itemVariants: Variants = {
  closed: {
    opacity: 0,
    y: -12,
    scale: 0.5,
    filter: 'blur(4px)',
    transition: {
      duration: 0.16,
      ease: [0.32, 0, 0.67, 0],
    },
  },
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 460,
      damping: 22,
      mass: 0.6,
    },
  },
};

export default function MobileMenu({ isOpen, onClose, activeSection }: MobileMenuProps) {
  const router = useRouter();
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on outside click or tap
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const scrollTo = (id: string) => {
    if (id === 'contact') {
      router.push('/contact');
    } else if (pathname !== '/') {
      router.push('/#' + id);
    } else {
      window.dispatchEvent(new CustomEvent('trigger-nav-fade', { detail: { id } }));
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          className="fixed top-[62px] right-3.5 sm:right-4 z-50 flex flex-col items-center pointer-events-auto"
        >
          {/* Vertical Glass Pill Capsule */}
          <div
            className="relative rounded-full p-1.5 flex flex-col items-center gap-2 border backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.15)]"
            style={{
              background: 'rgba(15, 14, 14, 0.88)',
              borderColor: 'rgba(255, 255, 255, 0.12)',
            }}
          >
            {/* Rotating border glow */}
            <div
              className="absolute inset-0 pointer-events-none overflow-hidden rounded-full"
              style={{
                padding: '1px',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude',
              }}
            >
              <div
                className="absolute left-1/2 top-1/2 w-[220%] aspect-square animate-navbar-border-spin"
                style={{
                  background: 'conic-gradient(from 0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.05) 70%, rgba(255, 255, 255, 0.7))',
                  animationDuration: '5s',
                }}
              />
            </div>

            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              const Icon = navIcons[link.id] || Home;
              const label = navLabels[link.id] || link.label;

              return (
                <motion.button
                  key={link.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.88 }}
                  onClick={() => scrollTo(link.id)}
                  className={`relative w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 group cursor-pointer ${
                    isActive
                      ? 'text-white shadow-[0_0_16px_rgba(255,140,0,0.45)]'
                      : 'text-white/50 hover:text-white hover:bg-white/[0.08]'
                  }`}
                  aria-label={`Navigate to ${label}`}
                  title={label}
                >
                  {/* Active signature gradient highlight background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeMobileNavPill"
                      className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FF0000] via-[#FF1493] to-[#FF8C00] opacity-95"
                      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
                    />
                  )}

                  {/* Icon */}
                  <Icon size={17} className="relative z-10 transition-transform duration-200 group-hover:scale-110" />
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
