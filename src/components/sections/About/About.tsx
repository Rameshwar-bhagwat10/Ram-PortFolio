'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/layout/Container';
import AboutHeader from './AboutHeader';
import ProfileCard from './ProfileCard';
import AboutStory from './AboutStory';
import StatsGrid from './StatsGrid';
import TimelineStrip from './TimelineStrip';
import AchievementsSection from './AchievementsSection';
import CustomParticleBackground from '@/components/background/CustomParticleBackground';

const highlights = [
  {
    id: 'personal',
    title: 'Personal Info',
    description: 'Based in Yeola, Maharashtra, India, I am a passionate Full Stack Developer dedicated to creating innovative web solutions. With a strong foundation in modern technologies and a commitment to continuous learning.',
    points: [
      'Location: Yeola, Maharashtra',
      'Email: rameshwarbhagwat019@gmail.com',
      'Phone: +91 9699245170',
      'Open to remote opportunities'
    ]
  },
  {
    id: 'strengths',
    title: 'Strengths',
    description: 'My core strengths lie in building scalable full-stack applications with modern frameworks and best practices. I excel at problem-solving, clean code architecture, and delivering user-centric solutions.',
    points: [
      'Full Stack Development (MERN)',
      'React & Next.js expertise',
      'RESTful API design',
      'Database optimization & design'
    ]
  },
  {
    id: 'achievements',
    title: 'Achievements',
    description: 'Throughout my journey, I have successfully delivered multiple production-ready applications, contributed to open-source projects, and continuously expanded my technical expertise.',
    points: [
      'Built scalable web applications',
      'Open source contributions',
      'Technical blog writing',
      'Mentored junior developers'
    ]
  },
  {
    id: 'education',
    title: 'Education',
    description: 'Continuously learning and staying updated with the latest technologies and industry trends. My educational journey combines formal education with self-directed learning and practical experience.',
    points: [
      'Computer Science background',
      'Online certifications & courses',
      'Active tech community member',
      'Continuous skill development'
    ]
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState('personal');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const activeHighlight = highlights.find(h => h.id === activeTab) || highlights[0];

  const handleCopyEmail = (text: string) => {
    // Check if the text contains an email
    const emailMatch = text.match(/[\w.-]+@[\w.-]+\.\w+/);
    if (emailMatch) {
      navigator.clipboard.writeText(emailMatch[0]);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };
  return (
    <section 
      id="about" 
      className="relative pt-16 pb-12 px-6 bg-[#0F0E0E] overflow-hidden"
    >
      {/* Particle Background - White */}
      <CustomParticleBackground color="255, 255, 255" particleCount={35} />

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
                <div className="space-y-4">
                  <p className="text-xl md:text-2xl leading-[1.8] font-light text-white/95 tracking-wide" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                    I craft high-performance web applications with clean architecture and exceptional user experiences.
                  </p>
                  <p className="text-lg md:text-xl leading-[1.7] font-light text-white/75 tracking-wide" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                    Specializing in scalable applications that blend cutting-edge technology with intuitive design.
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
                            ? 'bg-primary-gradient text-white shadow-lg shadow-pink-500/30' 
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
                        <span className="w-1 h-6 bg-primary-gradient rounded-full"></span>
                        {activeHighlight.title}
                      </h4>
                      <p className="text-base text-white/80 leading-relaxed mb-4">{activeHighlight.description}</p>
                      
                      {/* Key Points Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                        {activeHighlight.points.map((point, index) => {
                          const isEmail = point.toLowerCase().includes('email:');
                          return (
                            <motion.div
                              key={point}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                              onClick={() => isEmail && handleCopyEmail(point)}
                              className={`flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 ${isEmail ? 'cursor-pointer' : ''}`}
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary-gradient flex-shrink-0"></div>
                              <span className="text-xs font-medium text-white/70">{point}</span>
                              {isEmail && copiedEmail && (
                                <motion.span
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0 }}
                                  className="ml-auto text-[10px] text-green-400"
                                >
                                  Copied!
                                </motion.span>
                              )}
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <AchievementsSection />

          {/* Timeline Strip */}
          <div className="mb-16">
            <TimelineStrip />
          </div>
        </div>
      </Container>
    </section>
  );
}
