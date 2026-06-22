"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";
import { useWebHaptics } from "web-haptics/react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, className }: FadeInProps) {
  const { trigger } = useWebHaptics();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      onAnimationStart={() => trigger([5])}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
}
