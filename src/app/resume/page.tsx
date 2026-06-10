import Button from "@/components/Button";
import PageShell from "@/components/PageShell";
import SiteHeader from "@/components/SiteHeader";
import { resume } from "@/lib/resume";
import { BASE_PATH } from "@/lib/site";

function SectionHeader({ label }: { label: string }) {
  return (
    <h2 className="border-b border-border-default pb-[6px] font-mono text-[10px] tracking-[0.1em] text-accent-green">
      {label}
    </h2>
  );
}

export const metadata = {
  title: "Resume — Sriram Rajagopalan",
};

export default function ResumePage() {
  return (
    <>
      <SiteHeader
        pageName="RESUME"
        action={
          <Button variant="primary" href={`${BASE_PATH}/resume.pdf`}>
            DOWNLOAD PDF ↓
          </Button>
        }
      />
      <main>
        <PageShell commandLabel="cat resume.md" title="Resume">
          <section className="mt-10">
            <SectionHeader label="EXPERIENCE" />
            <div className="mt-5 flex flex-col gap-7">
              {resume.experience.map((entry, i) => (
                <article key={i}>
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif text-[16px]">{entry.role}</h3>
                    <span className="font-mono text-[11px] text-text-dim">
                      {entry.start} – {entry.end}
                    </span>
                  </div>
                  <p className="mt-1 font-mono text-[11px] text-text-muted">
                    {entry.company}
                  </p>
                  <p className="mt-2 text-[12px] leading-[1.6] text-text-muted">
                    {entry.scope}
                  </p>
                  <ul className="mt-2 flex flex-col gap-1 border-l border-accent-green-border pl-[12px]">
                    {entry.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="text-[12px] leading-[1.6] text-text-muted"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <SectionHeader label="EDUCATION" />
            <div className="mt-5 flex flex-col gap-5">
              {resume.education.map((entry, i) => (
                <article key={i}>
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif text-[16px]">{entry.degree}</h3>
                    <span className="font-mono text-[11px] text-text-dim">
                      {entry.start} – {entry.end}
                    </span>
                  </div>
                  <p className="mt-1 font-mono text-[11px] text-text-muted">
                    {entry.school}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <SectionHeader label="SKILLS" />
            <div className="mt-5 flex flex-col gap-5">
              {resume.skills.map((group, i) => (
                <div key={i}>
                  <p className="font-mono text-[11px] text-text-muted">
                    {group.category}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-[6px]">
                    {group.items.map((item, j) => (
                      <span
                        key={j}
                        className="rounded-full border-[0.5px] border-accent-green-border px-[10px] py-[4px] font-mono text-[10px] text-accent-green"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </PageShell>
      </main>
    </>
  );
}
