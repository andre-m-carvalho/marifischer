# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server on localhost:3000
npm run build    # production build
npm run lint     # run ESLint
```

No test suite is configured.

## Architecture

This is a Next.js 16 (App Router) website for Dr. Mariana Fischer, an ENT specialist in São Paulo. It is a content-heavy, SEO-focused site with no backend or database.

**Key directories:**
- `app/` — App Router pages. Each specialty has its own route (e.g. `/rinite-alergica-sao-paulo/`). All pages export `metadata` for SEO.
- `components/` — Shared UI: `Header`, `Footer`, `CTAWhatsApp`, `CTAAgendamento`, `PaginaServico`, `AvisoLegal`.
- `content/blog/` — MDX files with frontmatter (`titulo`, `resumo`, `data`, `dataISO`).
- `lib/blog.ts` — `getAllPosts()` and `getPost(slug)` read and parse MDX files at build time via `gray-matter`.

**Styling:** Tailwind CSS v4 (`@import "tailwindcss"` in `globals.css`) plus inline styles throughout. CSS variables for the color palette (`--sage`, `--gold`, etc.) and fonts (`--font-serif` = Playfair Display, `--font-sans` = Lato) are defined in `globals.css`. Utility classes like `.link-sage`, `.link-gold`, `.card-especialidade` are also in `globals.css`.

**Service pages** all use the `PaginaServico` component which provides a standard hero + content + WhatsApp CTA layout.

**Blog posts** use `next-mdx-remote` for rendering MDX; slugs map to `content/blog/<slug>.mdx`.

**Fonts** are loaded via `next/font/google` in `app/layout.tsx` and exposed as CSS variables `--font-playfair` and `--font-lato`.
