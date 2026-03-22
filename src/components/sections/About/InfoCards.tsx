'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Copy, Check } from 'lucide-react';
import { useVisitorTracking } from '@/hooks/useVisitorTracking';
import GlowCard from '@/components/ui/GlowCard';

export default function InfoCards() {
  const [copied, setCopied] = useState(false);
  const { stats, isLoading } = useVisitorTracking();
  const email = 'rameshwarbhagwat019@gmail.com';
  const emailName = 'rameshwarbhagwat019';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 w-full">
      {/* Left Box - Visitor Analytics */}
      <GlowCard
        className="bg-[#141414] border border-white/[0.06] rounded-2xl sm:rounded-3xl"
        glowColor="rgba(255, 140, 0, 0.7)"
        glowSize={200}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-4 sm:p-6 relative h-[160px] sm:h-[190px] flex flex-col justify-center overflow-hidden"
        >
          {/* Grid Background */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
              `,
              backgroundSize: '24px 24px',
            }}
          />

          {/* Content */}
          <div className="relative z-10 text-center space-y-2 sm:space-y-3">
            {isLoading ? (
              <div className="text-3xl sm:text-4xl font-bold text-white animate-pulse">...</div>
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent"
              >
                {stats.uniqueVisitors.toLocaleString()}+
              </motion.div>
            )}

            <div className="space-y-0.5 sm:space-y-1">
              <h3 className="text-sm sm:text-base font-bold text-white">
                Portfolio Visitors
              </h3>
              <p className="text-white/60 text-[10px] sm:text-xs">
                Thank you for being part of my journey
              </p>
            </div>
          </div>
        </motion.div>
      </GlowCard>

      {/* Right Box - Contact */}
      <GlowCard
        className="bg-[#141414] border border-white/[0.06] rounded-2xl sm:rounded-3xl"
        glowColor="rgba(255, 100, 150, 0.7)"
        glowSize={200}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="p-4 sm:p-6 relative h-[160px] sm:h-[190px] flex flex-col justify-center"
        >
          {/* macOS-style dots */}
          <div className="absolute top-2 sm:top-2.5 left-2 sm:left-2.5 flex gap-1.5 sm:gap-2">
            <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#FF5F57] hover:brightness-110 transition-all cursor-pointer"></div>
            <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#FFBD2E] hover:brightness-110 transition-all cursor-pointer"></div>
            <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#28CA42] hover:brightness-110 transition-all cursor-pointer"></div>
          </div>

          {/* Logo */}
          <div className="flex justify-center mb-1.5 sm:mb-2">
            <div className="relative">
              <Image
                src="/icons/logo.svg"
                alt="Rameshwar Bhagwat Portfolio Logo"
                width={50}
                height={50}
                className="hover:scale-110 transition-transform duration-300 w-[50px] sm:w-[60px] h-[50px] sm:h-[60px]"
                style={{ filter: 'brightness(0) saturate(100%) invert(13%) sepia(98%) saturate(7471%) hue-rotate(0deg) brightness(98%) contrast(118%)' }}
              />
            </div>
          </div>

          {/* Text */}
          <div className="text-center space-y-0.5 sm:space-y-1 mb-1.5 sm:mb-2">
            <h3 className="text-sm sm:text-base font-bold text-white">
              Let&apos;s innovate together
            </h3>
            <p className="text-white/60 text-[9px] sm:text-[10px]">
              Ready to bring your vision to life?
            </p>
          </div>

          {/* Email Box */}
          <div className="flex justify-center">
            <div
              onClick={handleCopyEmail}
              className="flex items-center justify-between gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300 cursor-pointer group w-fit"
            >
              <span className="text-[9px] sm:text-[10px] font-medium text-white/70 group-hover:text-white/90 transition-colors">
                {emailName}
              </span>
              <div className="flex items-center gap-1.5 sm:gap-2">
                {copied ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex items-center gap-1 text-green-400"
                  >
                    <Check size={10} className="sm:w-3 sm:h-3" />
                    <span className="text-[9px] sm:text-[10px]">Copied!</span>
                  </motion.div>
                ) : (
                  <Copy size={10} className="sm:w-3 sm:h-3 text-white/50 group-hover:text-white/70 transition-colors" />
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </GlowCard>
    </div>
  );
}
