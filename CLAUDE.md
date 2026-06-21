# CLAUDE.md

## Project

Public career portal for Sriram Rajagopalan, data science manager.

- Repo: `github.com/sriram1905/sriram-rajagopalan-profile`
- Live URL: `https://sriram1905.github.io/sriram-rajagopalan-profile`
- basePath / assetPrefix: `/sriram-rajagopalan-profile`
- Stack: Next.js 14 (App Router, TypeScript, Tailwind CSS, ESLint, `src/` directory), static export (`output: 'export'`), deployed via GitHub Pages official Actions flow.

## Rules

- Never invent biographical or career content. Use bracketed placeholders like `[ Like This ]` for anything not explicitly provided.
- Sentence case headings.
- No features beyond what each prompt specifies.
- Verify `next build` passes before finishing any task.

## Personal work page (/projects)

The portal does NOT show day-job project detail — that work is confidential.
The `/projects` page ("Personal work", nav label "Personal") instead features
public, non-confidential side builds. Data lives in src/lib/personal.ts
(PersonalProject schema); each project is told as a short "journey" the reader
clicks through (ProjectJourney.tsx, a client component):

- Header: large index numeral + name in the project's own accent color, a
  status line, and a live link (if public).
- Stat row, then an interactive chapter explorer: a numbered chapter rail with
  a progress line on the left (becomes a horizontal scroll strip on mobile),
  and an animated browser-framed panel on the right (icon, headline, one-to-two
  sentence body, feature tags). Tabs use role=tab / aria-selected.
- Per-project accent is passed via inline style (not a Tailwind token) so each
  project keeps its own brand color. Keep chapter bodies to a sentence or two —
  never paragraphs.

Current projects: Football Pesalaam (green #26A682, live) and Bumblebee (amber
#E0A82E, private — handled warmly, no live link). The home hero and
"where I am now" buttons link here as "PERSONAL".

## Resume

The downloadable PDF (public/resume.pdf) is Sriram's own designed Word/Pages
document, exported to PDF verbatim — it is the exact format he wants people to
download. It is NOT generated from code; it is committed as a static asset.
src/lib/resume.ts powers only the on-page HTML resume and must be kept in sync
with the PDF by hand when Sriram sends an updated document.

## Motion system

framer-motion powers all animation; every motion element is a client
component ("use client") so the static export keeps working. Rules:

- Section entrances: fade + 16px rise, 0.5s ease-out, viewport once, children
  staggered 60ms. Use Reveal / RevealItem (src/components/motion/Reveal.tsx).
- Hero: "> whoami" types at 40ms/char, rest fades in after; total intro under
  1.5s. Blinking accent-green block cursor after the tagline (CSS).
- Road: dashed path draws in over 1.6s via an SVG mask (preserves the dash
  pattern); stop badges light up border-emphasis → accent-green staggered to
  the path's arrival; the current stop's orange ring pulses twice then settles.
- Work rows: disclosure pattern (button + aria-expanded), 200ms height
  animation, rotating chevron; hover slides in a 2px accent-green left border
  and shifts bg to bg-secondary/50.
- Buttons: hover lifts 1px + brightness bump, active presses down.
- Links: accent-green underline slides in on hover (.link-underline).
- Texture: faint fixed dot grid on body (24px, rgba(31,31,35,0.4)); soft
  accent-green glow (7% opacity, large blur) behind the hero only.
- Footer: "last deployed {build date}" + slow-pulsing 6px green dot.
- prefers-reduced-motion disables everything: framer via useReducedMotion in
  each motion component, CSS animations via media query.

## Phase plan

- Phase 1: static site
- Phase 2: chat
- Phase 3: maintenance agents

## Design system (single source of truth)

Colors

- bg-primary: #0A0A0B
- bg-secondary (nav, cards): #111114
- border-default: #1F1F23 / border-emphasis: #2F2F33
- text-primary: #F5F5F4 / text-muted: #9CA3AF / text-dim: #6B7280
- accent-green: #4A9D7E (borders #1F3D2F)
- accent-orange: #D9531E (primary CTA, resume download)
- cream: #F5F1EA (secondary buttons, text #0A0A0B)

Fonts (Google Fonts via next/font)

- Heading: Space Grotesk (headings, name) — weights 400, 500, CSS var --font-heading, Tailwind class font-heading
- Mono: JetBrains Mono (labels, accents, command prompts) — weights 400, 500
- Sans: Inter (body) — weights 400, 500

Heading scale

- Hero name: 36px (28px below the sm breakpoint), weight 500
- Page titles (PageShell, not-found): 24px
- Home section titles (About, The road here, Where I am now): 18px
- Project/role title lines (work rows, resume entries): 15px

Voice and patterns

- Nav label: SRIRAM RAJAGOPALAN // PAGE_NAME, mono, accent-green, 11px, tracking 0.1em
- Section openers: > command_name style, mono, accent-green
- Tagline: data_science.manager(), mono, accent-green
- Sentence case headings. Brackets [ Like This ] for placeholders.

Buttons

- Primary: bg accent-orange, text cream
- Secondary: bg cream, text bg-primary
- Tertiary: transparent, border accent-green, text accent-green
- All: mono 11px, padding 12px 14px, tracking 0.05em
- All: visible focus ring (2px accent-green outline, 2px offset)
