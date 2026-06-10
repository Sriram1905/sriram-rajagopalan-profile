import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import { projects } from "@/lib/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return { title: `${project.title} — Sriram Rajagopalan` };
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <>
      <SiteHeader pageName="WORK" />
      <main className="py-10">
        <Link
          href="/work"
          className="font-mono text-[11px] text-accent-green hover:text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-green"
        >
          ← back to work
        </Link>
        <h1 className="mt-6 font-serif text-[32px] font-medium">
          {project.title}
        </h1>
        <div className="prose prose-invert mt-6 prose-headings:text-text-primary prose-p:text-text-muted prose-a:text-accent-green prose-strong:text-text-primary prose-code:text-accent-green">
          {project.body.split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </main>
    </>
  );
}
