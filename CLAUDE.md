# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> Note: There is a stale `CLAUDE.md` in the parent directory (`/Users/jjackson/development/CLAUDE.md`) describing an old Vue 2 LMS app ("twa-api", courses, LTI, Stripe). It does **not** apply to this repo. This file is the authoritative guidance for `jayjackson.dev`.

## What This Is

Jay Jackson's personal website (`jayjackson.dev`) — a static portfolio + blog. It began as a Nuxt 3 (Vue) app and was migrated to **Astro 5 with Vue islands**; only interactive components ship JavaScript, everything else is static HTML.

## Commands

```bash
npm install      # Install dependencies
npm run dev      # Dev server at localhost:4321
npm run build    # Static build to ./dist
npm run preview  # Preview the production build locally
```

There is no lint or test script configured.

## Tech Stack

- **Astro 5** with `output: 'static'` — no server runtime, no backend, no database, no auth
- **Vue 3** for interactive "islands" only (`@astrojs/vue`)
- **Tailwind CSS** + `@tailwindcss/typography`, with a dark mode that uses a Matrix-green aesthetic
- **Content Collections** for the blog (typed Markdown via Zod), plus MDX, RSS, and sitemap integrations

## Architecture

### Astro islands
Pages are `.astro` (static). Interactivity is isolated to Vue components hydrated with client directives:
- `client:only="vue"` — Matrix terminal (needs browser APIs / canvas), renders client-side only
- `client:load` — `ProjectsList`, `BlogList`, `ContactForm`

Data flows **from Astro to Vue via props at build time**. Example: `src/pages/blog/index.astro` calls `getCollection('blog')`, sorts, and passes `posts` into `<BlogList posts={...} client:load />`. Keep data fetching in the `.astro` frontmatter; Vue components are presentation/interaction only.

### Routes (`src/pages/`)
| Route | File | Notes |
|-------|------|-------|
| `/` | `index.astro` | Matrix terminal landing (Vue, client-only); minimal bespoke `<head>`, does **not** use `Layout.astro` |
| `/home` | `home.astro` | Actual homepage / intro |
| `/about` | `about.astro` | Story, experience, interests |
| `/projects` | `projects.astro` | Renders `ProjectsList` |
| `/blog` | `blog/index.astro` | Renders `BlogList` with sorted, non-draft posts |
| `/blog/<slug>` | `blog/[...slug].astro` | Individual post pages |
| `/contact` | `contact.astro` | Renders `ContactForm` |
| `/resume` | `resume.astro` | Resume |
| `/rss.xml` | `rss.xml.js` | RSS feed |
| `/sitemap-index.xml` | generated | via `@astrojs/sitemap` |

### Components (`src/components/`)
- `MatrixTerminal.vue` — typewriter "Wake up, Neo…" intro that transitions into animated canvas Matrix rain
- `BlogList.vue` — receives `posts` prop; client-side category filter + search
- `ProjectsList.vue` — **projects are a hardcoded array inside the component** (not a content collection); category filter
- `ContactForm.vue` — **the submit is currently a simulated no-op** (`setTimeout`, no real backend). Wiring it to a real endpoint is a known TODO.
- `ThemeToggle.astro` — dark/light toggle

### Layout & SEO
`src/layouts/Layout.astro` is the shared shell for all pages except `/`. It centralizes canonical URL, OpenGraph/Twitter meta, per-page OG image, optional `article:published_time`, the RSS `<link>`, and an accessibility skip-link. Props: `title`, `description`, `showNav`, `image`, `type`, `publishedTime`. When adding a page, render it through `Layout` and pass a `title`/`description`.

## Blog Content

Posts are Markdown in `src/content/blog/`. The schema is enforced in `src/content/config.ts`:

```yaml
---
title: "Post Title"
description: "Brief description"
pubDate: 2024-03-01
category: "Technical"   # one of: Technical, Poetry, Personal, Career, Accessibility
tags: ["tag1", "tag2"]
draft: false            # optional, defaults false; drafts are filtered out of the index
readTime: 5             # optional
---
```

`category` is a strict enum — adding a new category means updating the Zod enum in `config.ts` **and** the `categories` arrays in `BlogList.vue` (and the blog index filter logic).

## Deployment

- `astro.config.mjs` sets `site: 'https://jayjackson.dev'`.
- GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys to **Cloudflare Pages** (project `jayjacksondev`) on push to `main` (or manual `workflow_dispatch`), using `CLOUDFLARE_API_TOKEN` / `CLOUDFLARE_ACCOUNT_ID` secrets.
