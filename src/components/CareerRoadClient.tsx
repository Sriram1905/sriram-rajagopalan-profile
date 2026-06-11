"use client";

import { motion, useReducedMotion } from "framer-motion";

type Milestone = {
  years: string;
  company: string;
  role: string;
  location: string;
  current?: boolean;
};

const MILESTONES: Milestone[] = [
  { years: "Jun 2013 – Jan 2016", company: "Capgemini", role: "Data Engineer", location: "Bangalore, India" },
  { years: "Jan 2016 – Jul 2016", company: "Perficient", role: "Data Engineer", location: "Chennai, India" },
  { years: "Aug 2016 – Dec 2017", company: "UConn", role: "MS Business Analytics", location: "Connecticut, US" },
  { years: "May 2017 – Sep 2019", company: "IBM", role: "Data Analyst", location: "New York, US" },
  { years: "Sep 2019 – Jan 2024", company: "Amazon", role: "Sr. BI Engineer", location: "Seattle, US" },
  {
    years: "Jan 2024 – Present",
    company: "Amazon",
    role: "Data Science Manager",
    location: "Seattle, US",
    current: true,
  },
];

// Badge-center coordinates the road passes through. Desktop viewBox is
// 1000x240 (left to right); mobile viewBox is 375x830 (top to bottom).
const DESKTOP_POINTS = [
  { x: 50, y: 120 },
  { x: 228, y: 90 },
  { x: 406, y: 145 },
  { x: 584, y: 90 },
  { x: 762, y: 145 },
  { x: 940, y: 110 },
];

const MOBILE_POINTS = [
  { x: 100, y: 60 },
  { x: 235, y: 200 },
  { x: 100, y: 340 },
  { x: 235, y: 480 },
  { x: 100, y: 620 },
  { x: 167, y: 760 },
];

const DRAW_SECONDS = 1.6;
// Path arrival time per stop, used to stagger badge light-up.
const stopDelay = (i: number) => (i / (MILESTONES.length - 1)) * DRAW_SECONDS;

// Smooth S-curves: horizontal tangents at each stop (desktop) or vertical
// tangents (mobile), ending with a tail that exits downward toward the
// next section ("Where I am now").
function desktopPath() {
  const [first, ...rest] = DESKTOP_POINTS;
  let d = `M ${first.x} ${first.y}`;
  let prev = first;
  for (const p of rest) {
    const mx = (prev.x + p.x) / 2;
    d += ` C ${mx} ${prev.y}, ${mx} ${p.y}, ${p.x} ${p.y}`;
    prev = p;
  }
  d += ` C 985 ${prev.y}, 972 180, 968 260`;
  return d;
}

function mobilePath() {
  const [first, ...rest] = MOBILE_POINTS;
  let d = `M ${first.x} ${first.y}`;
  let prev = first;
  for (const p of rest) {
    const my = (prev.y + p.y) / 2;
    d += ` C ${prev.x} ${my}, ${p.x} ${my}, ${p.x} ${p.y}`;
    prev = p;
  }
  d += ` C ${prev.x} 800, ${prev.x} 820, ${prev.x} 870`;
  return d;
}

function RoadSvg({
  d,
  viewBox,
  maskId,
  reduce,
}: {
  d: string;
  viewBox: string;
  maskId: string;
  reduce: boolean;
}) {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      viewBox={viewBox}
      preserveAspectRatio="none"
      fill="none"
    >
      <defs>
        {/* The dashed road is revealed by a mask path drawing in, which
            preserves the dash pattern (animating pathLength directly would
            overwrite strokeDasharray). */}
        <mask id={maskId} maskUnits="userSpaceOnUse">
          <motion.path
            d={d}
            stroke="#fff"
            strokeWidth="8"
            fill="none"
            variants={{
              hidden: { pathLength: reduce ? 1 : 0 },
              show: {
                pathLength: 1,
                transition: { duration: reduce ? 0 : DRAW_SECONDS, ease: "easeInOut" },
              },
            }}
          />
        </mask>
      </defs>
      <path
        d={d}
        stroke="#4A9D7E"
        strokeWidth="1.5"
        strokeDasharray="6 4"
        vectorEffect="non-scaling-stroke"
        mask={`url(#${maskId})`}
      />
    </svg>
  );
}

function Badge({
  milestone,
  iconPath,
  index,
  reduce,
}: {
  milestone: Milestone;
  iconPath?: string;
  index: number;
  reduce: boolean;
}) {
  // Non-current badges light up border-emphasis → accent-green as the road
  // reaches them; the current stop keeps its orange ring and pulses twice.
  const lightUp = {
    hidden: { borderColor: reduce ? "#4A9D7E" : "#2F2F33" },
    show: {
      borderColor: "#4A9D7E",
      transition: { delay: reduce ? 0 : stopDelay(index), duration: 0.15 },
    },
  };
  const pulse = {
    hidden: {},
    show: reduce
      ? {}
      : {
          scale: [1, 1.04, 1],
          opacity: [1, 0.75, 1],
          transition: { delay: DRAW_SECONDS + 0.1, duration: 2, repeat: 1 },
        },
  };
  const variants = milestone.current ? pulse : lightUp;
  const borderClasses = milestone.current
    ? "border border-accent-orange"
    : "border-[0.5px] border-border-emphasis";

  if (iconPath) {
    return (
      <motion.div
        variants={variants}
        className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-bg-secondary ${borderClasses}`}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" width="22" height="22" fill="#F5F1EA">
          <path d={iconPath} />
        </svg>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={variants}
      className={`mx-auto w-fit whitespace-nowrap rounded-full bg-bg-secondary px-[12px] py-[6px] font-mono text-[10px] text-text-primary ${borderClasses}`}
    >
      {milestone.company}
    </motion.div>
  );
}

function Stop({
  milestone,
  iconPath,
  index,
  left,
  top,
  reduce,
}: {
  milestone: Milestone;
  iconPath?: string;
  index: number;
  left: string;
  top: number;
  reduce: boolean;
}) {
  // Offset so the badge's vertical center sits on the road point:
  // year line (~15px) + 4px gap + half the badge (20px circle, ~13px pill).
  const offset = iconPath ? 39 : 32;

  return (
    <div
      className="absolute w-36 -translate-x-1/2 text-center"
      style={{ left, top: top - offset }}
    >
      <p className="mb-1 whitespace-nowrap font-mono text-[10px] text-text-dim">
        {milestone.years}
      </p>
      <Badge milestone={milestone} iconPath={iconPath} index={index} reduce={reduce} />
      <p
        className={`mt-1 text-text-primary ${
          milestone.current ? "text-[14px]" : "text-[12px]"
        }`}
      >
        {milestone.role}
      </p>
      <p className="font-mono text-[10px] text-text-muted">
        {milestone.company}
      </p>
      <p className="font-mono text-[9px] text-text-dim">
        {milestone.location}
      </p>
    </div>
  );
}

export default function CareerRoadClient({
  iconPaths,
}: {
  iconPaths: Record<string, string>;
}) {
  const reduce = !!useReducedMotion();

  const layouts = [
    {
      key: "desktop",
      wrapper: "relative hidden h-[240px] md:block",
      viewBox: "0 0 1000 240",
      d: desktopPath(),
      points: DESKTOP_POINTS,
      toLeft: (x: number) => `${x / 10}%`,
    },
    {
      key: "mobile",
      wrapper: "relative h-[830px] md:hidden",
      viewBox: "0 0 375 830",
      d: mobilePath(),
      points: MOBILE_POINTS,
      toLeft: (x: number) => `${(x / 375) * 100}%`,
    },
  ];

  return (
    <>
      {layouts.map((layout) => (
        <motion.div
          key={layout.key}
          className={layout.wrapper}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <RoadSvg
            d={layout.d}
            viewBox={layout.viewBox}
            maskId={`road-mask-${layout.key}`}
            reduce={reduce}
          />
          <ol>
            {MILESTONES.map((m, i) => (
              <li key={`${m.years}-${m.role}`}>
                <Stop
                  milestone={m}
                  iconPath={iconPaths[m.company]}
                  index={i}
                  left={layout.toLeft(layout.points[i].x)}
                  top={layout.points[i].y}
                  reduce={reduce}
                />
              </li>
            ))}
          </ol>
        </motion.div>
      ))}
    </>
  );
}
