# Bonjour Vallarta — Marketing Site (Vite + React + Tailwind v4)

Multi‑page marketing site for **Bonjour Vallarta** (language school in Puerto Vallarta) with:

- React + Vite
- TailwindCSS **v4** (installed as a Vite plugin)
- Light/Dark mode (manual toggle, no FOUC) + `react-switch`
- i18n (English / Spanish now, French-ready)
- Blog pages (demo content + optional API integration)

## Quick start

```bash
npm i
npm run dev
```

## Environment

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

- `VITE_PLATFORM_URL`: where the "Online Platform" CTA points (later `learn.` or `app.`).
- `VITE_API_BASE_URL`: optional API base for dynamic content (blog). If empty, the site uses demo posts.

## Tailwind v4 notes

Tailwind is configured via the Vite plugin in `vite.config.js`, and CSS is imported in `src/index.css`:

```css
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));
```

Theme is controlled by the `dark` class on `<html>` and persisted in `localStorage.theme`.

## Deploy to Appwrite Sites

Upload the project (or the provided `tar.gz`) and let Appwrite run:

- `npm i`
- `npm run build`

Build output: `dist/`
