'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter, MapPin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/lib/constants';
import {
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs,
  SiPython, SiAmazon, SiTensorflow, SiDocker
} from 'react-icons/si';
import { Layers } from 'lucide-react';
import GlowCard from '@/components/ui/GlowCard';

const expertise = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'AI/ML', icon: SiTensorflow, color: '#FF6F00' },
  { name: 'System Design', icon: Layers, color: '#8B5CF6' },
];

const socialLinks = [
  { name: 'Email', icon: Mail, href: `mailto:${PERSONAL_INFO.email}`, label: 'Email Rameshwar Bhagwat' },
  { name: 'LinkedIn', icon: Linkedin, href: SOCIAL_LINKS.find(l => l.name === 'LinkedIn')?.url || '#', label: 'LinkedIn Profile' },
  { name: 'GitHub', icon: Github, href: SOCIAL_LINKS.find(l => l.name === 'GitHub')?.url || '#', label: 'GitHub Profile' },
  { name: 'Twitter', icon: Twitter, href: SOCIAL_LINKS.find(l => l.name === 'Twitter')?.url || '#', label: 'Twitter Profile' },
];

export default function ProfileCard() {
  return (
    <GlowCard
      className="bg-[#141414] border border-white/[0.06] rounded-2xl sm:rounded-3xl w-full h-full"
      glowColor="rgba(249, 115, 22, 0.6)"
      glowSize={280}
    >
      <motion.div
        className="relative p-6 sm:p-8 h-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-6 right-6 sm:left-8 sm:right-8 h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      {/* Profile Section */}
      <div className="flex flex-col items-center">
        {/* Profile Image */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-5 sm:mb-6">
          {/* Animated gradient ring */}
          <div 
            className="absolute -inset-[3px] rounded-full animate-border-rotate"
            style={{
              background: 'conic-gradient(from var(--border-angle, 0deg), #f97316 0%, #ef4444 25%, #ec4899 50%, #8b5cf6 75%, #f97316 100%)',
            }}
          />
          {/* Dark ring gap */}
          <div className="absolute inset-0 rounded-full bg-[#141414]" />
          {/* Profile picture */}
          <div className="absolute inset-[3px] rounded-full overflow-hidden">
            <Image
              src="/images/profile/profile.jpeg"
              alt={`${PERSONAL_INFO.name} - ${PERSONAL_INFO.jobTitle}`}
              width={256}
              height={256}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          {/* Online status dot */}
          <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-500 border-[3px] border-[#141414] z-10">
            <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-40" />
          </div>
        </div>

        {/* Name */}
        <h3 
          className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1.5"
          style={{ fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif', fontWeight: 700 }}
        >
          {PERSONAL_INFO.name}
        </h3>

        {/* Job Title Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] mb-3">
          <Sparkles size={11} className="text-orange-400" />
          <span className="text-[11px] sm:text-xs text-white/50 font-medium">{PERSONAL_INFO.jobTitle}</span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-white/35 mb-5 sm:mb-6">
          <MapPin size={11} />
          <span className="text-[11px] sm:text-xs">{PERSONAL_INFO.location.city}, {PERSONAL_INFO.location.state}, {PERSONAL_INFO.location.country}</span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-2 mb-6 sm:mb-8">
          {socialLinks.map(({ name, icon: Icon, href, label }) => (
            <a
              key={name}
              href={href}
              target={name === 'Email' ? undefined : '_blank'}
              rel={name === 'Email' ? undefined : 'noopener noreferrer'}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-300 flex items-center justify-center group"
              aria-label={label}
            >
              <Icon size={14} className="sm:w-4 sm:h-4 text-white/40 group-hover:text-white/80 transition-colors" />
            </a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-6 sm:mb-8" />

      {/* Core Expertise */}
      <div>
        <h4 className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-white/30 mb-4 text-center">
          Core Expertise
        </h4>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
          {expertise.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-300"
            >
              <skill.icon size={12} className="sm:w-3.5 sm:h-3.5 flex-shrink-0" style={{ color: skill.color }} />
              <span className="text-[10px] sm:text-xs text-white/55 font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
      </motion.div>
    </GlowCard>
  );
}
