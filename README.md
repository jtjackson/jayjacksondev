# jayjackson.dev

My personal website - built with Astro 5, showcasing my work and story.

## Tech Stack

- **Framework**: [Astro 5](https://astro.build/) with static output
- **UI Components**: [Vue 3](https://vuejs.org/) islands for interactivity
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with Typography plugin
- **Content**: Markdown with [MDX](https://mdxjs.com/) support via Content Collections
- **SEO**: Sitemap, RSS feed, OpenGraph/Twitter meta tags

## Commands

```bash
npm install      # Install dependencies
npm run dev      # Start dev server at localhost:4321
npm run build    # Build for production to ./dist
npm run preview  # Preview production build locally
```

## Site Structure

```
/                    # Matrix terminal landing page
/home                # Homepage with navigation
/about               # My story, experience, interests
/projects            # Project showcase with filtering
/blog                # Blog posts with search/categories
/contact             # Contact form and social links
/resume              # Professional resume
/rss.xml             # RSS feed
/sitemap-index.xml   # Sitemap
```

## Project Structure

```
src/
├── components/      # Vue islands (BlogList, ProjectsList, ContactForm)
├── content/
│   └── blog/        # Markdown blog posts
├── layouts/         # Astro layouts
├── pages/           # Astro pages (routes)
└── styles/          # Global styles
public/              # Static assets
```

## Blog

Blog posts are written in Markdown and stored in `src/content/blog/`. Each post requires frontmatter:

```yaml
---
title: "Post Title"
description: "Brief description"
pubDate: 2024-03-01
category: "Technical"  # Technical, Poetry, Personal, Career, Accessibility
tags: ["tag1", "tag2"]
readTime: 5
---
```

## Design

- **Light/Dark mode**: Toggle with system preference detection
- **Matrix theme**: Green terminal aesthetic in dark mode
- **Responsive**: Mobile-first design
- **Accessible**: WCAG compliant, keyboard navigation, screen reader support
