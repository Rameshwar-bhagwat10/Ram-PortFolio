'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Container from '@/components/layout/Container';
import SectionHeading from '@/components/ui/SectionHeading';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What technologies does Rameshwar Bhagwat specialize in?",
    answer: "Rameshwar Bhagwat specializes in Full Stack Development with expertise in React, Next.js, TypeScript, Node.js, Python, and AI/ML technologies. He builds scalable SaaS platforms and AI-powered applications using modern frameworks and best practices."
  },
  {
    question: "What kind of projects has Rameshwar Bhagwat worked on?",
    answer: "Rameshwar Bhagwat has developed various projects including Devory (AI-powered student platform), ThinkVerse (collaborative platform), Safecoast (coastal hazard intelligence), spam detection systems using machine learning, and multiple e-commerce solutions. His portfolio spans web applications, mobile apps, and AI/ML projects."
  },
  {
    question: "Is Rameshwar Bhagwat available for freelance projects?",
    answer: "Yes, Rameshwar Bhagwat is available for freelance projects and full-time opportunities. He specializes in building scalable web applications, AI-powered platforms, and custom software solutions. Contact him at rameshwarbhagwat019@gmail.com or +91 9699245170."
  },
  {
    question: "What is Rameshwar Bhagwat's experience level?",
    answer: "Rameshwar Bhagwat has 5+ years of professional experience in web development, having successfully delivered 50+ projects with 15+ happy clients. He maintains a 98% success rate in project delivery and has expertise in both frontend and backend development."
  },
  {
    question: "Does Rameshwar Bhagwat work remotely?",
    answer: "Yes, Rameshwar Bhagwat is open to remote opportunities worldwide. Based in Yeola, Maharashtra, India, he has experience working with international clients and teams across different time zones."
  },
  {
    question: "What makes Rameshwar Bhagwat's development approach unique?",
    answer: "Rameshwar Bhagwat focuses on building scalable, performance-optimized applications with clean architecture and exceptional user experiences. He combines modern technologies with AI/ML integration, follows best practices for SEO and accessibility, and delivers production-ready solutions."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
    <section 
      id="faq" 
      className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#0F0E0E] overflow-hidden"
      aria-label="Frequently Asked Questions about Rameshwar Bhagwat"
    >
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Background Effects */}
      <div 
        className="absolute top-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-1/4 left-0 w-56 sm:w-80 h-56 sm:h-80 bg-primary/3 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Common questions about my work and expertise"
        />

        <div className="max-w-3xl mx-auto mt-12 sm:mt-16 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-colors duration-300"
              itemScope
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 
                  className="text-sm sm:text-base md:text-lg font-semibold text-white pr-4"
                  itemProp="name"
                >
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={20} className="text-white/70" />
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
                    <div className="px-4 sm:px-6 pb-4 sm:pb-5">
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
          ))}
        </div>
      </Container>
    </section>
  );
}
