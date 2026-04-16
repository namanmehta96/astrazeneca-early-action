# AstraZeneca × EDHEC — From 84% Late to Early Action

A React + Vite presentation site for the EDHEC Global MBA Industry Acceleration Project
on AstraZeneca and AI for lung cancer.

**Live:** https://Anna-Ritoper.github.io/astrazeneca-early-action/

## Stack

- React 18 + Vite
- Tailwind CSS + custom design tokens (AstraZeneca brand palette)
- Framer Motion (all animations, page transitions, staggered reveals)
- react-three-fiber / drei / three.js (hero molecular network)
- React Router (HashRouter — GitHub Pages compatible)

## Chapters

| # | Path | Chapter |
|---|------|---------|
| 00 | `/` | Hero — 3D molecular entry |
| 01 | `/hub` | The Strategy at a Glance |
| 02 | `/problem` | The world's #1 cancer killer |
| 03 | `/position` | AZ's position |
| 04 | `/blue-ocean` | Market map + ERRC + scenarios |
| 05 | `/architecture` | Four AI layers · one human signs off |
| 06 | `/numbers` | Interactive sensitivity model |
| 07 | `/gaps` | Five honest gaps |
| 08 | `/defense` | Countdown · pitch · rules · team |

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build for production
npm run preview  # preview the build locally
```

## Editing content

All copy lives in [`src/data/content.js`](src/data/content.js). Edit once, update everywhere.

## Deployment

Pushes to `main` trigger [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds and publishes to GitHub Pages.

One-time setup:

1. Repo **Settings → Pages → Source = GitHub Actions**
2. Push to `main` — workflow runs, site deploys
3. Site available at `https://<user>.github.io/astrazeneca-early-action/`

If you fork or rename the repo, update `base` in [`vite.config.js`](vite.config.js)
to match the new path.

## Notes

- Revenue figures are reasoned assumption stacks, not forecasts or commitments.
- Design tokens and palette defined in [`tailwind.config.js`](tailwind.config.js)
  and [`src/index.css`](src/index.css).
