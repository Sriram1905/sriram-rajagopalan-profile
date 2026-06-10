import Link from "next/link";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import SiteHeader from "@/components/SiteHeader";
import { projects } from "@/lib/projects";

const STATS = [
  { value: "16", label: "team size" },
  { value: "12+", label: "years in data" },
  { value: "3", label: "production risk models" },
  { value: "2", label: "countries" },
];

const NOW_ITEMS = [
  "Making a 16-person science org AI-native: agentic workflows, AI advisors, natural-language analytics",
  "Scaling risk science for the Amazon Books business: fraud, abuse, and policy",
  "Building in public: this portal, side projects, and writing on applied data science leadership",
];

const TIMELINE = [
  { years: "2024 — present", entry: "Data Science Manager, Amazon" },
  { years: "2019 — 2024", entry: "Sr. BI Engineer, Amazon" },
  { years: "2017 — 2019", entry: "Data Analyst, IBM" },
  { years: "2016 — 2017", entry: "MS, Business Analytics, UConn" },
  { years: "2016", entry: "Data Engineer, Perficient" },
  { years: "2013 — 2016", entry: "Data Engineer, Capgemini" },
];

function SectionOpener({ command, title }: { command: string; title: string }) {
  return (
    <>
      <p className="font-mono text-[11px] text-accent-green">
        {"> "}
        {command}
      </p>
      <h2 className="mt-2 font-serif text-[22px] font-medium">{title}</h2>
    </>
  );
}

export default function Home() {
  const featured = projects.filter((p) => p.role === "leadership").slice(0, 3);

  return (
    <>
      <SiteHeader pageName="PORTFOLIO" meta="v1.0 · 2026" />
      <main className="py-16">
        <p className="font-mono text-[11px] text-accent-green">{"> whoami"}</p>
        <h1 className="mt-4 font-serif text-[32px] font-medium sm:text-[44px]">
          Sriram Rajagopalan
        </h1>
        <p className="mt-2 font-mono text-accent-green">
          data_science.manager()
        </p>
        <p className="mt-4 max-w-xl text-text-muted">
          12 years across data engineering, analytics, and science. Now leading
          teams that do all three.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <Button variant="secondary" href="/work">
            WORK
          </Button>
          <Button variant="primary" href="/resume">
            RESUME ↓
          </Button>
          <Button variant="tertiary" href="/about">
            ABOUT
          </Button>
        </div>

        <div className="mt-8 grid grid-cols-2 border-t border-border-default py-6 sm:grid-cols-4">
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <p className="font-serif text-[28px] font-medium text-text-primary">
                {value}
              </p>
              <p className="font-mono text-[10px] tracking-[0.05em] text-text-dim">
                {label}
              </p>
            </div>
          ))}
        </div>

        <section className="mt-12">
          <SectionOpener command="head -3 projects/" title="Featured work" />
          <div className="mt-5 flex flex-col gap-4">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <Link
            href="/work"
            className="mt-5 inline-block font-mono text-[11px] text-accent-green hover:text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-green"
          >
            view all work →
          </Link>
        </section>

        {/* AGENT-MAINTAINED: Phase 3 maintenance agent keeps this "Now"
            section fresh. Edit NOW_ITEMS above. */}
        <section className="mt-12">
          <SectionOpener command="cat now.md" title="Now" />
          <ul className="mt-4 flex flex-col gap-2">
            {NOW_ITEMS.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-[13px] leading-[1.7] text-text-muted"
              >
                <span aria-hidden="true" className="font-mono text-accent-green">
                  ·
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <SectionOpener command="git log --oneline career/" title="Path" />
          <ol className="mt-5 flex flex-col gap-5 border-l border-accent-green-border">
            {TIMELINE.map(({ years, entry }) => (
              <li key={`${years}-${entry}`} className="relative pl-5">
                <span
                  aria-hidden="true"
                  className="absolute -left-[2.5px] top-[5px] h-[4px] w-[4px] rounded-full bg-accent-green"
                />
                <p className="font-mono text-[10px] text-text-dim">{years}</p>
                <p className="text-[13px] text-text-primary">{entry}</p>
              </li>
            ))}
          </ol>
        </section>

        <div className="mb-8 mt-12 flex items-center justify-center gap-3">
          <Button
            variant="secondary"
            href="https://www.linkedin.com/in/sriram-rajagopalan/"
            external
            ariaLabel="Sriram Rajagopalan on LinkedIn"
          >
            LINKEDIN
          </Button>
          <Button
            variant="secondary"
            href="https://github.com/Sriram1905"
            external
            ariaLabel="Sriram Rajagopalan on GitHub"
          >
            GITHUB
          </Button>
          <Button
            variant="primary"
            href="mailto:sriraraj19@gmail.com"
            external
            ariaLabel="Email Sriram Rajagopalan"
          >
            EMAIL ↗
          </Button>
        </div>
      </main>
    </>
  );
}
