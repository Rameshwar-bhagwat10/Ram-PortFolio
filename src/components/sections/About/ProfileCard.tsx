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
        className="relative w-64 h-64 mb-8"
      >
        {/* Animated ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-full bg-primary-gradient p-[4px]"
        >
          <div className="w-full h-full rounded-full bg-background" />
        </motion.div>

        {/* Profile picture */}
        <div className="absolute inset-[4px] rounded-full overflow-hidden shadow-2xl">
          <Image
            src="/images/profile/profile.jpeg"
            alt="Profile"
            width={256}
            height={256}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </motion.div>

      {/* Name */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative mb-6 text-center"
      >
        <motion.h3
          className="text-xl md:text-2xl font-light tracking-wide leading-[1.4] font-[family-name:var(--font-abril-fatface)] inline-block"
          style={{
            background: 'linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.3) 60%, rgba(255,255,255,0.3) 100%)',
            backgroundSize: '200% 100%',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '200% 0%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          Rameshwar Bhagwat
        </motion.h3>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-center gap-2"
      >
        <motion.a
          href="mailto:rameshwarbhagwat019@gmail.com"
          whileHover={{ scale: 1.15, y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary-gradient-hover border border-white/10 hover:border-pink-500 transition-all duration-300 flex items-center justify-center group"
        >
          <Mail size={16} className="text-muted group-hover:text-pink-400 transition-colors" />
        </motion.a>
        
        <motion.a
          href="https://linkedin.com/in/Rameshwarbhagwat"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary-gradient-hover border border-white/10 hover:border-pink-500 transition-all duration-300 flex items-center justify-center group"
        >
          <Linkedin size={16} className="text-muted group-hover:text-pink-400 transition-colors" />
        </motion.a>
        
        <motion.a
          href="https://github.com/Rameshwar-bhagwat10"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary-gradient-hover border border-white/10 hover:border-pink-500 transition-all duration-300 flex items-center justify-center group"
        >
          <Github size={16} className="text-muted group-hover:text-pink-400 transition-colors" />
        </motion.a>

        <motion.a
          href="https://twitter.com/Rameshwarbhagwat"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary-gradient-hover border border-white/10 hover:border-pink-500 transition-all duration-300 flex items-center justify-center group"
        >
          <Twitter size={16} className="text-muted group-hover:text-pink-400 transition-colors" />
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
