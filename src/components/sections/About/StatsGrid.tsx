'use client';

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Briefcase, CheckCircle2, Users, TrendingUp } from 'lucide-react';

const stats = [
  { value: 5, label: 'Years Experience', suffix: '+', max: 10, icon: Briefcase, color: '#FF8C00' },
  { value: 50, label: 'Projects', suffix: '+', max: 100, icon: CheckCircle2, color: '#3B82F6' },
  { value: 15, label: 'Happy Clients', suffix: '+', max: 20, icon: Users, color: '#10B981' },
  { value: 98, label: 'Success Rate', suffix: '%', max: 100, icon: TrendingUp, color: '#8B5CF6' },
];

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 1500 });
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

function CircularProgress({ 
  value, 
  max, 
  color, 
  icon: Icon, 
  label, 
  suffix 
}: { 
  value: number; 
  max: number; 
  color: string; 
  icon: any; 
  label: string; 
  suffix: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const percentage = (value / max) * 100;
  const circumference = 2 * Math.PI * 45; // radius = 45
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center"
    >
      {/* Circular Progress */}
      <div className="relative w-32 h-32 mb-4">
        {/* Background Circle */}
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="64"
            cy="64"
            r="45"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="8"
            fill="none"
          />
          {/* Progress Circle */}
          <motion.circle
            cx="64"
            cy="64"
            r="45"
            stroke={color}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset: offset } : { strokeDashoffset: circumference }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
            style={{
              filter: `drop-shadow(0 0 8px ${color}40)`,
            }}
          />
        </svg>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Icon size={24} style={{ color }} className="mb-1" />
          <div className="text-2xl font-bold text-white">
            <AnimatedNumber value={value} suffix={suffix} />
          </div>
        </div>
      </div>

      {/* Label */}
      <p className="text-sm font-semibold text-center bg-gradient-to-r from-primary via-orange-400 to-orange-500 bg-clip-text text-transparent">{label}</p>
    </motion.div>
  );
}

export default function StatsGrid() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
        >
          <CircularProgress
            value={stat.value}
            max={stat.max}
            color={stat.color}
            icon={stat.icon}
            label={stat.label}
            suffix={stat.suffix}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
