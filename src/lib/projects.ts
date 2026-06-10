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
    slug: "leadership-project-1",
    title: "[ Leadership Project One ]",
    year: "[ Year ]",
    role: "leadership",
    involvement: "[ Led design and review ]",
    tags: ["[ Tag ]", "[ Tag ]"],
    summary: "[ One- to two-sentence summary of the project and its impact. ]",
    body: "[ Case study body: context and problem. ]\n\n[ Case study body: approach and team. ]\n\n[ Case study body: outcome and impact. ]",
  },
  {
    slug: "leadership-project-2",
    title: "[ Leadership Project Two ]",
    year: "[ Year ]",
    role: "leadership",
    involvement: "[ Led design and review ]",
    tags: ["[ Tag ]", "[ Tag ]"],
    summary: "[ One- to two-sentence summary of the project and its impact. ]",
    body: "[ Case study body: context and problem. ]\n\n[ Case study body: approach and team. ]\n\n[ Case study body: outcome and impact. ]",
  },
  {
    slug: "leadership-project-3",
    title: "[ Leadership Project Three ]",
    year: "[ Year ]",
    role: "leadership",
    involvement: "[ Led design and review ]",
    tags: ["[ Tag ]", "[ Tag ]"],
    summary: "[ One- to two-sentence summary of the project and its impact. ]",
    body: "[ Case study body: context and problem. ]\n\n[ Case study body: approach and team. ]\n\n[ Case study body: outcome and impact. ]",
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
