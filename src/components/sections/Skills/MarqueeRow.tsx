'use client';

import { Skill } from './skills.data';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface MarqueeRowProps {
  skills: Skill[];
  reverse?: boolean;
  speed?: number;
  isPaused?: boolean;
}

export default function MarqueeRow({ skills, reverse = false }: MarqueeRowProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  
  // Initialize offset based on direction
  const [offset, setOffset] = useState(() => {
    if (reverse) {
      const itemWidth = 96 + 48;
      return -itemWidth * skills.length;
    }
    return 0;
  });

  useEffect(() => {
    if (hoveredIndex !== null) return;

    const animate = () => {
      setOffset((prev) => {
        const itemWidth = 96 + 48; // icon width (96px) + gap (48px)
        const totalWidth = itemWidth * skills.length;
        const newOffset = prev + (reverse ? 0.5 : -0.5);
        
        // Reset when one full set has scrolled
        if (!reverse && newOffset <= -totalWidth) {
          return 0;
        } else if (reverse && newOffset >= 0) {
          return -totalWidth;
        }
        
        return newOffset;
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [hoveredIndex, reverse, skills.length]);

  // Double the array for seamless display
  const displaySkills = [...skills, ...skills];

  return (
    <div className="relative overflow-hidden py-8 pb-16" ref={containerRef}>
      {/* Marquee container */}
      <div
        className="flex gap-12 will-change-transform"
        style={{ 
          transform: `translateX(${offset}px)`,
        }}
      >
        {displaySkills.map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="flex-shrink-0 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-default relative hover:z-30"
            style={{ width: '96px' }}
          >
            <skill.icon 
              className="text-6xl transition-all duration-300 drop-shadow-lg hover:drop-shadow-2xl" 
              style={{ color: skill.color }}
            />
            
            {/* Skill name with shimmer effect */}
            <motion.span
              className="text-xs font-medium whitespace-nowrap text-center inline-block"
              style={{
                background: 'linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.4) 60%, rgba(255,255,255,0.4) 100%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.4))',
              }}
              animate={{
                backgroundPosition: ['0% 0%', '200% 0%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {skill.name}
            </motion.span>
          </div>
        ))}
      </div>

      {/* Edge fade masks */}
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#0F0E0E] to-transparent pointer-events-none z-20" />
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#0F0E0E] to-transparent pointer-events-none z-20" />
    </div>
  );
}
