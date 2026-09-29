import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ContactButtonProps {
  label?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  label = 'VIEW MY WORK',
  href,
  onClick,
  className = '',
  ariaLabel,
}) => {
  const content = (
    <>
      <span className="pl-6 pr-4 text-[13px] md:text-[14px] font-semibold tracking-[0.14em] uppercase text-[#111111] whitespace-nowrap transition-transform duration-300 ease-out group-hover:translate-x-0.5">
        {label}
      </span>
      <span
        className="flex items-center justify-center w-[48px] h-[48px] md:w-[54px] md:h-[54px] rounded-full bg-[#75C5DE] text-[#111111] shrink-0 transition-transform duration-300 ease-out group-hover:-translate-x-[7px]"
        aria-hidden="true"
      >
        <ArrowUpRight className="w-5 h-5 md:w-[22px] md:h-[22px] stroke-[2] transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </>
  );

  const baseClasses = `group inline-flex items-center justify-between bg-[#FFFFFF] text-[#111111] rounded-full p-1.5 shadow-[0_10px_30px_rgba(17,17,17,0.08)] transition-all duration-300 ease-out hover:pr-2.5 hover:scale-[1.02] active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#75C5DE] cursor-pointer select-none ${className}`;

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        aria-label={ariaLabel || label}
        className={baseClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel || label}
      className={baseClasses}
    >
      {content}
    </button>
  );
};
