'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useSpring } from 'framer-motion';

interface ServiceCard {
  id: string;
  emoji: string;
  title: string;
  description: string;
}

const services: ServiceCard[] = [
  {
    id: 'fullstack',
    emoji: '⚡',
    title: 'Full Stack',
    description:
      'End-to-end web apps with React, Next.js, Node.js and TypeScript. Scalable architectures from database to pixel-perfect UI.',
  },
  {
    id: 'ai',
    emoji: '🧠',
    title: 'AI Integration',
    description:
      'ML model integration into production apps. Intelligent features with OpenAI, TensorFlow, and custom pipelines for SaaS.',
  },
  {
    id: 'creative',
    emoji: '🎨',
    title: 'Creative Dev',
    description:
      'Animated, smooth-transitioning websites leveraging Framer Motion and WebGL. Performance-focused with rich visual effects.',
  },
  {
    id: 'saas',
    emoji: '🚀',
    title: 'SaaS Platforms',
    description:
      'Multi-tenant SaaS products like Devory and ThinkVerse. Auth, payments, dashboards, and real-time features built for scale.',
  },
  {
    id: 'api',
    emoji: '🔗',
    title: 'API Development',
    description:
      'RESTful and GraphQL API design with Node.js. Third-party integrations, webhooks, and microservice architecture.',
  },
];

// Grid layout: Row 1 = 3 cards across, Row 2 = 2 cards centered below
// Positions use pixel offsets from a grid anchor, with slight scatter for organic feel
// Row 1: left / center / right — spaced ~30vw apart
// Row 2: center-left / center-right — offset inward
const cardLayouts = [
  // Row 1 — tighter column spacing, cards nearly touching
  { col: '-22vw', row: '0px',   rotation: -5 },
  { col: '0vw',   row: '0px',   rotation: 3 },
  { col: '22vw',  row: '0px',   rotation: -3 },
  // Row 2 — overlaps row 1 by ~30px (negative gap)
  { col: '-11vw', row: 'calc(clamp(220px, 20vw, 320px) - 30px)', rotation: 4 },
  { col: '11vw',  row: 'calc(clamp(220px, 20vw, 320px) - 30px)', rotation: -2.5 },
];

// Card size
const CARD_SIZE = 'clamp(220px, 20vw, 320px)';
const CARD_HALF = 'clamp(110px, 10vw, 160px)';

// Vertical anchor: push entire grid below navbar
// top of first row starts at ~14vh from viewport top
const GRID_TOP = '14vh';

export default function StackedCards() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: rawProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth the scroll progress with a spring for buttery card movement
  const scrollYProgress = useSpring(rawProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div className="relative bg-[#0F0E0E]">
      <div
        ref={containerRef}
        className="relative"
        style={{ height: `${services.length * 60 + 30}vh` }}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {services.map((card, i) => (
            <CardLayer
              key={card.id}
              card={card}
              index={i}
              total={services.length}
              layout={cardLayouts[i]}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function CardLayer({
  card,
  index,
  total,
  layout,
  scrollYProgress,
}: {
  card: ServiceCard;
  index: number;
  total: number;
  layout: { col: string; row: string; rotation: number };
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}) {
  const totalScroll = total + 0.47;
  const segmentSize = 1 / totalScroll;
  const enterStart = index * segmentSize;
  const enterEnd = enterStart + segmentSize * 0.75; // longer travel range = smoother entrance
  const isFirst = index === 0;
  const isLast = index === total - 1;

  const nextEnterStart = (index + 1) * segmentSize;
  const nextEnterEnd = nextEnterStart + segmentSize * 0.55;

  const yOffset = useTransform(
    scrollYProgress,
    isFirst ? [0, 0.001] : [enterStart, enterEnd],
    isFirst ? [0, 0] : [100, 0],
    { clamp: true }
  );

  const rotate = useTransform(
    scrollYProgress,
    isFirst ? [0, 0.001] : [enterStart, enterEnd],
    isFirst
      ? [layout.rotation, layout.rotation]
      : [layout.rotation + 8, layout.rotation],
    { clamp: true }
  );

  const opacity = useTransform(
    scrollYProgress,
    isFirst ? [0, segmentSize * 0.12] : [enterStart, enterStart + segmentSize * 0.15],
    isFirst ? [0, 1] : [0, 1],
    { clamp: true }
  );

  const blurAmount = useTransform(
    scrollYProgress,
    isLast ? [0, 1] : [enterEnd, nextEnterStart, nextEnterEnd],
    isLast ? [0, 0] : [0, 0, 5],
    { clamp: true }
  );
  const filter = useMotionTemplate`blur(${blurAmount}px)`;

  const scale = useTransform(
    scrollYProgress,
    isLast ? [0, 1] : [enterEnd, nextEnterStart, nextEnterEnd],
    isLast ? [1, 1] : [1, 1, 0.94],
    { clamp: true }
  );

  const yVh = useTransform(yOffset, (v) => `${v}vh`);

  return (
    <motion.div
      className="absolute"
      style={{
        width: CARD_SIZE,
        height: CARD_SIZE,
        left: `calc(50% + ${layout.col} - ${CARD_HALF})`,
        top: `calc(${GRID_TOP} + ${layout.row})`,
        rotate,
        scale,
        opacity,
        filter,
        y: yVh,
        zIndex: index + 1,
        willChange: 'transform, filter, opacity',
      }}
    >
      <div
        className="w-full h-full bg-[#1a1a1a] p-6 sm:p-7 flex flex-col justify-start"
        style={{
          boxShadow: '0 24px 64px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.04)',
        }}
      >
        {/* Emoji */}
        <span className="text-lg sm:text-xl mb-3 block">{card.emoji}</span>

        {/* Title */}
        <h3
          className="text-base sm:text-lg md:text-xl font-extrabold text-rainbow-gradient uppercase tracking-[0.04em] mb-3 leading-tight"
          style={{
            fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif',
            fontWeight: 800,
          }}
        >
          {card.title}
        </h3>

        {/* Description */}
        <p
          className="text-[11px] sm:text-xs md:text-[13px] leading-[1.65] text-white/45 uppercase tracking-[0.03em]"
          style={{
            fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif',
            fontWeight: 500,
          }}
        >
          {card.description}
        </p>
      </div>
    </motion.div>
  );
}
