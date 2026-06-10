import Link from "next/link";

const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "Resume", href: "/resume" },
  { label: "About", href: "/about" },
];

export default function SiteHeader({
  pageName,
  meta,
}: {
  pageName: string;
  meta?: string;
}) {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border-default bg-bg-secondary px-4 py-3">
      <span className="font-mono text-[11px] tracking-[0.1em] text-accent-green">
        SRIRAM RAJAGOPALAN // {pageName}
      </span>
      <div className="flex items-center gap-6">
        <nav aria-label="Main" className="flex items-center gap-5">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="font-mono text-[11px] text-text-muted hover:text-text-primary focus-visible:text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-green"
            >
              {label}
            </Link>
          ))}
        </nav>
        {meta && (
          <span className="font-mono text-[11px] text-text-dim">{meta}</span>
        )}
      </div>
    </header>
  );
}
