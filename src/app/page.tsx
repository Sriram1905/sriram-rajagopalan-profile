import Button from "@/components/Button";
import SiteHeader from "@/components/SiteHeader";

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
          Building AI-native data science teams. Shipping machine learning into
          production.
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
      </main>
    </>
  );
}
