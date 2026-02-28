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
      const cardWidth = 150 + 12; // card width (150px) + gap (12px on mobile, 20px on desktop)
      return -cardWidth * achievements.length;
    }
    return 0;
  });

  useEffect(() => {
    if (hoveredIndex !== null) return;

    const animate = () => {
      setOffset((prev) => {
        const cardWidth = 150 + 12; // card width (150px) + gap (12px)
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
    <div className="relative overflow-hidden py-3 sm:py-4 w-full max-w-full" ref={containerRef}>
      <div
        className="flex gap-3 sm:gap-5 will-change-transform"
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
            style={{ width: '150px' }}
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {/* Card */}
            <div className="relative h-full min-h-[140px] sm:min-h-[160px] bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4 hover:bg-white/10 transition-all duration-300">
              {/* Glow effect on hover */}
              <div 
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                style={{ 
                  background: `radial-gradient(circle at center, ${achievement.color}20, transparent 70%)` 
                }}
              />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col gap-1.5 sm:gap-2 h-full">
                {/* Text */}
                <div className="space-y-1.5 sm:space-y-2 flex-1">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-1">
                      {achievement.title}
                    </h4>
                    {achievement.year && (
                      <span className="text-[8px] sm:text-[9px] px-1 sm:px-1.5 py-0.5 rounded-full bg-primary-gradient text-white flex-shrink-0">
                        {achievement.year}
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-white/70 leading-relaxed line-clamp-2 sm:line-clamp-none">
                    {achievement.description}
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-white/50 leading-relaxed line-clamp-2 sm:line-clamp-none">
                    {achievement.details}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Edge fade masks */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#0F0E0E] to-transparent pointer-events-none z-20" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#0F0E0E] to-transparent pointer-events-none z-20" />
    </div>
  );
}
