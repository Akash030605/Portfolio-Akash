import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Check, Copy, Send, X } from 'lucide-react';
import { ContactButton } from '../components/ContactButton';
import { FadeIn } from '../components/FadeIn';
import { Magnet } from '../components/Magnet';

interface ContactSectionProps {
  theme?: 'light' | 'dark';
  isModalOpen?: boolean;
  onOpenModal?: () => void;
  onCloseModal?: () => void;
}

const EMAIL_ADDRESS = 'akashx0306@gmail.com';

export const ContactSection: React.FC<ContactSectionProps> = ({
  theme = 'light',
  isModalOpen = false,
  onOpenModal,
  onCloseModal,
}) => {
  const [copied, setCopied] = useState(false);
  const [localModalOpen, setLocalModalOpen] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Backend / Full-Stack Opportunity',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const isDark = theme === 'dark';
  const modalActive = isModalOpen || localModalOpen;

  const openModal = () => {
    if (onOpenModal) onOpenModal();
    else setLocalModalOpen(true);
  };

  const closeModal = () => {
    if (onCloseModal) onCloseModal();
    setLocalModalOpen(false);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      window.location.href = `mailto:${EMAIL_ADDRESS}`;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const subjectEncoded = encodeURIComponent(
      `${formState.subject} — from ${formState.name || 'Portfolio Visitor'}`
    );
    const bodyEncoded = encodeURIComponent(
      `${formState.message}\n\n---\nFrom: ${formState.name} (${formState.email})`
    );
    window.setTimeout(() => {
      window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    }, 500);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className={`relative w-full min-h-[80vh] flex items-center justify-center py-[96px] px-[20px] sm:py-[120px] sm:px-[32px] lg:py-[148px] lg:px-[40px] transition-colors duration-500 ${
        isDark
          ? 'bg-[#0A0A0A] text-[#F4F1E8] border-t border-[#D7E2EA]/15'
          : 'bg-[#E4E4E4] text-[#111111]'
      }`}
    >
      <div className="w-full max-w-[1360px] mx-auto flex flex-col items-center text-center">
        <FadeIn y={28}>
          <span
            className={`inline-block text-xs sm:text-sm font-mono uppercase tracking-[0.22em] mb-5 transition-colors duration-500 ${
              isDark ? 'text-[#75C5DE]' : 'text-[#111111]/65'
            }`}
          >
            AVAILABLE FOR SOFTWARE ENGINEERING ROLES & PROJECTS
          </span>
          <h2
            id="contact-heading"
            className={`font-extrabold uppercase tracking-[-0.04em] max-w-[1100px] mx-auto mb-6 sm:mb-8 transition-colors duration-500 ${
              isDark ? 'text-[#F4F1E8]' : 'text-[#111111]'
            }`}
            style={{
              fontSize: 'clamp(2.8rem, 10vw, 136px)',
              lineHeight: 0.92,
              textWrap: 'balance',
            }}
          >
            LET&apos;S BUILD SOMETHING.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} y={24}>
          <p
            className={`text-lg sm:text-xl lg:text-2xl font-normal max-w-[580px] mx-auto mb-10 sm:mb-12 leading-relaxed transition-colors duration-500 ${
              isDark ? 'text-[#D7E2EA]/85' : 'text-[#111111]/75'
            }`}
          >
            Have a project, opportunity, or idea worth building?
          </p>
        </FadeIn>

        {/* Primary CTA matching the Hero CTA */}
        <FadeIn delay={0.2} y={24} className="mb-14 sm:mb-16">
          <Magnet padding={100} strength={4} maxOffset={7}>
            <ContactButton
              label="GET IN TOUCH"
              onClick={openModal}
              ariaLabel="Get in touch with Akash"
            />
          </Magnet>
        </FadeIn>

        {/* Direct Contact Channels: Email, LinkedIn, GitHub */}
        <FadeIn delay={0.3} y={20} className="w-full max-w-[820px]">
          <div
            className={`pt-10 border-t flex flex-col sm:flex-row items-center justify-between gap-6 transition-colors duration-500 ${
              isDark ? 'border-[#D7E2EA]/20' : 'border-[#111111]/15'
            }`}
          >
            {/* Email with instant copy button */}
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className={`text-base sm:text-lg font-medium hover:opacity-70 transition-opacity ${
                  isDark ? 'text-[#F4F1E8]' : 'text-[#111111]'
                }`}
              >
                {EMAIL_ADDRESS}
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className={`inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
                  isDark
                    ? 'bg-[#1B1B1B] text-[#F4F1E8] border border-[#D7E2EA]/20 hover:border-[#75C5DE] hover:text-[#75C5DE]'
                    : 'bg-[#F4F1E8] text-[#111111] hover:bg-[#111111] hover:text-[#F4F1E8]'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#75C5DE]" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links: Email, LinkedIn, GitHub */}
            <div
              className={`flex items-center gap-6 text-sm sm:text-base font-medium transition-colors duration-500 ${
                isDark ? 'text-[#F4F1E8]' : 'text-[#111111]'
              }`}
            >
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="group inline-flex items-center gap-1 hover:text-[#75C5DE] transition-colors whitespace-nowrap"
              >
                <span>Email</span>
                <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <span aria-hidden="true" className="text-[#9A9590]">
                ·
              </span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 hover:text-[#75C5DE] transition-colors whitespace-nowrap"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <span aria-hidden="true" className="text-[#9A9590]">
                ·
              </span>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 hover:text-[#75C5DE] transition-colors whitespace-nowrap"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Interactive Contact Composer Modal */}
      <AnimatePresence>
        {modalActive && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            className="fixed inset-0 z-[85] flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-[#111111]/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-xl rounded-[28px] bg-[#111111] border border-[#D7E2EA]/25 p-6 sm:p-9 text-[#F4F1E8] shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#D7E2EA]/15">
                <div>
                  <p className="text-xs font-mono uppercase tracking-[0.18em] text-[#75C5DE] mb-1">
                    DIRECT MESSAGE
                  </p>
                  <h3
                    id="contact-modal-title"
                    className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em]"
                  >
                    Start a Conversation
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={closeModal}
                  aria-label="Close contact dialog"
                  className="w-10 h-10 rounded-full bg-[#F4F1E8]/10 hover:bg-[#75C5DE] hover:text-[#111111] flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#75C5DE] text-[#111111] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-medium text-[#F4F1E8]">
                    Message Prepared
                  </h4>
                  <p className="text-sm text-[#D7E2EA]/80 max-w-sm mx-auto">
                    Your email client has been opened with your message to{' '}
                    <span className="text-[#75C5DE]">{EMAIL_ADDRESS}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      closeModal();
                    }}
                    className="mt-4 inline-flex items-center justify-center rounded-full bg-[#F4F1E8] text-[#111111] px-6 py-2.5 text-xs font-semibold uppercase tracking-widest hover:bg-[#75C5DE] transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="pt-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-mono uppercase tracking-wider text-[#9A9590] mb-1.5"
                      >
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, name: e.target.value }))
                        }
                        placeholder="Alex Morgan"
                        className="w-full rounded-xl bg-[#1A1A1A] border border-[#D7E2EA]/20 px-4 py-3 text-sm text-[#F4F1E8] placeholder:text-[#9A9590]/60 focus:outline-none focus:border-[#75C5DE]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-mono uppercase tracking-wider text-[#9A9590] mb-1.5"
                      >
                        Your Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, email: e.target.value }))
                        }
                        placeholder="alex@company.com"
                        className="w-full rounded-xl bg-[#1A1A1A] border border-[#D7E2EA]/20 px-4 py-3 text-sm text-[#F4F1E8] placeholder:text-[#9A9590]/60 focus:outline-none focus:border-[#75C5DE]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono uppercase tracking-wider text-[#9A9590] mb-1.5"
                    >
                      Project or Opportunity Details
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, message: e.target.value }))
                      }
                      placeholder="Tell me about the system, backend architecture, or full-stack product you're building..."
                      className="w-full rounded-xl bg-[#1A1A1A] border border-[#D7E2EA]/20 px-4 py-3 text-sm text-[#F4F1E8] placeholder:text-[#9A9590]/60 focus:outline-none focus:border-[#75C5DE] resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-4">
                    <span className="text-xs font-mono text-[#9A9590]">
                      To: {EMAIL_ADDRESS}
                    </span>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full bg-[#75C5DE] text-[#111111] px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#FFFFFF] transition-colors cursor-pointer"
                    >
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
