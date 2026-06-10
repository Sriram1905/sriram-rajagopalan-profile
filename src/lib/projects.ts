export type Project = {
  slug: string;
  title: string;
  year: string;
  role: "leadership" | "ic";
  involvement: string;
  tags: string[];
  summary: string;
  body: string;
};

export const projects: Project[] = [
  {
    slug: "kdp-select-program-health",
    title: "KDP Select Program Health Overview",
    year: "[YEAR]",
    role: "leadership",
    involvement: "[PLACEHOLDER]",
    tags: ["[PLACEHOLDER]"],
    summary: "[PLACEHOLDER]",
    body: "[PLACEHOLDER]",
  },
  {
    slug: "publisher-reader-collusion-model",
    title: "Publisher Reader Collusion Model",
    year: "[YEAR]",
    role: "leadership",
    involvement: "[PLACEHOLDER]",
    tags: ["[PLACEHOLDER]"],
    summary: "[PLACEHOLDER]",
    body: "[PLACEHOLDER]",
  },
  {
    slug: "reader-experience-index-model",
    title: "Reader Experience Index Model",
    year: "[YEAR]",
    role: "leadership",
    involvement: "[PLACEHOLDER]",
    tags: ["[PLACEHOLDER]"],
    summary: "[PLACEHOLDER]",
    body: "[PLACEHOLDER]",
  },
  {
    slug: "alc-vs-subscription-cannibalization",
    title: "ALC vs Subscription Cannibalization Trends",
    year: "[YEAR]",
    role: "leadership",
    involvement: "[PLACEHOLDER]",
    tags: ["[PLACEHOLDER]"],
    summary: "[PLACEHOLDER]",
    body: "[PLACEHOLDER]",
  },
  {
    slug: "comics-business-health-segmentation",
    title: "Comics Business Health and Customer Segmentation",
    year: "[YEAR]",
    role: "leadership",
    involvement: "[PLACEHOLDER]",
    tags: ["[PLACEHOLDER]"],
    summary: "[PLACEHOLDER]",
    body: "[PLACEHOLDER]",
  },
  {
    slug: "ic-project-1",
    title: "[ IC Project One ]",
    year: "[ Year ]",
    role: "ic",
    involvement: "[ IC delivery ]",
    tags: ["[ Tag ]", "[ Tag ]"],
    summary: "[ One- to two-sentence summary of the project and its impact. ]",
    body: "[ Case study body: context and problem. ]\n\n[ Case study body: approach. ]\n\n[ Case study body: outcome. ]",
  },
  {
    slug: "ic-project-2",
    title: "[ IC Project Two ]",
    year: "[ Year ]",
    role: "ic",
    involvement: "[ IC delivery ]",
    tags: ["[ Tag ]", "[ Tag ]"],
    summary: "[ One- to two-sentence summary of the project and its impact. ]",
    body: "[ Case study body: context and problem. ]\n\n[ Case study body: approach. ]\n\n[ Case study body: outcome. ]",
  },
];
