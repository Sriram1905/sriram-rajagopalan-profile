// Personal, nights-and-weekends builds. Public, non-confidential projects only.
// Each project is told as a short "journey" of chapters the reader clicks
// through — keep chapter bodies to a sentence or two, never paragraphs.

export type Chapter = {
  /** short tab label */
  label: string;
  /** lucide icon key, mapped in ProjectJourney */
  icon: string;
  /** chapter title shown in the panel */
  headline: string;
  /** one or two sentences, no more */
  body: string;
  /** small feature tags shown under the body */
  tags: string[];
};

export type Stat = { value: string; label: string };

export type PersonalProject = {
  slug: string;
  /** big index numeral, e.g. "01" */
  index: string;
  name: string;
  tagline: string;
  /** hex accent for this project's section */
  accent: string;
  /** one-line status / where it lives */
  status: string;
  live?: { url: string; label: string };
  stats: Stat[];
  stack: string[];
  chapters: Chapter[];
};

export const personalProjects: PersonalProject[] = [
  {
    slug: "football-pesalaam",
    index: "01",
    name: "Football Pesalaam",
    tagline: "A Tamil football podcast, turned into a live matchday companion.",
    accent: "#26A682",
    status: "Live · built and run solo",
    live: { url: "https://footballpesalaam.com", label: "footballpesalaam.com" },
    stats: [
      { value: "~50", label: "active members" },
      { value: "6", label: "leagues live" },
      { value: "2", label: "weekly games" },
      { value: "PWA", label: "installable" },
    ],
    stack: [
      "Next.js 15",
      "TypeScript",
      "Tailwind v4",
      "shadcn/ui",
      "Supabase",
      "FotMob API",
      "Spotify API",
      "Vercel",
    ],
    chapters: [
      {
        label: "Origin",
        icon: "mic",
        headline: "It started as a podcast",
        body: "Three friends — Sriram, Sugan, and Kailash — talking football in Tamil. The site began as a home for the show, with every episode synced live from Spotify.",
        tags: ["Spotify sync", "Tamil-first", "Episode archive"],
      },
      {
        label: "Matchday",
        icon: "radio",
        headline: "Then it went live",
        body: "Real-time scores across the Premier League, La Liga, Bundesliga, Serie A, Ligue 1, and the Champions League, alongside a news and transfer feed aggregated from BBC and The Guardian.",
        tags: ["6 leagues", "Live scores", "News feed"],
      },
      {
        label: "Predictions",
        icon: "target",
        headline: "A game for the group",
        body: "Each gameweek, members pick Home, Draw, or Away for every fixture, score points, and climb a leaderboard — with participant counts ticking up in real time.",
        tags: ["Gameweek picks", "Leaderboard", "Realtime"],
      },
      {
        label: "Survivaa",
        icon: "crown",
        headline: "Last one standing",
        body: "Pick a single team to win each week, never reuse one, and survive. A massacre tracker charts the eliminations gameweek by gameweek until a winner remains.",
        tags: ["Elimination game", "Massacre tracker", "Season-long"],
      },
      {
        label: "The build",
        icon: "server",
        headline: "Shipped end to end",
        body: "Built solo on Supabase with row-level security and realtime, an admin panel to open rounds and settle results from live data, and an offline-ready PWA install.",
        tags: ["Supabase RLS", "Admin panel", "Offline PWA"],
      },
    ],
  },
  {
    slug: "bumblebee",
    index: "02",
    name: "Bumblebee",
    tagline: "A companion app for pregnancy, the NICU, and the newborn months.",
    accent: "#E0A82E",
    status: "Personal PWA · private and encrypted",
    stats: [
      { value: "3", label: "journey modes" },
      { value: "16", label: "routes" },
      { value: "~20k", label: "lines of code" },
      { value: "AES-256", label: "encrypted" },
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind 4",
      "Firebase Auth",
      "Firestore",
      "Web Crypto",
      "Recharts",
      "PWA",
    ],
    chapters: [
      {
        label: "The shape",
        icon: "compass",
        headline: "Three journeys, one app",
        body: "Bumblebee adapts to where a family is: the pregnancy path, the NICU and preterm path, and the postpartum path — each with its own tracking and rhythm.",
        tags: ["Pregnancy", "NICU / preterm", "Postpartum"],
      },
      {
        label: "Pregnancy",
        icon: "baby",
        headline: "The everyday companion",
        body: "Week-by-week progress, a kick counter, and appointment and packing checklists — the small, steady tracking that carries through nine months.",
        tags: ["Week tracker", "Kick counter", "Checklists"],
      },
      {
        label: "NICU",
        icon: "heart-pulse",
        headline: "For the hardest weeks",
        body: "Daily logs, milestones, and a pumping tracker for the families whose first weeks are spent in intensive care.",
        tags: ["Daily logs", "Milestones", "Pumping tracker"],
      },
      {
        label: "Postpartum",
        icon: "line-chart",
        headline: "Into the new normal",
        body: "Baby milestones, vaccine schedules, growth curves, and feeding logs as life finds its footing again.",
        tags: ["Growth curves", "Vaccines", "Feeding logs"],
      },
      {
        label: "Private by design",
        icon: "shield-check",
        headline: "This data is personal",
        body: "Medical records with optional AI analysis, dual-layer local and cloud storage, and AES-256 encryption — because none of it should live anywhere it shouldn't.",
        tags: ["Local + cloud", "AES-256-GCM", "Optional AI"],
      },
    ],
  },
];
