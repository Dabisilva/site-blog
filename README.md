# site-blog

Marketing site for an affiliate store product. Built with Next.js 16, React 19, Tailwind CSS v4, and TypeScript.

## Features

- Landing page with hero and feature sections
- Light/dark theme (system preference or manual toggle)
- Responsive layout with header and footer
- Blog route

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org) 16 (Pages Router)
- **UI:** React 19, [Tailwind CSS](https://tailwindcss.com) v4, [shadcn](https://ui.shadcn.com)-style components (Radix UI, CVA, `tailwind-merge`, `clsx`)
- **Icons:** [Lucide React](https://lucide-react.dev)
- **Language:** TypeScript 5.9

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `src/pages/` — Next.js pages (e.g. `index.tsx`, `blog.tsx`)
- `src/components/` — React components (layout, header, footer, hero-section, feature-section, ui)
- `src/styles/` — Global CSS and Tailwind
- `src/lib/` — Utilities (e.g. `cn`)

Path alias `@/*` points to `src/*`.

## Scripts

| Command    | Description              |
| ---------- | ------------------------ |
| `npm run dev`   | Start dev server (Turbopack) |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

## Deploy

You can deploy with [Vercel](https://vercel.com) or any platform that supports Next.js. See [Next.js deployment docs](https://nextjs.org/docs/pages/building-your-application/deploying).
