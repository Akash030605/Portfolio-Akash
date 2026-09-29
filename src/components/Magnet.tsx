import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  maxOffset?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
  disabled?: boolean;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  maxOffset = 10,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
  disabled = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isTouch, setIsTouch] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const checkTouch = () => {
      const hasTouch =
        window.matchMedia('(pointer: coarse)').matches ||
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0;
      setIsTouch(hasTouch);
    };
    checkTouch();
    window.addEventListener('resize', checkTouch, { passive: true });
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  useEffect(() => {
    if (disabled || isTouch || prefersReducedMotion) {
      setOffset({ x: 0, y: 0 });
      return;
    }

    let rafId: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const el = containerRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distX = e.clientX - centerX;
        const distY = e.clientY - centerY;

        if (
          Math.abs(distX) < rect.width / 2 + padding &&
          Math.abs(distY) < rect.height / 2 + padding
        ) {
          setIsActive(true);
          const rawX = distX / (strength * 10);
          const rawY = distY / (strength * 10);
          const clampedX = Math.max(-maxOffset, Math.min(maxOffset, rawX));
          const clampedY = Math.max(-maxOffset, Math.min(maxOffset, rawY));
          setOffset({ x: clampedX, y: clampedY });
        } else {
          setIsActive(false);
          setOffset({ x: 0, y: 0 });
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [disabled, isTouch, prefersReducedMotion, padding, strength, maxOffset]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        transform: `translate3d(${offset.x.toFixed(2)}px, ${offset.y.toFixed(2)}px, 0)`,
        transition: isActive ? activeTransition : inactiveTransition,
        willChange: isTouch || prefersReducedMotion ? 'auto' : 'transform',
      }}
    >
      {children}
    </div>
  );
};
