'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import Container from '@/components/layout/Container';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  serial: string;
  accentShadow: string;
  artGradient: string;
  tagClasses: string;
  badgeTextColor: string;
  badgeSvg: React.ReactNode;
  image: string;
  baseRot: number;
  baseY: number;
  tx: number;
  floatDelay: number;
}

const CERTIFICATIONS: Certificate[] = [
  {
    id: 'openai-buildthon',
    title: 'OpenAI Buildthon 2026 Certificate',
    issuer: 'OpenAI',
    year: '2026',
    serial: 'NO. AI–2026–014',
    accentShadow: 'shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_2px_4px_rgba(0,0,0,0.45),0_20px_44px_-18px_rgba(0,0,0,0.7),0_0_0_1px_rgba(140,110,255,0.06)]',
    artGradient: 'from-[#0d1020] via-[#0d1020] to-[#0d1020]',
    tagClasses: 'text-[#b9a8ff] bg-[#8c6eff]/14',
    badgeTextColor: 'text-[#c6b8ff]',
    badgeSvg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-[19px] h-[19px]">
        <circle cx="12" cy="6" r="2.1" /><circle cx="6" cy="17" r="2.1" /><circle cx="18" cy="17" r="2.1" />
        <path d="M12 8.1V13M12 13L7.6 15.4M12 13l4.4 2.4" />
      </svg>
    ),
    image: '/certifications/OpenAI Buildthon Certificate.jpeg',
    baseRot: -6,
    baseY: 0,
    tx: 0,
    floatDelay: 0.2,
  },
  {
    id: 'fundamentals-ml',
    title: 'Fundamentals of Machine Learning',
    issuer: 'Google Cloud / Kaggle',
    year: '2025',
    serial: 'NO. ML–2025–041',
    accentShadow: 'shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_2px_4px_rgba(0,0,0,0.45),0_20px_44px_-18px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,107,61,0.08)]',
    artGradient: 'from-[#17130e] via-[#17130e] to-[#17130e]',
    tagClasses: 'text-[#ffb088] bg-[#ff6b3d]/14',
    badgeTextColor: 'text-[#ffb088]',
    badgeSvg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-[19px] h-[19px]">
        <path d="M6 20h12M9 4h6M10 4v6.5L5.5 18a1.2 1.2 0 0 0 1 1.8h11a1.2 1.2 0 0 0 1-1.8L14 10.5V4" />
      </svg>
    ),
    image: '/certifications/Fundamentals of Machine.jpg',
    baseRot: 3.5,
    baseY: 10,
    tx: -28,
    floatDelay: 1.3,
  },
  {
    id: 'developing-ai-solutions',
    title: 'Developing AI Solutions on Microsoft Azure',
    issuer: 'Microsoft',
    year: '2025',
    serial: 'NO. AZ–2025–208',
    accentShadow: 'shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_2px_4px_rgba(0,0,0,0.45),0_20px_44px_-18px_rgba(0,0,0,0.7),0_0_0_1px_rgba(5,166,240,0.07)]',
    artGradient: 'from-[#14161b] via-[#14161b] to-[#14161b]',
    tagClasses: 'text-[#8fd0ff] bg-[#05a6f0]/14',
    badgeTextColor: 'text-[#9fdcff]',
    badgeSvg: (
      <svg viewBox="0 0 24 24" width="16" height="16" className="w-[16px] h-[16px]">
        <rect x="2" y="2" width="8.5" height="8.5" fill="#05a6f0" />
        <rect x="13.5" y="2" width="8.5" height="8.5" fill="#81bc06" />
        <rect x="2" y="13.5" width="8.5" height="8.5" fill="#ffba08" />
        <rect x="13.5" y="13.5" width="8.5" height="8.5" fill="#f35325" />
      </svg>
    ),
    image: '/certifications/Developing AI solution.jpg',
    baseRot: 5.5,
    baseY: 0,
    tx: 0,
    floatDelay: 0.7,
  },
  {
    id: 'nptel-iit-madras',
    title: 'Elite NPTEL Online Certification',
    issuer: 'IIT Madras (NPTEL)',
    year: '2025',
    serial: 'NO. NP–2025–097',
    accentShadow: 'shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_2px_4px_rgba(0,0,0,0.45),0_20px_44px_-18px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,197,110,0.07)]',
    artGradient: 'from-[#121317] via-[#121317] to-[#121317]',
    tagClasses: 'text-[#ffcf8f] bg-[#ffc56e]/14',
    badgeTextColor: 'text-[#ffcf8f]',
    badgeSvg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-[19px] h-[19px]">
        <path d="M12 4L2 9l10 5 10-5-10-5z" /><path d="M6 11.5V17c0 1.1 2.7 2.5 6 2.5s6-1.4 6-2.5v-5.5" />
      </svg>
    ),
    image: '/certifications/nptel certificate_page-0001.jpg',
    baseRot: -3.5,
    baseY: 10,
    tx: 28,
    floatDelay: 1.8,
  },
];

function CertCard({ cert, isDesktop }: { cert: Certificate; isDesktop: boolean }) {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, lift: 0, scale: 1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const MAX_TILT = 7;
    const ry = (px - 0.5) * MAX_TILT * 2;
    const rx = (0.5 - py) * MAX_TILT * 2;
    setTilt({ rx, ry: -ry, lift: -10, scale: 1.035 });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0, lift: 0, scale: 1 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isDesktop
          ? `perspective(1000px) translate3d(${cert.tx}px, calc(${cert.baseY}px + ${tilt.lift}px), 0) rotate(${cert.baseRot}deg) scale(${tilt.scale}) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`
          : 'none',
        transformStyle: isDesktop ? 'preserve-3d' : 'flat',
      }}
      className={`group relative overflow-hidden w-full lg:w-[296px] rounded-[18px] xs:rounded-[22px] lg:rounded-[28px] bg-gradient-to-br from-[#1c1f26] via-[#16181d] to-[#121419] border border-white/10 p-2.5 xs:p-3 lg:p-4 pb-0 cursor-pointer transition-transform duration-500 ease-out select-none will-change-transform z-10 ${cert.accentShadow}`}
      tabIndex={0}
    >
      {/* Gloss Sheen */}
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-white/[0.055] to-transparent pointer-events-none" />

      {/* Hairline rim */}
      <div className="absolute inset-0 rounded-[18px] xs:rounded-[22px] lg:rounded-[28px] border border-white/5 pointer-events-none z-[3]" />

      {/* Film grain noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none z-[4] rounded-[18px] xs:rounded-[22px] lg:rounded-[28px]"
        style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")` }}
      />

      {/* Entry Diagonal Sheen Sweep */}
      <motion.div
        initial={{ x: '-150%', opacity: 0 }}
        whileInView={{ x: '150%', opacity: [0, 0.3, 0.3, 0] }}
        viewport={{ once: true }}
        transition={{ delay: 0.65, duration: 1.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute inset-y-0 w-2/3 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent pointer-events-none -skew-x-12 z-[5]"
      />

      {/* Verified Hover Badge overlay */}
      <span className="absolute left-1/2 top-2 xs:top-3 -translate-x-1/2 flex items-center gap-1 text-[#ffb088] text-[8px] xs:text-[9.5px] tracking-wider uppercase font-medium font-mono whitespace-nowrap opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out z-20">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-2.5 h-2.5 xs:w-3 xs:h-3"><path d="M20 6L9 17l-5-5" /></svg>
        Verified
      </span>

      <div className="h-[90px] xs:h-[105px] sm:h-[130px] lg:h-[148px] rounded-[11px] xs:rounded-[13px] lg:rounded-[17px] relative overflow-hidden mb-1.5 border border-white/[0.07] bg-[#0c0c0d]">
        <div className="absolute inset-0">
          <Image
            src={cert.image}
            alt={cert.title}
            fill
            sizes="(max-width: 768px) 50vw, 296px"
            className="object-cover opacity-100 transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <span className="absolute left-2 bottom-1.5 xs:left-2.5 xs:bottom-2 lg:left-3.5 lg:bottom-3 text-[7px] xs:text-[8px] lg:text-[9px] tracking-wider text-white/40 font-mono z-[2]">{cert.serial}</span>
        <div className={`absolute right-1.5 bottom-[-8px] xs:right-2 xs:bottom-[-10px] lg:right-3 lg:bottom-[-16px] w-[28px] h-[28px] xs:w-[32px] xs:h-[32px] lg:w-[46px] lg:h-[46px] rounded-full flex items-center justify-center bg-gradient-to-br from-white/[0.12] to-white/[0.02] backdrop-blur-[6px] border border-white/[0.14] shadow-[0_8px_18px_-8px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.15)] z-[3] [&>svg]:w-3.5 [&>svg]:h-3.5 xs:[&>svg]:w-4 xs:[&>svg]:h-4 lg:[&>svg]:w-[19px] lg:[&>svg]:h-[19px] ${cert.badgeTextColor}`}>
          {cert.badgeSvg}
        </div>
      </div>

      <div className="pt-0.5 xs:pt-1 pb-2 xs:pb-3 lg:pb-4">
        <div className="flex items-center justify-between mb-1 xs:mb-1.5 lg:mb-2 gap-1">
          <span className={`inline-block text-[7px] xs:text-[8px] lg:text-[9.5px] font-semibold tracking-wider uppercase py-0.5 px-1.5 xs:px-2 rounded-[4px] xs:rounded-[6px] truncate max-w-[85px] xs:max-w-[105px] sm:max-w-none ${cert.tagClasses}`}>{cert.issuer}</span>
          <span className="text-[8px] xs:text-[9px] lg:text-[11px] text-white/40 tracking-wider font-mono flex-shrink-0">{cert.year}</span>
        </div>
        <p className="text-[10px] xs:text-[11.5px] sm:text-[13px] lg:text-[15px] font-semibold leading-[1.28] lg:leading-[1.35] text-[#f2f1ee] line-clamp-2 h-[26px] xs:h-[30px] sm:h-[34px] lg:h-auto m-0">{cert.title}</p>
      </div>

      <div className="relative -mx-2.5 xs:-mx-3 lg:-mx-4 px-2.5 xs:px-3 lg:px-4 py-1.5 xs:py-2 lg:py-3 flex items-center justify-between border-t border-dashed border-white/10">
        {/* Stub circular cutout masks */}
        <div className="absolute left-[-6px] top-[-6px] lg:left-[-8px] lg:top-[-8px] w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-[#0F0E0E]" />
        <div className="absolute right-[-6px] top-[-6px] lg:right-[-8px] lg:top-[-8px] w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-[#0F0E0E]" />
        <span className="flex items-center gap-1 text-[7.5px] xs:text-[8.5px] sm:text-[9.5px] lg:text-[10.5px] tracking-wider uppercase text-white/60 font-mono group-hover:text-white transition-colors duration-300">
          Explore Credentials
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-2.5 h-2.5 xs:w-3 xs:h-3 text-[#ff6b3d] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"><path d="M7 17L17 7M17 7H9M17 7V15" /></svg>
        </span>
      </div>
    </div>
  );
}

const centerContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    }
  }
};

const centerItemVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const }
  }
};

export default function CertificationsShowcase() {
  const [isDesktop, setIsDesktop] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-120px" });

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen py-12 xs:py-14 sm:py-20 lg:py-0 flex items-center justify-center bg-transparent z-10 overflow-hidden" id="certifications">
      {/* Clean Grid Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent 85%)',
        }}
      />

      <Container className="max-w-7xl mx-auto px-2.5 xs:px-3 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(320px,420px)_1fr] items-center gap-5 xs:gap-6 lg:gap-5 w-full">

          {/* LEFT COLUMN (Row 1 of 2-column grid on mobile, Left column on desktop) */}
          <div className="grid grid-cols-2 lg:flex lg:flex-col gap-2.5 xs:gap-3.5 sm:gap-4 lg:gap-7 items-center lg:items-end lg:pr-2.5 w-full order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: isDesktop ? '115%' : 0, y: isDesktop ? 0 : 55, scale: 0.95 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : { opacity: 0, x: isDesktop ? '115%' : 0, y: isDesktop ? 0 : 55, scale: 0.95 }}
              transition={{
                x: { type: 'spring', stiffness: 35, damping: 12 },
                scale: { type: 'spring', stiffness: 35, damping: 12 },
                opacity: { duration: 0.45 }
              }}
              style={{ originX: 0.5, originY: 0.5 }}
              className="will-change-transform w-full flex justify-center lg:justify-end"
            >
              <motion.div
                animate={isDesktop && isInView ? { y: [0, -6] } : { y: 0 }}
                transition={isDesktop ? {
                  y: {
                    type: 'tween',
                    ease: 'easeInOut',
                    duration: 6,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: CERTIFICATIONS[0].floatDelay + 0.65
                  }
                } : undefined}
                className="w-full flex justify-center lg:justify-end"
              >
                <Link href="/certifications?cert=openai-buildthon" className="block focus:outline-none w-full flex justify-center lg:justify-end">
                  <CertCard cert={CERTIFICATIONS[0]} isDesktop={isDesktop} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isDesktop ? '115%' : 0, y: isDesktop ? 0 : 55, scale: 0.95 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : { opacity: 0, x: isDesktop ? '115%' : 0, y: isDesktop ? 0 : 55, scale: 0.95 }}
              transition={{
                x: { type: 'spring', stiffness: 35, damping: 12, delay: 0.15 },
                scale: { type: 'spring', stiffness: 35, damping: 12, delay: 0.15 },
                opacity: { duration: 0.45, delay: 0.15 }
              }}
              style={{ originX: 0.5, originY: 0.5 }}
              className="will-change-transform w-full flex justify-center lg:justify-end"
            >
              <motion.div
                animate={isDesktop && isInView ? { y: [0, -6] } : { y: 0 }}
                transition={isDesktop ? {
                  y: {
                    type: 'tween',
                    ease: 'easeInOut',
                    duration: 6,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: CERTIFICATIONS[1].floatDelay + 0.8
                  }
                } : undefined}
                className="w-full flex justify-center lg:justify-end"
              >
                <Link href="/certifications?cert=fundamentals-ml" className="block focus:outline-none w-full flex justify-center lg:justify-end">
                  <CertCard cert={CERTIFICATIONS[1]} isDesktop={isDesktop} />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* CENTER PANEL */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={centerContainerVariants}
            className="text-center flex flex-col items-center gap-3 xs:gap-3.5 sm:gap-5 px-1.5 order-1 lg:order-2 select-none"
          >
            <motion.span variants={centerItemVariants} className="inline-flex items-center gap-1.5 xs:gap-2 py-1 xs:py-1.5 px-3.5 xs:px-4 rounded-full border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] text-[9.5px] xs:text-[11px] font-medium tracking-[0.14em] uppercase text-[#ffb088]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 mr-1"><circle cx="12" cy="8" r="5" /><path d="M8.5 13.5L7 22l5-3 5 3-1.5-8.5" /></svg>
              Professional Milestones
            </motion.span>
            
            <motion.h2
              variants={centerItemVariants}
              className="text-[30px] xs:text-[36px] sm:text-[54px] md:text-[64px] lg:text-[72px] font-black tracking-[-0.025em] leading-[1.03] sm:leading-[1.01] text-white"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              Certificates<br />&amp; <span className="bg-gradient-to-r from-[#ff6b3d] via-[#ffb088] to-[#ff6b3d] bg-clip-text text-transparent">Awards</span>
            </motion.h2>
            
            <motion.p variants={centerItemVariants} className="max-w-[320px] xs:max-w-[360px] text-[12px] xs:text-[13px] sm:text-[14.5px] leading-[1.55] text-white/60 font-light font-jakarta">
              A visual journey through verified certifications, hackathons, and credentials.
            </motion.p>
            
            <motion.div variants={centerItemVariants} className="flex items-center justify-center gap-2 xs:gap-3 sm:gap-3.5 text-[9.5px] xs:text-[11px] sm:text-[11.5px] text-white/40 tracking-wider font-mono">
              <span><b>04</b> certifications</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/10"></span>
              <span><b>03</b> platforms</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/10"></span>
              <span><b>2025–26</b></span>
            </motion.div>

            <motion.div variants={centerItemVariants} className="inline-block mt-1.5 xs:mt-2.5 sm:mt-4">
              <Link href="/certifications">
                <button className="relative group inline-flex items-center gap-2 py-2 xs:py-2.5 sm:py-3.5 px-5 xs:px-6 sm:px-7 rounded-full border border-[#ff6b3d] bg-transparent text-[10.5px] xs:text-[11.5px] sm:text-[12px] font-bold tracking-widest uppercase text-white overflow-hidden transition-colors duration-500 hover:text-[#1a0d06] font-mono">
                  <span className="absolute inset-0 bg-[#ff6b3d] translate-y-[101%] transition-transform duration-500 ease-out group-hover:translate-y-0 z-0" />
                  <span className="relative z-10 flex items-center gap-2">
                    View Credentials
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-3.5 h-3.5 text-white group-hover:text-[#1a0d06] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"><path d="M7 17L17 7M17 7H9M17 7V15" /></svg>
                  </span>
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN (Row 2 of 2-column grid on mobile, Right column on desktop) */}
          <div className="grid grid-cols-2 lg:flex lg:flex-col gap-2.5 xs:gap-3.5 sm:gap-4 lg:gap-7 items-center lg:items-start lg:pl-2.5 w-full order-3">
            <motion.div
              initial={{ opacity: 0, x: isDesktop ? '-115%' : 0, y: isDesktop ? 0 : 55, scale: 0.95 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : { opacity: 0, x: isDesktop ? '-115%' : 0, y: isDesktop ? 0 : 55, scale: 0.95 }}
              transition={{
                x: { type: 'spring', stiffness: 35, damping: 12 },
                scale: { type: 'spring', stiffness: 35, damping: 12 },
                opacity: { duration: 0.45 }
              }}
              style={{ originX: 0.5, originY: 0.5 }}
              className="will-change-transform w-full flex justify-center lg:justify-start"
            >
              <motion.div
                animate={isDesktop && isInView ? { y: [0, -6] } : { y: 0 }}
                transition={isDesktop ? {
                  y: {
                    type: 'tween',
                    ease: 'easeInOut',
                    duration: 6,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: CERTIFICATIONS[2].floatDelay + 0.65
                  }
                } : undefined}
                className="w-full flex justify-center lg:justify-start"
              >
                <Link href="/certifications?cert=developing-ai-solutions" className="block focus:outline-none w-full flex justify-center lg:justify-start">
                  <CertCard cert={CERTIFICATIONS[2]} isDesktop={isDesktop} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isDesktop ? '-115%' : 0, y: isDesktop ? 0 : 55, scale: 0.95 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : { opacity: 0, x: isDesktop ? '-115%' : 0, y: isDesktop ? 0 : 55, scale: 0.95 }}
              transition={{
                x: { type: 'spring', stiffness: 35, damping: 12, delay: 0.15 },
                scale: { type: 'spring', stiffness: 35, damping: 12, delay: 0.15 },
                opacity: { duration: 0.45, delay: 0.15 }
              }}
              style={{ originX: 0.5, originY: 0.5 }}
              className="will-change-transform w-full flex justify-center lg:justify-start"
            >
              <motion.div
                animate={isDesktop && isInView ? { y: [0, -6] } : { y: 0 }}
                transition={isDesktop ? {
                  y: {
                    type: 'tween',
                    ease: 'easeInOut',
                    duration: 6,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: CERTIFICATIONS[3].floatDelay + 0.8
                  }
                } : undefined}
                className="w-full flex justify-center lg:justify-start"
              >
                <Link href="/certifications?cert=nptel-iit-madras" className="block focus:outline-none w-full flex justify-center lg:justify-start">
                  <CertCard cert={CERTIFICATIONS[3]} isDesktop={isDesktop} />
                </Link>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}
