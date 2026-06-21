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

// The downloadable PDF (public/resume.pdf) is Sriram's own designed Word/Pages
// document exported verbatim — it is NOT generated from this data. This file
// only powers the on-page HTML resume; keep the content in sync with the PDF.
export const resume: Resume = {
  name: "Sriram Rajagopalan",
  tagline:
    "Data Science Manager with 12+ years across data engineering, analytics, and data science, now leading a 16-person, multi-country science and analytics organization at Amazon.",
  location: "Seattle, WA",
  email: "sriraraj19@gmail.com",
  experience: [
    {
      role: "Data Science Manager",
      company: "Amazon",
      start: "Jan 2024",
      end: "Present",
      scope:
        "Lead a 16-person Science & Analytics organization (Data Scientists, BI Engineers, Data Engineers, and Analytics Manager) across the US and India, owning two verticals for Amazon Books: Product Growth Science and Risk Science.",
      bullets: [
        "Scaled the organization from a 6-person BI team to a 16-person, multi-country science org spanning three disciplines (Data Science, Business Intelligence Engineering, Data Engineering), adding a second management layer and expanding the charter from reporting into production ML and science.",
        "Lead AI transformation across every role on the team: launched AI-driven risk workflows that let Ops evaluate 50+ signals in real time, agentic automation of fraud checks, AI advisors that surface trends in monthly business reviews, and natural-language self-service analytics, deflecting more than 75% of emerging and recurrent needs and improving productivity.",
        "Develop and promote talent through Amazon's panel-reviewed process: established mechanisms that scale and track team metrics, performance, and goals. Delivered 4 promotions (L4 to L5, L5 to L6) and 2 role conversions (BIE to DE, BIE to DS), each requiring intensive documentation and senior-leadership review.",
        "Lead Product & Customer Growth Science for the multi-million-dollar Kindle Direct Publishing (KDP) business: built strategy and recommendations for the product org through science-based solutions across customer growth, platform growth, and new launches, influencing 10+ product launches. Delivered end to end from data infrastructure to metrics, deep dives, and science solutions that turned ambiguous questions into product strategy, driving double-digit growth in engagement and subscriptions.",
        "Lead Risk Science for the Books fraud and abuse domain: built and launched production risk models that drove proactive enforcement on fraudulent accounts, delivering millions ($) in savings; supported applied-science research and new model launches, ran deep dives that informed enforcement strategy, and delivered data-backed recommendations that shaped policy.",
        "Establish metrics and measurement for both verticals: formulated and launched 100+ metrics and KPIs across the growth and risk verticals and built dashboards and automations for the recurring business reviews leadership uses to track business goals and growth.",
      ],
    },
    {
      role: "Senior Business Intelligence Engineer",
      company: "Amazon",
      start: "Sep 2019",
      end: "Jan 2024",
      scope:
        "Senior IC across three Amazon organizations, with hands-on experience building data infrastructure and metrics and conducting comprehensive analyses that drove product strategy.",
      bullets: [
        "Led analytics for the Amazon Kindle & Books publishing org (2022–2024): built end-to-end science solutions, supported org goals, collaborated across the org with scientists, PMs, and engineers, and translated large-scale publishing data into insight, the work that defined today's Growth Science vertical.",
        "Built employee-experience measurement at scale (2019–2021): led architecture design and implemented integration to create a universal dataset capturing the end-to-end employee journey across 20+ roles and 100+ touchpoints, and delivered dashboards to quantify and track experience.",
        "Delivered market-intelligence analytics for the Science & Design recruiting org: built roadmaps for reporting and automation, diagnostic analytics, and external market research, partnering with recruiting leads to define and maintain KPIs for specialty recruiting across science and design roles.",
        "Operated the full IC stack: data architecture, ETL pipelines, dashboard automation, metric design, and statistical analysis.",
      ],
    },
    {
      role: "Data Engineer",
      company: "IBM Corporation",
      start: "May 2017",
      end: "Aug 2019",
      bullets: [
        "Led data migration for a global Workday HCM deployment: built transformation jobs and integrated Workday with legacy systems for seamless transition across complex HR processes.",
        "Architected ETL solutions integrating Workday and DataStage for Payroll & Compensation and built dashboards and reports that surfaced opportunities for global deployments.",
      ],
    },
    {
      role: "Data Engineer",
      company: "Perficient India Private Limited",
      start: "Jan 2016",
      end: "Jul 2016",
      bullets: [
        "Led a team of engineers building automated ETL to ingest healthcare data into SQL Server, streamlining claims and billing cycles while working with regulated and sensitive data.",
      ],
    },
    {
      role: "Data Engineer",
      company: "Capgemini India Private Limited",
      start: "Jun 2013",
      end: "Dec 2015",
      bullets: [
        "Built the data integration and reporting framework digitizing claims, appeals, and benefits for a US public-sector insurance client using the Oracle BI stack. Improved ETL job performance from 60% to 85% via parallel processing and load balancing and cut defect rate 30% through Python-based technical validation.",
      ],
    },
  ],
  education: [
    {
      degree: "Master of Science, Business Analytics & Project Management",
      school: "University of Connecticut, Hartford, CT · GPA 3.8 / 4.0",
      start: "Aug 2016",
      end: "Dec 2017",
    },
    {
      degree: "Bachelor of Engineering, Mechanical Engineering",
      school: "Velammal Engineering College, Anna University, Chennai · GPA 8.3 / 10.0",
      start: "Aug 2009",
      end: "Apr 2013",
    },
  ],
  skills: [
    {
      category: "Leadership",
      items: [
        "Team building",
        "Hiring",
        "Coaching & promotions",
        "Science & analytics strategy",
        "Cross-functional collaboration",
        "Stakeholder & executive influence",
        "Scalable mechanisms",
      ],
    },
    {
      category: "Science & Analytics",
      items: [
        "Machine learning",
        "Experimentation",
        "A/B testing",
        "Statistical deep dives",
        "Customer & behavioral analytics",
        "Metrics & KPIs",
        "Dashboards",
        "Automation",
        "Fraud / risk modeling (identity, behavior, network)",
        "Customer segmentation",
      ],
    },
    {
      category: "AI & Tooling",
      items: [
        "Agentic & AI-enabled workflows",
        "LLM-assisted automation",
        "Natural-language analytics",
        "Skills, loops & knowledge bases",
        "Retrieval-augmented generation (RAG)",
      ],
    },
    {
      category: "Engineering",
      items: [
        "Python",
        "SQL",
        "R",
        "Data architecture",
        "ETL",
        "Redshift",
        "QuickSight",
        "Tableau",
        "Oracle BI",
        "IBM DataStage",
        "Workday",
        "SAS",
        "SPSS",
      ],
    },
  ],
};
