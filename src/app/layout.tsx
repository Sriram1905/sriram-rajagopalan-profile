import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-serif",
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
        className={`${fraunces.variable} ${jetbrainsMono.variable} ${inter.variable} bg-bg-primary font-sans text-text-primary`}
      >
        <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-6">
          <div className="flex-1">{children}</div>
          <footer className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t border-border-default p-4 font-mono text-[10px] text-text-dim">
            <span>© 2026 Sriram Rajagopalan</span>
            <span>built with Next.js · deployed to GitHub Pages</span>
          </footer>
        </div>
      </body>
    </html>
  );
}
