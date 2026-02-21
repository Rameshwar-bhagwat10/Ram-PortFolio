'use client';

import { motion } from 'framer-motion';
import ContactForm from './ContactForm';

interface ContactCardProps {
  onClose?: () => void;
}

export default function ContactCard({ onClose }: ContactCardProps) {
  return (
    <motion.div
      className="relative rounded-3xl backdrop-blur-md bg-white/[0.02] border border-white/20 shadow-2xl p-8 md:p-10"
    >
      {/* Close Button - Inside Card */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors z-20"
        >
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}

      {/* Subtle glow */}
      <div
        className="absolute inset-0 rounded-3xl blur-2xl opacity-10 -z-10"
        style={{
          background: 'radial-gradient(circle at top, rgba(255, 140, 0, 0.3) 0%, transparent 70%)',
        }}
      />

      {/* Glass reflection effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 relative z-10">Get in Touch</h3>
      <p className="text-sm text-white/60 mb-8 relative z-10">Send me a message and I'll get back to you within 24 hours</p>

      <div className="relative z-10">
        <ContactForm onClose={onClose} />
      </div>
    </motion.div>
  );
}
