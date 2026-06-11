import PageShell from "@/components/PageShell";
import SiteHeader from "@/components/SiteHeader";
import WorkstreamRow from "@/components/WorkstreamRow";
import Reveal, { RevealItem } from "@/components/motion/Reveal";
import { charters, type Charter } from "@/lib/projects";

function CharterSection({ charter }: { charter: Charter }) {
  return (
    <section className="mt-10">
      <Reveal>
        <h2 className="border-b border-border-default pb-[6px] font-mono text-[10px] tracking-[0.1em] text-accent-green">
          {charter.label}
        </h2>
        {charter.statement && (
          <RevealItem>
            <p className="mt-4 text-[14px] leading-[1.7] text-text-primary">
              {charter.statement}
            </p>
          </RevealItem>
        )}
        <div className="mt-2">
          {charter.workstreams.map((ws) => (
            <RevealItem key={ws.title}>
              <WorkstreamRow ws={ws} />
            </RevealItem>
          ))}
        </div>
      </Reveal>
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
