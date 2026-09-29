import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { LiveProjectButton } from './LiveProjectButton';

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  ctaLabel: string;
  link: string;
  architectureSummary: string;
  highlights: string[];
  images: {
    topLeft: string;
    bottomLeft: string;
    tallRight: string;
    fallbacks?: [string, string, string];
    alts: [string, string, string];
  };
}

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  total: number;
  onSelectProject: (project: ProjectItem, initialImageIndex?: number) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  total,
  onSelectProject,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [imgErrors, setImgErrors] = useState<{
    topLeft?: boolean;
    bottomLeft?: boolean;
    tallRight?: boolean;
  }>({});

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end start'],
  });

  // Subsequent cards appear slightly deeper/scaled as stack progresses
  const targetScale = 1 - (total - 1 - index) * 0.035;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  const stickyTopOffset = index * 28;

  const topLeftSrc =
    imgErrors.topLeft && project.images.fallbacks?.[0]
      ? project.images.fallbacks[0]
      : project.images.topLeft;

  const bottomLeftSrc =
    imgErrors.bottomLeft && project.images.fallbacks?.[1]
      ? project.images.fallbacks[1]
      : project.images.bottomLeft;

  const tallRightSrc =
    imgErrors.tallRight && project.images.fallbacks?.[2]
      ? project.images.fallbacks[2]
      : project.images.tallRight;

  return (
    <div
      ref={wrapperRef}
      className="relative min-h-[85vh] flex items-start justify-center mb-12 md:mb-20 last:mb-0"
    >
      <motion.article
        style={{
          scale: prefersReducedMotion ? 1 : scale,
          top: `calc(96px + ${stickyTopOffset}px)`,
        }}
        className="sticky w-full bg-[#111111] border-2 border-[#D7E2EA] rounded-[40px] sm:rounded-[50px] lg:rounded-[60px] p-[16px] sm:p-[24px] lg:p-[32px] shadow-[0_-20px_60px_rgba(0,0,0,0.65)] transition-colors duration-300"
      >
        {/* TOP ROW: Project Number, Category, Name, Description, Technologies, CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 lg:pb-8 border-b border-[#D7E2EA]/15">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3 text-xs sm:text-sm uppercase tracking-[0.18em] text-[#75C5DE] font-medium tabular-nums">
              <span>{project.number}</span>
              <span aria-hidden="true" className="text-[#9A9590]">
                ·
              </span>
              <span className="text-[#D7E2EA]">{project.category}</span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-[#F4F1E8]">
              {project.title}
            </h3>

            <p className="text-sm sm:text-base text-[#D7E2EA]/80 leading-relaxed max-w-xl">
              {project.description}
            </p>

            {/* Clean unboxed technology metadata with typographic separators */}
            <div className="pt-1 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm font-mono text-[#75C5DE] tabular-nums">
              {project.technologies.map((tech, idx) => (
                <React.Fragment key={tech}>
                  <span>{tech}</span>
                  {idx < project.technologies.length - 1 && (
                    <span aria-hidden="true" className="text-[#9A9590]">
                      ·
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 self-start lg:self-end shrink-0">
            <LiveProjectButton
              label={project.ctaLabel}
              href={project.link}
            />
          </div>
        </div>

        {/* BOTTOM VISUAL GRID: Left two stacked screenshots, Right one tall screenshot */}
        <div className="pt-6 lg:pt-8 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
          {/* Left Column: Two Stacked Screenshots */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5">
            <button
              type="button"
              onClick={() => onSelectProject(project, 0)}
              aria-label={`Inspect ${project.title} view 1`}
              className="group relative w-full h-[180px] sm:h-[210px] rounded-[28px] sm:rounded-[36px] overflow-hidden border border-[#D7E2EA]/15 bg-[#191919] text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[#75C5DE]"
            >
              <img
                src={topLeftSrc}
                alt={project.images.alts[0]}
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={() =>
                  setImgErrors((prev) => ({ ...prev, topLeft: true }))
                }
                className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
            </button>

            <button
              type="button"
              onClick={() => onSelectProject(project, 1)}
              aria-label={`Inspect ${project.title} view 2`}
              className="group relative w-full h-[180px] sm:h-[210px] rounded-[28px] sm:rounded-[36px] overflow-hidden border border-[#D7E2EA]/15 bg-[#191919] text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[#75C5DE]"
            >
              <img
                src={bottomLeftSrc}
                alt={project.images.alts[1]}
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={() =>
                  setImgErrors((prev) => ({ ...prev, bottomLeft: true }))
                }
                className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
            </button>
          </div>

          {/* Right Column: One Tall Primary Screenshot */}
          <div className="lg:col-span-7">
            <button
              type="button"
              onClick={() => onSelectProject(project, 2)}
              aria-label={`Inspect ${project.title} primary application showcase`}
              className="group relative w-full h-[260px] sm:h-[360px] lg:h-[440px] rounded-[32px] sm:rounded-[44px] overflow-hidden border border-[#D7E2EA]/15 bg-[#191919] text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[#75C5DE]"
            >
              <img
                src={tallRightSrc}
                alt={project.images.alts[2]}
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={() =>
                  setImgErrors((prev) => ({ ...prev, tallRight: true }))
                }
                className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111111]/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-xs font-mono uppercase tracking-[0.16em] text-[#F4F1E8]">
                  Click to inspect screenshots & architecture →
                </span>
              </div>
            </button>
          </div>
        </div>
      </motion.article>
    </div>
  );
};
