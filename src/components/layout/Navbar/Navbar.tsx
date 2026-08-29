'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';
import useScrollSpy from '@/hooks/useScrollSpy';
import { useIntroAnimation } from '@/context/IntroAnimationContext';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(['hero', 'about', 'skills', 'work', 'contact']);
  const { isIntroComplete } = useIntroAnimation();
  const [isHoveredHorizontal, setIsHoveredHorizontal] = useState(false);
  const [hasPlayedIntro, setHasPlayedIntro] = useState(false);

  // Scroll visibility states
  const [isVisible, setIsVisible] = useState(true);

  // Mark intro as played after first animation cycle completes
  useEffect(() => {
    if (isIntroComplete && !hasPlayedIntro) {
      const timer = setTimeout(() => {
        setHasPlayedIntro(true);
      }, 3200); // After all Phase 3 animations complete
      return () => clearTimeout(timer);
    }
  }, [isIntroComplete, hasPlayedIntro]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY;

      // Always show navbar near top or when mobile menu is open
      if (currentScrollY < 50 || isMobileMenuOpen) {
        setIsVisible(true);
      } else {
        // Scroll down -> hide instantly
        if (diff > 0) {
          setIsVisible(false);
        } 
        // Scroll up -> show instantly
        else if (diff < 0) {
          setIsVisible(true);
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  const shouldBeVisibleMobile = isIntroComplete && isVisible;

  return (
    <>
      {/* Desktop Logo - Fixed at Top Left */}
      <div className="hidden md:block">
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={isIntroComplete ? { y: 0, opacity: 1 } : { y: -40, opacity: 0 }}
          transition={{ duration: 0.8, delay: isIntroComplete && !hasPlayedIntro ? 0.9 : 0, ease: [0.34, 1.56, 0.64, 1] }}
          className={`fixed top-6 left-6 md:left-10 z-50 cursor-pointer w-20 h-20 ${isIntroComplete && !hasPlayedIntro ? 'hero-logo-animated' : ''}`}
          onClick={() => {
            if (pathname === '/') {
              window.dispatchEvent(new CustomEvent('trigger-nav-fade', { detail: { id: 'hero' } }));
            } else {
              router.push('/');
            }
          }}
          whileHover={{ scale: 1.1 }}
        >
          <Image
            src="/icons/logo.svg"
            alt="Rameshwar Bhagwat Logo"
            width={80}
            height={80}
            className="w-full h-full object-contain"
            priority
          />
        </motion.div>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:block">
        {/* TOP HORIZONTAL NAV MODE */}
        <motion.nav
          initial={{ y: -100, scale: 0.95, opacity: 0, rotateX: 10 }}
          animate={{
            y: isIntroComplete && isVisible ? 0 : -100,
            scale: isIntroComplete && isVisible ? 1 : 0.95,
            opacity: isIntroComplete && isVisible ? 1 : 0,
            rotateX: isIntroComplete && isVisible ? 0 : 10
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 22, mass: 0.9, delay: isIntroComplete && isVisible && !hasPlayedIntro ? 0.9 : 0 }}
          onMouseEnter={() => setIsHoveredHorizontal(true)}
          onMouseLeave={() => setIsHoveredHorizontal(false)}
          className={`fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-6 md:px-10 ${isIntroComplete && !hasPlayedIntro ? 'hero-nav-animated' : ''}`}
        >
          <div
            className="relative rounded-full px-3 py-1.5 flex items-center gap-1 border pointer-events-auto"
            style={{
              background: 'rgba(15, 14, 14, 0.4)',
              backdropFilter: 'blur(8px)',
              borderColor: 'rgba(255, 255, 255, 0.05)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
            }}
          >
            {/* Rotating border wrapper */}
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
                className="absolute left-1/2 top-1/2 w-[150%] aspect-square animate-navbar-border-spin"
                style={{
                  background: 'conic-gradient(from 0deg, #ffffff, rgba(255, 255, 255, 0.2) 25%, rgba(255, 255, 255, 0.2) 75%, #ffffff)',
                  animationDuration: isHoveredHorizontal ? '2s' : '6s',
                  transition: 'animation-duration 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              />
            </div>
            <NavLinks activeSection={activeSection} vertical={false} />
          </div>
        </motion.nav>
      </div>

      {/* Mobile Navbar Header */}
      <motion.header
        className="fixed top-3 left-3.5 right-3.5 sm:left-4 sm:right-4 z-50 flex items-center justify-between pointer-events-none md:hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{
          y: shouldBeVisibleMobile ? 0 : isIntroComplete ? -90 : -20,
          opacity: shouldBeVisibleMobile ? 1 : isIntroComplete ? 0 : 0,
        }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Top-Left: RB Logo */}
        <motion.div
          whileTap={{ scale: 0.94 }}
          className="relative backdrop-blur-xl rounded-full p-2 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex items-center justify-center bg-[#0F0E0E]/70 border border-white/[0.1] cursor-pointer pointer-events-auto w-10 h-10"
          onClick={() => {
            if (pathname === '/') {
              window.dispatchEvent(new CustomEvent('trigger-nav-fade', { detail: { id: 'hero' } }));
            } else {
              router.push('/');
            }
          }}
          aria-label="Home logo"
        >
          {/* Rotating white thin border */}
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
              className="absolute left-1/2 top-1/2 w-[150%] aspect-square animate-navbar-border-spin"
              style={{
                background: 'conic-gradient(from 0deg, #ffffff, rgba(255, 255, 255, 0.15) 25%, rgba(255, 255, 255, 0.15) 75%, #ffffff)',
              }}
            />
          </div>
          <Image
            src="/icons/logo.svg"
            alt="Rameshwar Bhagwat Logo"
            width={26}
            height={26}
            className="w-full h-full object-contain relative z-10"
            priority
          />
        </motion.div>

        {/* Top-Right: 3 Lines Hamburger Button */}
        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`relative backdrop-blur-xl rounded-full p-2 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex items-center justify-center bg-[#0F0E0E]/70 border transition-colors duration-300 cursor-pointer pointer-events-auto w-10 h-10 ${
            isMobileMenuOpen ? 'border-white/25 bg-[#0F0E0E]/90 shadow-[0_0_15px_rgba(255,255,255,0.15)]' : 'border-white/[0.1]'
          }`}
          aria-label="Toggle navigation menu"
        >
          {/* Rotating white thin border */}
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
              className="absolute left-1/2 top-1/2 w-[150%] aspect-square animate-navbar-border-spin"
              style={{
                background: 'conic-gradient(from 0deg, #ffffff, rgba(255, 255, 255, 0.15) 25%, rgba(255, 255, 255, 0.15) 75%, #ffffff)',
              }}
            />
          </div>

          {/* 3 Animated Horizontal Lines that morph to an X */}
          <div className="w-4 h-3.5 flex flex-col justify-between items-center relative z-10">
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-[1.5px] bg-white rounded-full origin-center"
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.15 }}
              className="w-full h-[1.5px] bg-white rounded-full"
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-[1.5px] bg-white rounded-full origin-center"
            />
          </div>
        </motion.button>

        {/* Vertical Collapsible Icon Menu (Right-Side) */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          activeSection={activeSection}
        />
      </motion.header>
    </>
  );
}
