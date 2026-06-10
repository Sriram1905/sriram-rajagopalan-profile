import Button from "@/components/Button";
import { type Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
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
