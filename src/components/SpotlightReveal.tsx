import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import {
  LEGO_AKASH_BASE_DATA_URI,
  LEGO_AKASH_REVEAL_DATA_URI,
} from '../assets/legoAkashAssets';

interface SpotlightRevealProps {
  baseImage?: string;
  revealImage?: string;
  radius?: number;
  alt?: string;
  className?: string;
}

export const SpotlightReveal: React.FC<SpotlightRevealProps> = ({
  baseImage = '/assets/akash-hero.png',
  revealImage = '/assets/akash-hero-reveal.png',
  radius = 260,
  alt = 'Akash — Software Engineer LEGO 3D Character',
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const maskCanvasRef = useRef<HTMLCanvasElement>(null);
  const revealLayerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const [baseSrc, setBaseSrc] = useState<string>(baseImage);
  const [revealSrc, setRevealSrc] = useState<string>(revealImage);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);

  useEffect(() => {
    const checkTouch = () => {
      const touch =
        window.matchMedia('(pointer: coarse)').matches ||
        window.innerWidth < 768 ||
        'ontouchstart' in window;
      setIsTouchDevice(touch);
    };
    checkTouch();
    window.addEventListener('resize', checkTouch, { passive: true });
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  useEffect(() => {
    if (isTouchDevice || prefersReducedMotion) return;

    const container = containerRef.current;
    const canvas = maskCanvasRef.current;
    const revealLayer = revealLayerRef.current;
    if (!container || !canvas || !revealLayer) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId: number | null = null;
    let targetX = -9999;
    let targetY = -9999;
    let currentX = -9999;
    let currentY = -9999;
    let isInside = false;

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(rect.width));
      canvas.height = Math.max(1, Math.floor(rect.height));
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (
        x >= -radius &&
        x <= rect.width + radius &&
        y >= -radius &&
        y <= rect.height + radius
      ) {
        if (!isInside) {
          currentX = x;
          currentY = y;
          isInside = true;
        }
        targetX = x;
        targetY = y;
      } else {
        isInside = false;
      }
    };

    const renderLoop = () => {
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      if (isInside) {
        currentX += (targetX - currentX) * 0.1;
        currentY += (targetY - currentY) * 0.1;

        const grad = ctx.createRadialGradient(
          currentX,
          currentY,
          0,
          currentX,
          currentY,
          radius
        );
        grad.addColorStop(0, 'rgba(255,255,255,1)');
        grad.addColorStop(0.4, 'rgba(255,255,255,1)');
        grad.addColorStop(0.6, 'rgba(255,255,255,0.75)');
        grad.addColorStop(0.75, 'rgba(255,255,255,0.4)');
        grad.addColorStop(0.88, 'rgba(255,255,255,0.12)');
        grad.addColorStop(1, 'rgba(255,255,255,0)');

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);

        const maskString = `radial-gradient(${radius}px circle at ${currentX.toFixed(
          1
        )}px ${currentY.toFixed(
          1
        )}px, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,0.75) 60%, rgba(255,255,255,0.4) 75%, rgba(255,255,255,0.12) 88%, rgba(255,255,255,0) 100%)`;

        revealLayer.style.webkitMaskImage = maskString;
        revealLayer.style.maskImage = maskString;
        revealLayer.style.opacity = '1';
      } else {
        revealLayer.style.opacity = '0';
      }

      rafId = requestAnimationFrame(renderLoop);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [isTouchDevice, prefersReducedMotion, radius]);

  return (
    <div
      ref={containerRef}
      className={`relative select-none ${className}`}
    >
      {/* Hidden/offscreen HTML5 canvas generating the radial gradient spotlight mask */}
      <canvas
        ref={maskCanvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full opacity-0"
      />

      {/* BASE LAYER: /assets/akash-hero.png */}
      <img
        src={baseSrc}
        alt={alt}
        referrerPolicy="no-referrer"
        onError={() => {
          if (baseSrc !== LEGO_AKASH_BASE_DATA_URI) {
            setBaseSrc(LEGO_AKASH_BASE_DATA_URI);
          }
        }}
        className="w-full h-full object-contain object-bottom block pointer-events-none select-none"
      />

      {/* REVEAL LAYER: /assets/akash-hero-reveal.png (Desktop interactive spotlight) */}
      {!isTouchDevice && !prefersReducedMotion && (
        <div
          ref={revealLayerRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 w-full h-full transition-opacity duration-200"
          style={{
            opacity: 0,
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
          }}
        >
          <img
            src={revealSrc}
            alt=""
            referrerPolicy="no-referrer"
            onError={() => {
              if (revealSrc !== LEGO_AKASH_REVEAL_DATA_URI) {
                setRevealSrc(LEGO_AKASH_REVEAL_DATA_URI);
              }
            }}
            className="w-full h-full object-contain object-bottom block select-none"
          />
        </div>
      )}
    </div>
  );
};
