import * as simpleIcons from "simple-icons";

type SimpleIcon = { path: string; title: string };

// Brand icons from simple-icons (v11 — newer majors dropped these brands).
// Any company without an icon here renders a full-name pill badge instead;
// never single-letter monograms. Capgemini has no simple-icons entry, and
// Perficient/UConn are intentionally pill-only per design.
const ICONS: Record<string, SimpleIcon | undefined> = {
  Amazon: (simpleIcons as Record<string, unknown>).siAmazon as
    | SimpleIcon
    | undefined,
  IBM: (simpleIcons as Record<string, unknown>).siIbm as
    | SimpleIcon
    | undefined,
};

type Milestone = {
  years: string;
  company: string;
  role: string;
  current?: boolean;
};

const MILESTONES: Milestone[] = [
  { years: "Jun 2013 – Jan 2016", company: "Capgemini", role: "Data Engineer" },
  { years: "Jan 2016 – Jul 2016", company: "Perficient", role: "Data Engineer" },
  { years: "Aug 2016 – Dec 2017", company: "UConn", role: "MS Business Analytics" },
  { years: "May 2017 – Sep 2019", company: "IBM", role: "Data Analyst" },
  { years: "Sep 2019 – Jan 2024", company: "Amazon", role: "Sr. BI Engineer" },
  {
    years: "Jan 2024 – Present",
    company: "Amazon",
    role: "Data Science Manager",
    current: true,
  },
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
  const icon = ICONS[milestone.company];
  const borderClasses = milestone.current
    ? "border border-accent-orange"
    : "border-[0.5px] border-border-emphasis";

  if (icon) {
    return (
      <div
        className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-bg-secondary ${borderClasses}`}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="#F5F1EA"
        >
          <path d={icon.path} />
        </svg>
      </div>
    );
  }

  return (
    <div
      className={`mx-auto w-fit whitespace-nowrap rounded-full bg-bg-secondary px-[12px] py-[6px] font-mono text-[10px] text-text-primary ${borderClasses}`}
    >
      {milestone.company}
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
  // Offset so the badge's vertical center sits on the road point:
  // year line (~15px) + 4px gap + half the badge (20px circle, ~13px pill).
  const isPill = !ICONS[milestone.company];
  const offset = isPill ? 32 : 39;

  return (
    <div
      className="absolute w-36 -translate-x-1/2 text-center"
      style={{ left, top: top - offset }}
    >
      <p className="mb-1 whitespace-nowrap font-mono text-[10px] text-text-dim">
        {milestone.years}
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
            <li key={`${m.years}-${m.role}`}>
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
            <li key={`${m.years}-${m.role}`}>
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
