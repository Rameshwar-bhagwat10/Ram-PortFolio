'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactCard from './ContactCard';
import CustomParticleBackground from '@/components/background/CustomParticleBackground';
import { PERSONAL_INFO, SITE_URL } from '@/lib/constants';

export default function Contact() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center py-32 px-6 bg-[#0F0E0E] overflow-hidden"
      aria-label="Contact Information and Inquiry Form"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      {/* SEO Microdata */}
      <meta itemProp="name" content="Contact Rameshwar Bhagwat - Full Stack Developer" />
      <meta itemProp="description" content="Get in touch with Rameshwar Bhagwat for full-time opportunities, freelance projects, or collaboration. Available for web development, React, Next.js, and full-stack development projects." />
      <meta itemProp="url" content={`${SITE_URL}#contact`} />

      {/* Contact Information Schema */}
      <div itemProp="mainEntity" itemScope itemType="https://schema.org/Person" className="hidden">
        <meta itemProp="name" content={PERSONAL_INFO.name} />
        <meta itemProp="jobTitle" content={PERSONAL_INFO.jobTitle} />
        <meta itemProp="email" content={PERSONAL_INFO.email} />
        <meta itemProp="telephone" content={PERSONAL_INFO.phone} />
        <meta itemProp="url" content={SITE_URL} />
        
        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <meta itemProp="addressLocality" content={PERSONAL_INFO.location.city} />
          <meta itemProp="addressRegion" content={PERSONAL_INFO.location.state} />
          <meta itemProp="addressCountry" content={PERSONAL_INFO.location.countryCode} />
        </div>
      </div>

      {/* Hidden SEO Content */}
      <div className="sr-only">
        <h2>Contact Rameshwar Bhagwat - Full Stack Developer</h2>
        
        <h3>Get in Touch</h3>
        <p>
          Rameshwar Bhagwat is available for full-time roles, freelance projects, and consulting opportunities. 
          With expertise in React, Next.js, TypeScript, Node.js, and modern web development, 
          he helps startups and enterprises build scalable, high-performance web applications.
        </p>

        <h3>Contact Information</h3>
        <address>
          <p>Name: {PERSONAL_INFO.name}</p>
          <p>Title: {PERSONAL_INFO.jobTitle}</p>
          <p>Email: <a href={`mailto:${PERSONAL_INFO.email}`}>{PERSONAL_INFO.email}</a></p>
          <p>Phone: <a href={`tel:${PERSONAL_INFO.phone}`}>{PERSONAL_INFO.phone}</a></p>
          <p>Location: {PERSONAL_INFO.location.city}, {PERSONAL_INFO.location.state}, {PERSONAL_INFO.location.country}</p>
          <p>Website: <a href={SITE_URL}>{SITE_URL}</a></p>
        </address>

        <h3>Services Offered</h3>
        <ul>
          <li>Full Stack Web Development - End-to-end application development</li>
          <li>React & Next.js Development - Modern frontend applications</li>
          <li>TypeScript Development - Type-safe JavaScript solutions</li>
          <li>Node.js Backend Development - Scalable server-side applications</li>
          <li>API Development - RESTful and GraphQL APIs</li>
          <li>Database Design & Optimization - MongoDB, PostgreSQL, MySQL</li>
          <li>Cloud Deployment - AWS, Google Cloud, Vercel</li>
          <li>Performance Optimization - Core Web Vitals and SEO</li>
          <li>Technical Consulting - Architecture and best practices</li>
          <li>Code Review & Mentoring - Team support and guidance</li>
        </ul>

        <h3>Availability</h3>
        <p>
          Currently available for:
        </p>
        <ul>
          <li>Full-time employment opportunities</li>
          <li>Selective freelance projects</li>
          <li>Technical consulting engagements</li>
          <li>Contract-to-hire positions</li>
          <li>Remote work worldwide</li>
        </ul>

        <h3>Project Types</h3>
        <ul>
          <li>Startup MVP Development - Launch your product quickly</li>
          <li>Enterprise Web Applications - Scalable business solutions</li>
          <li>E-commerce Platforms - Online stores and marketplaces</li>
          <li>SaaS Applications - Software as a Service products</li>
          <li>Progressive Web Apps - Mobile-first web applications</li>
          <li>API Integration - Third-party service integration</li>
          <li>Legacy System Modernization - Upgrade outdated systems</li>
          <li>Performance Optimization - Speed up existing applications</li>
        </ul>

        <h3>Why Work With Me</h3>
        <ul>
          <li>5+ years of professional web development experience</li>
          <li>50+ successfully delivered projects</li>
          <li>98% client satisfaction rate</li>
          <li>Expertise in modern JavaScript ecosystem</li>
          <li>Strong focus on code quality and best practices</li>
          <li>Excellent communication and collaboration skills</li>
          <li>Agile methodology and iterative development</li>
          <li>Commitment to deadlines and project success</li>
        </ul>

        <h3>Response Time</h3>
        <p>
          I typically respond to inquiries within 24 hours during business days. 
          For urgent matters, please mention "URGENT" in your subject line.
        </p>

        <h3>Time Zone</h3>
        <p>
          Based in India (IST - UTC+5:30). Available for meetings across all time zones 
          with flexible scheduling.
        </p>
      </div>

      {/* Particle Background - Removed for performance */}
      {/* <CustomParticleBackground color="100, 255, 150" particleCount={35} /> */}

      {/* Subtle background atmosphere */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
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
          className="group relative px-10 py-3.5 rounded-full font-semibold text-base text-white backdrop-blur-xl bg-white/5 border border-white/20 hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-3 overflow-hidden opacity-80"
          aria-label="Open contact form"
        >
          {/* White glow effect */}
          <div className="absolute inset-0 rounded-full bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
          
          {/* Shimmer effect */}
          <>
            {/* Main shimmer stripe */}
            <motion.div
              className="absolute inset-0 pointer-events-none rounded-full"
              style={{
                width: '80%',
                background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.15) 30%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 255, 255, 0.15) 70%, transparent 100%)',
                filter: 'blur(12px)',
              }}
              animate={{
                left: ['-80%', '180%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                repeatDelay: 1.5,
              }}
              aria-hidden="true"
            />
            {/* Secondary glow layer */}
            <motion.div
              className="absolute inset-0 pointer-events-none rounded-full"
              style={{
                width: '100%',
                background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.05) 40%, rgba(255, 255, 255, 0.08) 50%, rgba(255, 255, 255, 0.05) 60%, transparent 100%)',
                filter: 'blur(20px)',
              }}
              animate={{
                left: ['-100%', '200%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                repeatDelay: 1.5,
              }}
              aria-hidden="true"
            />
          </>
          
          <span className="relative z-10">Get in Touch</span>
          
          {/* Arrow icon */}
          <svg
            className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
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
              aria-label="Close contact form"
            />

            {/* Form Container */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none" role="dialog" aria-modal="true" aria-labelledby="contact-form-title">
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
