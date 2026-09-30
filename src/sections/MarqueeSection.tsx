import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import {
  GENERATED_PROJECT_IMAGES,
  TECHNICAL_VISUAL_ASSETS,
} from '../assets/legoAkashAssets';

// Row 1 local assets (src/assets/row1 & src/assets/fridgeos)
import truthwingsImg from '../assets/row1/truthwings.png';
import conquerhireImg from '../assets/row1/conquerhire.10.21\u202fPM.png';
import vitaltwinImg from '../assets/row1/Vitaltwin.png';
import ashaboutiqueImg from '../assets/row1/ashaboutique.png';
import fridgeos1Img from '../assets/fridgeos/fridgeos1.png';
import fridgeos2Img from '../assets/fridgeos/fridgeos2.png';

// Row 2 local assets (src/assets/row2)
import awsImg from '../assets/row2/aws.png';
import springBootImg from '../assets/row2/Spring-Boot.png';
import mongoGif from '../assets/row2/mongo.gif';
import socketIoImg from '../assets/row2/so.png';

interface MarqueeAsset {
  src: string;
  fallbackSrc: string;
  alt: string;
  label: string;
  meta: string;
}

/**
 * ROW 1 — Drawn directly from resume & featured projects:
 * - FridgeOS (fridgeos1.png)
 * - TruthWings EdTech (truthwings.png)
 * - ConquerHire (conquerhire.10.21 PM.png)
 * - VitalTwin (Vitaltwin.png)
 * - Asha Boutique (ashaboutique.png)
 */
const ROW_ONE_ASSETS: MarqueeAsset[] = [
  {
    src: fridgeos1Img,
    fallbackSrc: GENERATED_PROJECT_IMAGES.beyondMeMain,
    alt: 'FridgeOS full-stack kitchen intelligence and computer-vision platform',
    label: 'FridgeOS — Kitchen Intelligence',
    meta: 'React · TypeScript · Computer Vision · REST APIs',
  },
  {
    src: truthwingsImg,
    fallbackSrc: GENERATED_PROJECT_IMAGES.followupMain,
    alt: 'TruthWings EdTech real-time data pipeline dashboard',
    label: 'TruthWings EdTech',
    meta: 'Spring Boot · REST APIs · Real-time',
  },
  {
    src: conquerhireImg,
    fallbackSrc: TECHNICAL_VISUAL_ASSETS.followupPipeline,
    alt: 'ConquerHire job board and matching algorithm architecture',
    label: 'ConquerHire',
    meta: 'React · Spring Boot · Node.js · JWT',
  },
  {
    src: vitaltwinImg,
    fallbackSrc: GENERATED_PROJECT_IMAGES.beyondMeMain,
    alt: 'VitalTwin',
    label: 'VitalTwin',
    meta: 'Python · ML · React',
  },
  {
    src: ashaboutiqueImg,
    fallbackSrc: GENERATED_PROJECT_IMAGES.ashaBoutiqueMain,
    alt: 'Asha Boutique full-stack Flask and React e-commerce showcase',
    label: 'Asha Boutique',
    meta: 'Python · Flask · React · MongoDB',
  },
];

/**
 * ROW 2 — Resume-backed systems, cloud, security & data work:
 * - FridgeOS Forensic Scanner & Recipes (fridgeos2.png)
 * - AWS Cloud Infrastructure (aws.png)
 * - Spring Boot Security (Spring-Boot.png)
 * - Data Modeling & Storage (mongo.gif)
 * - Socket.IO Realtime Chat (so.png)
 */
const ROW_TWO_ASSETS: MarqueeAsset[] = [
  {
    src: fridgeos2Img,
    fallbackSrc: TECHNICAL_VISUAL_ASSETS.beyondMeSpring,
    alt: 'FridgeOS two-pass forensic ingredient scanner and recipe synthesis',
    label: 'FridgeOS Forensic Vision Pipeline',
    meta: 'Two-Pass AI Scan · Canvas Optimization · Nutrition',
  },
  {
    src: awsImg,
    fallbackSrc: TECHNICAL_VISUAL_ASSETS.ashaCloud,
    alt: 'AWS EC2 S3 IAM Lambda production deployment architecture',
    label: 'AWS Cloud Infrastructure',
    meta: 'AWS · EC2 · S3 · Lambda · IAM',
  },
  {
    src: springBootImg,
    fallbackSrc: TECHNICAL_VISUAL_ASSETS.beyondMeSecurity,
    alt: 'Spring Boot OAuth2 JWT stateless authentication flow',
    label: 'Spring Boot Security',
    meta: 'OAuth2 · JWT · AES-256 · TLS 1.3',
  },
  {
    src: mongoGif,
    fallbackSrc: TECHNICAL_VISUAL_ASSETS.followupSchema,
    alt: 'PostgreSQL and MongoDB relational data modeling schema',
    label: 'Data Modeling & Storage',
    meta: 'PostgreSQL · MongoDB · MySQL',
  },
  {
    src: socketIoImg,
    fallbackSrc: TECHNICAL_VISUAL_ASSETS.followupPipeline,
    alt: 'Socket.IO real-time multi-client image recognition chat',
    label: 'Socket.IO Realtime Chat',
    meta: 'Socket.IO · WebSockets · Node.js',
  },
];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [fallbackImages, setFallbackImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (prefersReducedMotion) return;

    let rafId: number | null = null;
    let currentScroll = window.scrollY;
    let targetScroll = window.scrollY;

    const updateMarquee = () => {
      currentScroll += (targetScroll - currentScroll) * 0.12;
      const offset = currentScroll * 0.22;

      if (row1Ref.current) {
        // Row 1 moves right based on scroll
        row1Ref.current.style.transform = `translate3d(${(-950 + (offset % 950)).toFixed(
          2
        )}px, 0, 0)`;
      }
      if (row2Ref.current) {
        // Row 2 moves left based on scroll
        row2Ref.current.style.transform = `translate3d(${(-180 - (offset % 950)).toFixed(
          2
        )}px, 0, 0)`;
      }

      if (Math.abs(targetScroll - currentScroll) > 0.2) {
        rafId = requestAnimationFrame(updateMarquee);
      } else {
        rafId = null;
      }
    };

    const handleScroll = () => {
      targetScroll = window.scrollY;
      if (rafId === null) {
        rafId = requestAnimationFrame(updateMarquee);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [prefersReducedMotion]);

  const row1Repeated = [...ROW_ONE_ASSETS, ...ROW_ONE_ASSETS, ...ROW_ONE_ASSETS];
  const row2Repeated = [...ROW_TWO_ASSETS, ...ROW_TWO_ASSETS, ...ROW_TWO_ASSETS];

  return (
    <section
      id="work"
      ref={sectionRef}
      aria-label="Engineering Reel & Selected Visuals"
      className="relative w-full bg-[#111111] py-16 sm:py-24 overflow-hidden border-t border-[#F4F1E8]/10"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 mb-8 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-[#9A9590]">
        <span>SELECTED ENGINEERING REEL</span>
        <span className="text-[#75C5DE]">SYSTEMS · APIS · INTERFACES</span>
      </div>

      <div className="space-y-[12px]">
        {/* ROW 1: Moves Right on Scroll */}
        <div
          ref={row1Ref}
          className="flex items-center gap-[12px] w-max"
          style={{ willChange: prefersReducedMotion ? 'auto' : 'transform' }}
        >
          {row1Repeated.map((item, idx) => {
            const key = `r1-${idx}`;
            const useFallback = fallbackImages[key];
            return (
              <div
                key={key}
                className="relative w-[300px] h-[195px] sm:w-[420px] sm:h-[270px] rounded-[24px] overflow-hidden bg-[#1A1A1A] border border-[#D7E2EA]/15 shrink-0 group"
              >
                <img
                  src={useFallback ? item.fallbackSrc : item.src}
                  alt={item.alt}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={() =>
                    setFallbackImages((prev) => ({ ...prev, [key]: true }))
                  }
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111111]/85 via-[#111111]/20 to-transparent flex flex-col justify-end p-5">
                  <span className="text-sm font-medium text-[#F4F1E8]">
                    {item.label}
                  </span>
                  <span className="text-xs font-mono text-[#75C5DE]">
                    {item.meta}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ROW 2: Moves Left on Scroll */}
        <div
          ref={row2Ref}
          className="flex items-center gap-[12px] w-max"
          style={{ willChange: prefersReducedMotion ? 'auto' : 'transform' }}
        >
          {row2Repeated.map((item, idx) => {
            const key = `r2-${idx}`;
            const useFallback = fallbackImages[key];
            return (
              <div
                key={key}
                className="relative w-[300px] h-[195px] sm:w-[420px] sm:h-[270px] rounded-[24px] overflow-hidden bg-[#1A1A1A] border border-[#D7E2EA]/15 shrink-0 group"
              >
                <img
                  src={useFallback ? item.fallbackSrc : item.src}
                  alt={item.alt}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={() =>
                    setFallbackImages((prev) => ({ ...prev, [key]: true }))
                  }
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111111]/85 via-[#111111]/20 to-transparent flex flex-col justify-end p-5">
                  <span className="text-sm font-medium text-[#F4F1E8]">
                    {item.label}
                  </span>
                  <span className="text-xs font-mono text-[#75C5DE]">
                    {item.meta}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
