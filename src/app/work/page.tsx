import PageShell from "@/components/PageShell";
import ProjectCard from "@/components/ProjectCard";
import SiteHeader from "@/components/SiteHeader";
import { projects, type Project } from "@/lib/projects";

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
