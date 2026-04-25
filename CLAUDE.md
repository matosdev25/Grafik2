# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All frontend commands run from `frontend/`:

```bash
npm start        # Dev server (localhost:3000)
npm run build    # Production build → frontend/build/
npm run deploy   # Build + push to gh-pages branch (GitHub Pages)
```

Backend (Python, rarely touched):
```bash
cd backend && pip install -r requirements.txt
uvicorn server:app --reload   # Requires MONGO_URL and DB_NAME in backend/.env
```

## Architecture

Single-page React app (CRA via CRACO) deployed statically to GitHub Pages. Uses **HashRouter** — required because GH Pages can't handle client-side path routing.

### Navigation flow

The central cross-section wiring lives in `src/App.js`:

- `Navbar` receives `onNavigate(section, item)` and fires it on menu clicks.
- `handleNavigate` in `HomePage` updates state (`planesState`, `pedirState`) and calls `scrollIntoView` on section refs.
- `Planes` and `Pedir` consume the resulting props (`selectedPlan`, `selectedCategory`, `selectedTab`) to auto-highlight the correct tab/card on arrival.

Any new section that needs deep-link navigation from the Navbar must follow this same pattern: add a ref, expose a state slice, and handle the case in `handleNavigate`.

### Styling conventions

- **Background**: `#050816` (near-black dark blue) defined in `src/index.css` on `body`.
- **Accent color**: teal (`#14b8a6`, Tailwind `teal-400/500`).
- **Glassmorphism**: `bg-white/5 backdrop-blur-xl border border-white/10` is the standard card pattern.
- **Custom fonts**: `font-queering` (Queering Heavy, headings/logos) and `font-gilroy` (Gilroy Heavy, body). Fonts are loaded from `public/fonts/` via `src/index.css` `@font-face`. Use `font-queering` for all section titles and the brand name.
- **`cn()`**: Use `src/lib/utils.js` `cn()` (clsx + tailwind-merge) for conditional class composition.

### Data layer

Pricing and product data lives in `src/data/`:
- `planesData.js` — exports `planesData` with keys `combos`, `diseno`, `contenido`. Each is an array of plan objects `{ id, name, price, period, subtitle, description, popular }`.
- `pedirData.js` — order/product data consumed by `Pedir.jsx`.

To add a new plan category: add a key to `planesData`, add a tab entry in `Planes.jsx`'s `TABS` array, and add a matching dropdown entry in `Navbar.jsx`'s `DROPDOWN_DATA.planes`.

### Path alias

`@` resolves to `src/` (configured in `craco.config.js`). Prefer `@/components/Foo` over relative paths when importing from outside the current directory.

### Backend

FastAPI + MongoDB (Motor). Currently only exposes `/api/status` (health check). CORS origins are configured via `CORS_ORIGINS` env var. The backend is not connected to the frontend in production — the site runs entirely as a static frontend.
