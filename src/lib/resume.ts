export type ExperienceEntry = {
  role: string;
  company: string;
  start: string;
  end: string;
  scope?: string;
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
    "Data science leader with 12 years across data engineering, analytics, and applied science. Builds AI-native teams and the systems they run on.",
  location: "Greater Seattle Area",
  email: "sriraraj19@gmail.com",
  experience: [
    {
      role: "Data Science Manager",
      company: "Amazon",
      start: "Jan 2024",
      end: "Present",
      scope:
        "Leads a 16-person, multi-country Science and Analytics organization (Data Scientists, BI Engineers, Data Engineers, and an Analytics Manager) owning dual charters for Amazon Books: Product & Customer Growth Science and Risk Science.",
      bullets: [
        "Scaled the organization from a 6-person BI team into a 16-person science org spanning three disciplines and two countries (US, India), adding a second management layer and expanding the charter from reporting to production ML and applied science",
        "Launched 3 production risk models, targeting publisher-reader collusion fraud, reader-experience quality, and the marketplace impact of AI-generated books, delivering [METRIC: $ saved / abuse reduction %] for the Books business",
        "Direct science strategy for Amazon KDP and the multi-million dollar Kindle Unlimited subscription business, shaping [METRIC: # of] product launches through deep dives, ML models, and data-backed recommendations adopted by product and policy teams",
        "Led AI-native transformation of every role on the team: shipped AI-driven risk workflows enabling Ops to evaluate 50+ signals in real time, agentic automation of fraud checks, AI advisors surfacing trends in monthly business reviews, and natural-language self-service analytics, [METRIC: hours saved / tickets deflected]",
        "Own end-to-end delivery across both verticals: data infrastructure, metric systems, dashboards, statistical deep dives, and ML models informing growth strategy, proactive enforcement, and policy",
      ],
    },
    {
      role: "Senior Business Intelligence Engineer",
      company: "Amazon",
      start: "Sep 2019",
      end: "Jan 2024",
      scope:
        "Senior IC across three Amazon organizations; final two years in KDP product growth science, the charter his current team now owns.",
      bullets: [
        "Drove product growth analytics for Amazon KDP (2022–2024): built the data infrastructure, metrics, and statistical deep dives behind customer and platform growth decisions, work that defined the charter of today's Growth Science vertical",
        "Built employee-experience measurement at scale, instrumenting the employee journey from onboarding to exit and converting friction points into tracked metrics for leadership action",
        "Delivered market-intelligence analytics for the Science & Design hiring organization: hiring-automation tooling and a talent repository integrating external data sources",
        "Owned the full IC stack throughout: data architecture, ETL pipelines, dashboard automation, metric design, and statistical analysis driving recommendations",
      ],
    },
    {
      role: "Data Analyst",
      company: "IBM",
      start: "May 2017",
      end: "Sep 2019",
      scope: "HR organization; enterprise data migration.",
      bullets: [
        "Engineered ETL and validation frameworks for a company-wide HR systems migration from legacy platforms to Workday, owning multiple migration workstreams end to end from the data side",
        "Completed an MS in Business Analytics (UConn) concurrently with full-time delivery",
      ],
    },
    {
      role: "Data Engineer",
      company: "Perficient",
      start: "Jan 2016",
      end: "Jul 2016",
      bullets: [
        "Built the foundational data engineering framework for a healthcare client's claims-platform migration, working hands-on with regulated, highly sensitive healthcare data",
      ],
    },
    {
      role: "Data Engineer",
      company: "Capgemini",
      start: "Jun 2013",
      end: "Jan 2016",
      bullets: [
        "Developed and optimized complex SQL and ETL workloads modernizing a US state unemployment system, owning critical-data workflows across ACH payment processing, claims, and insurance settlement",
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
