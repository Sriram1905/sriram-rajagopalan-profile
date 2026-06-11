// Generates public/og-card.png (1200x630) and src/app/icon.png (32x32)
// using the design system tokens from CLAUDE.md.
// Run: node scripts/generate-assets.mjs

import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import fs from "node:fs/promises";

const COLORS = {
  bgPrimary: "#0A0A0B",
  cream: "#F5F1EA",
  accentGreen: "#4A9D7E",
};

// Google Fonts serves TTF (satori-compatible) to non-browser user agents.
async function loadGoogleFont(family, weight) {
  const cssUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}`;
  const css = await (
    await fetch(cssUrl, { headers: { "User-Agent": "curl/8" } })
  ).text();
  const match = css.match(/src: url\((.+?)\) format\(['"]?(?:truetype|opentype)['"]?\)/);
  if (!match) throw new Error(`No TTF URL found for ${family} ${weight}`);
  return Buffer.from(await (await fetch(match[1])).arrayBuffer());
}

async function renderPng(element, width, height, fonts) {
  const svg = await satori(element, { width, height, fonts });
  return new Resvg(svg, {
    fitTo: { mode: "width", value: width },
  }).render().asPng();
}

const [spaceGrotesk, jetbrainsMono] = await Promise.all([
  loadGoogleFont("Space Grotesk", 500),
  loadGoogleFont("JetBrains Mono", 500),
]);

const fonts = [
  { name: "Space Grotesk", data: spaceGrotesk, weight: 500, style: "normal" },
  { name: "JetBrains Mono", data: jetbrainsMono, weight: 500, style: "normal" },
];

const ogCard = {
  type: "div",
  props: {
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: COLORS.bgPrimary,
    },
    children: [
      {
        type: "div",
        props: {
          style: {
            fontFamily: "Space Grotesk",
            fontSize: 76,
            color: COLORS.cream,
          },
          children: "Sriram Rajagopalan",
        },
      },
      {
        type: "div",
        props: {
          style: {
            fontFamily: "JetBrains Mono",
            fontSize: 28,
            color: COLORS.accentGreen,
            marginTop: 28,
          },
          children: "data_science.manager()",
        },
      },
    ],
  },
};

const icon = {
  type: "div",
  props: {
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: COLORS.bgPrimary,
      fontFamily: "JetBrains Mono",
      fontSize: 14,
      color: COLORS.cream,
    },
    children: "SR",
  },
};

await fs.writeFile("public/og-card.png", await renderPng(ogCard, 1200, 630, fonts));
await fs.writeFile("src/app/icon.png", await renderPng(icon, 32, 32, fonts));

console.log("Wrote public/og-card.png and src/app/icon.png");
