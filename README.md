# Zenova Landing Page

Marketing landing page for **Zenova** (by Zopper) — an agentic AI platform for Banks, NBFCs and MFIs to run insurance across sales, servicing, renewals, compliance and operations. Built for the Global Fintech Fest 2026 showcase.

## Stack

React 19 + Vite

## Getting started

```bash
npm install
npm run dev       # start dev server
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint      # oxlint
```

## Structure

- `src/components/` — one section per file (Hero, LogoStrip, HowItWorks, LiveDemo, etc.), each with its own co-located CSS.
- `src/hooks.js` — scroll-reveal and count-up animation hooks.
- `src/assets/logos/` — bank/institution logos used in the trusted-by marquee.

## Known placeholders

A few things are intentionally stubbed and marked with `PLACEHOLDER:` comments in the code — search for that string before a real launch:

- **Hero product screenshot** (`src/components/Hero.jsx`) — currently a generated image from placehold.co, an external service. Swap for a real screenshot of the Zenova console.
- **QR code** (`src/components/FinalCTA.jsx`) — a decorative SVG QR pattern, not a real scannable code. Swap for one linking to the actual live-demo audio.
- **Contact email** (`src/components/FinalCTA.jsx`, `mailto:hello@zopper.com`) — confirm this is the correct inbox before publishing.
