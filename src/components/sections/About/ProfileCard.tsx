'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

export default function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center"
    >
      {/* Profile Image */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="relative w-48 h-48 mb-8"
      >
        {/* Animated ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-primary p-[4px]"
        >
          <div className="w-full h-full rounded-full bg-background" />
        </motion.div>

        {/* Profile picture */}
        <div className="absolute inset-[4px] rounded-full overflow-hidden shadow-2xl">
          <Image
            src="/images/profile/profile.jpeg"
            alt="Profile"
            width={192}
            height={192}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </motion.div>

      {/* Name */}
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl font-bold mb-3 text-center"
      >
        John Doe
      </motion.h3>

      {/* Role */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="text-xl text-primary font-medium mb-6 text-center"
      >
        Full Stack Developer
      </motion.p>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-center gap-3"
      >
        <motion.a
          href="mailto:john@example.com"
          whileHover={{ scale: 1.15, y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 rounded-full bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary transition-all duration-300 flex items-center justify-center group"
        >
          <Mail size={20} className="text-muted group-hover:text-primary transition-colors" />
        </motion.a>
        
        <motion.a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 rounded-full bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary transition-all duration-300 flex items-center justify-center group"
        >
          <Linkedin size={20} className="text-muted group-hover:text-primary transition-colors" />
        </motion.a>
        
        <motion.a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 rounded-full bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary transition-all duration-300 flex items-center justify-center group"
        >
          <Github size={20} className="text-muted group-hover:text-primary transition-colors" />
        </motion.a>

        <motion.a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 rounded-full bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary transition-all duration-300 flex items-center justify-center group"
        >
          <Twitter size={20} className="text-muted group-hover:text-primary transition-colors" />
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
