'use client';

import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/Rameshwar-bhagwat10', icon: Github, color: '#FFFFFF' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/Rameshwarbhagwat', icon: Linkedin, color: '#0A66C2' },
  { name: 'Twitter', url: 'https://twitter.com/Rameshwarbhagwat', icon: Twitter, color: '#1DA1F2' },
  { name: 'Email', url: 'mailto:rameshwarbhagwat@gmail.com', icon: Mail, color: '#30D158' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#080808] border-t border-white/[0.06]">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/[0.01] to-transparent pointer-events-none" />

      {/* Content - Centered with side padding for fixed icons */}
      <div className="relative z-10 flex items-center justify-center py-3 px-24 sm:px-28 md:px-32">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center gap-2.5"
        >
          {/* Brand + Social Links Row */}
          <div className="flex items-center gap-3">
            {/* Name */}
            <span
              className="text-xs sm:text-sm font-semibold text-white/90 tracking-tight"
              style={{ fontFamily: 'var(--font-jakarta)' }}
            >
              Rameshwar Bhagwat
            </span>

            {/* Separator */}
            <div className="w-px h-3 bg-white/10" />

            {/* Social Links */}
            <div className="flex items-center gap-1.5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    whileHover={{ y: -2, scale: 1.15 }}
                    whileTap={{ scale: 0.92 }}
                    transition={{ duration: 0.15 }}
                    className="group w-6 h-6 rounded-[6px] flex items-center justify-center transition-all duration-200"
                    style={{
                      background: `${social.color}10`,
                      border: `1px solid ${social.color}25`,
                    }}
                  >
                    <Icon
                      size={11}
                      className="transition-colors duration-200"
                      style={{ color: social.color, opacity: 0.8 }}
                    />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Copyright */}
          <p className="text-[8px] sm:text-[9px] text-white/30 font-medium tracking-wider uppercase">
            &copy; {currentYear} • Built with passion
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
