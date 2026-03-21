'use client';

import { Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/Rameshwar-bhagwat10', icon: Github },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/Rameshwarbhagwat', icon: Linkedin },
  { name: 'Twitter', url: 'https://twitter.com/Rameshwarbhagwat', icon: Twitter },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/[0.04]">
      <div className="container mx-auto px-6 py-8 sm:py-10">
        <div className="flex flex-col items-center gap-6">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3
              className="text-lg sm:text-xl font-bold text-white mb-1"
              style={{ fontFamily: 'var(--font-jakarta)' }}
            >
              Rameshwar Bhagwat
            </h3>
            <p
              className="text-xs sm:text-sm text-white/40"
              style={{
                background: 'linear-gradient(90deg, #FF8C00, #FF1493)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Full Stack & AI Developer
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300"
              >
                <social.icon size={16} />
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[11px] sm:text-xs text-white/25"
          >
            &copy; {new Date().getFullYear()} Rameshwar Bhagwat. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
