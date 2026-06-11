"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const COMMAND = "whoami";
const TYPE_MS = 40;

// Types "> whoami" on load, then fades the rest of the hero in.
// Total intro ≈ 0.24s typing + 0.45s fade — well under 1.5s.
// Reduced motion: everything renders immediately, cursor doesn't blink (CSS).

export default function HeroIntro({
  children,
}: {
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  const [chars, setChars] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    setStarted(true);
    if (reduce) {
      setChars(COMMAND.length);
      return;
    }
    const timer = setInterval(() => {
      setChars((c) => {
        if (c >= COMMAND.length) {
          clearInterval(timer);
          return c;
        }
        return c + 1;
      });
    }, TYPE_MS);
    return () => clearInterval(timer);
  }, [reduce]);

  // Before hydration (and for no-JS readers) show the full command.
  const typed = started ? COMMAND.slice(0, chars) : COMMAND;

  return (
    <>
      <p className="font-mono text-[11px] text-accent-green">
        {"> "}
        {typed}
      </p>
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: reduce ? 0 : 0.45,
          delay: reduce ? 0 : (COMMAND.length * TYPE_MS) / 1000 + 0.1,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
