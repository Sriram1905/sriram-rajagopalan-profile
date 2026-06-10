export type ExperienceEntry = {
  role: string;
  company: string;
  start: string;
  end: string;
  scope: string;
  bullets: string[];
};

export type EducationEntry = {
  degree: string;
  school: string;
  start: string;
  end: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Resume = {
  name: string;
  tagline: string;
  location: string;
  email: string;
  experience: ExperienceEntry[];
  education: EducationEntry[];
  skills: SkillGroup[];
};

export const resume: Resume = {
  name: "Sriram Rajagopalan",
  tagline:
    "12 years across data engineering, analytics, and science. Now leading teams that do all three.",
  location: "Greater Seattle Area",
  email: "sriraraj19@gmail.com",
  experience: [
    {
      role: "Data Science Manager",
      company: "Amazon",
      start: "Jan 2024",
      end: "present",
      scope:
        "Leads a 16-person Science and Analytics org (5 Data Scientists, 3 BI Engineers, and an Analytics Manager with 6 BIEs and 1 Data Engineer) across the US and India, supporting the Amazon Books business across two verticals: Product and Customer Growth Science, and Risk Science.",
      bullets: [
        "Grew the team from 6 BI engineers to a 16-person multi-country org spanning three role families (DS, BIE, DE) across the US and India",
        "Launched 3 production risk models addressing collusion fraud, reader experience measurement, and the impact of AI-generated books, delivering significant cost savings for the business",
        "Influenced multiple Amazon KDP program launches and supports the multi-million dollar Kindle Unlimited business with science-based strategy and recommendations",
        "Drove AI transformation across all roles: AI-driven books risk management workflows enabling Ops to review 50+ attributes in real time, AI advisor flows surfacing trends during monthly business reviews, agentic workflows automating fraud checks, and natural-language self-service querying tools",
        "Owns end-to-end scope for both verticals: data infrastructure, metrics and dashboards, science deep dives, and ML models that inform product growth, proactive fraud enforcement, and policy updates",
      ],
    },
    {
      role: "Senior Business Intelligence Engineer",
      company: "Amazon",
      start: "Sep 2019",
      end: "Jan 2024",
      scope:
        "Full-stack senior IC across three Amazon teams: employee experience measurement, Science and Design hiring market intelligence, and KDP product growth (2022 onward).",
      bullets: [
        "Built employee experience measurement at scale, mapping employee journeys from onboarding to exit and surfacing pain points through metrics",
        "Supported the Science and Design hiring org's market intelligence team: analytics tools for hiring automation and a science/design talent repository integrating external data",
        "Joined the KDP org in 2022 in a hands-on product growth science role: the same charter his data scientists own today",
        "End-to-end IC ownership: data infrastructure, pipelines and architecture, dashboarding and automation, metric design and tracking, and statistical deep dives driving recommendations",
      ],
    },
    {
      role: "Data Analyst",
      company: "IBM",
      start: "May 2017",
      end: "Sep 2019",
      scope: "HR organization, enterprise data migration.",
      bullets: [
        "Supported a company-wide migration of HR systems from legacy platforms to Workday, building ETL jobs and validation scripts",
        "Owned multiple migrations end-to-end from the data engineering side",
      ],
    },
    {
      role: "Data Engineer",
      company: "Perficient",
      start: "Jan 2016",
      end: "Jul 2016",
      scope: "Healthcare client, claims platform migration.",
      bullets: [
        "Migrated a legacy claim processing system to a new platform and built the client's new data engineering framework",
        "Worked hands-on with sensitive healthcare data and domain workflows",
      ],
    },
    {
      role: "Data Engineer",
      company: "Capgemini",
      start: "Jun 2013",
      end: "Jan 2016",
      scope: "US government client, unemployment system modernization.",
      bullets: [
        "Built and optimized complex SQL and ETL workloads for a legacy-to-modern migration of a state unemployment system",
        "Handled critical-data workflows spanning ACH processing, claims, and insurance settlement",
      ],
    },
  ],
  education: [
    {
      degree: "Master of Science, Business Analytics and Project Management",
      school: "University of Connecticut School of Business",
      start: "Aug 2016",
      end: "Dec 2017",
    },
    {
      degree: "Bachelor of Engineering, Mechanical Engineering",
      school: "Velammal Engineering College, Chennai",
      start: "Aug 2009",
      end: "Jun 2013",
    },
  ],
  skills: [
    {
      category: "Leadership",
      items: [
        "[PLACEHOLDER — Sriram to confirm: org building, multi-country teams, science strategy, AI adoption]",
      ],
    },
    {
      category: "Science & Analytics",
      items: [
        "[PLACEHOLDER — Sriram to confirm: ML modeling, risk modeling, statistical deep dives, experimentation]",
      ],
    },
    {
      category: "Engineering",
      items: [
        "[PLACEHOLDER — Sriram to confirm: SQL, ETL, data architecture, pipelines, dashboarding]",
      ],
    },
    {
      category: "AI Tooling",
      items: [
        "[PLACEHOLDER — Sriram to confirm: agentic workflows, LLM tooling, natural-language analytics]",
      ],
    },
  ],
};
