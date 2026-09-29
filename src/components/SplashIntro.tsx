import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const SplashIntro: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisible(false);
      return;
    }
    const timer = window.setTimeout(() => {
      setVisible(false);
    }, 1350);
    return () => window.clearTimeout(timer);
  }, [prefersReducedMotion]);

  if (!visible || prefersReducedMotion) {
    return null;
  }

  const boxes = [0, 1, 2, 3, 4];
  const splashEase: [number, number, number, number] = [0.96, -0.02, 0.38, 1.01];

  return (
    <div
      className="splash fixed inset-0 w-screen h-screen z-[9999] pointer-events-none overflow-hidden flex flex-col"
      aria-hidden="true"
    >
      {/* Top Row: 5 equal-width cyan boxes animating upward */}
      <div className="flex w-full h-1/2">
        {boxes.map((i) => (
          <motion.div
            key={`top-${i}`}
            initial={{ y: '0%' }}
            animate={{ y: '-102%' }}
            transition={{
              duration: 1.0,
              delay: i * 0.05,
              ease: splashEase,
            }}
            className="w-1/5 h-full bg-[#75C5DE]"
          />
        ))}
      </div>

      {/* Bottom Row: 5 equal-width cyan boxes animating downward */}
      <div className="flex w-full h-1/2">
        {boxes.map((i) => (
          <motion.div
            key={`bottom-${i}`}
            initial={{ y: '0%' }}
            animate={{ y: '102%' }}
            transition={{
              duration: 1.0,
              delay: i * 0.05,
              ease: splashEase,
            }}
            className="w-1/5 h-full bg-[#75C5DE]"
          />
        ))}
      </div>
    </div>
  );
};
