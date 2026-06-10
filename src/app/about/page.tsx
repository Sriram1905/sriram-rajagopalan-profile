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
                I&apos;m a data science manager at Amazon, where I lead a
                16-person science and analytics organization supporting the
                Amazon Books business across the US and India. My team owns two
                charters: product and customer growth science for programs like
                KDP and Kindle Unlimited, and risk science covering fraud,
                abuse, and policy.
              </p>
              <p>
                I got here by doing the work hands-on first. Twelve years
                across data engineering, business intelligence, and science:
                building pipelines and architecture at Capgemini, Perficient,
                and IBM, then six-plus years at Amazon going from senior IC to
                manager. I&apos;ve built the infrastructure, designed the
                metrics, run the deep dives, and shipped the models.
              </p>
              <p>
                Right now I&apos;m focused on making my organization AI-native:
                agentic workflows for fraud checks, AI advisors for business
                reviews, and natural-language analytics that make data
                self-service.
              </p>
            </div>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <Button
              variant="secondary"
              href="https://www.linkedin.com/in/sriram-rajagopalan/"
              external
              ariaLabel="Sriram Rajagopalan on LinkedIn"
            >
              LINKEDIN
            </Button>
            <Button
              variant="secondary"
              href="https://github.com/Sriram1905"
              external
              ariaLabel="Sriram Rajagopalan on GitHub"
            >
              GITHUB
            </Button>
            <Button
              variant="primary"
              href="mailto:sriraraj19@gmail.com"
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
