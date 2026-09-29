import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ContactButton } from './ContactButton';

interface NavigationProps {
  onOpenContactModal?: () => void;
}

const NAV_ITEMS = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'LeetCode', href: 'https://leetcode.com' },
];

export const Navigation: React.FC<NavigationProps> = ({ onOpenContactModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.85;
      setPastHero(window.scrollY > threshold);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const buttonDarkActive = isOpen || isHovered;
  const showFloatingControls = pastHero || isOpen;

  return (
    <>
      {/* LEFT: Minimal "A" Monogram Logo (shown after scrolling past hero) */}
      <a
        href="#hero"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        aria-label="Akash Sharma — Home"
        className={`fixed top-[30px] left-[20px] md:top-[40px] md:left-[40px] z-[60] inline-flex items-center justify-center mix-blend-difference text-[#F4F1E8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#75C5DE] transition-all duration-300 hover:scale-105 ${
          showFloatingControls
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <svg
          width="36"
          height="32"
          viewBox="0 0 38 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M16.5 2L2 32H8.5L16.5 14.5L24.5 32H31L16.5 2Z"
            fill="currentColor"
          />
          <path
            d="M22.5 2L37 32H33L18.5 2H22.5Z"
            fill="currentColor"
          />
          <polygon points="13.5,24 19.5,24 21.5,29 11.5,29" fill="currentColor" />
        </svg>
      </a>

      {/* RIGHT: Circular 59x59 Hamburger Button (shown after scrolling past hero) */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        aria-controls="floating-menu-panel"
        className={`fixed top-[16px] right-[20px] md:top-[27px] md:right-[40px] z-[70] w-[59px] h-[59px] rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer shadow-[0_8px_24px_rgba(17,17,17,0.12)] border border-[#D7E2EA]/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#75C5DE] ${
          showFloatingControls
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{
          backgroundColor: buttonDarkActive ? '#111111' : '#F4F1E8',
        }}
      >
        <div className="relative w-6 h-4 flex items-center justify-center">
          <motion.span
            animate={
              isOpen
                ? { rotate: 45, y: 0 }
                : { rotate: 0, y: -4 }
            }
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute w-5 h-[2px] rounded-full transition-colors duration-300"
            style={{
              backgroundColor: buttonDarkActive ? '#F4F1E8' : '#111111',
            }}
          />
          <motion.span
            animate={
              isOpen
                ? { rotate: -45, y: 0 }
                : { rotate: 0, y: 4 }
            }
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute w-5 h-[2px] rounded-full transition-colors duration-300"
            style={{
              backgroundColor: buttonDarkActive ? '#F4F1E8' : '#111111',
            }}
          />
        </div>
      </button>

      {/* Backdrop click catcher when menu is open */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[55] bg-[#111111]/25 backdrop-blur-[2px]"
              aria-hidden="true"
            />

            {/* FLOATING DARK MENU PANEL */}
            <motion.nav
              id="floating-menu-panel"
              aria-label="Primary Navigation"
              initial={{
                opacity: 0,
                scale: 0.92,
                y: -12,
                clipPath: 'inset(0% 0% 100% 0% round 20px)',
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                clipPath: 'inset(0% 0% 0% 0% round 20px)',
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: -8,
                clipPath: 'inset(0% 0% 100% 0% round 20px)',
              }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="fixed left-[8px] right-[8px] top-[8px] md:left-auto md:right-[7px] md:top-[7px] md:w-[420px] z-[65] rounded-[20px] p-7 md:p-9 text-[#F4F1E8] shadow-[0_28px_80px_rgba(0,0,0,0.45)] border border-[#F4F1E8]/10 flex flex-col justify-between max-h-[calc(100svh-16px)] overflow-y-auto"
              style={{
                backgroundColor: 'rgba(17, 17, 17, 0.96)',
                backdropFilter: 'blur(26px)',
                WebkitBackdropFilter: 'blur(26px)',
              }}
            >
              <div className="pt-8 md:pt-10 pb-8">
                <p className="text-xs uppercase tracking-[0.2em] text-[#9A9590] mb-6">
                  Navigation
                </p>
                <ul className="space-y-2">
                  {NAV_ITEMS.map((item, idx) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.08 + idx * 0.04,
                        duration: 0.3,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.href);
                        }}
                        className="block text-[36px] md:text-[42px] font-medium leading-[1.15] tracking-[-0.03em] text-[#F4F1E8] transition-all duration-200 hover:opacity-70 hover:translate-x-2 focus-visible:outline-2 focus-visible:outline-[#75C5DE]"
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-[#F4F1E8]/12 space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-[#9A9590] mb-1.5">
                    Email
                  </p>
                  <a
                    href="mailto:akashx0306@gmail.com"
                    className="text-sm md:text-base font-medium text-[#F4F1E8] hover:text-[#75C5DE] transition-colors"
                  >
                    akashx0306@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-5 text-sm font-medium text-[#D7E2EA]">
                  {SOCIAL_LINKS.map((social, idx) => (
                    <React.Fragment key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#75C5DE] transition-colors whitespace-nowrap"
                      >
                        {social.label}
                      </a>
                      {idx < SOCIAL_LINKS.length - 1 && (
                        <span className="text-[#9A9590]" aria-hidden="true">
                          ·
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <div className="pt-1">
                  <ContactButton
                    label="LET'S TALK"
                    onClick={() => {
                      setIsOpen(false);
                      if (onOpenContactModal) {
                        onOpenContactModal();
                      } else {
                        handleNavClick('#contact');
                      }
                    }}
                    className="w-full"
                  />
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
