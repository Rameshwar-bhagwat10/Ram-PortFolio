'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, X, Clock, ArrowUpRight } from 'lucide-react';
import ContactForm from './ContactForm';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/lib/constants';

interface ContactCardProps {
  onClose?: () => void;
}

const socialIcons: Record<string, typeof Github> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter: Twitter,
};

export default function ContactCard({ onClose }: ContactCardProps) {
  return (
    <div
      className="relative rounded-[24px] backdrop-blur-xl border border-white/[0.12] overflow-hidden"
      style={{
        background: 'rgba(22, 22, 24, 0.9)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
      }}
    >
      {/* Close Button */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.08] flex items-center justify-center transition-colors z-20"
          aria-label="Close"
        >
          <X size={14} className="text-white/50" />
        </button>
      )}

      <div className="flex flex-col md:flex-row">
        {/* Left Column - Contact Info */}
        <div className="md:w-[45%] p-5 md:p-6 border-b md:border-b-0 md:border-r border-white/[0.08]">
          {/* Header */}
          <div className="mb-5">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1.5 tracking-[-0.02em]">
              Let's Connect
            </h3>
            <p className="text-[13px] text-white/50 leading-relaxed">
              I'm always open to discussing new projects and opportunities.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-2.5 mb-5">
            {/* Email */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/[0.1] transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#0A84FF]/10 border border-[#0A84FF]/20 flex items-center justify-center">
                <Mail size={14} className="text-[#0A84FF]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] uppercase tracking-wider text-white/35">Email</p>
                <p className="text-[13px] text-white/80 truncate group-hover:text-white transition-colors">
                  {PERSONAL_INFO.email}
                </p>
              </div>
              <ArrowUpRight size={14} className="text-white/20 group-hover:text-white/40 transition-colors" />
            </a>

            {/* Phone */}
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/[0.1] transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#30D158]/10 border border-[#30D158]/20 flex items-center justify-center">
                <Phone size={14} className="text-[#30D158]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] uppercase tracking-wider text-white/35">Phone</p>
                <p className="text-[13px] text-white/80 group-hover:text-white transition-colors">
                  {PERSONAL_INFO.phone}
                </p>
              </div>
              <ArrowUpRight size={14} className="text-white/20 group-hover:text-white/40 transition-colors" />
            </a>

            {/* Location */}
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
              <div className="w-8 h-8 rounded-lg bg-[#FF9F0A]/10 border border-[#FF9F0A]/20 flex items-center justify-center">
                <MapPin size={14} className="text-[#FF9F0A]" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] uppercase tracking-wider text-white/35">Location</p>
                <p className="text-[13px] text-white/80">
                  {PERSONAL_INFO.location.city}, {PERSONAL_INFO.location.country}
                </p>
              </div>
            </div>

            {/* Response Time */}
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
              <div className="w-8 h-8 rounded-lg bg-[#BF5AF2]/10 border border-[#BF5AF2]/20 flex items-center justify-center">
                <Clock size={14} className="text-[#BF5AF2]" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] uppercase tracking-wider text-white/35">Response Time</p>
                <p className="text-[13px] text-white/80">Within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <p className="text-[10px] uppercase tracking-wider text-white/35 mb-2">Follow Me</p>
            <div className="flex gap-2">
              {SOCIAL_LINKS.map((social) => {
                const Icon = socialIcons[social.name] || Github;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center hover:bg-white/[0.08] hover:border-white/[0.12] transition-all group"
                    aria-label={social.name}
                  >
                    <Icon size={16} className="text-white/50 group-hover:text-white/80 transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="md:w-[55%] p-5 md:p-6">
          {/* Form Header */}
          <div className="mb-5">
            <h4 className="text-lg font-semibold text-white mb-1 tracking-[-0.01em]">
              Send a Message
            </h4>
            <p className="text-[12px] text-white/45">
              Fill out the form and I'll get back to you as soon as possible.
            </p>
          </div>

          {/* Contact Form */}
          <ContactForm onClose={onClose} />
        </div>
      </div>
    </div>
  );
}
