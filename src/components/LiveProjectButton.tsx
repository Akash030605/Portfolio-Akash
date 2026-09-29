import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface LiveProjectButtonProps {
  label?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  label = 'Live Project',
  href,
  onClick,
  className = '',
}) => {
  const baseClasses = `group inline-flex items-center gap-2.5 rounded-full border-2 border-[#D7E2EA] px-5 py-2.5 md:px-7 md:py-3.5 text-xs md:text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-all duration-200 hover:bg-[#D7E2EA]/10 hover:border-[#75C5DE] hover:text-[#FFFFFF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#75C5DE] whitespace-nowrap shrink-0 cursor-pointer ${className}`;

  if (href && !onClick) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={baseClasses}
      >
        <span>{label}</span>
        <ArrowUpRight className="w-4 h-4 text-[#75C5DE] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={baseClasses}
    >
      <span>{label}</span>
      <ArrowUpRight className="w-4 h-4 text-[#75C5DE] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </button>
  );
};
