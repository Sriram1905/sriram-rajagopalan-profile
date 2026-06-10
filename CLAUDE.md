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

- Serif: Fraunces (headings, name) — weights 400, 500
- Mono: JetBrains Mono (labels, accents, command prompts) — weights 400, 500
- Sans: Inter (body) — weights 400, 500

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
