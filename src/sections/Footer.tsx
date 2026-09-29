import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer
      aria-label="Site Footer"
      className="w-full bg-[#111111] text-[#F4F1E8] border-t border-[#F4F1E8]/12 py-12 px-5 sm:px-8 lg:px-10"
    >
      <div className="max-w-[1360px] mx-auto flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left: AKASH */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-lg font-bold tracking-[-0.02em] uppercase text-[#F4F1E8] hover:text-[#75C5DE] transition-colors"
          >
            AKASH
          </a>

          {/* Center: Software Engineer */}
          <p className="text-sm font-normal text-[#9A9590] tracking-[0.04em]">
            Software Engineer
          </p>

          {/* Right: GitHub, LinkedIn, LeetCode */}
          <div className="flex items-center gap-5 text-sm font-medium text-[#F4F1E8]">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#75C5DE] transition-colors whitespace-nowrap"
            >
              GitHub
            </a>
            <span aria-hidden="true" className="text-[#9A9590]">
              ·
            </span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#75C5DE] transition-colors whitespace-nowrap"
            >
              LinkedIn
            </a>
            <span aria-hidden="true" className="text-[#9A9590]">
              ·
            </span>
            <a
              href="https://leetcode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#75C5DE] transition-colors whitespace-nowrap"
            >
              LeetCode
            </a>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="pt-6 border-t border-[#F4F1E8]/10 flex items-center justify-center sm:justify-between text-xs text-[#9A9590]">
          <span>© 2026 Akash</span>
          <span className="hidden sm:inline font-mono text-[11px] text-[#9A9590]/80">
            Java · Python · Backend · Full-Stack · Cloud
          </span>
        </div>
      </div>
    </footer>
  );
};
