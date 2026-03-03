'use client';

import { Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import VisitorCounter from '@/components/analytics/VisitorCounter';

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter: Twitter,
};

export default function Footer() {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Rameshwar-bhagwat10', icon: 'GitHub' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/Rameshwarbhagwat', icon: 'LinkedIn' },
    { name: 'Twitter', url: 'https://twitter.com/Rameshwarbhagwat', icon: 'Twitter' },
  ];

  return (
    <footer className="relative z-10 bg-background/50 backdrop-blur-sm border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Visitor Stats - Compact */}
        <div className="mb-6 flex justify-center">
          <VisitorCounter variant="footer" showDetails={true} />
        </div>

        {/* Main Footer Content - Single Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-base font-bold text-white mb-1">Rameshwar Bhagwat</h3>
            <p className="text-xs text-muted">
              Full Stack & AI Developer
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            <Link
              href="/faq"
              className="text-sm text-muted hover:text-white transition-colors duration-300"
            >
              FAQ
            </Link>
            
            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social, index) => {
                const Icon = socialIcons[social.icon as keyof typeof socialIcons];
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group"
                    aria-label={social.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-full bg-primary-gradient opacity-0 group-hover:opacity-20 blur-lg transition-all duration-300" />
                    
                    {/* Icon container */}
                    <div className="relative w-8 h-8 rounded-full bg-white/5 border border-white/10 group-hover:border-pink-500/50 transition-all duration-300 flex items-center justify-center group-hover:bg-white/10">
                      <Icon 
                        size={16} 
                        className="text-muted group-hover:text-white transition-colors duration-300" 
                      />
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted text-xs">
              &copy; {new Date().getFullYear()} Rameshwar Bhagwat
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
