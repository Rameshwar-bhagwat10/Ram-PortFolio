'use client';

import { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
}

interface Bubble {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
  color: { r: number; g: number; b: number };
}

export default function NeonCursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const mouseRef = useRef<Point>({ x: 0, y: 0 });
  const currentRef = useRef<Point>({ x: 0, y: 0 });
  const trailRef = useRef<Point[]>([]);
  const bubblesRef = useRef<Bubble[]>([]);
  const lastMoveTimeRef = useRef<number>(Date.now());
  const lastBubbleTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    // Disable on touch devices
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Setup canvas with device pixel ratio for sharpness
    const setupCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.scale(dpr, dpr);

      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    setupCanvas();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
      lastMoveTimeRef.current = Date.now();
    };

    // Animation loop
    const animate = () => {
      // Faster interpolation for quicker line appearance
      currentRef.current.x += (mouseRef.current.x - currentRef.current.x) * 0.2;
      currentRef.current.y += (mouseRef.current.y - currentRef.current.y) * 0.2;

      // Add current position to trail
      trailRef.current.push({
        x: currentRef.current.x,
        y: currentRef.current.y,
      });

      // Much shorter trail for compact effect
      if (trailRef.current.length > 12) {
        trailRef.current.shift();
      }

      // Create bubbles periodically with smaller size
      const now = Date.now();
      if (now - lastBubbleTimeRef.current > 80) { // Create bubble every 80ms
        // Random color from the gradient palette
        const colors = [
          { r: 255, g: 0, b: 0 },      // Red
          { r: 255, g: 20, b: 147 },   // Pink
          { r: 255, g: 140, b: 0 },    // Orange
          { r: 255, g: 69, b: 0 },     // Orange-Red
          { r: 255, g: 105, b: 180 },  // Hot Pink
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        bubblesRef.current.push({
          x: mouseRef.current.x + (Math.random() - 0.5) * 8,
          y: mouseRef.current.y + (Math.random() - 0.5) * 8,
          vx: (Math.random() - 0.5) * 0.8,
          vy: -Math.random() * 1.5 - 0.8, // Float upward
          size: Math.random() * 2 + 1, // Smaller bubbles (1-3px)
          opacity: 1,
          life: 1,
          color: color, // Store color for this bubble
        });
        lastBubbleTimeRef.current = now;
      }

      // Update bubbles
      bubblesRef.current = bubblesRef.current.filter(bubble => {
        bubble.x += bubble.vx;
        bubble.y += bubble.vy;
        bubble.life -= 0.01;
        bubble.opacity = bubble.life;
        return bubble.life > 0;
      });

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw bubbles first (behind trail)
      bubblesRef.current.forEach(bubble => {
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);
        
        // Gradient fill for bubble using its assigned color
        const bubbleGradient = ctx.createRadialGradient(
          bubble.x, bubble.y, 0,
          bubble.x, bubble.y, bubble.size
        );
        bubbleGradient.addColorStop(0, `rgba(${bubble.color.r}, ${bubble.color.g}, ${bubble.color.b}, ${bubble.opacity * 0.8})`);
        bubbleGradient.addColorStop(0.5, `rgba(${bubble.color.r}, ${bubble.color.g}, ${bubble.color.b}, ${bubble.opacity * 0.5})`);
        bubbleGradient.addColorStop(1, `rgba(${bubble.color.r}, ${bubble.color.g}, ${bubble.color.b}, 0)`);
        
        ctx.fillStyle = bubbleGradient;
        ctx.fill();
        
        // Bubble outline with matching color
        ctx.strokeStyle = `rgba(${bubble.color.r}, ${bubble.color.g}, ${bubble.color.b}, ${bubble.opacity * 0.4})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });

      // Only draw trail if trail has enough points
      if (trailRef.current.length > 2) {
        const trail = trailRef.current;

        // Check if mouse is still moving (fade out if stopped)
        const timeSinceMove = Date.now() - lastMoveTimeRef.current;
        const fadeMultiplier = timeSinceMove > 100 ? Math.max(0, 1 - (timeSinceMove - 100) / 500) : 1;

        if (fadeMultiplier > 0) {
          // Create gradient from red to pink to orange
          const gradient = ctx.createLinearGradient(
            trail[0].x,
            trail[0].y,
            trail[trail.length - 1].x,
            trail[trail.length - 1].y
          );
          gradient.addColorStop(0, '#FF0000'); // Red at start
          gradient.addColorStop(0.5, '#FF1493'); // Pink in middle
          gradient.addColorStop(1, '#FF8C00'); // Orange at end

          // Draw glow layer as continuous path
          ctx.beginPath();
          ctx.moveTo(trail[0].x, trail[0].y);
          
          for (let i = 0; i < trail.length - 1; i++) {
            const xc = (trail[i].x + trail[i + 1].x) / 2;
            const yc = (trail[i].y + trail[i + 1].y) / 2;
            ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
          }
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 3;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.shadowColor = '#FF1493';
          ctx.shadowBlur = 6;
          ctx.globalAlpha = 0.25 * fadeMultiplier;
          ctx.stroke();

          // Draw core line as continuous path with gradient opacity for smooth taper
          const segmentCount = trail.length - 1;
          
          for (let i = 0; i < segmentCount; i++) {
            const progress = i / segmentCount;
            
            // Smooth cubic taper - very gradual from head to tail
            const widthFactor = Math.pow(1 - progress, 3);
            const opacityFactor = Math.pow(1 - progress, 2);
            
            ctx.beginPath();
            
            if (i === 0) {
              ctx.moveTo(trail[i].x, trail[i].y);
            }
            
            const xc = (trail[i].x + trail[i + 1].x) / 2;
            const yc = (trail[i].y + trail[i + 1].y) / 2;
            
            if (i === 0) {
              ctx.lineTo(xc, yc);
            } else {
              const prevXc = (trail[i - 1].x + trail[i].x) / 2;
              const prevYc = (trail[i - 1].y + trail[i].y) / 2;
              ctx.moveTo(prevXc, prevYc);
              ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
            }
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = Math.max(0.3, 1.5 * widthFactor); // Thinner: min 0.3px, max 1.5px
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.shadowColor = '#FF1493';
            ctx.shadowBlur = 4 * widthFactor;
            ctx.globalAlpha = Math.max(0.3, 0.95 * fadeMultiplier * opacityFactor);
            ctx.stroke();
          }

          // Reset global alpha
          ctx.globalAlpha = 1;
        }
      }

      // Draw glowing dot at exact cursor position (not smoothed) - smaller size
      const dotGradient = ctx.createRadialGradient(
        mouseRef.current.x, mouseRef.current.y, 0,
        mouseRef.current.x, mouseRef.current.y, 5
      );
      dotGradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
      dotGradient.addColorStop(0.3, 'rgba(255, 20, 147, 0.8)');
      dotGradient.addColorStop(0.7, 'rgba(255, 140, 0, 0.6)');
      dotGradient.addColorStop(1, 'rgba(255, 140, 0, 0)');

      ctx.beginPath();
      ctx.arc(mouseRef.current.x, mouseRef.current.y, 5, 0, Math.PI * 2);
      ctx.fillStyle = dotGradient;
      ctx.fill();

      // Inner bright dot - smaller
      ctx.beginPath();
      ctx.arc(mouseRef.current.x, mouseRef.current.y, 1.5, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.shadowColor = '#FF1493';
      ctx.shadowBlur = 4;
      ctx.fill();
      ctx.shadowBlur = 0;

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Window resize handler
    const handleResize = () => {
      setupCanvas();
    };

    // Start animation
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    animationFrameRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-[9999]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
