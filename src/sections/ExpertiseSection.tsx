import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';

interface ExpertiseSectionProps {
  theme?: 'light' | 'dark';
}

interface ExpertiseArea {
  number: string;
  title: string;
  description: string;
  stack: string;
}

const EXPERTISE_AREAS: ExpertiseArea[] = [
  {
    number: '01',
    title: 'BACKEND DEVELOPMENT',
    description:
      'Building maintainable backend systems, REST APIs, authentication flows, and service architecture using Java, Spring Boot, Python, and modern development practices.',
    stack: 'Java · Spring Boot · Python · Flask · REST Architecture',
  },
  {
    number: '02',
    title: 'FULL-STACK DEVELOPMENT',
    description:
      'Creating complete web applications across frontend, backend, APIs, databases, and deployment with a focus on usability and maintainability.',
    stack: 'React · TypeScript · Tailwind CSS · End-to-End Delivery',
  },
  {
    number: '03',
    title: 'DATABASES & APIs',
    description:
      'Designing reliable data models and REST APIs using PostgreSQL, MongoDB, SQL, and API integration patterns.',
    stack: 'PostgreSQL · MongoDB · SQL · Supabase · Schema Design',
  },
  {
    number: '04',
    title: 'CLOUD & DEPLOYMENT',
    description:
      'Deploying and maintaining applications using AWS, Linux, Nginx, Gunicorn, Git, and modern cloud workflows.',
    stack: 'AWS · Linux · Nginx · Gunicorn · Git Workflows',
  },
  {
    number: '05',
    title: 'SECURITY',
    description:
      'Applying practical information-security principles to authentication, APIs, application architecture, and cloud deployments.',
    stack: 'JWT · OAuth2 · Role-Based Access · Secure API Design',
  },
];

export const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({
  theme = 'light',
}) => {
  const prefersReducedMotion = useReducedMotion();
  const isDark = theme === 'dark';

  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className={`relative w-full rounded-t-[40px] sm:rounded-t-[50px] lg:rounded-t-[60px] py-[80px] px-[20px] sm:py-[96px] sm:px-[32px] lg:py-[128px] lg:px-[40px] pb-[120px] sm:pb-[144px] lg:pb-[180px] transition-colors duration-500 ${
        isDark
          ? 'bg-[#161616] text-[#F4F1E8] border-t border-[#D7E2EA]/20'
          : 'bg-[#F4F1E8] text-[#111111]'
      }`}
    >
      <div className="max-w-[1360px] mx-auto">
        <FadeIn y={30}>
          <h2
            id="expertise-heading"
            className={`text-center font-extrabold uppercase tracking-[-0.04em] mb-14 sm:mb-20 lg:mb-24 transition-colors duration-500 ${
              isDark ? 'text-[#F4F1E8]' : 'text-[#111111]'
            }`}
            style={{
              fontSize: 'clamp(3rem, 12vw, 160px)',
              lineHeight: 0.9,
            }}
          >
            EXPERTISE
          </h2>
        </FadeIn>

        <div
          className={`border-t transition-colors duration-500 ${
            isDark ? 'border-[#D7E2EA]/20' : 'border-[#111111]/15'
          }`}
        >
          {EXPERTISE_AREAS.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={
                prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '40px', amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: idx * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className={`group py-[32px] sm:py-[40px] lg:py-[48px] border-b flex flex-col lg:flex-row lg:items-start justify-between gap-6 lg:gap-12 transition-colors duration-500 ${
                isDark ? 'border-[#D7E2EA]/20' : 'border-[#111111]/15'
              }`}
            >
              {/* Left: Large Tabular Index Number */}
              <div className="flex items-baseline gap-4 lg:w-1/4">
                <span
                  className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] tabular-nums group-hover:text-[#75C5DE] transition-colors duration-300 ${
                    isDark ? 'text-[#F4F1E8]' : 'text-[#111111]'
                  }`}
                >
                  {item.number}
                </span>
                <span
                  aria-hidden="true"
                  className="w-8 h-[2px] bg-[#75C5DE] opacity-80 self-center"
                />
              </div>

              {/* Right: Service Name + Description */}
              <div className="lg:w-3/4 flex flex-col lg:flex-row lg:items-start justify-between gap-4 lg:gap-10">
                <div className="space-y-3 max-w-[700px]">
                  <h3
                    className={`text-xl sm:text-2xl lg:text-[28px] uppercase font-medium tracking-[-0.01em] transition-colors duration-500 ${
                      isDark ? 'text-[#F4F1E8]' : 'text-[#111111]'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-base sm:text-lg font-light leading-relaxed max-w-[700px] transition-colors duration-500 ${
                      isDark
                        ? 'text-[#D7E2EA] opacity-80'
                        : 'text-[#111111] opacity-60'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                <div className="pt-1 lg:pt-2 lg:text-right shrink-0">
                  <span
                    className={`text-xs font-mono tracking-tight transition-colors duration-500 ${
                      isDark ? 'text-[#75C5DE]' : 'text-[#111111]/60'
                    }`}
                  >
                    {item.stack}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
