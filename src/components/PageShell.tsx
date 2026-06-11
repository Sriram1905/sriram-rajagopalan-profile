export default function PageShell({
  commandLabel,
  title,
  children,
}: {
  commandLabel: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="py-10">
      <p className="font-mono text-[11px] text-accent-green">
        {"> "}
        {commandLabel}
      </p>
      <h1 className="mt-3 font-heading text-[24px] font-medium">{title}</h1>
      {children}
    </section>
  );
}
