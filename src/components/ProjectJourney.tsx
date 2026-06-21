"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Baby,
  Compass,
  Crown,
  HeartPulse,
  LineChart,
  Mic,
  Radio,
  Server,
  ShieldCheck,
  Target,
  type LucideIcon,
} from "lucide-react";
import type { PersonalProject } from "@/lib/personal";

const ICONS: Record<string, LucideIcon> = {
  mic: Mic,
  radio: Radio,
  target: Target,
  crown: Crown,
  server: Server,
  compass: Compass,
  baby: Baby,
  "heart-pulse": HeartPulse,
  "line-chart": LineChart,
  "shield-check": ShieldCheck,
};

export default function ProjectJourney({ project }: { project: PersonalProject }) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const { accent, chapters } = project;
  const chapter = chapters[active];
  const Icon = ICONS[chapter.icon] ?? Compass;
  // fraction of the rail line that should be filled, 0 → 1
  const progress = chapters.length > 1 ? active / (chapters.length - 1) : 0;

  return (
    <article className="border-t border-border-default pt-10">
      {/* header */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex items-baseline gap-4">
          <span
            aria-hidden="true"
            className="font-heading text-[44px] font-medium leading-none"
            style={{ color: accent, opacity: 0.28 }}
          >
            {project.index}
          </span>
          <div>
            <h2 className="font-heading text-[22px] font-medium" style={{ color: accent }}>
              {project.name}
            </h2>
            <p className="mt-1 font-mono text-[11px] text-text-dim">{project.status}</p>
          </div>
        </div>
        {project.live && (
          <a
            href={project.live.url}
            rel="noopener"
            className="group inline-flex items-center gap-1.5 rounded-md border px-3 py-2 font-mono text-[11px] transition hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ borderColor: accent, color: accent, outlineColor: accent }}
          >
            {project.live.label}
            <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-px group-hover:-translate-y-px" />
          </a>
        )}
      </div>

      <p className="mt-4 max-w-2xl text-[15px] leading-[1.6] text-text-primary">
        {project.tagline}
      </p>

      {/* stats */}
      <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
        {project.stats.map((s) => (
          <div key={s.label}>
            <dt className="sr-only">{s.label}</dt>
            <dd>
              <span className="font-heading text-[18px] font-medium" style={{ color: accent }}>
                {s.value}
              </span>{" "}
              <span className="font-mono text-[10px] text-text-dim">{s.label}</span>
            </dd>
          </div>
        ))}
      </dl>

      {/* journey explorer */}
      <div className="mt-8 flex flex-col gap-5 md:flex-row md:gap-8">
        {/* chapter rail */}
        <div
          role="tablist"
          aria-label={`${project.name} chapters`}
          className="relative flex gap-2 overflow-x-auto pb-1 md:w-[208px] md:flex-col md:gap-0 md:overflow-visible md:pb-0"
        >
          {/* vertical progress line (desktop) */}
          <span
            aria-hidden="true"
            className="absolute left-[13px] top-3 hidden w-px bg-border-default md:block"
            style={{ height: `calc(100% - 24px)` }}
          />
          <motion.span
            aria-hidden="true"
            className="absolute left-[13px] top-3 hidden w-px md:block"
            style={{ backgroundColor: accent }}
            initial={false}
            animate={{ height: `calc((100% - 24px) * ${progress})` }}
            transition={reduce ? { duration: 0 } : { duration: 0.35, ease: "easeOut" }}
          />
          {chapters.map((c, i) => {
            const on = i === active;
            const done = i <= active;
            return (
              <button
                key={c.label}
                role="tab"
                aria-selected={on}
                onClick={() => setActive(i)}
                className="group relative z-10 flex shrink-0 items-center gap-3 rounded-md px-2 py-2 text-left transition-colors md:py-[10px]"
              >
                <span
                  className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border font-mono text-[9px] transition-colors"
                  style={{
                    borderColor: done ? accent : "#2F2F33",
                    backgroundColor: on ? accent : "transparent",
                    color: on ? "#0A0A0B" : done ? accent : "#6B7280",
                  }}
                >
                  {i + 1}
                </span>
                <span
                  className="whitespace-nowrap font-mono text-[11px] transition-colors"
                  style={{ color: on ? accent : undefined }}
                >
                  <span className={on ? "" : "text-text-muted group-hover:text-text-primary"}>
                    {c.label}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* panel */}
        <div className="min-w-0 flex-1">
          <div
            className="overflow-hidden rounded-lg border bg-bg-secondary"
            style={{ borderColor: "#1F1F23" }}
          >
            {/* faux browser chrome */}
            <div className="flex items-center gap-2 border-b border-border-default px-4 py-2.5">
              <span className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-border-emphasis" />
                <span className="h-2.5 w-2.5 rounded-full bg-border-emphasis" />
                <span className="h-2.5 w-2.5 rounded-full bg-border-emphasis" />
              </span>
              <span className="ml-2 truncate font-mono text-[10px] text-text-dim">
                {project.live ? project.live.label : "private build"}
              </span>
            </div>

            <div className="p-6 sm:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
                  transition={{ duration: reduce ? 0 : 0.28, ease: "easeOut" }}
                >
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${accent}1f`, color: accent }}
                  >
                    <Icon size={22} strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-4 font-heading text-[18px] font-medium text-text-primary">
                    {chapter.headline}
                  </h3>
                  <p className="mt-2 max-w-xl text-[14px] leading-[1.7] text-text-muted">
                    {chapter.body}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {chapter.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border px-3 py-1 font-mono text-[10px]"
                        style={{ borderColor: `${accent}55`, color: accent }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* stack */}
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="font-mono text-[10px] text-text-dim">built with</span>
            {project.stack.map((t) => (
              <span key={t} className="font-mono text-[10px] text-text-muted">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
