import React from 'react';
import { AnimatedText } from '../components/AnimatedText';
import { ContactButton } from '../components/ContactButton';
import { FadeIn } from '../components/FadeIn';
import { Magnet } from '../components/Magnet';

const ABOUT_COPY =
  "I'm a software engineer focused on building reliable backend systems, APIs, and full-stack products. I enjoy turning ideas into practical software, working across Java, Python, databases, cloud infrastructure, and modern web technologies.";

export const AboutSection: React.FC = () => {
  const scrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative w-full min-h-screen bg-[#111111] flex items-center justify-center py-[80px] px-[20px] sm:py-[100px] sm:px-[32px] lg:py-[120px] lg:px-[40px]"
    >
      <div className="w-full max-w-[960px] mx-auto flex flex-col items-center text-center">
        <FadeIn y={24}>
          <h2
            id="about-heading"
            className="text-[#F4F1E8] font-bold uppercase tracking-[-0.04em] mb-10 sm:mb-14"
            style={{
              fontSize: 'clamp(2.75rem, 8vw, 6.5rem)',
              lineHeight: 0.95,
            }}
          >
            ABOUT ME
          </h2>
        </FadeIn>

        {/* Character-by-character scroll reveal paragraph */}
        <div className="max-w-[650px] mx-auto mb-12 sm:mb-16">
          <AnimatedText
            text={ABOUT_COPY}
            className="text-[#D7E2EA] font-medium text-center tracking-[0.01em]"
          />
          <style>{`
            #about p {
              font-size: clamp(1.05rem, 2vw, 1.35rem);
              line-height: 1.7;
            }
          `}</style>
        </div>

        {/* Technical Focus Strip — Clean unboxed metadata */}
        <FadeIn delay={0.15} y={20} className="mb-12">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs sm:text-sm font-mono text-[#9A9590]">
            <span className="text-[#75C5DE]">Java & Spring Boot</span>
            <span aria-hidden="true">·</span>
            <span>Python & Flask</span>
            <span aria-hidden="true">·</span>
            <span>REST APIs</span>
            <span aria-hidden="true">·</span>
            <span>PostgreSQL & MongoDB</span>
            <span aria-hidden="true">·</span>
            <span>AWS & Linux</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#75C5DE]">Information Security</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.25} y={24}>
          <Magnet padding={80} strength={4} maxOffset={6}>
            <ContactButton
              label="CONTACT ME"
              onClick={scrollToContact}
              ariaLabel="Contact Me — Scroll to contact section"
            />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  );
};
