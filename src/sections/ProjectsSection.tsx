import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { ProjectCard, ProjectItem } from '../components/ProjectCard';
import {
  GENERATED_PROJECT_IMAGES,
  TECHNICAL_VISUAL_ASSETS,
} from '../assets/legoAkashAssets';

// Local project screenshots from src/assets/asha, src/assets/conq, and src/assets/fridgeos
import asha1Img from '../assets/asha/asha1.png';
import asha2Img from '../assets/asha/asha2.png';
import asha3Img from '../assets/asha/asha3.png';

import conq1Img from '../assets/conq/conq1.png';
import conq2Img from '../assets/conq/conq2.png';
import conq3Img from '../assets/conq/conq3.png';

import fridgeos1Img from '../assets/fridgeos/fridgeos1.png';
import fridgeos2Img from '../assets/fridgeos/fridgeos2.png';
import fridgeos3Img from '../assets/fridgeos/fridgeos3.png';

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'asha-boutique',
    number: '01',
    title: 'Asha Boutique',
    category: 'Client Project · Full-Stack E-Commerce',
    description:
      'A production e-commerce showcase and digital storefront built for a boutique brand, combining an editorial customer experience with backend catalog management and cloud deployment.',
    technologies: ['React', 'Python', 'Flask', 'MongoDB', 'AWS'],
    ctaLabel: 'Live Project',
    link: 'https://ashaboutique.co.in',
    architectureSummary:
      'Designed and deployed a full-stack boutique catalog and customer enquiry platform powered by a Python Flask REST API, MongoDB document collections, and an AWS Linux server running Nginx and Gunicorn.',
    highlights: [
      'RESTful Python Flask backend managing seasonal garment collections, categories, and live inventory',
      'MongoDB document schema optimized for multi-variant product filtering and responsive browsing',
      'Production deployment on AWS Linux with Nginx reverse proxy, Gunicorn WSGI workers, and SSL on ashaboutique.co.in',
    ],
    images: {
      topLeft: asha2Img,
      bottomLeft: asha3Img,
      tallRight: asha1Img,
      fallbacks: [
        TECHNICAL_VISUAL_ASSETS.ashaBackend,
        TECHNICAL_VISUAL_ASSETS.ashaCloud,
        GENERATED_PROJECT_IMAGES.ashaBoutiqueMain,
      ],
      alts: [
        'Asha Boutique collection catalog and product showcase view',
        'Asha Boutique product details and customer enquiry flow',
        'Asha Boutique primary storefront hero and brand experience',
      ],
    },
  },
  {
    id: 'conquerhire',
    number: '02',
    title: 'ConquerHire',
    category: 'Full-Stack Platform · Career & Recruitment',
    description:
      'A modern recruitment, candidate evaluation, and job-matching platform engineered to streamline hiring workflows with secure authentication and real-time pipeline tracking.',
    technologies: ['React', 'Spring Boot', 'Node.js', 'JWT', 'REST APIs'],
    ctaLabel: 'Live Project',
    link: 'https://conquer-hire.vercel.app/',
    architectureSummary:
      'Engineered a scalable full-stack recruitment platform featuring stateless JWT authentication, role-based access control for candidates and recruiters, and structured application pipeline APIs.',
    highlights: [
      'Role-based candidate and recruiter workspaces with stateless JWT authentication and protected routes',
      'Structured job discovery, filtering, and application tracking workflows backed by RESTful APIs',
      'Responsive React frontend deployed on Vercel with optimized state management and fast page transitions',
    ],
    images: {
      topLeft: conq2Img,
      bottomLeft: conq3Img,
      tallRight: conq1Img,
      fallbacks: [
        TECHNICAL_VISUAL_ASSETS.followupPipeline,
        TECHNICAL_VISUAL_ASSETS.followupSchema,
        GENERATED_PROJECT_IMAGES.followupMain,
      ],
      alts: [
        'ConquerHire job discovery and candidate matching dashboard',
        'ConquerHire application workflow and hiring pipeline view',
        'ConquerHire primary landing and recruitment platform interface',
      ],
    },
  },
  {
    id: 'fridgeos',
    number: '03',
    title: 'FridgeOS',
    category: 'Full-Stack AI · Kitchen Intelligence',
    description:
      'A full-stack kitchen intelligence web application that turns a photo of an open refrigerator into tailored step-by-step recipes, nutritional breakdowns, and a persistent shopping list in seconds.',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Computer Vision',
      'Tailwind CSS',
    ],
    ctaLabel: 'View Project',
    link: 'https://github.com',
    architectureSummary:
      'Built with a cinematic dark glassmorphic interface, a persistent ambient video stage, client-side HTML5 canvas image compression, and a strict two-pass forensic computer-vision pipeline (/api/analyze, /api/recipes, /api/search-recipes) that eliminates ingredient hallucinations.',
    highlights: [
      'Two-Pass Forensic Fridge Scanner: 6-zone shelf inspection followed by self-verification fact-checking and canonical deduplication',
      'Client-Side Canvas Optimization: Downscales multi-megabyte camera photos (>800KB) to ~200KB (max 1600px at 0.85 JPEG) prior to upload',
      'Tailored Recipe Synthesis & Universal Search: Instant local recipe filtering with 400ms debounced fallback to global recipe discovery',
      'Interactive Ingredient Editor, Per-Serving Macro Breakdown, Printable Recipe Sheet (@media print), and Persistent Shopping List',
    ],
    images: {
      topLeft: fridgeos2Img,
      bottomLeft: fridgeos3Img,
      tallRight: fridgeos1Img,
      fallbacks: [
        TECHNICAL_VISUAL_ASSETS.beyondMeSpring,
        TECHNICAL_VISUAL_ASSETS.beyondMeSecurity,
        GENERATED_PROJECT_IMAGES.beyondMeMain,
      ],
      alts: [
        'FridgeOS interactive ingredient scanner and verification chips',
        'FridgeOS tailored recipe cards, nutrition macros, and shopping list',
        'FridgeOS cinematic dark glassmorphic hero and kitchen intelligence workspace',
      ],
    },
  },
];

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );
  const [activeImageIdx, setActiveImageIdx] = useState<number>(2);
  const [modalImgError, setModalImgError] = useState(false);

  const handleSelectProject = (proj: ProjectItem, initialImageIndex = 2) => {
    setModalImgError(false);
    setActiveImageIdx(initialImageIndex);
    setSelectedProject(proj);
  };

  const getModalImages = (proj: ProjectItem) => [
    {
      src: proj.images.tallRight,
      fallback: proj.images.fallbacks?.[2],
      alt: proj.images.alts[2],
      index: 2,
    },
    {
      src: proj.images.topLeft,
      fallback: proj.images.fallbacks?.[0],
      alt: proj.images.alts[0],
      index: 0,
    },
    {
      src: proj.images.bottomLeft,
      fallback: proj.images.fallbacks?.[1],
      alt: proj.images.alts[1],
      index: 1,
    },
  ];

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative z-10 w-full bg-[#111111] text-[#F4F1E8] rounded-t-[40px] sm:rounded-t-[50px] lg:rounded-t-[60px] -mt-[40px] sm:-mt-[48px] lg:-mt-[56px] py-[80px] px-[16px] sm:py-[100px] sm:px-[32px] lg:py-[128px] lg:px-[40px]"
    >
      <div className="max-w-[1360px] mx-auto">
        <FadeIn y={30}>
          <div className="flex flex-col items-center text-center mb-14 sm:mb-20 lg:mb-24">
            <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.22em] text-[#75C5DE] mb-4">
              FEATURED ENGINEERING WORK
            </span>
            <h2
              id="projects-heading"
              className="font-extrabold uppercase tracking-[-0.04em] text-[#F4F1E8]"
              style={{
                fontSize: 'clamp(3rem, 12vw, 160px)',
                lineHeight: 0.9,
              }}
            >
              PROJECTS<span className="text-[#75C5DE]">.</span>
            </h2>
          </div>
        </FadeIn>

        {/* Two Sticky Stacking Project Cards */}
        <div className="relative">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              total={PROJECTS_DATA.length}
              onSelectProject={handleSelectProject}
            />
          ))}
        </div>
      </div>

      {/* Interactive Case Study & System Architecture Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6 md:p-10"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-[#111111]/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[32px] bg-[#161616] border-2 border-[#D7E2EA]/30 p-6 sm:p-10 text-[#F4F1E8] shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4 pb-6 border-b border-[#D7E2EA]/15">
                <div>
                  <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.18em] text-[#75C5DE] mb-2">
                    <span>{selectedProject.number}</span>
                    <span>·</span>
                    <span>{selectedProject.category}</span>
                  </div>
                  <h3
                    id="modal-project-title"
                    className="text-2xl sm:text-4xl font-semibold tracking-[-0.03em]"
                  >
                    {selectedProject.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project details"
                  className="w-11 h-11 rounded-full bg-[#F4F1E8]/10 hover:bg-[#75C5DE] hover:text-[#111111] flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 space-y-6">
                {/* Active Screenshot Display */}
                {(() => {
                  const gallery = getModalImages(selectedProject);
                  const currentItem =
                    gallery.find((g) => g.index === activeImageIdx) ||
                    gallery[0];
                  return (
                    <div className="space-y-3">
                      <div className="rounded-[24px] overflow-hidden border border-[#D7E2EA]/15 bg-[#111111] aspect-video">
                        <img
                          src={
                            modalImgError && currentItem.fallback
                              ? currentItem.fallback
                              : currentItem.src
                          }
                          alt={currentItem.alt}
                          referrerPolicy="no-referrer"
                          onError={() => setModalImgError(true)}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>

                      {/* 3-Image Switcher Thumbnails */}
                      <div className="grid grid-cols-3 gap-3">
                        {gallery.map((item, idx) => {
                          const isSelected = item.index === activeImageIdx;
                          return (
                            <button
                              key={item.index}
                              type="button"
                              onClick={() => {
                                setModalImgError(false);
                                setActiveImageIdx(item.index);
                              }}
                              aria-label={`View screenshot ${idx + 1} of ${selectedProject.title}`}
                              className={`relative rounded-[14px] overflow-hidden aspect-video border transition-all cursor-pointer ${
                                isSelected
                                  ? 'border-[#75C5DE] ring-2 ring-[#75C5DE]/40 opacity-100'
                                  : 'border-[#D7E2EA]/15 opacity-60 hover:opacity-90'
                              }`}
                            >
                              <img
                                src={item.src}
                                alt={item.alt}
                                className="w-full h-full object-cover object-top"
                              />
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })()}

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  <div className="md:col-span-7 space-y-4">
                    <h4 className="text-xs font-mono uppercase tracking-[0.16em] text-[#75C5DE]">
                      System Overview & Engineering
                    </h4>
                    <p className="text-sm sm:text-base text-[#D7E2EA] leading-relaxed">
                      {selectedProject.architectureSummary}
                    </p>
                    <ul className="space-y-2.5 pt-2">
                      {selectedProject.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-[#D7E2EA]/85"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#75C5DE] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:col-span-5 space-y-4 bg-[#111111] rounded-[20px] p-5 border border-[#D7E2EA]/12 flex flex-col justify-between">
                    <div className="space-y-3">
                      <h4 className="text-xs font-mono uppercase tracking-[0.16em] text-[#9A9590]">
                        Technical Stack
                      </h4>
                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-sm font-mono text-[#75C5DE]">
                        {selectedProject.technologies.map((tech, idx) => (
                          <React.Fragment key={tech}>
                            <span>{tech}</span>
                            {idx < selectedProject.technologies.length - 1 && (
                              <span className="text-[#9A9590]">·</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-[#D7E2EA]/10 flex flex-col gap-3">
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-[#75C5DE] text-[#111111] font-semibold text-xs uppercase tracking-[0.16em] py-3.5 px-6 hover:bg-[#FFFFFF] transition-colors"
                      >
                        <span>Visit Live Project</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
