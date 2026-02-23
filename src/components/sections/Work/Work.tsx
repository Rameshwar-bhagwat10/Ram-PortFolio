'use client';

import { useRef } from 'react';
import { useScroll, useTransform, motion, useSpring } from 'framer-motion';
import { projects } from './work.data';
import ProjectCard from './ProjectCard';

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Use useSpring for smoother interpolation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Optimized transform with memoization
  // Adjusted to start horizontal scroll later - user sees first project longer
  const x = useTransform(
    smoothProgress,
    [0, 0.15, 0.40, 0.65, 0.90, 1],
    ['0%', '0%', '-100vw', '-200vw', '-300vw', '-300vw']
  );

  return (
    <section 
      id="work" 
      ref={containerRef} 
      className="relative bg-[#0F0E0E]" 
      style={{ 
        height: '400vh', // Reduced from 430vh for smoother scrolling
        willChange: 'auto',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
      }}
      aria-label="Featured Projects Portfolio"
      itemScope
      itemType="https://schema.org/CreativeWork"
    >
      {/* SEO Microdata */}
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
      {/* Intro Section */}
      <div className="h-[30vh] flex items-center justify-center bg-[#0F0E0E] relative">
        <motion.div 
          className="text-center px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-sm md:text-base text-muted mb-6">
            Crafting digital experiences that make an impact
          </p>
          <div className="flex items-center justify-center gap-2 text-white/40 text-sm" aria-label="Scroll to explore projects">
            <span>Scroll to explore</span>
            <span className="text-xl" aria-hidden="true">↓</span>
          </div>
        </motion.div>
      </div>

      {/* Sticky Projects Section */}
      <div className="sticky top-0 h-screen overflow-hidden bg-[#0F0E0E]">
        <motion.div
          style={{ x, willChange: 'transform', transform: 'translate3d(0,0,0)' }}
          className="flex h-full relative z-10"
          role="list"
          aria-label="Project showcase"
        >
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="w-screen h-full flex-shrink-0"
              role="listitem"
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
