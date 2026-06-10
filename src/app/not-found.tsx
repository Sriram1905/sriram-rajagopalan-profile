import Link from "next/link";

export const metadata = {
  title: "Not found — Sriram Rajagopalan",
};

export default function NotFound() {
  return (
    <main className="py-16">
      <p className="font-mono text-[11px] text-accent-green">{"> cd /nowhere"}</p>
      <h1 className="mt-4 font-serif text-[32px] font-medium">Not found</h1>
      <Link
        href="/"
        className="mt-6 inline-block font-mono text-[11px] text-accent-green hover:text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-green"
      >
        ← back home
      </Link>
    </main>
  );
}
