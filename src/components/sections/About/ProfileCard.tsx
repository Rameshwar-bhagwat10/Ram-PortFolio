'use client';

import Image from 'next/image';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/lib/constants';

export default function ProfileCard() {
  return (
    <div className="flex flex-col items-center">
      {/* Profile Image */}
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mb-6 sm:mb-8">
        {/* Static ring */}
        <div className="absolute inset-0 rounded-full bg-primary-gradient p-[3px] sm:p-[4px]">
          <div className="w-full h-full rounded-full bg-background" />
        </div>

        {/* Profile picture */}
        <div className="absolute inset-[3px] sm:inset-[4px] rounded-full overflow-hidden shadow-2xl">
          <Image
            src="/images/profile/profile.jpeg"
            alt={`${PERSONAL_INFO.name} - ${PERSONAL_INFO.jobTitle}`}
            width={256}
            height={256}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>

      {/* Name */}
      <div className="relative mb-4 sm:mb-6 text-center">
        <h3 className="text-lg sm:text-xl md:text-2xl font-light tracking-wide leading-[1.4] font-[family-name:var(--font-abril-fatface)] text-white">
          {PERSONAL_INFO.name}
        </h3>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-2">
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 hover:bg-primary-gradient-hover border border-white/10 hover:border-pink-500 transition-all duration-300 flex items-center justify-center group"
          aria-label="Email Rameshwar Bhagwat"
        >
          <Mail size={14} className="sm:w-4 sm:h-4 text-muted group-hover:text-pink-400 transition-colors" />
        </a>
        
        <a
          href={SOCIAL_LINKS.find(link => link.name === 'LinkedIn')?.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 hover:bg-primary-gradient-hover border border-white/10 hover:border-pink-500 transition-all duration-300 flex items-center justify-center group"
          aria-label="LinkedIn Profile"
        >
          <Linkedin size={14} className="sm:w-4 sm:h-4 text-muted group-hover:text-pink-400 transition-colors" />
        </a>
        
        <a
          href={SOCIAL_LINKS.find(link => link.name === 'GitHub')?.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 hover:bg-primary-gradient-hover border border-white/10 hover:border-pink-500 transition-all duration-300 flex items-center justify-center group"
          aria-label="GitHub Profile"
        >
          <Github size={14} className="sm:w-4 sm:h-4 text-muted group-hover:text-pink-400 transition-colors" />
        </a>

        <a
          href={SOCIAL_LINKS.find(link => link.name === 'Twitter')?.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 hover:bg-primary-gradient-hover border border-white/10 hover:border-pink-500 transition-all duration-300 flex items-center justify-center group"
          aria-label="Twitter Profile"
        >
          <Twitter size={14} className="sm:w-4 sm:h-4 text-muted group-hover:text-pink-400 transition-colors" />
        </a>
      </div>
    </div>
  );
}
