"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Seconds to wait before this element animates in. */
  delay?: number;
  /** Direction the element travels from. */
  from?: "up" | "left" | "right";
  className?: string;
};

const offset = {
  up: { x: 0, y: 28 },
  left: { x: -32, y: 0 },
  right: { x: 32, y: 0 },
};

/**
 * One scroll-reveal used across every home page section so the whole page
 * shares a single motion language. Honours prefers-reduced-motion, which
 * framer-motion applies automatically to transform animations.
 */
export default function Reveal({
  children,
  delay = 0,
  from = "up",
  className,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
