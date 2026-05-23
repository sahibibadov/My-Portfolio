# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager: **pnpm** (pnpm-lock.yaml present).

```bash
pnpm install        # install deps
pnpm dev            # next dev (Turbopack-capable via Next 16)
pnpm build          # next build (production)
pnpm start          # next start (serve the production build)
pnpm lint           # next lint (next/core-web-vitals only)
```

No test runner is configured.

## Required env

`.env.example` lists Supabase vars, but no Supabase code exists. The only env actually consumed is:

- `RESEND_API_KEY` — read by the `sendEmail` server action in `src/utils/actions/actions.tsx`. The contact form silently fails without it.

`sendEmail` uses sender `onboarding@resend.dev` and hardcoded recipient `bdvshb@gmail.com` — swap both before any production use.

## Stack

- Next.js 16 App Router + React 19 + TypeScript 6 (strict)
- Tailwind CSS **v4** (PostCSS plugin `@tailwindcss/postcss`)
- shadcn/ui (style: `new-york`, base color: `slate`, RSC, no prefix) — see `components.json`
- Motion v12 (`motion/react`) for animation
- Lenis (`lenis/react`) for smooth scroll
- `next-view-transitions` for cross-route view transitions
- `next-themes` for dark mode (default theme: dark, `attribute="class"`)
- three / @react-three/fiber / @react-three/drei / three-globe for the 3D Earth in `/contact`
- react-hook-form + zod + @hookform/resolvers for forms
- Resend for transactional email
- sonner for toasts
- Geist Sans / Geist Mono loaded locally from `src/app/font/`

## Architecture

### Path alias

`@/*` → `./src/*` (`tsconfig.json`). Always import via `@/...`.

Note: `tsconfig.json` `include` still lists `src/components/shared/scene.jsx` and `model.jsx`, which no longer exist. Harmless but stale.

### App Router layout (`src/app/layout.tsx`)

The root layout composes a fixed provider/widget tree around every page; do not rip these out lightly:

```
ViewTransitions
  └── ThemeProvider (next-themes, defaultTheme="dark")
        └── SmoothScroll (Lenis)
              ├── BackgroundParticle (canvas stars)
              ├── FlareCursor          ← see "Custom cursor" below
              ├── Toaster (sonner)
              ├── Header (sticky, backdrop-blurs on scroll past 80px)
              │     └── Navbar
              ├── Container { children }
              ├── Footer
              └── ScrollToTop
```

Layout also sets `export const fetchCache = "force-cache"`; `src/app/page.tsx` adds `export const dynamic = "force-static"`. The site is essentially fully static — there is no API surface beyond the single Resend server action.

### Routes

- `/`            (`src/app/page.tsx`)  — Hero, Resume, Skills, Project sections
- `/about`       (`src/app/about/page.tsx`)
- `/contact`     (`src/app/contact/page.tsx` + nested `layout.tsx`)
- `manifest.ts`, `sitemap.ts`, `robots.ts` — file-based metadata routes

### Component layout

- `src/components/ui/`     — shadcn primitives only (Button, Input, Label, Textarea, Sheet, Tooltip, Sonner). Add new shadcn primitives here.
- `src/components/shared/` — feature/composite components, grouped per section (`home/`, `about/`, `contact/`, `navbar/`, `footer/`, `globe/`, `particle/`, `motion-element/`). Add page-level pieces here, not under `ui/`.

### Styling — Tailwind v4 (no `tailwind.config.ts`)

`src/styles/globals.css` is the single source of truth:

- `@import "tailwindcss"; @plugin "tailwindcss-animate";`
- `@custom-variant dark (&:is(.dark *));` — dark mode is class-driven via `next-themes`
- `@theme { ... }` block maps CSS vars (`--background`, `--primary`, etc.) to Tailwind color tokens
- `:root` + `.dark` selectors hold the actual HSL values
- A `.heading` component class and Lenis (`.lenis.*`) utility rules live here

`components.json` still points `tailwind.config` at `tailwind.config.ts`, which does not exist. If you run `npx shadcn add ...` and it complains, that mismatch is why — either create a stub config or generate components manually. Do not add a v3-style config without coordinating with the v4 theme block.

### Custom cursor

`globals.css` applies `cursor-none` to `body`. The visible cursor is drawn by `FlareCursor` (`src/components/shared/flare-cursor.tsx`) and depends on `useMousePosition` (`src/hook/useMousePosition.tsx`, note **singular** folder name `hook/`). If you remove or stub `FlareCursor`, also drop `cursor-none` or the site appears cursorless.

### Animations — two coexisting systems

1. **Variant presets** in `src/lib/motion.tsx` (`textVariant`, `fadeIn`, `slideIn`, `zoomIn`, `staggerContainer`). Plain motion variant factories.
2. **`FramerComponent`** in `src/components/shared/motion-element/framer-component.tsx` — the preferred wrapper for scroll-triggered reveals. Wraps children in `motion.div` (or `Slot` via `asChild`), uses `useInView`, accepts `direction | delay | duration | distance | blur | once`. Use this for new section reveals.

### 3D Earth (Contact page)

`src/components/shared/globe/earth.tsx` dynamically imports `./globe` with `{ ssr: false }`. The `/contact` page also dynamically imports `earth` with `ssr: false` and a `LoadingIcon` fallback. Anything touching `three` must remain client-only — never import it from a server component.

### Server actions

Single action: `sendEmail` in `src/utils/actions/actions.tsx` (`"use server"`). Validates with zod, sends via Resend. Return shape is `{ success } | { error } | { errors }` — `ContactForm` toasts on the first two. Keep that shape if you add fields.

### Data sources

- `src/constants/index.tsx` — `navlinks`, `education`, `experience`, `skills` (skills import icon components from `public/icon-static/*.tsx`).
- `src/data/projects.json`, `src/data/socials.json` — static content; edit JSON to update the projects grid or social links.

### `public/icon-static/`

These are **TSX React components**, not static assets, kept under `public/` by convention here. Imported via relative path (`../../public/icon-static/...`). Treat them like any other component when editing — they are bundled, not served as files.

### next.config

`next.config.mjs` configures `images.qualities = [50, 75, 100]` and `experimental.staleTimes` (1h dynamic + static). Add image domains here when introducing remote sources.

## Conventions worth keeping

- Class merging always via `cn()` from `@/lib/utils` (`twMerge(clsx(...))`).
- Error normalization via `getErrorMessage` from the same file.
- Server-only code lives under `src/utils/actions/` with `"use server"` at the top.
- Client components are marked explicitly (`"use client"`) — the providers, hooks, the Earth/Globe components, the contact form, and anything reading `window` are all client.
- Form validation schemas are duplicated between the server action (`actions.tsx`) and the client form (`contact-from.tsx`). If you change one, change both, or extract a shared schema.
