import Link from "next/link";

type Variant = "primary" | "secondary" | "tertiary";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary: "bg-accent-orange text-cream",
  secondary: "bg-cream text-bg-primary",
  tertiary: "bg-transparent border border-accent-green text-accent-green",
};

const BASE_CLASSES =
  "inline-block font-mono text-[11px] tracking-[0.05em] px-[14px] py-[12px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-green";

export default function Button({
  variant = "primary",
  href,
  onClick,
  children,
}: {
  variant?: Variant;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  const className = `${BASE_CLASSES} ${VARIANT_CLASSES[variant]}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
}
