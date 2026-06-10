import { Github, Linkedin, Mail } from "lucide-react";
import Button from "@/components/Button";
import CareerRoad from "@/components/CareerRoad";
import SiteHeader from "@/components/SiteHeader";

const SOCIAL_ICON_CLASSES =
  "text-text-muted hover:text-accent-green focus-visible:text-accent-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-green";

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
      <SiteHeader pageName="PORTFOLIO" hideNav />
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
        </div>
        <div className="mt-6 flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/sriram-rajagopalan/"
            rel="noopener"
            aria-label="Sriram Rajagopalan on LinkedIn"
            className={SOCIAL_ICON_CLASSES}
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/Sriram1905"
            rel="noopener"
            aria-label="Sriram Rajagopalan on GitHub"
            className={SOCIAL_ICON_CLASSES}
          >
            <Github size={18} />
          </a>
          <a
            href="mailto:sriraraj19@gmail.com"
            aria-label="Email Sriram Rajagopalan"
            className={SOCIAL_ICON_CLASSES}
          >
            <Mail size={18} />
          </a>
        </div>

        <section className="mt-12">
          <SectionOpener command="cat about.md" title="About" />
          <div className="mt-4 flex max-w-2xl flex-col gap-4 text-[14px] leading-[1.8] text-text-primary">
            <p>
              I&apos;m a Data Science Manager at Amazon, leading a 16-person
              science and analytics organization across the US and India that
              supports the Amazon Books business on two verticals. The first
              is Product and Customer Growth Science, where my team owns
              strategy and recommendations for the product organization
              through science-based solutions, spanning customer growth,
              platform growth, and new launches. Our scope runs end to end:
              owning the data infrastructure, building the metrics and
              dashboards, and conducting science deep dives and ML models that
              answer difficult business questions and influence product
              strategy. The second is Risk Science, where we own the Books
              risk and fraud domain: building risk models, supporting applied
              science research and new model launches, running deep dives
              that inform proactive enforcement, and delivering data-backed
              recommendations for policy.
            </p>
            <p>
              I came to this role after a decade of doing the work hands-on:
              data engineering at Capgemini, Perficient, and IBM, then
              four-plus years at Amazon as a senior IC, building the same
              infrastructure, metrics, and models my team owns today, before
              stepping into management in 2024.
            </p>
            <p>
              My current focus is making the organization AI-native: agentic
              workflows that automate fraud checks, AI advisors embedded in
              business reviews, and natural-language analytics that make data
              self-service.
            </p>
          </div>
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
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
