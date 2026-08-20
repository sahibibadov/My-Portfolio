# Sahib Ibadov — Portfolio

Personal portfolio of Sahib Ibadov, iOS & Frontend Developer.

**Live:** [sahibibadov.com](https://sahibibadov.com)

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router) · React 19 · TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) · [shadcn/ui](https://ui.shadcn.com/)
- [Motion](https://motion.dev/) (v12) — animations
- [Lenis](https://lenis.darkroom.engineering/) — smooth scrolling
- [next-view-transitions](https://github.com/shuding/next-view-transitions) — cross-route view transitions
- [next-themes](https://github.com/pacocoursey/next-themes) — dark / light mode
- [three.js](https://threejs.org/) · @react-three/fiber · @react-three/drei · three-globe — 3D Earth on the contact page
- react-hook-form · zod — form handling and validation
- [Resend](https://resend.com/) — contact form email delivery
- sonner · lottie-react

## Features

- Fully static output — every route is force-cached / force-static
- Dark mode by default, class-driven theme switching
- Custom flare cursor on fine-pointer devices
- Scroll-triggered reveal animations that respect `prefers-reduced-motion`
- Interactive auto-rotating 3D globe on the contact page
- Contact form powered by a server action + Resend
- SEO: JSON-LD structured data (Person, WebSite, breadcrumbs), Open Graph / Twitter images, sitemap, robots, web manifest

## Getting Started

Requirements: **Node 22.x** and **pnpm**.

```bash
pnpm install
pnpm dev
```

The contact form needs a [Resend](https://resend.com/) API key in `.env.local`:

```
RESEND_API_KEY=your_key
```

The site runs fine without it — only sending email from the contact form fails. The recipient address is configured in `src/utils/actions/actions.tsx`.

### Scripts

| Command      | Description                      |
| ------------ | -------------------------------- |
| `pnpm dev`   | Start the dev server             |
| `pnpm build` | Production build                 |
| `pnpm start` | Serve the production build       |
| `pnpm lint`  | ESLint (flat config, eslint CLI) |

## Deployment

Deployed on [Vercel](https://vercel.com/).

## Screenshots

### Dark mode

![home-dark](https://github.com/sahibibadov/Nextjs14-blog-website/assets/117587344/0422f93e-4198-4b7a-b2b0-1831e9470638)
![about-dark](https://github.com/sahibibadov/Nextjs14-blog-website/assets/117587344/064df723-36f3-4e52-8c5c-3efce3f78003)
![contact-dark](https://github.com/sahibibadov/Nextjs14-blog-website/assets/117587344/b73a3a6a-5c0a-4bf9-b298-f0073c25b6f7)

### Light mode

![home](https://github.com/sahibibadov/Nextjs14-blog-website/assets/117587344/09552c69-b6f2-4bd8-b59a-ff18a34fd45f)
![about](https://github.com/sahibibadov/Nextjs14-blog-website/assets/117587344/cd80b6ee-2351-4b5a-b0e9-1a47e5d13b05)
![contact](https://github.com/sahibibadov/Nextjs14-blog-website/assets/117587344/bd725f0b-5428-4dd8-bf32-dfa7d84f12bd)
