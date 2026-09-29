import React, { useEffect, useRef, useState } from 'react';
import heroVideoSrc from '../assets/vid.mp4';

const VIDEO_SRC = heroVideoSrc;

const SENSITIVITY = 0.8;

const TYPEWRITER_TEXT =
  "Hey there, I'm Akash Sharma, Full Stack Builder & Software Engineer";

const PORTFOLIO_EMAIL = 'akashx0306@gmail.com';

const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
];

const ACTION_PILLS = [
  { label: 'Explore my projects', href: '#projects' },
  { label: 'Technical expertise', href: '#expertise' },
  { label: 'Send a brief hello', href: '#contact' },
  { label: 'See how I build', href: '#about' },
];

function useTypewriter(
  text: string,
  speed: number = 38,
  startDelay: number = 600
) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed('');
    setDone(false);

    let index = 0;
    let intervalId: ReturnType<typeof setInterval> | null = null;

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        index += 1;
        setDisplayed(text.slice(0, index));
        if (index >= text.length) {
          if (intervalId) clearInterval(intervalId);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  return { displayed, done };
}

export const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const prevXRef = useRef<number | null>(null);
  const targetTimeRef = useRef<number>(0);
  const isSeekingRef = useRef<boolean>(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pillsVisible, setPillsVisible] = useState(false);

  const { displayed, done } = useTypewriter(TYPEWRITER_TEXT, 38, 600);

  // Action pills fade-in + slide-up 400ms after load (independent of typewriter)
  useEffect(() => {
    const timer = setTimeout(() => {
      setPillsVisible(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  // Mouse-scrub controlled background video
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const video = videoRef.current;
      if (!video || !video.duration || Number.isNaN(video.duration)) return;

      const currentX = e.clientX;
      if (prevXRef.current === null) {
        prevXRef.current = currentX;
        return;
      }

      const delta = currentX - prevXRef.current;
      prevXRef.current = currentX;

      const timeOffset =
        (delta / window.innerWidth) * SENSITIVITY * video.duration;
      const nextTime = Math.min(
        video.duration,
        Math.max(0, targetTimeRef.current + timeOffset)
      );

      targetTimeRef.current = nextTime;

      if (!isSeekingRef.current) {
        isSeekingRef.current = true;
        video.currentTime = targetTimeRef.current;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleVideoSeeked = () => {
    const video = videoRef.current;
    if (!video) {
      isSeekingRef.current = false;
      return;
    }

    if (Math.abs(video.currentTime - targetTimeRef.current) > 0.01) {
      video.currentTime = targetTimeRef.current;
    } else {
      isSeekingRef.current = false;
    }
  };

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopyEmail = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(PORTFOLIO_EMAIL);
    }
  };

  return (
    <section
      id="hero"
      aria-label="Hero — Akash Sharma Software Engineer"
      className="relative w-full h-screen overflow-hidden bg-black"
      style={{ fontFamily: 'var(--font-body)' }}
    >
      {/* BACKGROUND VIDEO (mouse-scrub controlled, positioned so avatar sits on the right side) */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-black">
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          muted
          playsInline
          preload="auto"
          onSeeked={handleVideoSeeked}
          className="w-full h-full object-cover translate-x-[12%] sm:translate-x-[18%] md:translate-x-[22%] lg:translate-x-[24%]"
          style={{ objectPosition: 'center center' }}
        />
        {/* Seamless black gradient on the left so the shifted video edge blends invisibly into the black background */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-[35%] bg-gradient-to-r from-black via-black/90 to-transparent"
        />
      </div>

      {/* NAVBAR (z-index: 10) */}
      <header className="absolute top-0 left-0 right-0 z-10 w-full px-5 sm:px-8 py-4 sm:py-5 flex flex-row justify-between items-center">
        {/* Logo (left) */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex flex-row items-center gap-3 text-white"
        >
          <span
            className="text-[21px] sm:text-[26px] tracking-tight text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Ak
          </span>
          
        </a>

        {/* Desktop nav links (center, hidden below md) */}
        <nav
          aria-label="Hero Navigation"
          className="hidden md:flex flex-row items-center text-[23px] text-white"
        >
          {NAV_LINKS.map((link, index) => (
            <React.Fragment key={link.label}>
              <a
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="hover:opacity-60 transition-opacity"
              >
                {link.label}
              </a>
              {index < NAV_LINKS.length - 1 && (
                <span className="whitespace-pre">, </span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Desktop CTA (right, hidden below md) */}
        <a
          href="#contact"
          onClick={(e) => handleScrollTo(e, '#contact')}
          className="hidden md:inline-block text-[23px] text-white underline underline-offset-2 hover:opacity-60 transition-opacity"
        >
          Get in touch
        </a>

        {/* Mobile hamburger (visible below md) */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          className="md:hidden flex flex-col gap-[5px] p-1 cursor-pointer"
        >
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 ${
              mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 ${
              mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </header>

      {/* Mobile overlay (z-index: 9) */}
      <div
        className="fixed inset-0 z-[9] bg-black/90 backdrop-blur-md flex flex-col justify-center items-start px-8 gap-8 md:hidden transition-opacity duration-300"
        style={{
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? 'auto' : 'none',
        }}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => handleScrollTo(e, link.href)}
            className="text-[32px] font-medium text-white hover:opacity-60 transition-opacity"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={(e) => handleScrollTo(e, '#contact')}
          className="text-[32px] font-medium text-white underline underline-offset-2 hover:opacity-60 transition-opacity"
        >
          Get in touch
        </a>
      </div>

      {/* HERO CONTENT (z-index: 1) */}
      <div className="relative z-[1] h-screen flex flex-col justify-end pb-12 md:justify-center md:pb-0 px-5 sm:px-8 md:px-10 overflow-hidden">
        <div className="max-w-xl relative z-10">
          {/* 1. Blurred intro label */}
          <div
            className="pointer-events-none select-none mb-5 sm:mb-6"
            style={{
              fontSize: 'clamp(18px, 4vw, 26px)',
              lineHeight: 1.3,
              fontWeight: 400,
              color: '#fff',
              filter: 'blur(4px)',
            }}
          >
            Java  Python  React
            <br />
            AWS &amp; Mongodb
          </div>

          {/* 2. Typewriter text */}
          <p
            className="text-white mb-5 sm:mb-6"
            style={{
              fontSize: 'clamp(18px, 4vw, 26px)',
              lineHeight: 1.35,
              fontWeight: 400,
              minHeight: '54px',
            }}
          >
            {displayed}
            {!done && (
              <span
                className="inline-block w-[2px] h-[1.1em] bg-white align-middle ml-[2px]"
                style={{ animation: 'blink 1s step-end infinite' }}
              />
            )}
          </p>

          {/* 3. Action pill buttons */}
          <div
            className="flex flex-wrap gap-y-1"
            style={{
              opacity: pillsVisible ? 1 : 0,
              transform: pillsVisible ? 'translateY(0)' : 'translateY(8px)',
              transition: 'opacity 0.4s ease, transform 0.4s ease',
            }}
          >
            {/* 4 white pill buttons */}
            {ACTION_PILLS.map((pill) => (
              <button
                key={pill.label}
                type="button"
                onClick={(e) => handleScrollTo(e, pill.href)}
                className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
              >
                {pill.label}
              </button>
            ))}

            {/* 1 outline pill button */}
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2 sm:gap-3 text-white bg-transparent border border-white rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer"
            >
              <span>
                Reach me:{' '}
                <span className="underline underline-offset-1">
                  {PORTFOLIO_EMAIL}
                </span>
              </span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="shrink-0"
              >
                <rect
                  x="4"
                  y="4"
                  width="7"
                  height="7"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <path
                  d="M8 2.5V2C8 1.44772 7.55228 1 7 1H2C1.44772 1 1 1.44772 1 2V7C1 7.55228 1.44772 8 2 8H2.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
