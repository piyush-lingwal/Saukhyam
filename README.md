<p align="center">
  <img src="public/logo.svg" alt="Saukhyam Reusable Pads" width="280" />
</p>

<h3 align="center">India's First Banana Fiber Reusable Pads — Handcrafted by Rural Women</h3>

<p align="center">
  <a href="#tech-stack"><img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js" alt="Next.js 16" /></a>
  <a href="#tech-stack"><img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19" /></a>
  <a href="#tech-stack"><img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript" alt="TypeScript 5" /></a>
  <a href="#tech-stack"><img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss" alt="Tailwind CSS v4" /></a>
  <a href="#tech-stack"><img src="https://img.shields.io/badge/Framer_Motion-12-FF0055?logo=framer" alt="Framer Motion 12" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-Private-red" alt="Private" /></a>
</p>

---

## Table of Contents

- [About the Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Pages & Routes](#pages--routes)
- [Design System](#design-system)
- [Data Layer](#data-layer)
- [Styling Conventions](#styling-conventions)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## About the Project

**Saukhyam** (meaning *comfort* in Sanskrit) is a social enterprise by the Mata Amritanandamayi Math that manufactures India's only banana-fiber-based reusable menstrual pad. Founded by **Anju Bist**, the initiative has empowered **5 lakh+ women** across **20+ states** and **101 villages**, creating sustainable livelihoods for rural women while providing a 100% chemical-free, eco-friendly alternative to disposable pads.

This repository is the **complete frontend** — a premium, high-performance marketing and e-commerce website built with Next.js 16 App Router.

---

## Tech Stack

| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| **Framework** | [Next.js](https://nextjs.org) (App Router) | 16.2.x | SSR, file-based routing, standalone build |
| **UI Library** | [React](https://react.dev) | 19.2.4 | Component architecture |
| **Language** | [TypeScript](https://typescriptlang.org) | 5.x | Strict type safety across the codebase |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) + CSS Modules | 4.x | Utility classes + scoped component styles |
| **Animations** | [Framer Motion](https://motion.dev) | 12.x | Entrance animations, scroll-triggered reveals |
| **Icons** | [Lucide React](https://lucide.dev) + react-icons | — | SVG icon sets |
| **Fonts** | Google Fonts (Playfair Display + Inter) | — | Editorial headings + clean body text |
| **Linting** | ESLint 9 + Next.js config | 9.x | Core Web Vitals + TypeScript rules |

### Architecture decisions

- **No CMS** — Content stored as typed TypeScript data files for compile-time safety and instant loading.
- **No state management library** — React Context handles cart, wishlist, notifications, and theming.
- **Static data layer** — All blog posts, products, and program content live in `src/data/` as typed exports.

---

## Features

### Homepage
- Animated hero with auto-rotating editorial headlines, avatar social proof, and stats counter
- Full-width image carousel (auto-advance, arrows, dot indicators)
- Trust bar — animated icon row (Leak Proof, Gentle on Skin, Chemical Free, Dries Fast)
- Featured product grid with hover zoom, price comparison, and Add to Cart
- Saukhyam vs. Disposable comparison cards
- Impact numbers — CO₂ prevented, women reached, waste reduced
- Testimonials with star ratings

### E-Commerce
- **Product Catalog** (`/products`) — Filterable grid (Starter, Daily, Heavy, Teen, Value)
- **Product Detail Pages** (`/products/[slug]`) — Image galleries, feature lists, Add to Cart
- **Cart Drawer** — Slide-out panel with quantity controls and checkout CTA
- **Cart Page** (`/cart`) — Full cart review with item management
- **Dashboard** (`/dashboard`) — Admin UI mockup (analytics, products, orders, customers, notifications, settings)

### Content & Blog
- **Blog** (`/blog`, `/blog/[slug]`) — Article cards, full post view, category filters, pagination
- Blog image pipeline via `npm run blog:images` (syncs from LinkedIn/media sources)
- **Our Story** (`/about`) — Founder story, mission timeline, team grid
- **Science** (`/science`) — Banana fiber technology, health benefits, environmental impact
- **FAQ** (`/faq`) — Categorized accordion
- **Contact** (`/contact`) — Contact form with embedded Google Map
- **Testimonials** (`/testimonials`) — Extended customer reviews

### Media Hub
- **Media Hub** (`/media`) — Central landing page for all press
- **Newsroom** (`/media/newsroom`) — Publication ticker, press coverage slider, stats bar, animated counters
- **Press Releases** (`/media/press-releases`)
- **Brand Story** (`/media/brand-story`)
- **Awards** (`/media/awards`)
- **Press Kit** (`/media/press-kit`)
- **Gallery** (`/media/gallery`)

### Programs
- **Programs Hub** (`/programs`) — Overview with stats
- **CARE Program** (`/programs/care`) — CARE register, nodal, and partner sub-routes
- **HEAL Program** (`/programs/heal`)
- **REACH Program** (`/programs/reach`)
- **Buddy Program** (`/programs/buddy-program`)
- **Sports Women** (`/programs/sports-women`)
- **Satellite Centres** (`/programs/satellite-centres`)
- **States** (`/programs/states`, `/programs/states/[slug]`) — State-level program pages

### Legal & Redirects
- `/legal/terms`, `/legal/privacy`, `/legal/returns`
- Legacy URL redirects handled in `next.config.ts`

---

## Project Structure

```
saukhyam-website/
├── public/
│   ├── logo.svg
│   └── images/blog/          # img-000.jpg … (managed by blog:images script)
│
├── scripts/                  # Blog image pipeline tools
│   ├── sync-blog-images.mjs
│   ├── download-blog-images.mjs
│   ├── fetch-linkedin-images.mjs
│   ├── fetch-all-linkedin-galleries.mjs
│   ├── fix-linkedin-posts.mjs
│   └── check-blog-image-urls.mjs
│
├── src/
│   ├── app/                  # Next.js App Router pages (67 files)
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   ├── page.tsx          # Homepage
│   │   ├── about/
│   │   ├── blog/[slug]/
│   │   ├── cart/
│   │   ├── contact/
│   │   ├── dashboard/        # Admin UI (analytics, products, orders, …)
│   │   ├── faq/
│   │   ├── impact/
│   │   ├── legal/            # terms, privacy, returns
│   │   ├── media/            # newsroom, press-releases, brand-story, awards, …
│   │   ├── press/            # → redirect to /media
│   │   ├── products/[slug]/
│   │   ├── programs/         # care, heal, reach, buddy, sports-women, states/[slug]
│   │   ├── science/
│   │   └── testimonials/
│   │
│   ├── components/           # Reusable UI components (68 files)
│   │   ├── blog/             # BlogCard, BlogDetailView, BlogImage, …
│   │   ├── cart/CartDrawer/
│   │   ├── dashboard/        # Sidebar, DashboardShell, AnalyticsWidgets, …
│   │   ├── home/HeroCarousel/
│   │   ├── layout/           # Navbar, Footer, LayoutShell
│   │   ├── legal/
│   │   ├── newsroom/         # MediaHero, NewsroomShell, PressCoverageSlider, …
│   │   ├── products/
│   │   ├── products-dashboard/
│   │   └── states/           # StatePageView, FAQAccordion, AnimatedStat, …
│   │
│   ├── context/
│   │   ├── CartContext.tsx
│   │   ├── NotificationContext.tsx
│   │   ├── SiteThemeContext.tsx
│   │   ├── ThemeContext.tsx   # Dashboard theme
│   │   └── WishlistContext.tsx
│   │
│   ├── data/                 # Static typed content (no CMS)
│   │   ├── blog/             # posts.ts, linkedinPosts.ts, blogImagePool.ts, …
│   │   ├── legal/
│   │   ├── newsroom/         # pressReleases.ts, gallery.ts, stats.ts, …
│   │   ├── states/
│   │   ├── catalog.ts
│   │   ├── content.ts
│   │   ├── products.ts
│   │   └── research.ts
│   │
│   ├── hooks/
│   │   ├── useAnimatedCounter.ts
│   │   ├── useBlogCatalog.ts
│   │   ├── useDebounce.ts
│   │   └── useProductCatalog.ts
│   │
│   ├── lib/
│   │   └── blog.ts
│   │
│   ├── styles/
│   │   ├── variables.css     # CSS custom properties (colors, spacing, typography)
│   │   └── animations.css    # Reusable keyframe animations
│   │
│   └── types/
│       ├── blog.ts
│       ├── catalog.ts
│       └── statePage.ts
│
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

---

## Getting Started

### Prerequisites

| Tool | Minimum Version |
|------|----------------|
| **Node.js** | 18.17+ (LTS recommended) |
| **npm** | 9+ (ships with Node) |

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-org/saukhyam-website.git
cd saukhyam-website

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

The app runs at **http://localhost:3000**.

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Next.js dev server |
| `npm run build` | Create production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint across the codebase |
| `npm run blog:images` | Sync blog images from LinkedIn/media sources into `public/images/blog/` |

---

## Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, carousel, products, impact, testimonials |
| `/about` | Founder story, mission timeline, team |
| `/science` | Banana fiber technology and health benefits |
| `/faq` | Categorized accordion Q&A |
| `/blog` | Blog listing |
| `/blog/[slug]` | Blog post detail |
| `/contact` | Contact form + Google Map |
| `/impact` | Awards grid + press coverage |
| `/testimonials` | Extended customer testimonials |
| `/products` | Filterable product catalog |
| `/products/[slug]` | Dynamic product detail page |
| `/cart` | Full cart review |
| `/dashboard` | Admin UI (analytics, products, orders, customers, notifications, settings) |
| `/media` | Media hub landing |
| `/media/newsroom` | Newsroom with publication ticker and stats |
| `/media/press-releases` | Press releases |
| `/media/brand-story` | Brand story |
| `/media/awards` | Awards & recognition |
| `/media/press-kit` | Downloadable press kit |
| `/media/gallery` | Photo gallery |
| `/programs` | Programs hub overview |
| `/programs/care` | CARE program (+ register, nodal, partner sub-routes) |
| `/programs/heal` | HEAL program |
| `/programs/reach` | REACH program |
| `/programs/buddy-program` | Buddy mentoring program |
| `/programs/sports-women` | Sports women program |
| `/programs/satellite-centres` | Satellite manufacturing centres |
| `/programs/states` | State-level program index |
| `/programs/states/[slug]` | Individual state program page |
| `/legal/terms` | Terms of Service |
| `/legal/privacy` | Privacy Policy |
| `/legal/returns` | Returns Policy |

---

## Design System

The design system lives in `src/styles/` and is built on CSS Custom Properties.

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--green-600` | `#16a34a` | Primary brand color |
| `--green-800` | `#166534` | Dark accents, hero backgrounds |
| `--green-50` | `#f0fdf4` | Subtle backgrounds |
| `--sand-50` to `--sand-300` | Warm neutrals | Body backgrounds, cards |
| `--color-text` | `#374151` | Body text |
| `--color-text-muted` | `#6b7280` | Secondary text |

### Typography

| Token | Value | Usage |
|-------|-------|-------|
| `--font-heading` | `Playfair Display` | All headings, editorial feel |
| `--font-body` | `Inter` | Body copy, UI labels |

### Design Principles

1. **No pure black text** — All text uses `gray-600` / `gray-700` for a softer editorial feel
2. **Green + Emerald + Gold** palette — Earthy, natural, premium
3. **Typography-first** — Headlines drive the design, not stock imagery
4. **Micro-animations** — Framer Motion for entrance reveals, hover effects

---

## Data Layer

All content is stored as **typed TypeScript exports** in `src/data/` — no CMS or external API required at build time.

| File / Directory | Contents |
|-----------------|----------|
| `data/products.ts` | Product catalog with full schema |
| `data/content.ts` | Testimonials, awards, press items, FAQ, team |
| `data/catalog.ts` | Shared catalog types and helpers |
| `data/research.ts` | Science / research references |
| `data/blog/` | Blog posts, LinkedIn sourced posts, image pool |
| `data/newsroom/` | Press releases, gallery, stats, brand story, press kit |
| `data/states/` | State-level program data and builder helpers |
| `data/legal/` | Legal page sections (terms, privacy, returns) |

---

## Styling Conventions

1. **CSS Modules + Tailwind v4** — Component styles use co-located `.module.css`; utility classes via Tailwind
2. **No inline styles** — Except for dynamic computed values (e.g., `style={{ transform }}`)
3. **Design tokens first** — Use `var(--space-X)`, `var(--green-X)`, etc.
4. **Mobile-first responsive** — Breakpoints at `640px`, `768px`, `1024px`

---

## Environment Variables

No environment variables are required to run the development server. Future integrations will need:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase API URL (auth/checkout) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase public key |
| `NEXT_PUBLIC_RAZORPAY_KEY` | Payment gateway |
| `NEXT_PUBLIC_GA_ID` | Google Analytics |

---

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Self-hosted (standalone)

The build is configured with `output: "standalone"` in `next.config.ts`.

```bash
npm run build
npm run start
```

Requires **Node.js 18.17+**.

---

## Contributing

This is a **private project**. If you're part of the team:

1. Create a feature branch from `main`
2. Follow the [styling conventions](#styling-conventions)
3. Ensure `npm run lint` passes with no errors
4. Test on mobile, tablet, and desktop
5. Open a pull request with screenshots of any visual changes

---

## License

This project is **proprietary** and owned by **Ayurarogya Saukhyam Foundation** (Section 8 Company under Mata Amritanandamayi Math). All rights reserved.

---

<p align="center">
  <sub>Built with care for the women of India</sub>
</p>
