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

## Work page structure

The Work page is a charter view, not a card grid. Three sections, each a mono
accent-green header (10px, 0.1em tracking, bottom border): GROWTH SCIENCE and
RISK SCIENCE (each with a charter statement, then terminal-ledger workstream
rows), then EARLIER HANDS-ON WORK (compact, rows only). Rows are not links —
no case-study pages this phase. Each row: heading-font title (15px) + mono dim
year, mono accent-green "problem → built → outcome" line (11px), one-line
muted detail (12px). Data lives in src/lib/projects.ts (Charter/Workstream
schema).

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
