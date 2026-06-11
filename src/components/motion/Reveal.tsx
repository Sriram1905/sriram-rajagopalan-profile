"use client";

import { motion, useReducedMotion } from "framer-motion";

// Scroll-triggered entrance for major sections: fade + 16px rise, once per
// load, children staggered 60ms. Renders everything instantly when the user
// prefers reduced motion.

export default function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: reduce ? 0 : 0.5,
            ease: "easeOut",
            staggerChildren: reduce ? 0 : 0.06,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: reduce ? 0 : 0.5, ease: "easeOut" },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
