'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/layout/Container';
import AboutHeader from './AboutHeader';
import ProfileCard from './ProfileCard';
import AboutStory from './AboutStory';
import StatsGrid from './StatsGrid';
import TimelineStrip from './TimelineStrip';

const highlights = [
  {
    id: 'product',
    title: 'Product-Focused',
    description: 'Building scalable solutions that solve real problems with clean architecture and modern best practices. I prioritize user needs and business goals, ensuring every feature delivers measurable value.',
    points: [
      'User-centric design thinking',
      'Agile development methodology',
      'Data-driven decision making',
      'Continuous iteration & improvement'
    ]
  },
  {
    id: 'ai',
    title: 'AI-Driven',
    description: 'Leveraging modern AI and machine learning to enhance user experiences and automate complex workflows. From natural language processing to predictive analytics, I integrate cutting-edge AI technologies.',
    points: [
      'TensorFlow & PyTorch integration',
      'OpenAI API implementation',
      'Custom ML model development',
      'Natural language processing'
    ]
  },
  {
    id: 'performance',
    title: 'Performance-First',
    description: 'Optimizing for speed, efficiency, and reliability with cutting-edge performance optimization techniques. Every millisecond matters - from Core Web Vitals to server response times.',
    points: [
      'Code splitting & lazy loading',
      'Advanced caching strategies',
      'Database query optimization',
      'Core Web Vitals optimization'
    ]
  },
  {
    id: 'collaboration',
    title: 'Team Collaboration',
    description: 'Working seamlessly with cross-functional teams using agile methodologies and clear communication. I believe great products are built by great teams where ideas flourish.',
    points: [
      'Pair programming sessions',
      'Comprehensive code reviews',
      'Sprint planning & retrospectives',
      'Technical documentation'
    ]
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState('product');
  const activeHighlight = highlights.find(h => h.id === activeTab) || highlights[0];

  return (
    <section 
      id="about" 
      className="relative pt-16 pb-32 px-6 bg-[#0F0E0E] overflow-hidden"
    >
      {/* Extended horizon glow from Hero - fading upward */}
      <div className="absolute top-0 left-0 w-full h-64 pointer-events-none">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-full"
          style={{
            background: 'radial-gradient(ellipse at center top, rgba(255, 80, 30, 0.08) 0%, rgba(220, 60, 20, 0.04) 30%, rgba(180, 40, 15, 0.02) 60%, transparent 100%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      {/* Subtle ambient glows */}
      <div 
        className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"
      />
      <div 
        className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/3 rounded-full blur-3xl pointer-events-none"
      />

      <Container>
        {/* Header */}
        <AboutHeader />

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto">
          {/* Top Row - Profile/Core Expertise on Left, Story on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Side - Profile + Core Expertise */}
            <div className="flex flex-col items-center space-y-8">
              {/* Profile */}
              <ProfileCard />
              
              {/* Core Expertise */}
              <div className="w-full max-w-md">
                <AboutStory />
              </div>
            </div>

            {/* Right Side - Stats + About Info */}
            <div className="flex flex-col space-y-8">
              {/* Stats */}
              <StatsGrid />
              
              {/* About Information */}
              <div className="space-y-6">
                {/* Positioning Statement */}
                <div>
                  <p className="text-lg leading-relaxed text-white/90 mb-4">
                    I craft high-performance web applications with a focus on clean architecture, 
                    modern technologies, and exceptional user experiences.
                  </p>
                  <p className="text-base leading-relaxed text-white/80">
                    With over 5 years of experience in full-stack development, I specialize in 
                    building scalable applications that combine cutting-edge technology with 
                    intuitive design. Currently focused on AI-powered developer tools.
                  </p>
                </div>

                {/* Tabbed Highlights */}
                <div>
                  {/* Mini Navbar */}
                  <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                    {highlights.map((highlight) => (
                      <button
                        key={highlight.id}
                        onClick={() => setActiveTab(highlight.id)}
                        className={`
                          px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300
                          ${activeTab === highlight.id 
                            ? 'bg-primary text-black' 
                            : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                          }
                        `}
                      >
                        {highlight.title}
                      </button>
                    ))}
                  </div>

                  {/* Content Area */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="min-h-[180px]"
                    >
                      <h4 className="text-xl font-bold mb-3 text-white flex items-center gap-2">
                        <span className="w-1 h-6 bg-gradient-to-b from-primary to-orange-600 rounded-full"></span>
                        {activeHighlight.title}
                      </h4>
                      <p className="text-base text-white/80 leading-relaxed mb-4">{activeHighlight.description}</p>
                      
                      {/* Key Points Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                        {activeHighlight.points.map((point, index) => (
                          <motion.div
                            key={point}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                            className="flex items-start gap-2"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-white/70">{point}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Strip */}
          <div className="mb-16">
            <TimelineStrip />
          </div>
        </div>
      </Container>
    </section>
  );
}
