import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import Button from "@/components/Button";
import PageShell from "@/components/PageShell";
import SiteHeader from "@/components/SiteHeader";
import { BASE_PATH } from "@/lib/site";

export const metadata = {
  title: "About — Sriram Rajagopalan",
  description: "About Sriram Rajagopalan, data science manager.",
};

export default function AboutPage() {
  // TODO: drop a 1:1 photo at public/profile.jpg — the placeholder below
  // swaps to next/image automatically once the file exists.
  const hasPhoto = existsSync(path.join(process.cwd(), "public/profile.jpg"));

  return (
    <>
      <SiteHeader pageName="ABOUT" />
      <main>
        <PageShell commandLabel="cat about.md" title="About">
          <div className="mt-8 grid grid-cols-[100px_1fr] gap-6">
            {hasPhoto ? (
              <Image
                src={`${BASE_PATH}/profile.jpg`}
                alt="Sriram Rajagopalan"
                width={100}
                height={100}
                className="h-[100px] w-[100px] border-[0.5px] border-border-emphasis object-cover"
              />
            ) : (
              <div
                aria-hidden="true"
                className="flex h-[100px] w-[100px] items-center justify-center border-[0.5px] border-border-emphasis bg-border-default font-mono text-[10px] text-text-dim"
              >
                PHOTO
              </div>
            )}
            <div className="flex flex-col gap-4 text-[13px] leading-[1.7] text-text-primary">
              <p>
                [ Bio paragraph one: who Sriram is, current role and focus. ]
              </p>
              <p>
                [ Bio paragraph two: career arc, what kind of teams and
                problems. ]
              </p>
              <p>[ Bio paragraph three: outside of work, location, etc. ]</p>
            </div>
          </div>
          {/* TODO: replace the "#" hrefs with the real LinkedIn URL,
              GitHub URL, and mailto: address. */}
          <div className="mt-8 flex items-center gap-3">
            <Button
              variant="secondary"
              href="#"
              external
              ariaLabel="Sriram Rajagopalan on LinkedIn"
            >
              LINKEDIN
            </Button>
            <Button
              variant="secondary"
              href="#"
              external
              ariaLabel="Sriram Rajagopalan on GitHub"
            >
              GITHUB
            </Button>
            <Button
              variant="primary"
              href="#"
              external
              ariaLabel="Email Sriram Rajagopalan"
            >
              EMAIL ↗
            </Button>
          </div>
        </PageShell>
      </main>
    </>
  );
}
