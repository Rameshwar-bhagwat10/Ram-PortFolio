'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Copy, Check } from 'lucide-react';
import AchievementsMarquee from './AchievementsMarquee';

const codeSnippets = [
  { code: 'while(alive) { eat(); sleep(); code(); }', language: 'Life.js' },
  { code: '// 99 bugs in the code... 🐛', language: 'Debug.log' },
  { code: 'sudo rm -rf problems/', language: 'Terminal' },
  { code: 'git commit -m "It works! 🎉"', language: 'Git' },
  { code: 'if (coffee) { code(); }', language: 'Morning.js' },
  { code: 'const magic = () => "✨";', language: 'React' },
];

export default function AchievementsSection() {
  const [copied, setCopied] = useState(false);
  const [currentSnippet, setCurrentSnippet] = useState(0);
  const email = 'rameshwarbhagwat019@gmail.com';
  const emailName = 'rameshwarbhagwat019';

  // Rotate code snippets
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-8 mb-16"
    >
      {/* Two Box Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start max-w-2xl mx-auto">
        {/* Left Box - Code Snippets */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-3 relative h-[180px] flex flex-col"
        >
          {/* macOS-style dots */}
          <div className="flex gap-1.5 mb-2">
            <div className="w-2 h-2 rounded-full bg-[#FF5F57]"></div>
            <div className="w-2 h-2 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-2 h-2 rounded-full bg-[#28CA42]"></div>
          </div>

          {/* Code Snippets */}
          <div className="flex-1 flex flex-col gap-1.5 overflow-hidden">
            {codeSnippets.map((snippet, index) => (
              <motion.div
                key={`${snippet.code}-${index}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: currentSnippet === index ? 1 : 0.5, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-md p-1.5 font-mono"
              >
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-[8px] text-white/40">{snippet.language}</span>
                </div>
                <code className="text-[9px] text-green-400 block leading-tight">
                  {snippet.code}
                </code>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Box - Contact */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-3 relative h-[180px] flex flex-col justify-center"
        >
          {/* macOS-style dots */}
          <div className="absolute top-2.5 left-2.5 flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57] hover:brightness-110 transition-all cursor-pointer"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] hover:brightness-110 transition-all cursor-pointer"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#28CA42] hover:brightness-110 transition-all cursor-pointer"></div>
          </div>
          
          {/* Logo */}
          <div className="flex justify-center mb-2">
            <div className="relative">
              <Image 
                src="/icons/logo.svg" 
                alt="Logo" 
                width={60}
                height={60}
                className="hover:scale-110 transition-transform duration-300"
                style={{ filter: 'brightness(0) saturate(100%) invert(13%) sepia(98%) saturate(7471%) hue-rotate(0deg) brightness(98%) contrast(118%)' }}
              />
            </div>
          </div>

          {/* Text */}
          <div className="text-center space-y-1 mb-2">
            <h3 className="text-base font-bold text-white">
              Let's innovate together
            </h3>
            <p className="text-white/60 text-[10px]">
              Ready to bring your vision to life?
            </p>
          </div>

          {/* Email Box */}
          <div className="flex justify-center">
            <div 
              onClick={handleCopyEmail}
              className="flex items-center justify-between gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer group w-fit"
            >
              <span className="text-[10px] font-medium text-white/70 group-hover:text-white/90 transition-colors">
                {emailName}
              </span>
              <div className="flex items-center gap-2">
                {copied ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex items-center gap-1 text-green-400"
                  >
                    <Check size={12} />
                    <span className="text-[10px]">Copied!</span>
                  </motion.div>
                ) : (
                  <Copy size={12} className="text-white/50 group-hover:text-white/70 transition-colors" />
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Marquee Row */}
      <AchievementsMarquee />
    </motion.div>
  );
}
