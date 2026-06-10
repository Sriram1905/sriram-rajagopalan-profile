import Link from "next/link";
import Button from "@/components/Button";
import CareerRoad from "@/components/CareerRoad";
import SiteHeader from "@/components/SiteHeader";

function SectionOpener({
  command,
  title,
  titleSize = "text-[22px]",
}: {
  command: string;
  title: string;
  titleSize?: string;
}) {
  return (
    <>
      <p className="font-mono text-[11px] text-accent-green">
        {"> "}
        {command}
      </p>
      <h2 className={`mt-2 font-serif font-medium ${titleSize}`}>{title}</h2>
    </>
  );
}

export default function Home() {
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

        <section className="mt-12">
          <SectionOpener command="cat about.md" title="About" />
          <div className="mt-4 flex max-w-2xl flex-col gap-4 text-[14px] leading-[1.8] text-text-primary">
            <p>
              I lead a 16-person science and analytics org at Amazon,
              supporting the Books business across the US and India. Two
              charters: growth science for KDP and Kindle Unlimited, and risk
              science covering fraud, abuse, and policy.
            </p>
            <p>
              I earned the manager seat by doing the work first. Pipelines at
              Capgemini. Healthcare data at Perficient. Enterprise migrations
              at IBM. Then six years at Amazon, senior IC to manager, building
              infrastructure, designing metrics, running deep dives, shipping
              models.
            </p>
            <p>
              Today my focus is making the org AI-native: agentic workflows,
              AI advisors, natural-language analytics.
            </p>
          </div>
          <Link
            href="/about"
            className="mt-5 inline-block font-mono text-[11px] text-accent-green hover:text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-green"
          >
            more about me →
          </Link>
        </section>

        <section className="mt-12">
          <SectionOpener command="git log --graph career/" title="The road here" />
          <div className="mt-6">
            <CareerRoad />
          </div>
        </section>

        <section className="mb-[64px] mt-[56px]">
          <SectionOpener
            command="pwd"
            title="Data Science Manager, Amazon"
            titleSize="text-[24px]"
          />
          <div className="mt-5 rounded-lg border border-border-default bg-bg-secondary p-6">
            <p className="text-[14px] leading-[1.7] text-text-primary">
              Leading Product &amp; Customer Growth Science and Risk Science
              for Amazon Books. A 16-person org across the US and India: data
              scientists, BI engineers, and data engineers.
            </p>
            <p className="mt-3 text-[13px] leading-[1.7] text-text-muted">
              Shipping production risk models. Influencing KDP launches.
              Supporting the multi-million dollar Kindle Unlimited business.
              Driving AI adoption across every role on the team.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button variant="secondary" href="/work">
                WORK
              </Button>
              <Button variant="primary" href="/resume">
                RESUME ↓
              </Button>
              <Button
                variant="tertiary"
                href="https://www.linkedin.com/in/sriram-rajagopalan/"
                external
                ariaLabel="Sriram Rajagopalan on LinkedIn"
              >
                LINKEDIN
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
