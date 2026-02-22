'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { achievements, Achievement } from './achievements.data';

interface AchievementsMarqueeProps {
  reverse?: boolean;
}

export default function AchievementsMarquee({ reverse = false }: AchievementsMarqueeProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  
  const [offset, setOffset] = useState(() => {
    if (reverse) {
      const cardWidth = 180 + 20;
      return -cardWidth * achievements.length;
    }
    return 0;
  });

  useEffect(() => {
    if (hoveredIndex !== null) return;

    const animate = () => {
      setOffset((prev) => {
        const cardWidth = 180 + 20; // card width (180px) + gap (20px)
        const totalWidth = cardWidth * achievements.length;
        const newOffset = prev + (reverse ? 0.8 : -0.8);
        
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
  }, [hoveredIndex, reverse]);

  const displayAchievements = [...achievements, ...achievements];

  return (
    <div className="relative overflow-hidden py-4" ref={containerRef}>
      <div
        className="flex gap-5 will-change-transform"
        style={{ 
          transform: `translateX(${offset}px)`,
        }}
      >
        {displayAchievements.map((achievement, index) => (
          <motion.div
            key={`${achievement.id}-${index}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="flex-shrink-0 relative group"
            style={{ width: '180px' }}
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {/* Card */}
            <div className="relative h-full min-h-[160px] bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
              {/* Glow effect on hover */}
              <div 
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                style={{ 
                  background: `radial-gradient(circle at center, ${achievement.color}20, transparent 70%)` 
                }}
              />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col gap-2 h-full">
                {/* Text */}
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-white">
                      {achievement.title}
                    </h4>
                    {achievement.year && (
                      <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-primary-gradient text-white">
                        {achievement.year}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-white/70 leading-relaxed">
                    {achievement.description}
                  </p>
                  <p className="text-[10px] text-white/50 leading-relaxed">
                    {achievement.details}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Edge fade masks */}
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#0F0E0E] to-transparent pointer-events-none z-20" />
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#0F0E0E] to-transparent pointer-events-none z-20" />
    </div>
  );
}
