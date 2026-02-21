'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { NAV_LINKS } from '@/lib/constants';
import { ChevronDown } from 'lucide-react';

interface NavLinksProps {
  activeSection: string;
}

export default function NavLinks({ activeSection }: NavLinksProps) {
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setShowAboutDropdown(false);
  };

  return (
    <div className="flex items-center gap-2 relative">
      {NAV_LINKS.map((link) => {
        const isActive = activeSection === link.id;
        const hasDropdown = link.id === 'about';

        if (hasDropdown) {
          return (
            <div
              key={link.id}
              className="relative"
              onMouseEnter={() => setShowAboutDropdown(true)}
              onMouseLeave={() => setShowAboutDropdown(false)}
            >
              <button
                onClick={() => scrollTo(link.id)}
                className={`relative text-sm px-4 py-2 rounded-full transition-all duration-200 cursor-pointer flex items-center gap-1 ${
                  isActive ? 'text-white' : 'text-white/70 hover:text-white'
                }`}
              >
                {/* Active background capsule */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavLink"
                    className="absolute inset-0 bg-white/[0.05] rounded-full border border-white/[0.08]"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}

                {/* Link text */}
                <span className="relative z-10">{link.label}</span>
                <ChevronDown size={14} className="relative z-10" />
              </button>

              {/* Dropdown */}
              <AnimatePresence>
                {showAboutDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 left-0 backdrop-blur-2xl border border-white/[0.15] rounded-xl shadow-lg overflow-hidden min-w-[160px]"
                    style={{
                      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
                    }}
                  >
                    <button
                      onClick={() => scrollTo('about')}
                      className="w-full px-4 py-2.5 text-left text-sm text-white/70 hover:text-white hover:bg-white/[0.05] transition-all duration-200"
                    >
                      About Me
                    </button>
                    <button
                      onClick={() => scrollTo('my-journey')}
                      className="w-full px-4 py-2.5 text-left text-sm text-white/70 hover:text-white hover:bg-white/[0.05] transition-all duration-200 border-t border-white/[0.08]"
                    >
                      My Journey
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        }

        return (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            className={`relative text-sm px-4 py-2 rounded-full transition-all duration-200 cursor-pointer ${
              isActive ? 'text-white' : 'text-white/70 hover:text-white'
            }`}
          >
            {/* Active background capsule */}
            {isActive && (
              <motion.div
                layoutId="activeNavLink"
                className="absolute inset-0 bg-white/[0.05] rounded-full border border-white/[0.08]"
                transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}

            {/* Link text */}
            <span className="relative z-10">{link.label}</span>
          </button>
        );
      })}
    </div>
  );
}
