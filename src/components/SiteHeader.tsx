import Link from "next/link";

const NAV_LINKS = [
  { label: "Personal", href: "/projects" },
  { label: "Resume", href: "/resume" },
];

export default function SiteHeader({
  pageName,
  meta,
  action,
  hideNav = false,
}: {
  pageName: string;
  meta?: string;
  action?: React.ReactNode;
  hideNav?: boolean;
}) {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between gap-4 overflow-x-auto border-b border-border-default bg-bg-secondary px-4 py-3">
      <span className="whitespace-nowrap font-mono text-[11px] tracking-[0.1em] text-accent-green">
        SRIRAM RAJAGOPALAN // {pageName}
      </span>
      {!hideNav && (
        <div className="flex shrink-0 items-center gap-6">
          <nav aria-label="Main" className="flex items-center gap-5">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="link-underline font-mono text-[11px] text-text-muted hover:text-text-primary focus-visible:text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-green"
              >
                {label}
              </Link>
            ))}
          </nav>
          {meta && (
            <span className="font-mono text-[11px] text-text-dim">{meta}</span>
          )}
          {action}
        </div>
      )}
    </header>
  );
}
