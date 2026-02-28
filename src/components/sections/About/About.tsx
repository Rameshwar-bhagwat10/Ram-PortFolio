'use client';

import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/layout/Container';
import AboutHeader from './AboutHeader';
import ProfileCard from './ProfileCard';
import AboutStory from './AboutStory';
import StatsGrid from './StatsGrid';
import TimelineStrip from './TimelineStrip';
import AchievementsSection from './AchievementsSection';
import { PERSONAL_INFO } from '@/lib/constants';

const highlights = [
  {
    id: 'personal',
    title: 'Personal Info',
    description: 'Rameshwar Bhagwat is based in Yeola, Maharashtra, India, and is a passionate Full Stack Developer dedicated to creating innovative web solutions. With a strong foundation in modern technologies and a commitment to continuous learning, Rameshwar Bhagwat delivers exceptional results.',
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
    description: 'Rameshwar Bhagwat excels in building scalable full-stack applications with modern frameworks and best practices. Core strengths include problem-solving, clean code architecture, and delivering user-centric solutions that drive business value.',
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
    description: 'Throughout his journey, Rameshwar Bhagwat has successfully delivered multiple production-ready applications including Devory and ThinkVerse, contributed to open-source projects, and continuously expanded technical expertise in AI and web development.',
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
    description: 'Rameshwar Bhagwat continuously learns and stays updated with the latest technologies and industry trends. The educational journey combines formal IT engineering education with self-directed learning and practical experience in cutting-edge technologies.',
    points: [
      'IT Engineering background',
      'Online certifications & courses',
      'Active tech community member',
      'Continuous skill development'
    ]
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState('personal');
  const [copiedEmail, setCopiedEmail] = useState(false);
  
  const activeHighlight = useMemo(() => 
    highlights.find(h => h.id === activeTab) || highlights[0],
    [activeTab]
  );

  const handleCopyEmail = useCallback((text: string) => {
    const emailMatch = text.match(/[\w.-]+@[\w.-]+\.\w+/);
    if (emailMatch) {
      navigator.clipboard.writeText(emailMatch[0]);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  }, []);

  const handleTabChange = useCallback((tabId: string) => {
    setActiveTab(tabId);
  }, []);

  return (
    <section 
      id="about" 
      className="relative pt-12 sm:pt-16 pb-12 px-4 sm:px-6 bg-[#0F0E0E] overflow-hidden"
      aria-label="About Rameshwar Bhagwat - Full Stack Developer"
      itemScope
      itemType="https://schema.org/Person"
    >
      {/* SEO Microdata - Enhanced */}
      <meta itemProp="name" content={PERSONAL_INFO.name} />
      <meta itemProp="jobTitle" content={PERSONAL_INFO.jobTitle} />
      <meta itemProp="description" content={PERSONAL_INFO.bio} />
      <meta itemProp="url" content="https://rameshwarbhagwat.me" />
      <meta itemProp="email" content={PERSONAL_INFO.email} />
      <meta itemProp="telephone" content={PERSONAL_INFO.phone} />
      <meta itemProp="image" content={`https://rameshwarbhagwat.me${PERSONAL_INFO.image}`} />
      
      {/* Address Schema */}
      <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className="hidden">
        <meta itemProp="addressLocality" content={PERSONAL_INFO.location.city} />
        <meta itemProp="addressRegion" content={PERSONAL_INFO.location.state} />
        <meta itemProp="addressCountry" content={PERSONAL_INFO.location.countryCode} />
      </div>
      
      {/* Skills & Expertise */}
      <meta itemProp="knowsAbout" content="React" />
      <meta itemProp="knowsAbout" content="Next.js" />
      <meta itemProp="knowsAbout" content="TypeScript" />
      <meta itemProp="knowsAbout" content="JavaScript" />
      <meta itemProp="knowsAbout" content="Node.js" />
      <meta itemProp="knowsAbout" content="Full Stack Development" />
      <meta itemProp="knowsAbout" content="Web Development" />
      <meta itemProp="knowsAbout" content="MERN Stack" />
      <meta itemProp="knowsAbout" content="RESTful API" />
      <meta itemProp="knowsAbout" content="Database Design" />
      
      {/* Occupation Schema */}
      <div itemProp="hasOccupation" itemScope itemType="https://schema.org/Occupation" className="hidden">
        <meta itemProp="name" content="Full Stack Developer" />
        <meta itemProp="occupationLocation" content="Yeola, Maharashtra, India" />
        <meta itemProp="skills" content="React, Next.js, TypeScript, Node.js, JavaScript, MongoDB, Express.js" />
        <meta itemProp="experienceRequirements" content="5+ years" />
      </div>
      
      {/* Educational Background */}
      <div itemProp="alumniOf" itemScope itemType="https://schema.org/EducationalOrganization" className="hidden">
        <meta itemProp="name" content="Computer Science" />
      </div>

      {/* Extended horizon glow from Hero - fading upward */}
      <div className="absolute top-0 left-0 w-full h-48 sm:h-64 pointer-events-none" aria-hidden="true">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-full"
          style={{
            background: 'radial-gradient(ellipse at center top, rgba(255, 80, 30, 0.08) 0%, rgba(220, 60, 20, 0.04) 30%, rgba(180, 40, 15, 0.02) 60%, transparent 100%)',
            filter: 'blur(60px)',
            willChange: 'auto',
          }}
        />
      </div>

      {/* Subtle ambient glows */}
      <div 
        className="absolute top-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
        style={{ willChange: 'auto' }}
      />
      <div 
        className="absolute bottom-1/4 left-0 w-56 sm:w-80 h-56 sm:h-80 bg-primary/3 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
        style={{ willChange: 'auto' }}
      />

      <Container>
        {/* Header */}
        <AboutHeader />

        {/* Hidden SEO Content */}
          <div className="sr-only">
            <h2>About Rameshwar Bhagwat - Full Stack & AI Developer</h2>
            <p>
              Rameshwar Bhagwat is a Full Stack & AI Developer based in Yeola, Maharashtra, India, 
              specializing in React, Next.js, TypeScript, and modern web technologies. 
              With 5+ years of experience, Rameshwar Bhagwat builds scalable web applications and AI-driven products 
              like Devory and ThinkVerse. The Rameshwar Bhagwat portfolio showcases expertise in full-stack development, 
              machine learning integration, and SaaS platform development.
            </p>
            <h3>Rameshwar Bhagwat - Core Skills and Expertise</h3>
            <ul>
              <li>Full Stack Development with MERN Stack (MongoDB, Express.js, React, Node.js)</li>
              <li>Frontend Development: React, Next.js, TypeScript, JavaScript, HTML5, CSS3</li>
              <li>Backend Development: Node.js, Express.js, RESTful API Design</li>
              <li>Database: MongoDB, PostgreSQL, MySQL, Database Optimization</li>
              <li>Cloud Services: AWS, Azure, Google Cloud Platform</li>
              <li>DevOps: Docker, CI/CD, Git, GitHub Actions</li>
              <li>AI/ML Integration: TensorFlow, Python, Machine Learning APIs</li>
              <li>System Design and Architecture</li>
            </ul>
            <h3>Rameshwar Bhagwat - Professional Experience</h3>
            <p>
              Rameshwar Bhagwat has 5+ years of professional experience in web development, having worked on 50+ projects 
              with 15+ happy clients. Achieved a 98% success rate in project delivery. Notable projects by Rameshwar Bhagwat 
              include Devory (AI-powered SaaS platform) and ThinkVerse (collaborative platform).
            </p>
            <h3>Achievements</h3>
            <ul>
              <li>Built scalable web applications serving thousands of users</li>
              <li>Contributed to open-source projects</li>
              <li>Technical blog writer sharing knowledge with the developer community</li>
              <li>Mentored junior developers</li>
            </ul>
            <h3>Education and Continuous Learning</h3>
            <p>
              Rameshwar Bhagwat has an IT Engineering background with continuous skill development through online certifications, 
              courses, and active participation in the tech community.
            </p>
            <h3>Contact Rameshwar Bhagwat</h3>
            <address>
              <p>Location: Yeola, Maharashtra, India</p>
              <p>Email: rameshwarbhagwat019@gmail.com</p>
              <p>Phone: +91 9699245170</p>
              <p>Rameshwar Bhagwat is open to remote opportunities worldwide</p>
            </address>
          </div>

          {/* Main Content Grid */}
          <div className="max-w-7xl mx-auto">
            {/* Top Row - Profile/Core Expertise on Left, Story on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
              {/* Left Side - Profile + Core Expertise */}
              <div className="flex flex-col items-center space-y-6 sm:space-y-8">
                {/* Profile */}
                <ProfileCard />
                
                {/* Core Expertise */}
                <div className="w-full max-w-md">
                  <AboutStory />
                </div>
              </div>

              {/* Right Side - Stats + About Info */}
              <div className="flex flex-col space-y-6 sm:space-y-8">
                {/* Stats */}
                <StatsGrid />
                
                {/* About Information */}
                <div className="space-y-4 sm:space-y-6">
                  {/* Positioning Statement */}
                  <div className="space-y-2 sm:space-y-4">
                    <p className="text-base sm:text-xl md:text-2xl leading-[1.6] sm:leading-[1.8] font-light text-white/95 tracking-wide" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                      Rameshwar Bhagwat crafts high-performance web applications with clean architecture and exceptional user experiences.
                    </p>
                    <p className="text-sm sm:text-lg md:text-xl leading-[1.5] sm:leading-[1.7] font-light text-white/75 tracking-wide" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                      Specializing in scalable AI-powered applications that blend cutting-edge technology with intuitive design.
                    </p>
                  </div>

                  {/* Tabbed Highlights */}
                  <div className="w-full">
                    {/* Mini Navbar */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-6">
                      {highlights.map((highlight) => (
                        <button
                          key={highlight.id}
                          onClick={() => handleTabChange(highlight.id)}
                          className={`
                            px-2.5 sm:px-4 py-1 sm:py-2 rounded-full text-[11px] sm:text-sm font-medium whitespace-nowrap transition-all duration-300
                            ${activeTab === highlight.id 
                              ? 'bg-primary-gradient text-white shadow-lg shadow-pink-500/30' 
                              : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                            }
                          `}
                          aria-label={`View ${highlight.title}`}
                          aria-pressed={activeTab === highlight.id}
                        >
                          {highlight.title}
                        </button>
                      ))}
                    </div>

                    {/* Content Area */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="min-h-[140px] sm:min-h-[180px]"
                      >
                        <h3 className="text-base sm:text-xl font-bold mb-2 sm:mb-3 text-white flex items-center gap-2">
                          <span className="w-1 h-4 sm:h-6 bg-primary-gradient rounded-full" aria-hidden="true"></span>
                          {activeHighlight.title}
                        </h3>
                        <p className="text-xs sm:text-base text-white/80 leading-relaxed mb-2 sm:mb-4">{activeHighlight.description}</p>
                        
                        {/* Key Points Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 sm:gap-3 mt-2 sm:mt-4 w-full">
                          {activeHighlight.points.map((point, index) => {
                            const isEmail = point.toLowerCase().includes('email:');
                            return (
                              <motion.div
                                key={point}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ 
                                  duration: 0.25, 
                                  delay: index * 0.04,
                                  ease: [0.22, 1, 0.36, 1]
                                }}
                                onClick={() => isEmail && handleCopyEmail(point)}
                                className={`flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 ${isEmail ? 'cursor-pointer' : ''} max-w-full`}
                                role={isEmail ? 'button' : undefined}
                                aria-label={isEmail ? 'Click to copy email' : undefined}
                              >
                                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary-gradient flex-shrink-0" aria-hidden="true"></div>
                                <span className="text-[10px] sm:text-xs font-medium text-white/70 truncate">{point}</span>
                                {isEmail && copiedEmail && (
                                  <motion.span
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="ml-auto text-[9px] sm:text-[10px] text-green-400 flex-shrink-0"
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
            <div className="mb-12 sm:mb-16">
              <TimelineStrip />
            </div>
          </div>
      </Container>
    </section>
  );
}
