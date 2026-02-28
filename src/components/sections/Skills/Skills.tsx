'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Container from '@/components/layout/Container';
import MarqueeRow from './MarqueeRow';
import { skills } from './skills.data';
import CustomParticleBackground from '@/components/background/CustomParticleBackground';
import { PERSONAL_INFO } from '@/lib/constants';

export default function Skills() {
  // Split skills into two groups for different rows
  const midPoint = Math.ceil(skills.length / 2);
  const topRowSkills = skills.slice(0, midPoint);
  const bottomRowSkills = skills.slice(midPoint);

  return (
    <section
      id="skills"
      className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-[#0F0E0E] overflow-hidden"
      aria-label="Technical Skills and Expertise"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      {/* SEO Microdata */}
      <meta itemProp="name" content="Technical Skills - Rameshwar Bhagwat" />
      <meta itemProp="description" content="Comprehensive list of programming languages, frameworks, and technologies mastered by Rameshwar Bhagwat including React, Next.js, TypeScript, Node.js, Python, and modern web development tools." />
      <meta itemProp="numberOfItems" content={skills.length.toString()} />

      {/* Hidden SEO Content */}
      <div className="sr-only">
        <h2>Technical Skills and Expertise</h2>
        <p>
          Rameshwar Bhagwat is proficient in a wide range of modern web development technologies, 
          frameworks, and tools. With expertise spanning frontend, backend, databases, cloud services, 
          and DevOps, he delivers comprehensive full-stack solutions.
        </p>

        <h3>Frontend Development Skills</h3>
        <ul>
          <li>React.js - Advanced component architecture and state management</li>
          <li>Next.js - Server-side rendering and static site generation</li>
          <li>TypeScript - Type-safe JavaScript development</li>
          <li>JavaScript (ES6+) - Modern JavaScript features and patterns</li>
          <li>HTML5 & CSS3 - Semantic markup and modern styling</li>
          <li>Tailwind CSS - Utility-first CSS framework</li>
          <li>Framer Motion - Advanced animations and interactions</li>
          <li>Redux & Zustand - State management solutions</li>
          <li>React Query - Data fetching and caching</li>
        </ul>

        <h3>Backend Development Skills</h3>
        <ul>
          <li>Node.js - Server-side JavaScript runtime</li>
          <li>Express.js - Web application framework</li>
          <li>Python - Backend development and scripting</li>
          <li>FastAPI - Modern Python web framework</li>
          <li>RESTful API Design - API architecture and best practices</li>
          <li>GraphQL - Query language for APIs</li>
          <li>WebSocket - Real-time communication</li>
        </ul>

        <h3>Database Technologies</h3>
        <ul>
          <li>MongoDB - NoSQL database</li>
          <li>PostgreSQL - Relational database</li>
          <li>MySQL - Relational database management</li>
          <li>Redis - In-memory data structure store</li>
          <li>Prisma - Next-generation ORM</li>
          <li>Database Design - Schema design and optimization</li>
        </ul>

        <h3>Cloud & DevOps</h3>
        <ul>
          <li>AWS (Amazon Web Services) - Cloud infrastructure</li>
          <li>Google Cloud Platform - Cloud services</li>
          <li>Docker - Containerization</li>
          <li>Kubernetes - Container orchestration</li>
          <li>CI/CD - Continuous integration and deployment</li>
          <li>GitHub Actions - Automated workflows</li>
          <li>Vercel - Deployment platform</li>
          <li>Netlify - Web hosting and automation</li>
        </ul>

        <h3>Tools & Technologies</h3>
        <ul>
          <li>Git & GitHub - Version control</li>
          <li>VS Code - Code editor</li>
          <li>Postman - API testing</li>
          <li>Figma - Design collaboration</li>
          <li>Jest & Vitest - Testing frameworks</li>
          <li>Webpack & Vite - Build tools</li>
          <li>ESLint & Prettier - Code quality tools</li>
        </ul>

        <h3>Specialized Skills</h3>
        <ul>
          <li>AI/ML Integration - TensorFlow, Machine Learning APIs</li>
          <li>Blockchain Development - Smart contracts and DApps</li>
          <li>WebRTC - Real-time communication</li>
          <li>Payment Integration - Stripe, PayPal</li>
          <li>SEO Optimization - Technical SEO and performance</li>
          <li>Accessibility (A11y) - WCAG compliance</li>
          <li>Performance Optimization - Core Web Vitals</li>
          <li>Security Best Practices - OWASP guidelines</li>
        </ul>

        <h3>Soft Skills</h3>
        <ul>
          <li>Problem Solving - Analytical thinking and debugging</li>
          <li>System Design - Architecture and scalability</li>
          <li>Code Review - Best practices and mentoring</li>
          <li>Technical Writing - Documentation and blogs</li>
          <li>Agile Methodology - Scrum and Kanban</li>
          <li>Team Collaboration - Git workflow and communication</li>
        </ul>
      </div>

      {/* Particle Background - Removed for performance */}
      {/* <CustomParticleBackground color="100, 150, 255" particleCount={35} /> */}

      {/* Subtle background glow - hidden on mobile */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12 md:mb-16 text-center"
        >
          <p className="text-primary-gradient text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2 sm:mb-3">My Arsenal</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-2 sm:mb-3 md:mb-4 text-white px-2">
            Technologies <span className="text-primary-gradient">I Master</span>
          </h2>
          <p className="text-muted text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">Building modern web experiences with cutting-edge tools and frameworks</p>
        </motion.div>

        {/* Marquee Rows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8 sm:space-y-12 md:space-y-16"
          role="list"
          aria-label="Technology skills showcase"
        >
          {/* Top Row - Left to Right */}
          <MarqueeRow skills={topRowSkills} speed={15} />

          {/* Bottom Row - Right to Left (Reverse) */}
          <MarqueeRow skills={bottomRowSkills} speed={15} reverse />
        </motion.div>
      </Container>
    </section>
  );
}
