// Renders public/resume.pdf from src/lib/resume.ts so the resume page and
// the PDF share one data source. Runs as "prebuild" on every build/deploy.
// Run manually: npx tsx scripts/generate-resume-pdf.ts

import { createElement as h } from "react";
import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
  renderToFile,
} from "@react-pdf/renderer";
import { resume } from "../src/lib/resume";

// Google Fonts serves TTF (react-pdf compatible) to non-browser user agents.
async function googleFontTtfUrl(family: string, weight: number) {
  const cssUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}`;
  const css = await (
    await fetch(cssUrl, { headers: { "User-Agent": "curl/8" } })
  ).text();
  const match = css.match(/src: url\((.+?)\) format\(['"]?(?:truetype|opentype)['"]?\)/);
  if (!match) throw new Error(`No TTF URL found for ${family} ${weight}`);
  return match[1];
}

// Font families used in the document; reassigned to built-ins on fetch failure
// so a fonts.googleapis.com outage can't break the deploy.
let SERIF = "Fraunces";
let MONO = "JetBrains Mono";
let SANS = "Inter";

async function registerFonts() {
  try {
    const [fraunces, mono, monoMedium, sans] = await Promise.all([
      googleFontTtfUrl("Fraunces", 500),
      googleFontTtfUrl("JetBrains Mono", 400),
      googleFontTtfUrl("JetBrains Mono", 500),
      googleFontTtfUrl("Inter", 400),
    ]);
    Font.register({ family: SERIF, fonts: [{ src: fraunces, fontWeight: 500 }] });
    Font.register({
      family: MONO,
      fonts: [
        { src: mono, fontWeight: 400 },
        { src: monoMedium, fontWeight: 500 },
      ],
    });
    Font.register({ family: SANS, fonts: [{ src: sans, fontWeight: 400 }] });
  } catch (error) {
    console.warn("Font download failed, falling back to built-ins:", error);
    SERIF = "Times-Roman";
    MONO = "Courier";
    SANS = "Helvetica";
  }
}

const COLORS = {
  text: "#1A1A1B",
  muted: "#4B5563",
  dim: "#6B7280",
  green: "#2F6B55", // accent-green darkened for white-background contrast
  border: "#D1D5DB",
};

function buildStyles() {
  return StyleSheet.create({
    page: {
      backgroundColor: "#FFFFFF",
      color: COLORS.text,
      fontFamily: SANS,
      fontSize: 9,
      paddingVertical: 36,
      paddingHorizontal: 44,
    },
    name: { fontFamily: SERIF, fontWeight: 500, fontSize: 22 },
    tagline: { fontFamily: MONO, fontSize: 9, color: COLORS.green, marginTop: 4 },
    contact: { fontFamily: MONO, fontSize: 8, color: COLORS.dim, marginTop: 4 },
    sectionLabel: {
      fontFamily: MONO,
      fontWeight: 500,
      fontSize: 8,
      letterSpacing: 1,
      color: COLORS.green,
      borderBottomWidth: 1,
      borderBottomColor: COLORS.border,
      paddingBottom: 4,
      marginTop: 16,
      marginBottom: 8,
    },
    entryRow: { flexDirection: "row", justifyContent: "space-between" },
    role: { fontFamily: SERIF, fontWeight: 500, fontSize: 11 },
    dates: { fontFamily: MONO, fontSize: 8, color: COLORS.dim },
    company: { fontFamily: MONO, fontSize: 8.5, color: COLORS.muted, marginTop: 2 },
    scope: { fontSize: 9, color: COLORS.muted, marginTop: 3, lineHeight: 1.5 },
    bullets: {
      marginTop: 4,
      paddingLeft: 10,
      borderLeftWidth: 1,
      borderLeftColor: COLORS.green,
    },
    bullet: { fontSize: 9, color: COLORS.muted, lineHeight: 1.5, marginBottom: 2 },
    entry: { marginBottom: 10 },
    skillCategory: { fontFamily: MONO, fontSize: 8.5, color: COLORS.muted },
    skillRow: { flexDirection: "row", flexWrap: "wrap", gap: 5, marginTop: 4, marginBottom: 6 },
    skillPill: {
      fontFamily: MONO,
      fontSize: 8,
      color: COLORS.green,
      borderWidth: 0.5,
      borderColor: COLORS.green,
      borderRadius: 8,
      paddingVertical: 2,
      paddingHorizontal: 8,
    },
  });
}

async function main() {
  await registerFonts();
  const s = buildStyles();

  const doc = h(
    Document,
    { title: `${resume.name} — Resume` },
    h(
      Page,
      { size: "LETTER", style: s.page },
      h(Text, { style: s.name }, resume.name),
      h(Text, { style: s.tagline }, resume.tagline),
      h(Text, { style: s.contact }, `${resume.location} · ${resume.email}`),

      h(Text, { style: s.sectionLabel }, "EXPERIENCE"),
      ...resume.experience.map((entry) =>
        h(
          View,
          { style: s.entry },
          h(
            View,
            { style: s.entryRow },
            h(Text, { style: s.role }, entry.role),
            h(Text, { style: s.dates }, `${entry.start} – ${entry.end}`),
          ),
          h(Text, { style: s.company }, entry.company),
          h(Text, { style: s.scope }, entry.scope),
          h(
            View,
            { style: s.bullets },
            ...entry.bullets.map((bullet) =>
              h(Text, { style: s.bullet }, bullet),
            ),
          ),
        ),
      ),

      h(Text, { style: s.sectionLabel }, "EDUCATION"),
      ...resume.education.map((entry) =>
        h(
          View,
          { style: s.entry },
          h(
            View,
            { style: s.entryRow },
            h(Text, { style: s.role }, entry.degree),
            h(Text, { style: s.dates }, `${entry.start} – ${entry.end}`),
          ),
          h(Text, { style: s.company }, entry.school),
        ),
      ),

      h(Text, { style: s.sectionLabel }, "SKILLS"),
      ...resume.skills.map((group) =>
        h(
          View,
          null,
          h(Text, { style: s.skillCategory }, group.category),
          h(
            View,
            { style: s.skillRow },
            ...group.items.map((item) => h(Text, { style: s.skillPill }, item)),
          ),
        ),
      ),
    ),
  );

  await renderToFile(doc, "public/resume.pdf");
  console.log("Wrote public/resume.pdf");
}

main();
