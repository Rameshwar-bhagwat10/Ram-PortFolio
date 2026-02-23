'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState, useMemo } from 'react';
import { Briefcase, CheckCircle2, Users, TrendingUp } from 'lucide-react';

const stats = [
  { value: 5, label: 'Years Experience', suffix: '+', max: 10, icon: Briefcase, color: '#FF1493' },
  { value: 50, label: 'Projects', suffix: '+', max: 100, icon: CheckCircle2, color: '#3B82F6' },
  { value: 15, label: 'Happy Clients', suffix: '+', max: 20, icon: Users, color: '#10B981' },
  { value: 98, label: 'Success Rate', suffix: '%', max: 100, icon: TrendingUp, color: '#8B5CF6' },
];

function AnimatedNumber({ value, suffix = '', isInView }: { value: number; suffix?: string; isInView: boolean }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    const duration = 1500;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setDisplayValue(Math.floor(easeOutQuart * value));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, value]);

  return <span>{displayValue}{suffix}</span>;
}

function CircularProgress({ 
  value, 
  max, 
  color, 
  icon: Icon, 
  label, 
  suffix,
  index 
}: { 
  value: number; 
  max: number; 
  color: string; 
  icon: any; 
  label: string; 
  suffix: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [startAnimation, setStartAnimation] = useState(false);
  
  // Memoize calculations
  const { percentage, circumference, offset } = useMemo(() => {
    const pct = (value / max) * 100;
    const circ = 2 * Math.PI * 45;
    const off = circ - (pct / 100) * circ;
    return { percentage: pct, circumference: circ, offset: off };
  }, [value, max]);

  // Trigger ring animation after card animation
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setStartAnimation(true);
      }, 600 + (index * 100)); // Start ring animation after cards are visible
      return () => clearTimeout(timer);
    }
  }, [isInView, index]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.1, // Cards appear with header, staggered slightly
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* Circular Progress */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-3 sm:mb-4">
        {/* Background Circle */}
        <svg className="w-full h-full transform -rotate-90" aria-hidden="true">
          <circle
            cx="50%"
            cy="50%"
            r="45"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="6"
            fill="none"
          />
          {/* Progress Circle - Smoother CSS animation */}
          <circle
            cx="50%"
            cy="50%"
            r="45"
            stroke={color}
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={startAnimation ? offset : circumference}
            style={{
              filter: `drop-shadow(0 0 8px ${color}40)`,
              transition: 'stroke-dashoffset 2s cubic-bezier(0.16, 1, 0.3, 1)',
              willChange: startAnimation ? 'auto' : 'stroke-dashoffset',
            }}
          />
        </svg>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Icon size={20} style={{ color }} className="mb-0.5 sm:mb-1" aria-hidden="true" />
          <div className="text-xl sm:text-2xl font-bold text-white">
            <AnimatedNumber value={value} suffix={suffix} isInView={startAnimation} />
          </div>
        </div>
      </div>

      {/* Label */}
      <p className="text-xs sm:text-sm font-semibold text-center text-primary-gradient">{label}</p>
    </motion.div>
  );
}

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full">
      {stats.map((stat, index) => (
        <div key={stat.label}>
          <CircularProgress
            value={stat.value}
            max={stat.max}
            color={stat.color}
            icon={stat.icon}
            label={stat.label}
            suffix={stat.suffix}
            index={index}
          />
        </div>
      ))}
    </div>
  );
}
