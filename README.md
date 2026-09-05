# Project Vikas — Website (v2)

Rebuild of [projectvikas.org](https://projectvikas.org).

## About

Project Vikas is a student-led nonprofit that expands access to legal
representation for underserved communities, with its current work concentrated
in rural India. Founded February 12, 2025, it operates under the fiscal
sponsorship of **Indian Friends of Atlanta**, a registered 501(c)(3).

Project Vikas does not provide legal representation directly. It raises funds
and awareness in the United States and channels support to registered,
FCRA-approved legal aid organizations in India, and runs a national student
intern and volunteer program.

## Status

Early rebuild. The organization is currently revisiting its long-term framing,
so mission language, taglines, and program descriptions in this site are
intentionally kept isolated and swappable — content lives separately from
layout so it can be revised without a redesign.

## Repository layout

| Path | Purpose |
| --- | --- |
| `src/pages/` | Routes. `index.astro` is the homepage |
| `src/layouts/Base.astro` | Document shell, meta tags, font loading |
| `src/components/` | Page sections |
| `src/content/site.ts` | **All copy and figures.** Components hold no prose |
| `src/content/jurisdictions.ts` | Jurisdiction layer — per-programme-area motifs and vocabulary |
| `src/styles/tokens.css` | Design tokens — palette, type, layout, motion |
| `src/styles/base.css` | Reset, header, record footer |
| `src/styles/hero.css` | Section 01 — "Entering an appearance" |
| `public/media/` | Image and video assets |
| `tools/serve.py` | Static server, for serving `dist/` without Node |
| `docs/` | Design brief and notes |

Design reference material (screenshots and screen recordings of reference
sites) is kept locally and excluded from version control via `.gitignore` —
it is large binary input to the design process, not site source.

## Design system

**"The Cause List"** — the site is structured as a legal record rather than a
marketing page. It enumerates, dates and cites; every figure carries a
superscript naming what it counts.

The palette is drawn from the physical materials of a courtroom — walnut, aged
paper, warm black ink, and a single brass-tan accent. Deliberately
near-monochrome: the type and the structure carry the page, not colour.

The core system is **jurisdiction-neutral**. Anything specific to one country's
legal system — vocabulary, credentials, motifs — lives in
`src/content/jurisdictions.ts`, so a second programme area is a content
addition rather than a redesign.

## Stack

[Astro](https://astro.build) with static output. Almost no JavaScript ships by
default, which suits a content-driven site.

```
npm install
npm run dev     # http://localhost:4321
npm run build   # → dist/
```

Node is installed at `~/.local/node` with symlinks in `~/.local/bin`.

### Accessibility and resilience

- The page renders complete and readable with JavaScript disabled: CSS
  defaults are the *finished* animation state, and the pre-animation
  state is applied only under the `.js` class set inline in `<head>`.
- All motion respects `prefers-reduced-motion`.
- Light and dark themes are both defined at token level.

## Deployment

Deploys to Vercel from the `main` branch.
