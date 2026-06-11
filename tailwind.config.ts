import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#0A0A0B",
        "bg-secondary": "#111114",
        "border-default": "#1F1F23",
        "border-emphasis": "#2F2F33",
        "text-primary": "#F5F5F4",
        "text-muted": "#9CA3AF",
        "text-dim": "#6B7280",
        "accent-green": "#4A9D7E",
        "accent-green-border": "#1F3D2F",
        "accent-orange": "#D9531E",
        cream: "#F5F1EA",
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        mono: ["var(--font-mono)"],
        sans: ["var(--font-sans)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
