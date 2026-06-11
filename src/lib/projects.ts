export type Workstream = {
  title: string;
  year: string;
  // short metric pill shown next to the title, e.g. "[ metric ]"
  chip: string;
  // "problem → built → outcome" one-liner, rendered mono accent-green
  summary: string;
  detail: string;
};

export type Charter = {
  label: string;
  statement?: string;
  workstreams: Workstream[];
};

export const charters: Charter[] = [
  {
    label: "GROWTH SCIENCE",
    statement:
      "Product and Customer Growth Science for Amazon Books. Strategy and recommendations for the product organization through science-based solutions: customer growth, platform growth, and new launches. End-to-end ownership from data infrastructure to metrics, deep dives, and ML models.",
    workstreams: [
      {
        title: "KDP Select Program Health Overview",
        year: "[YEAR]",
        chip: "[ metric ]",
        summary: "[PLACEHOLDER: problem → built → outcome]",
        detail: "[PLACEHOLDER: one-line detail]",
      },
      {
        title: "ALC vs Subscription Cannibalization Trends",
        year: "[YEAR]",
        chip: "[ metric ]",
        summary: "[PLACEHOLDER: problem → built → outcome]",
        detail: "[PLACEHOLDER: one-line detail]",
      },
      {
        title: "Comics Business Health and Customer Segmentation",
        year: "[YEAR]",
        chip: "[ metric ]",
        summary: "[PLACEHOLDER: problem → built → outcome]",
        detail: "[PLACEHOLDER: one-line detail]",
      },
    ],
  },
  {
    label: "RISK SCIENCE",
    statement:
      "Risk Science for the Books risk and fraud domain. Risk models in production, applied science support for research and new model launches, deep dives that inform proactive enforcement, and data-backed recommendations for policy.",
    workstreams: [
      {
        title: "Publisher Reader Collusion Model",
        year: "[YEAR]",
        chip: "[ metric ]",
        summary: "[PLACEHOLDER: problem → built → outcome]",
        detail: "[PLACEHOLDER: one-line detail]",
      },
      {
        title: "Reader Experience Index Model",
        year: "[YEAR]",
        chip: "[ metric ]",
        summary: "[PLACEHOLDER: problem → built → outcome]",
        detail: "[PLACEHOLDER: one-line detail]",
      },
    ],
  },
  {
    label: "EARLIER HANDS-ON WORK",
    workstreams: [
      {
        title: "[ IC-era project, to be chosen ]",
        year: "[YEAR]",
        chip: "[ metric ]",
        summary: "[PLACEHOLDER: problem → built → outcome]",
        detail: "[PLACEHOLDER: one-line detail]",
      },
      {
        title: "[ IC-era project, to be chosen ]",
        year: "[YEAR]",
        chip: "[ metric ]",
        summary: "[PLACEHOLDER: problem → built → outcome]",
        detail: "[PLACEHOLDER: one-line detail]",
      },
    ],
  },
];
