import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

// Evaluated once at build time (static export), so this is the deploy date.
const DEPLOY_DATE = new Date().toISOString().slice(0, 10);

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-heading",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sriram1905.github.io/sriram-rajagopalan-profile"),
  title: "Sriram Rajagopalan",
  description:
    "Data science manager at Amazon. 12 years across data engineering, analytics, and science.",
  openGraph: {
    title: "Sriram Rajagopalan",
    description:
      "Data science manager at Amazon. 12 years across data engineering, analytics, and science.",
    type: "website",
    images: "/og-card.png",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${inter.variable} bg-bg-primary font-sans text-text-primary`}
      >
        {/* With JS disabled, undo framer-motion's SSR'd hidden states */}
        <noscript>
          <style>{`[style*="opacity:0"],[style*="opacity: 0"]{opacity:1!important;transform:none!important}svg mask path{stroke-dasharray:none!important;stroke-dashoffset:0!important}`}</style>
        </noscript>
        <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-6">
          <div className="flex-1">{children}</div>
          <footer className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t border-border-default p-4 font-mono text-[10px] text-text-dim">
            <span>© 2026 Sriram Rajagopalan</span>
            <span className="flex items-center gap-2">
              last deployed {DEPLOY_DATE}
              <span
                title="site is maintained"
                className="pulse-dot h-[6px] w-[6px] rounded-full bg-accent-green"
              />
            </span>
          </footer>
        </div>
      </body>
    </html>
  );
}
