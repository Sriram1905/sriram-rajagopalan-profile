import Button from "@/components/Button";
import PageShell from "@/components/PageShell";
import SiteHeader from "@/components/SiteHeader";
import { projects, type Project } from "@/lib/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-lg border-[0.5px] border-border-default px-[16px] py-[14px]">
      <div className="flex items-baseline justify-between">
        <h3 className="font-serif text-[17px]">{project.title}</h3>
        <span className="font-mono text-[11px] text-text-dim">
          {project.year}
        </span>
      </div>
      <p className="mt-2 font-mono text-[10px] text-accent-green">
        {project.involvement}
      </p>
      <p className="mt-1 font-mono text-[10px] text-accent-green">
        {project.tags.join(" · ")}
      </p>
      <p className="mt-3 text-[12px] leading-[1.6] text-text-muted">
        {project.summary}
      </p>
      <div className="mt-4">
        <Button variant="secondary" href={`/work/${project.slug}`}>
          CASE STUDY →
        </Button>
      </div>
    </article>
  );
}

function WorkSection({
  label,
  items,
}: {
  label: string;
  items: Project[];
}) {
  return (
    <section className="mt-10">
      <h2 className="border-b border-border-default pb-[6px] font-mono text-[10px] tracking-[0.1em] text-accent-green">
        {label}
      </h2>
      <div className="mt-5 flex flex-col gap-4">
        {items.map((project) => (
          <ProjectCard key={project.slug} project={project} />
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
  const leadership = projects.filter((p) => p.role === "leadership");
  const ic = projects.filter((p) => p.role === "ic");

  return (
    <>
      <SiteHeader pageName="WORK" />
      <main>
        <PageShell commandLabel="ls projects/" title="Selected work">
          <WorkSection label="LEADERSHIP WORK" items={leadership} />
          <WorkSection label="HANDS-ON WORK" items={ic} />
        </PageShell>
      </main>
    </>
  );
}
