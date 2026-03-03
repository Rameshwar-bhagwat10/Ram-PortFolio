'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from './work.data';
import ProjectCard from './ProjectCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Work() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    if (currentIndex < projects.length - 1) {
      setDirection(1);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? 15 : -15,
      filter: 'blur(10px)',
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      filter: 'blur(0px)',
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? -15 : 15,
      filter: 'blur(10px)',
    }),
  };

  return (
    <section 
      id="work" 
      className="relative bg-[#0F0E0E] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32"
      aria-label="Featured Projects Portfolio"
      itemScope
      itemType="https://schema.org/CreativeWork"
    >
      {/* SEO Microdataa */}
      <meta itemProp="name" content="Featured Projects - Rameshwar Bhagwat Portfolio" />
      <meta itemProp="description" content="Showcase of full-stack web development projects including AI SaaS platforms, e-commerce marketplaces, healthcare portals, and fintech dashboards built with React, Next.js, TypeScript, and modern technologies." />
      <meta itemProp="author" content="Rameshwar Bhagwat" />
      <meta itemProp="keywords" content="web development projects, full stack portfolio, React projects, Next.js applications, TypeScript projects, MERN stack projects, AI SaaS, e-commerce platform, healthcare portal, fintech dashboard" />

      {/* Hidden SEO Content */}
      <div className="sr-only">
        <h2>Featured Projects Portfolio - Full Stack Web Development</h2>
        <p>
          Explore a curated collection of production-ready web applications built by Rameshwar Bhagwat, 
          showcasing expertise in full-stack development, modern JavaScript frameworks, and scalable architecture.
        </p>
        
        <h3>Project Highlights</h3>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <h4>{project.title}</h4>
              <p>{project.tagline} - {project.description}</p>
              <p>Technologies: {project.techStack.join(', ')}</p>
              <ul>
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <h3>Technical Expertise Demonstrated</h3>
        <ul>
          <li>Frontend Development: React, Next.js, TypeScript, JavaScript, Responsive Design</li>
          <li>Backend Development: Node.js, Python, FastAPI, GraphQL, RESTful APIs</li>
          <li>Databases: PostgreSQL, MongoDB, TimescaleDB, Redis</li>
          <li>AI/ML Integration: TensorFlow, Machine Learning APIs, Natural Language Processing</li>
          <li>Cloud & DevOps: AWS, Docker, Kafka, WebRTC</li>
          <li>Payment Integration: Stripe, Secure Payment Gateways</li>
          <li>Real-time Features: WebSocket, Live Data Streaming, Real-time Analytics</li>
          <li>Security: HIPAA Compliance, Blockchain Verification, End-to-end Encryption</li>
        </ul>

        <h3>Project Categories</h3>
        <ul>
          <li>AI & Machine Learning Applications</li>
          <li>E-commerce & Marketplace Platforms</li>
          <li>Healthcare & Telemedicine Solutions</li>
          <li>Financial Technology & Analytics</li>
          <li>Enterprise SaaS Applications</li>
        </ul>

        <h3>Key Achievements</h3>
        <ul>
          <li>Built scalable applications serving 10,000+ concurrent users</li>
          <li>Achieved 99.9% uptime for production systems</li>
          <li>Improved conversion rates by 40% through optimization</li>
          <li>Processed millions of transactions daily with zero downtime</li>
          <li>Implemented HIPAA-compliant healthcare solutions</li>
          <li>Delivered real-time features with sub-100ms latency</li>
        </ul>
      </div>

      {/* Header Section */}
      <div className="container mx-auto px-4 sm:px-6 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {/* Small label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4 sm:mb-5 md:mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FF8C00] to-[#FF5F00] animate-pulse" />
            <span className="text-xs sm:text-sm text-white/70 font-medium">Portfolio Showcase</span>
          </motion.div>

          {/* Main heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-3 sm:mb-4 md:mb-5 px-2 leading-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5 md:mb-6">
            <div className="h-[1px] w-12 sm:w-16 md:w-20 bg-gradient-to-r from-transparent to-white/20" />
            <div className="w-1.5 h-1.5 rotate-45 bg-primary-gradient" />
            <div className="h-[1px] w-12 sm:w-16 md:w-20 bg-gradient-to-l from-transparent to-white/20" />
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/60 leading-relaxed px-4 max-w-2xl mx-auto">
            Explore a curated collection of full-stack applications showcasing expertise in modern web technologies, 
            scalable architecture, and innovative solutions across <span className="text-white/80 font-medium">AI, e-commerce, healthcare, and fintech</span> domains.
          </p>

          {/* Stats or badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-7 md:mt-8">
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <span className="text-base sm:text-lg font-bold text-gradient">{projects.length}</span>
              </div>
              <span className="text-white/50">Projects</span>
            </div>
            <div className="w-px h-6 bg-white/10" />
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <span className="text-base sm:text-lg font-bold text-gradient">15+</span>
              </div>
              <span className="text-white/50">Technologies</span>
            </div>
            <div className="w-px h-6 bg-white/10" />
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <span className="text-base sm:text-lg font-bold text-gradient">4</span>
              </div>
              <span className="text-white/50">Industries</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full h-[500px] xs:h-[550px] sm:h-[600px] md:h-[650px] lg:h-[700px] xl:h-[800px] overflow-visible md:overflow-hidden perspective-1000">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { 
                type: "spring", 
                stiffness: 200, 
                damping: 25,
                mass: 1
              },
              opacity: { 
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1]
              },
              scale: {
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1]
              },
              rotateY: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
              },
              filter: {
                duration: 0.4,
                ease: "easeInOut"
              }
            }}
            className="absolute inset-0"
            style={{
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
            }}
          >
            <ProjectCard project={projects[currentIndex]} index={currentIndex} />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows - Desktop (side placement) */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`hidden md:flex absolute left-6 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 lg:w-14 lg:h-14 rounded-full items-center justify-center transition-all duration-300 group ${
            currentIndex === 0
              ? 'opacity-30 cursor-not-allowed'
              : 'cursor-pointer hover:scale-110 active:scale-95'
          }`}
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
          }}
          aria-label="Previous project"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <ChevronLeft className="w-6 h-6 lg:w-7 lg:h-7 text-white relative z-10 drop-shadow-lg" />
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex === projects.length - 1}
          className={`hidden md:flex absolute right-6 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 lg:w-14 lg:h-14 rounded-full items-center justify-center transition-all duration-300 group ${
            currentIndex === projects.length - 1
              ? 'opacity-30 cursor-not-allowed'
              : 'cursor-pointer hover:scale-110 active:scale-95'
          }`}
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
          }}
          aria-label="Next project"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <ChevronRight className="w-6 h-6 lg:w-7 lg:h-7 text-white relative z-10 drop-shadow-lg" />
        </button>
      </div>

      {/* Navigation Arrows - Mobile (bottom placement) */}
      <div className="flex md:hidden justify-center gap-4 mt-6">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`w-12 h-12 xs:w-13 xs:h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 group ${
            currentIndex === 0
              ? 'opacity-30 cursor-not-allowed'
              : 'cursor-pointer active:scale-95'
          }`}
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
          }}
          aria-label="Previous project"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-active:opacity-100 transition-opacity duration-300" />
          <ChevronLeft className="w-6 h-6 xs:w-7 xs:h-7 text-white relative z-10 drop-shadow-lg" />
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex === projects.length - 1}
          className={`w-12 h-12 xs:w-13 xs:h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 group ${
            currentIndex === projects.length - 1
              ? 'opacity-30 cursor-not-allowed'
              : 'cursor-pointer active:scale-95'
          }`}
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
          }}
          aria-label="Next project"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-active:opacity-100 transition-opacity duration-300" />
          <ChevronRight className="w-6 h-6 xs:w-7 xs:h-7 text-white relative z-10 drop-shadow-lg" />
        </button>
      </div>
    </section>
  );
}
