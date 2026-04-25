'use client';

import { useEffect, useRef, useState } from 'react';

const DOT_SIZE = 5;
const RING_SIZE = 24;
const FOLLOW_SPEED = 0.16;

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });
  const hasPointerRef = useRef(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || prefersReducedMotion) return;

    document.documentElement.classList.add('custom-cursor-enabled');
    setEnabled(true);

    return () => {
      document.documentElement.classList.remove('custom-cursor-enabled');
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const setVisible = (visible: boolean) => {
      dot.classList.toggle('is-visible', visible);
      ring.classList.toggle('is-visible', visible);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType && event.pointerType !== 'mouse') return;

      const x = event.clientX;
      const y = event.clientY;

      pointerRef.current.x = x;
      pointerRef.current.y = y;

      setVisible(true);

      if (!hasPointerRef.current) {
        hasPointerRef.current = true;
        ringPosRef.current.x = x;
        ringPosRef.current.y = y;
      }

      dot.style.transform = `translate3d(${x - DOT_SIZE / 2}px, ${y - DOT_SIZE / 2}px, 0)`;
    };

    const handleWindowBlur = () => {
      setVisible(false);
    };

    const handleWindowFocus = () => {
      if (hasPointerRef.current) {
        setVisible(true);
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setVisible(false);
        return;
      }

      if (hasPointerRef.current) {
        setVisible(true);
      }
    };

    const animateRing = () => {
      if (hasPointerRef.current) {
        const current = ringPosRef.current;
        const pointer = pointerRef.current;

        current.x += (pointer.x - current.x) * FOLLOW_SPEED;
        current.y += (pointer.y - current.y) * FOLLOW_SPEED;

        ring.style.transform = `translate3d(${current.x - RING_SIZE / 2}px, ${current.y - RING_SIZE / 2}px, 0)`;
      }

      rafRef.current = window.requestAnimationFrame(animateRing);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('blur', handleWindowBlur);
    window.addEventListener('focus', handleWindowFocus);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    rafRef.current = window.requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('blur', handleWindowBlur);
      window.removeEventListener('focus', handleWindowFocus);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <div ref={ringRef} className="custom-cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
    </>
  );
}