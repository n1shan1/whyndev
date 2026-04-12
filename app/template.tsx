"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  if (prefersReducedMotion || isMobile) {
    return <div className="w-full flex-1">{children}</div>;
  }

  return (
    <motion.div
      initial={{ y: 16 }}
      animate={{ y: 0 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1]
      }}
      className="w-full flex-1"
    >
      {children}
    </motion.div>
  );
}
