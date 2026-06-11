import PageShell from "@/components/PageShell";
import SiteHeader from "@/components/SiteHeader";
import { charters, type Charter } from "@/lib/projects";

function CharterSection({ charter }: { charter: Charter }) {
  return (
    <section className="mt-10">
      <h2 className="border-b border-border-default pb-[6px] font-mono text-[10px] tracking-[0.1em] text-accent-green">
        {charter.label}
      </h2>
      {charter.statement && (
        <p className="mt-4 text-[14px] leading-[1.7] text-text-primary">
          {charter.statement}
        </p>
      )}
      <div className="mt-2">
        {charter.workstreams.map((ws) => (
          <article
            key={ws.title}
            className="border-b border-border-default py-[14px]"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-heading text-[15px]">{ws.title}</h3>
              <span className="shrink-0 font-mono text-[11px] text-text-dim">
                {ws.year}
              </span>
            </div>
            <p className="mt-1 font-mono text-[11px] text-accent-green">
              {ws.summary}
            </p>
            <p className="mt-1 text-[12px] text-text-muted">{ws.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export const metadata = {
  title: "Work — Sriram Rajagopalan",
  description:
    "Selected leadership and hands-on data science work by Sriram Rajagopalan.",
};

export default function WorkPage() {
  return (
    <>
      <SiteHeader pageName="WORK" />
      <main>
        <PageShell commandLabel="ls projects/" title="Selected work">
          {charters.map((charter) => (
            <CharterSection key={charter.label} charter={charter} />
          ))}
        </PageShell>
      </main>
    </>
  );
}
