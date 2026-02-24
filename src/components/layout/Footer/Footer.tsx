'use client';

import { Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
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
    <footer className="relative z-10 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Visitor Stats */}
        <div className="mb-6 flex justify-center">
          <VisitorCounter variant="footer" showDetails={true} />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-sm">
            &copy; {new Date().getFullYear()} Rameshwar Bhagwat. All rights reserved.
          </p>
          
          <div className="flex gap-3">
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
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-full bg-primary-gradient opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300" />
                  
                  {/* Icon container */}
                  <div className="relative w-10 h-10 rounded-full bg-white/5 border border-white/10 group-hover:border-pink-500/50 transition-all duration-300 flex items-center justify-center group-hover:bg-primary-gradient-hover">
                    <Icon 
                      size={18} 
                      className="text-muted group-hover:text-white transition-colors duration-300" 
                    />
                  </div>
                  
                  {/* Animated ring on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-pink-500/0 group-hover:border-pink-500/50"
                    initial={{ scale: 1, opacity: 0 }}
                    whileHover={{ scale: 1.3, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
