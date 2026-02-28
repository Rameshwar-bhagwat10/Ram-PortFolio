'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, HelpCircle, MessageCircle } from 'lucide-react';
import Container from '@/components/layout/Container';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: "About Me",
    question: "What technologies does Rameshwar Bhagwat specialize in?",
    answer: "Rameshwar Bhagwat specializes in Full Stack Development with expertise in React, Next.js, TypeScript, Node.js, Python, and AI/ML technologies. He builds scalable SaaS platforms and AI-powered applications using modern frameworks and best practices."
  },
  {
    category: "Projects",
    question: "What kind of projects has Rameshwar Bhagwat worked on?",
    answer: "Rameshwar Bhagwat has developed various projects including Devory (AI-powered student platform), ThinkVerse (collaborative platform), Safecoast (coastal hazard intelligence), spam detection systems using machine learning, and multiple e-commerce solutions. His portfolio spans web applications, mobile apps, and AI/ML projects."
  },
  {
    category: "Availability",
    question: "Is Rameshwar Bhagwat available for freelance projects?",
    answer: "Yes, Rameshwar Bhagwat is available for freelance projects and full-time opportunities. He specializes in building scalable web applications, AI-powered platforms, and custom software solutions. Contact him at rameshwarbhagwat019@gmail.com or +91 9699245170."
  },
  {
    category: "Experience",
    question: "What is Rameshwar Bhagwat's experience level?",
    answer: "Rameshwar Bhagwat has 5+ years of professional experience in web development, having successfully delivered 50+ projects with 15+ happy clients. He maintains a 98% success rate in project delivery and has expertise in both frontend and backend development."
  },
  {
    category: "Work Style",
    question: "Does Rameshwar Bhagwat work remotely?",
    answer: "Yes, Rameshwar Bhagwat is open to remote opportunities worldwide. Based in Yeola, Maharashtra, India, he has experience working with international clients and teams across different time zones."
  },
  {
    category: "Approach",
    question: "What makes Rameshwar Bhagwat's development approach unique?",
    answer: "Rameshwar Bhagwat focuses on building scalable, performance-optimized applications with clean architecture and exceptional user experiences. He combines modern technologies with AI/ML integration, follows best practices for SEO and accessibility, and delivers production-ready solutions."
  },
  {
    category: "Services",
    question: "What services does Rameshwar Bhagwat offer?",
    answer: "Services include Full Stack Web Development, AI/ML Integration, SaaS Platform Development, E-commerce Solutions, Mobile App Development (Android), API Development & Integration, Database Design & Optimization, and Technical Consulting."
  },
  {
    category: "Process",
    question: "What is the typical project workflow?",
    answer: "The workflow includes: 1) Initial consultation to understand requirements, 2) Project planning and timeline estimation, 3) Design and architecture planning, 4) Iterative development with regular updates, 5) Testing and quality assurance, 6) Deployment and launch, 7) Post-launch support and maintenance."
  },
  {
    category: "Pricing",
    question: "How does pricing work for projects?",
    answer: "Pricing depends on project scope, complexity, and timeline. Options include fixed-price projects for well-defined scopes, hourly rates for ongoing work, and retainer packages for long-term partnerships. Contact for a detailed quote based on your specific requirements."
  },
  {
    category: "Communication",
    question: "How does Rameshwar Bhagwat communicate during projects?",
    answer: "Regular communication through email, video calls (Zoom/Google Meet), project management tools (Trello/Jira), and instant messaging (Slack/Discord). Weekly progress updates, daily standups for larger projects, and always available for urgent queries."
  }
];

const categories = Array.from(new Set(faqs.map(faq => faq.category)));

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Filter FAQs based on search and category
  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-[#0F0E0E] pt-24 sm:pt-28 pb-16 sm:pb-20">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Background Effects */}
      <div 
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[80%] h-64 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center top, rgba(255, 80, 30, 0.15) 0%, rgba(220, 60, 20, 0.08) 30%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <HelpCircle size={20} className="text-primary" />
            <span className="text-sm text-white/70">Frequently Asked Questions</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
            How Can I <span className="text-primary-gradient">Help You?</span>
          </h1>
          
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
            Find answers to common questions about my work, expertise, and services.
            Can't find what you're looking for? Feel free to reach out!
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto mb-8 sm:mb-12"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
        >
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === 'All'
                ? 'bg-primary-gradient text-white shadow-lg shadow-pink-500/30'
                : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary-gradient text-white shadow-lg shadow-pink-500/30'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-white/50 text-lg">No questions found. Try a different search term.</p>
            </motion.div>
          ) : (
            filteredFAQs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300"
                itemScope
                itemType="https://schema.org/Question"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-start justify-between gap-4 text-left group"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
                        {faq.category}
                      </span>
                    </div>
                    <h3 
                      className="text-sm sm:text-base md:text-lg font-semibold text-white group-hover:text-primary transition-colors"
                      itemProp="name"
                    >
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 mt-1"
                  >
                    <ChevronDown size={20} className="text-white/70 group-hover:text-primary transition-colors" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                      itemScope
                      itemType="https://schema.org/Answer"
                    >
                      <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-2">
                        <div className="w-12 h-1 bg-primary-gradient rounded-full mb-4" />
                        <p 
                          className="text-xs sm:text-sm md:text-base text-white/70 leading-relaxed"
                          itemProp="text"
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          )}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 sm:p-12">
            <MessageCircle size={48} className="text-primary mx-auto mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-white/70 mb-6">
              I'm here to help! Feel free to reach out and I'll get back to you as soon as possible.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary-gradient text-white font-semibold rounded-full hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
