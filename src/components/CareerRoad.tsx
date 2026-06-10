import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { BASE_PATH } from "@/lib/site";

// TODO: drop official logo SVGs into public/logos/ — expected files:
//   capgemini.svg, perficient.svg, uconn.svg, ibm.svg, amazon.svg
// Until a file exists, that stop renders a serif monogram badge instead.

type Milestone = {
  year: string;
  company: string;
  role: string;
  logo: string;
  current?: boolean;
};

const MILESTONES: Milestone[] = [
  { year: "2013", company: "Capgemini", role: "Data Engineer", logo: "capgemini.svg" },
  { year: "2016", company: "Perficient", role: "Data Engineer", logo: "perficient.svg" },
  { year: "2016", company: "UConn", role: "MS Business Analytics", logo: "uconn.svg" },
  { year: "2017", company: "IBM", role: "Data Analyst", logo: "ibm.svg" },
  { year: "2019", company: "Amazon", role: "Sr. BI Engineer", logo: "amazon.svg" },
  { year: "2024", company: "Amazon", role: "Data Science Manager", logo: "amazon.svg", current: true },
];

// Badge-center coordinates the road passes through. Desktop viewBox is
// 1000x240 (left to right); mobile viewBox is 375x760 (top to bottom).
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
  { x: 235, y: 180 },
  { x: 100, y: 300 },
  { x: 235, y: 420 },
  { x: 100, y: 540 },
  { x: 167, y: 660 },
];

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
  d += ` C ${prev.x} 710, ${prev.x} 730, ${prev.x} 780`;
  return d;
}

function Badge({ milestone }: { milestone: Milestone }) {
  const hasLogo = existsSync(
    path.join(process.cwd(), "public/logos", milestone.logo),
  );
  return (
    <div
      className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-bg-secondary ${
        milestone.current
          ? "border border-accent-orange"
          : "border-[0.5px] border-border-emphasis"
      }`}
    >
      {hasLogo ? (
        <Image
          src={`${BASE_PATH}/logos/${milestone.logo}`}
          alt={`${milestone.company} logo`}
          width={22}
          height={22}
        />
      ) : (
        <span aria-hidden="true" className="font-serif text-[15px] text-cream">
          {milestone.company[0]}
        </span>
      )}
    </div>
  );
}

function Stop({
  milestone,
  left,
  top,
}: {
  milestone: Milestone;
  left: string;
  top: number;
}) {
  return (
    <div
      className="absolute w-36 -translate-x-1/2 text-center"
      style={{ left, top: top - 39 }}
    >
      <p className="mb-1 font-mono text-[10px] text-text-dim">
        {milestone.year}
      </p>
      <Badge milestone={milestone} />
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
    </div>
  );
}

export default function CareerRoad() {
  return (
    <>
      {/* Desktop: horizontal winding road */}
      <div className="relative hidden h-[240px] md:block">
        <svg
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1000 240"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d={desktopPath()}
            stroke="#4A9D7E"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <ol>
          {MILESTONES.map((m, i) => (
            <li key={`${m.year}-${m.role}`}>
              <Stop
                milestone={m}
                left={`${DESKTOP_POINTS[i].x / 10}%`}
                top={DESKTOP_POINTS[i].y}
              />
            </li>
          ))}
        </ol>
      </div>

      {/* Mobile: vertical winding road */}
      <div className="relative h-[760px] md:hidden">
        <svg
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 375 760"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d={mobilePath()}
            stroke="#4A9D7E"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <ol>
          {MILESTONES.map((m, i) => (
            <li key={`${m.year}-${m.role}`}>
              <Stop
                milestone={m}
                left={`${(MOBILE_POINTS[i].x / 375) * 100}%`}
                top={MOBILE_POINTS[i].y}
              />
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
