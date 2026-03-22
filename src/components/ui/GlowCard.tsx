'use client';

import { useRef, useState, useCallback, createContext, useContext, useEffect } from 'react';

// Context for sharing mouse position across cards in a group
interface GlowContextType {
  mousePosition: { x: number; y: number } | null;
}

const GlowContext = createContext<GlowContextType>({ mousePosition: null });

// Container component for grouping cards with shared glow effect
export function GlowCardGroup({
  children,
  className = ''
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  }, []);

  const handleMouseLeave = () => {
    setMousePosition(null);
  };

  return (
    <GlowContext.Provider value={{ mousePosition }}>
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={className}
      >
        {children}
      </div>
    </GlowContext.Provider>
  );
}

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  glowSize?: number;
  borderRadius?: string;
}

export default function GlowCard({
  children,
  className = '',
  glowColor = 'rgba(255, 140, 0, 1)',
  glowSize = 200,
  borderRadius = '1.5rem',
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  // Get shared context from GlowCardGroup (if exists)
  const { mousePosition: groupMousePosition } = useContext(GlowContext);

  // Update glow position and active state based on mouse proximity
  useEffect(() => {
    if (!cardRef.current) {
      setIsActive(false);
      return;
    }

    if (!groupMousePosition) {
      setIsActive(false);
      return;
    }

    const rect = cardRef.current.getBoundingClientRect();
    const proximityThreshold = 50; // Distance from card edge to trigger glow

    // Check if mouse is near or inside the card
    const isNearOrInside =
      groupMousePosition.x >= rect.left - proximityThreshold &&
      groupMousePosition.x <= rect.right + proximityThreshold &&
      groupMousePosition.y >= rect.top - proximityThreshold &&
      groupMousePosition.y <= rect.bottom + proximityThreshold;

    if (isNearOrInside) {
      setIsActive(true);
      setGlowPosition({
        x: groupMousePosition.x - rect.left,
        y: groupMousePosition.y - rect.top,
      });
    } else {
      setIsActive(false);
    }
  }, [groupMousePosition]);

  // Handle direct mouse interaction (for cards not in a group)
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    // Only handle if not in a group context
    if (groupMousePosition) return;

    const rect = cardRef.current.getBoundingClientRect();
    setGlowPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsActive(true);
  }, [groupMousePosition]);

  const handleMouseLeave = () => {
    // Only handle if not in a group context
    if (!groupMousePosition) {
      setIsActive(false);
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className}`}
      style={{ borderRadius }}
    >
      {/* Glow border effect - only visible on hover */}
      <div
        className="absolute inset-0 rounded-[inherit] pointer-events-none overflow-hidden transition-opacity duration-200"
        style={{
          borderRadius,
          opacity: isActive ? 1 : 0,
        }}
      >
        {/* Radial gradient glow that follows cursor */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(${glowSize}px circle at ${glowPosition.x}px ${glowPosition.y}px, ${glowColor}, transparent 45%)`,
          }}
        />
      </div>

      {/* Inner content mask - creates the border effect by covering the center */}
      <div
        className="absolute inset-[2px] rounded-[inherit] pointer-events-none"
        style={{
          borderRadius: `calc(${borderRadius} - 2px)`,
          background: '#141414',
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}
