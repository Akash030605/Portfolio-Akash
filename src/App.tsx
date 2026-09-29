/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { SplashIntro } from './components/SplashIntro';
import { AboutSection } from './sections/AboutSection';
import { ContactSection } from './sections/ContactSection';
import { ExpertiseSection } from './sections/ExpertiseSection';
import { Footer } from './sections/Footer';
import { HeroSection } from './sections/HeroSection';
import { MarqueeSection } from './sections/MarqueeSection';
import { ProjectsSection } from './sections/ProjectsSection';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  useEffect(() => {
    document.documentElement.removeAttribute('data-theme');
    try {
      window.localStorage.removeItem('akash-portfolio-theme');
    } catch {
      // ignore storage errors
    }
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#E4E4E4] text-[#111111] overflow-x-clip">
      {/* Full-screen 10-box cyan curtain splash animation */}
      <SplashIntro />

      {/* Minimal fixed navigation & floating blur menu panel */}
      <Navigation onOpenContactModal={() => setContactModalOpen(true)} />

      {/* Main Portfolio Flow */}
      <main>
        {/* 1. HeroSection */}
        <HeroSection />

        {/* 2. MarqueeSection */}
        <MarqueeSection />

        {/* 3. AboutSection */}
        <AboutSection />

        {/* 4. ExpertiseSection */}
        <ExpertiseSection />

        {/* 5. ProjectsSection */}
        <ProjectsSection />

        {/* 6. ContactSection */}
        <ContactSection
          isModalOpen={contactModalOpen}
          onOpenModal={() => setContactModalOpen(true)}
          onCloseModal={() => setContactModalOpen(false)}
        />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
