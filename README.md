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
| `index.html` | Homepage |
| `assets/css/tokens.css` | Design tokens — palette, type, layout, motion |
| `assets/css/base.css` | Reset, header, record footer |
| `assets/css/hero.css` | Section 01 — "Entering an appearance" |
| `assets/js/hero.js` | Hero animation trigger (font-aware) |
| `assets/media/` | Image and video assets |
| `tools/serve.py` | Local preview server |
| `docs/` | Design brief and notes |

Design reference material (screenshots and screen recordings of reference
sites) is kept locally and excluded from version control via `.gitignore` —
it is large binary input to the design process, not site source.

## Stack

Static HTML, CSS and vanilla JavaScript — no build step and no
dependencies. This machine has no Node toolchain, so the site is written
to deploy directly from the repository root.

Content currently lives in the markup, with swappable copy marked by
`CONTENT SLOT` comments. If we adopt a build step later (Astro was the
brief's recommendation), that copy moves into a single content module.

### Local preview

```
python3 tools/serve.py 4321
```

Then open http://127.0.0.1:4321.

### Accessibility and resilience

- The page renders complete and readable with JavaScript disabled: CSS
  defaults are the *finished* animation state, and the pre-animation
  state is applied only under the `.js` class set inline in `<head>`.
- All motion respects `prefers-reduced-motion`.
- Light and dark themes are both defined at token level.

## Deployment

Deploys to Vercel from the `main` branch.
