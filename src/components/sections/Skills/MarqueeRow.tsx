'use client';

import { Skill } from './skills.data';
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MarqueeRowProps {
  skills: Skill[];
  reverse?: boolean;
  speed?: number;
  isPaused?: boolean;
}

interface SkillCardProps {
  skill: Skill;
  index: number;
  onHover: (index: number | null) => void;
  isHovered: boolean;
}

function SkillCard({ skill, index, onHover, isHovered }: SkillCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setMousePosition({ x, y });
  }, []);

  const handleMouseEnter = () => {
    setIsInside(true);
    onHover(index);
  };

  const handleMouseLeave = () => {
    setIsInside(false);
    setMousePosition({ x: 0, y: 0 });
    onHover(null);
  };

  // Magnetic offset based on mouse position
  const magneticX = isInside ? mousePosition.x * 8 : 0;
  const magneticY = isInside ? mousePosition.y * 8 : 0;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex-shrink-0 relative cursor-pointer"
      style={{ width: '80px', minWidth: '80px' }}
      animate={{
        x: magneticX,
        y: magneticY,
      }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {/* Main card container */}
      <motion.div
        className="relative flex flex-col items-center justify-center gap-2 p-3"
        animate={{
          y: isHovered ? -12 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {/* Icon container with direct glow */}
        <motion.div
          className="relative"
          animate={{
            filter: isHovered
              ? `drop-shadow(0 0 4px ${skill.color}90) drop-shadow(0 0 10px ${skill.color}50)`
              : 'drop-shadow(0 0 1px rgba(255,255,255,0.1))',
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Pulsing ring on hover */}
          <AnimatePresence>
            {isHovered && (
              <>
                <motion.div
                  className="absolute inset-0 rounded-full"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1.8, opacity: 0 }}
                  transition={{ duration: 1, repeat: Infinity }}
                  style={{ border: `2px solid ${skill.color}` }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full"
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
                  style={{ border: `1px solid ${skill.color}` }}
                />
              </>
            )}
          </AnimatePresence>

          <skill.icon
            className="text-4xl sm:text-5xl transition-all duration-300"
            style={{ color: skill.color }}
          />
        </motion.div>

        {/* Skill name */}
        <motion.span
          className="text-[10px] sm:text-xs font-semibold whitespace-nowrap text-center"
          animate={{
            color: isHovered ? skill.color : 'rgba(255,255,255,0.6)',
            textShadow: isHovered ? `0 0 20px ${skill.color}80` : 'none',
          }}
          transition={{ duration: 0.3 }}
        >
          {skill.name}
        </motion.span>

        {/* Floating particles on hover */}
        <AnimatePresence>
          {isHovered && (
            <>
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full"
                  initial={{
                    opacity: 0,
                    x: 0,
                    y: 0,
                    scale: 0,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    x: [0, (i % 2 === 0 ? 1 : -1) * (20 + Math.random() * 15)],
                    y: [0, -30 - Math.random() * 20],
                    scale: [0, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.2,
                    delay: i * 0.15,
                    repeat: Infinity,
                    repeatDelay: 0.3,
                  }}
                  style={{
                    background: skill.color,
                    boxShadow: `0 0 6px ${skill.color}`,
                    left: '50%',
                    bottom: '50%',
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Shadow beneath */}
      <motion.div
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-2 rounded-full pointer-events-none"
        animate={{
          opacity: isHovered ? 0.4 : 0,
          scale: isHovered ? 1 : 0.5,
        }}
        transition={{ duration: 0.3 }}
        style={{
          background: `radial-gradient(ellipse, ${skill.color}60 0%, transparent 70%)`,
          filter: 'blur(4px)',
        }}
      />
    </motion.div>
  );
}

export default function MarqueeRow({ skills, reverse = false }: MarqueeRowProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const offsetRef = useRef(0);
  const lastTimeRef = useRef<number>(0);
  const isPausedRef = useRef(false);

  // Initialize offset based on direction
  useEffect(() => {
    if (reverse) {
      const itemWidth = 80 + 32;
      offsetRef.current = -itemWidth * skills.length;
    }
  }, [reverse, skills.length]);

  // Update pause state ref when hover changes
  useEffect(() => {
    isPausedRef.current = hoveredIndex !== null;
  }, [hoveredIndex]);

  // Smooth animation using refs and delta time
  useEffect(() => {
    const itemWidth = 80 + 32;
    const totalWidth = itemWidth * skills.length;
    const speed = 60; // pixels per second (consistent speed)

    const animate = (currentTime: number) => {
      if (!marqueeRef.current) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      // Calculate delta time for consistent speed
      if (lastTimeRef.current === 0) {
        lastTimeRef.current = currentTime;
      }
      const deltaTime = (currentTime - lastTimeRef.current) / 1000; // Convert to seconds
      lastTimeRef.current = currentTime;

      // Only update if not paused
      if (!isPausedRef.current) {
        const movement = speed * deltaTime;
        offsetRef.current += reverse ? movement : -movement;

        // Reset position for seamless loop
        if (!reverse && offsetRef.current <= -totalWidth) {
          offsetRef.current = 0;
        } else if (reverse && offsetRef.current >= 0) {
          offsetRef.current = -totalWidth;
        }

        // Apply transform directly to DOM (no React re-render)
        marqueeRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [reverse, skills.length]);

  // Double the array for seamless display
  const displaySkills = [...skills, ...skills];

  return (
    <div className="relative overflow-hidden py-6 sm:py-8 md:py-10" ref={containerRef}>
      {/* Marquee container */}
      <div
        ref={marqueeRef}
        className="flex gap-8"
        style={{
          willChange: 'transform',
          transform: 'translate3d(0, 0, 0)',
        }}
      >
        {displaySkills.map((skill, index) => (
          <SkillCard
            key={`${skill.name}-${index}`}
            skill={skill}
            index={index}
            onHover={setHoveredIndex}
            isHovered={hoveredIndex === index}
          />
        ))}
      </div>

      {/* Edge fade masks */}
      <div
        className="absolute top-0 bottom-0 left-0 w-20 sm:w-28 md:w-40 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to right, #0F0E0E 0%, #0F0E0E 20%, transparent 100%)',
        }}
      />
      <div
        className="absolute top-0 bottom-0 right-0 w-20 sm:w-28 md:w-40 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to left, #0F0E0E 0%, #0F0E0E 20%, transparent 100%)',
        }}
      />
    </div>
  );
}
