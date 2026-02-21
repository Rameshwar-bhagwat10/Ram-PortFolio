'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactCard from './ContactCard';

export default function Contact() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center py-32 px-6 bg-[#0F0E0E] overflow-hidden"
    >
      {/* Subtle background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial orange glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-5"
          style={{
            background: 'radial-gradient(circle, rgba(255, 140, 0, 0.4) 0%, transparent 70%)',
          }}
        />

        {/* Bottom horizon fade */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0F0E0E] to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Cinematic Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight text-white mb-6"
        >
          Let's Build Something{' '}
          <span className="text-gradient">Extraordinary</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-12"
        >
          Whether you're launching a startup or scaling an enterprise, I'm here to turn your vision into reality
        </motion.p>

        {/* Get in Touch Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsFormOpen(true)}
          className="group relative px-10 py-3.5 rounded-full font-semibold text-base text-white backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300 inline-flex items-center gap-3"
        >
          {/* White glow effect */}
          <div className="absolute inset-0 rounded-full bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <span className="relative z-10">Get in Touch</span>
          
          {/* Arrow icon */}
          <svg
            className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </motion.button>

        {/* Availability Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 max-w-2xl mx-auto space-y-3"
        >
          <p className="text-lg md:text-xl font-medium text-white">
            Available for full-time roles and selective freelance projects.
          </p>
          <p className="text-sm md:text-base text-white/50 leading-relaxed">
            I focus on shipping clean, scalable web solutions that support real users and growing products.
          </p>
        </motion.div>
      </div>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFormOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />

            {/* Form Container */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-lg pointer-events-auto relative"
              >
                <ContactCard onClose={() => setIsFormOpen(false)} />
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
