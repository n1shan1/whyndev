"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0.2, filter: "blur(24px)", y: 16 }}
      animate={{ 
        opacity: 1, 
        filter: "blur(0px)", 
        y: 0,
        transitionEnd: {
          filter: "none",
          transform: "none"
        }
      }}
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
