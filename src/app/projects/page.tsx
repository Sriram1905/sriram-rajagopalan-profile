import PageShell from "@/components/PageShell";
import ProjectJourney from "@/components/ProjectJourney";
import SiteHeader from "@/components/SiteHeader";
import Reveal from "@/components/motion/Reveal";
import { personalProjects } from "@/lib/personal";

export const metadata = {
  title: "Personal work — Sriram Rajagopalan",
  description:
    "Nights-and-weekends builds by Sriram Rajagopalan: Football Pesalaam and Bumblebee, designed and shipped end to end.",
};

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader pageName="PERSONAL" />
      <main>
        <PageShell commandLabel="ls ~/personal" title="Personal work">
          <p className="mt-4 max-w-2xl text-[14px] leading-[1.7] text-text-muted">
            Two products I designed and shipped on nights and weekends — vibe-coded
            from idea to deploy, the same AI-native way I&apos;m reshaping how my team
            works. Click through each one.
          </p>

          <div className="mt-12 flex flex-col gap-14">
            {personalProjects.map((project) => (
              <Reveal key={project.slug}>
                <ProjectJourney project={project} />
              </Reveal>
            ))}
          </div>
        </PageShell>
      </main>
    </>
  );
}
