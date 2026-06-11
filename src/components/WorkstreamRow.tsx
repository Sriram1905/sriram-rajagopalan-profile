"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { type Workstream } from "@/lib/projects";

export default function WorkstreamRow({ ws }: { ws: Workstream }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <article className="group relative border-b border-border-default transition-colors duration-200 hover:bg-bg-secondary/50">
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-accent-green transition-transform duration-200 group-hover:scale-y-100 motion-reduce:transition-none"
      />
      <h3 className="font-heading text-[15px]">
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-baseline justify-between gap-4 py-[14px] pl-3 pr-1 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-green"
        >
          <span className="flex flex-wrap items-center gap-2">
            {ws.title}
            <span className="rounded-full border-[0.5px] border-accent-green px-[8px] py-[2px] font-mono text-[10px] font-normal text-accent-green">
              {ws.chip}
            </span>
          </span>
          <span className="flex shrink-0 items-center gap-3">
            <span className="font-mono text-[11px] font-normal text-text-dim">
              {ws.year}
            </span>
            <ChevronDown
              size={14}
              className={`text-text-muted transition-transform duration-200 motion-reduce:transition-none ${
                open ? "rotate-180" : ""
              }`}
            />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.2, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pl-3 font-mono text-[11px] text-accent-green">
              {ws.summary}
            </p>
            <p className="pb-[14px] pl-3 pt-1 text-[12px] text-text-muted">
              {ws.detail}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
