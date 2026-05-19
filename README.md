<p align="center">
  <img src="public/logo.svg" alt="Saukhyam Reusable Pads" width="280" />
</p>

<h3 align="center">India's First Banana Fiber Reusable Pads — Handcrafted by Rural Women</h3>

<p align="center">
  <a href="#tech-stack"><img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js" alt="Next.js 16" /></a>
  <a href="#tech-stack"><img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19" /></a>
  <a href="#tech-stack"><img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript" alt="TypeScript 5" /></a>
  <a href="#tech-stack"><img src="https://img.shields.io/badge/Framer_Motion-12-FF0055?logo=framer" alt="Framer Motion 12" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-Private-red" alt="Private" /></a>
</p>

---

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Live Preview](#live-preview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Pages & Routes](#pages--routes)
- [Design System](#design-system)
- [Data Layer](#data-layer)
- [Components Architecture](#components-architecture)
- [Styling Conventions](#styling-conventions)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## About the Project

**Saukhyam** (meaning *comfort* in Sanskrit) is a social enterprise by the Mata Amritanandamayi Math that manufactures India's only banana-fiber-based reusable menstrual pad. Founded by **Anju Bist**, the initiative has empowered **5 lakh+ women** across **20+ states** and **101 villages**, creating sustainable livelihoods for rural women while providing a 100% chemical-free, eco-friendly alternative to disposable pads.

This repository contains the **complete frontend redesign** — a premium, high-performance e-commerce website built with Next.js 16, designed to deliver:

- 🎨 **Professional, human-centric UI** inspired by CareSakhi's editorial design language
- 🛒 **Full e-commerce flow** — product catalog, cart drawer, dynamic product pages
- 🌿 **Brand-first storytelling** — impact stats, awards timeline, community programs
- 📱 **Fully responsive** — optimized for mobile, tablet, and desktop
- ⚡ **Performance-first** — Turbopack dev server, CSS Modules, zero unnecessary JS

---

## Live Preview

> 🚧 **Status:** In active development. Not yet deployed to production.

```
Local:  http://localhost:3000
```

---

## Tech Stack

| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| **Framework** | [Next.js](https://nextjs.org) (App Router) | 16.2.1 | SSR, file-based routing, Turbopack |
| **UI Library** | [React](https://react.dev) | 19.2.4 | Component architecture |
| **Language** | [TypeScript](https://typescriptlang.org) | 5.x | Type safety across the codebase |
| **Animations** | [Framer Motion](https://motion.dev) | 12.38+ | Entrance animations, scroll-triggered reveals |
| **Icons** | [Lucide React](https://lucide.dev) | 1.7+ | Consistent, tree-shakeable SVG icons |
| **Styling** | CSS Modules | — | Scoped, zero-runtime styles |
| **Fonts** | Google Fonts (Playfair Display + Inter) | — | Editorial headings + clean body text |
| **Linting** | ESLint + Next.js config | 9.x | Code quality enforcement |

### Why This Stack?

- **No Tailwind** — Vanilla CSS Modules give full control over the design system with zero runtime CSS-in-JS overhead.
- **No state management library** — React Context handles the cart; no Redux/Zustand needed at this scale.
- **No CMS** — Content stored as typed TypeScript data files for compile-time safety and instant loading.

---

## Features

### 🏠 Homepage
- **Animated Hero** — Auto-rotating editorial headlines with animated green gradient text, real avatar social proof, and stats counter
- **Hero Carousel** — Full-width 3-slide image carousel using original Saukhyam photography (auto-advance, arrows, dots)
- **Trust Bar** — Animated icon row (Leak Proof, Gentle on Skin, Chemical Free, Dries Fast)
- **Product Grid** — Featured products with hover zoom, price comparison, and "Add to Cart" actions
- **Saukhyam vs. Disposable** comparison cards
- **Impact Numbers** — CO₂ prevented, women reached, waste reduced
- **Testimonials** — Star-rated customer reviews

### 🛍️ E-Commerce
- **Product Catalog** (`/products`) — Filterable by category (Starter, Daily, Heavy, Teen, Value)
- **Dynamic Product Pages** (`/products/[slug]`) — Image galleries, feature lists, "Add to Cart"
- **Cart Drawer** — Slide-out panel with quantity controls, line totals, checkout CTA
- **Cart Page** (`/cart`) — Full cart review with item management

### 📖 Content Pages
- **Our Story** (`/about`) — Founder story, mission timeline, team grid
- **Science** (`/science`) — Banana fiber technology, health benefits, environmental impact
- **FAQ** (`/faq`) — Categorized accordion (General, Using, Washing, Compare, Organization)
- **Blog** (`/blog`) — Article cards with categories and read-time estimates
- **Contact** (`/contact`) — Contact form with embedded Google Map

### 🏆 Impact & Programs
- **Impact** (`/impact`) — Awards grid (12+ national/international), press coverage (15+ publications)
- **Programs Hub** (`/programs`) — Overview of all community programs with stats
- **Satellite Centres** (`/programs/satellite-centres`) — 25+ manufacturing centres across 20+ states
- **Buddy Program** (`/programs/buddy-program`) — Peer-to-peer menstrual health mentoring
- **Sports Women** (`/programs/sports-women`) — Athletic performance program for female athletes

### 🧩 Global
- **Sticky Navbar** — Scroll-reactive with dropdown menus, mobile slide-out panel
- **Footer** — Newsletter signup, sitemap links, social media, legal
- **Ticker Banner** — Auto-scrolling marquee with key brand messages

---

## Project Structure

```
saukhyam-website/
├── public/                      # Static assets
│   └── logo.svg                 # Official Saukhyam SVG logo
│
├── src/
│   ├── app/                     # Next.js App Router pages
│   │   ├── layout.tsx           # Root layout (fonts, metadata, providers)
│   │   ├── globals.css          # Global CSS imports
│   │   ├── page.tsx             # Homepage
│   │   ├── page.module.css      # Homepage styles
│   │   │
│   │   ├── about/               # Our Story page
│   │   ├── products/            # Product catalog
│   │   │   ├── page.tsx         # Product listing with filters
│   │   │   └── [slug]/          # Dynamic product detail pages
│   │   │       └── page.tsx
│   │   ├── cart/                # Cart review page
│   │   ├── science/             # Science & technology page
│   │   ├── faq/                 # FAQ with accordions
│   │   ├── blog/                # Blog listing
│   │   ├── contact/             # Contact form + map
│   │   ├── impact/              # Awards & press coverage
│   │   └── programs/            # Programs hub
│   │       ├── page.tsx         # Programs overview
│   │       ├── program.module.css  # Shared sub-page styles
│   │       ├── satellite-centres/
│   │       ├── buddy-program/
│   │       └── sports-women/
│   │
│   ├── components/              # Reusable UI components
│   │   ├── layout/
│   │   │   ├── Navbar/          # Sticky navigation + mobile menu
│   │   │   │   ├── Navbar.tsx
│   │   │   │   └── Navbar.module.css
│   │   │   └── Footer/          # Site footer
│   │   │       ├── Footer.tsx
│   │   │       └── Footer.module.css
│   │   ├── cart/
│   │   │   └── CartDrawer/      # Slide-out cart panel
│   │   │       ├── CartDrawer.tsx
│   │   │       └── CartDrawer.module.css
│   │   └── home/
│   │       └── HeroCarousel/    # Full-width image carousel
│   │           ├── HeroCarousel.tsx
│   │           └── HeroCarousel.module.css
│   │
│   ├── context/
│   │   └── CartContext.tsx       # Cart state provider (React Context)
│   │
│   ├── data/                    # Static typed data (no CMS)
│   │   ├── products.ts          # 9 products with full schema
│   │   └── content.ts           # Testimonials, awards, press, FAQ, team, blog
│   │
│   └── styles/                  # Design system
│       ├── variables.css        # CSS custom properties (colors, spacing, typography)
│       └── animations.css       # Reusable keyframe animations
│
├── package.json
├── tsconfig.json
├── eslint.config.mjs
├── next.config.ts
└── README.md                    ← You are here
```

---

## Getting Started

### Prerequisites

| Tool | Minimum Version |
|------|----------------|
| **Node.js** | 18.17+ (LTS recommended) |
| **npm** | 9+ (ships with Node) |
| **Git** | 2.x |

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-org/saukhyam-website.git
cd saukhyam-website

# 2. Install dependencies
npm install

# 3. Start development server (Turbopack)
npm run dev
```

The app will be running at **http://localhost:3000**.

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with Turbopack (hot reload) |
| `npm run build` | Create production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint across the codebase |

---

## Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Homepage | Hero, carousel, products, impact, testimonials |
| `/about` | Our Story | Founder story, timeline, team |
| `/products` | Product Catalog | Filterable product grid |
| `/products/[slug]` | Product Detail | Dynamic page for each product |
| `/cart` | Cart | Full cart review |
| `/science` | Science | Banana fiber technology |
| `/faq` | FAQ | Categorized accordion |
| `/blog` | Blog | Article listings |
| `/contact` | Contact | Form + Google Map |
| `/impact` | Impact | Awards grid + press coverage |
| `/impact#press` | Press Section | Scrolls to media coverage |
| `/programs` | Programs Hub | Overview of all programs |
| `/programs/satellite-centres` | Satellite Centres | Manufacturing centres across India |
| `/programs/buddy-program` | Buddy Program | Peer mentoring initiative |
| `/programs/sports-women` | Sports Women | Athletic performance program |

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
| `--color-text` | `#374151` | Body text (never pure black) |
| `--color-text-muted` | `#6b7280` | Secondary text |

### Typography

| Token | Value | Usage |
|-------|-------|-------|
| `--font-heading` | `Playfair Display` | All headings, editorial feel |
| `--font-body` | `Inter` | Body copy, UI labels |
| `--text-sm` to `--text-5xl` | Fluid scale | Responsive sizing |

### Spacing

Uses a consistent 4px-based scale via tokens: `--space-1` (4px) through `--space-20` (80px).

### Design Principles

1. **No pure black text** — All text uses `gray-600` / `gray-700` for a softer editorial feel
2. **Green + Emerald + Gold** palette — Earthy, natural, premium
3. **Typography-first** — Headlines drive the design, not stock imagery
4. **Real photography** — Sourced from the original saukhyampads.org
5. **Micro-animations** — Framer Motion for entrance reveals, hover effects

---

## Data Layer

All content is stored as **typed TypeScript exports** in `src/data/`:

### `products.ts`

```typescript
interface Product {
  id: string;
  slug: string;
  name: string;
  nameHi: string;          // Hindi translation
  price: number;
  comparePrice?: number;    // Strikethrough price
  description: string;
  descriptionHi: string;
  category: 'starter' | 'daily' | 'heavy' | 'teen' | 'value';
  images: string[];
  features: string[];
  includes: string[];
  badge?: string;           // e.g., "Best for Beginners"
  isPopular?: boolean;
  isNew?: boolean;
}
```

**9 products** with real images from saukhyampads.org CDN.

### `content.ts`

| Export | Type | Count | Description |
|--------|------|-------|-------------|
| `testimonials` | `Testimonial[]` | 7 | Customer reviews with Hindi translations |
| `awards` | `Award[]` | 10 | National/international recognitions (2016–2025) |
| `pressItems` | `PressItem[]` | 15 | Media coverage from YourStory, NDTV, BBC, etc. |
| `faqItems` | `FAQItem[]` | 12 | Categorized Q&A |
| `teamMembers` | `TeamMember[]` | 1 | Founder profile |
| `blogPosts` | `BlogPost[]` | 3 | Blog articles |

---

## Components Architecture

```
┌─────────────────────────────────────────┐
│  RootLayout (layout.tsx)                │
│  ┌─────────────────────────────────┐    │
│  │  CartProvider (Context)          │    │
│  │  ┌───────────────────────────┐   │    │
│  │  │  Navbar                   │   │    │
│  │  │  └── Dropdowns (Impact,   │   │    │
│  │  │      Programs)            │   │    │
│  │  ├───────────────────────────┤   │    │
│  │  │  Page Content             │   │    │
│  │  │  └── (Route-specific)     │   │    │
│  │  ├───────────────────────────┤   │    │
│  │  │  Footer                   │   │    │
│  │  ├───────────────────────────┤   │    │
│  │  │  CartDrawer (overlay)     │   │    │
│  │  └───────────────────────────┘   │    │
│  └─────────────────────────────────┘    │
└─────────────────────────────────────────┘
```

### Key Components

| Component | Location | Purpose |
|-----------|----------|---------|
| `Navbar` | `components/layout/Navbar/` | Sticky top nav, desktop dropdowns, mobile slide-out |
| `Footer` | `components/layout/Footer/` | Sitemap, newsletter, social links |
| `CartDrawer` | `components/cart/CartDrawer/` | Slide-out cart with quantity controls |
| `HeroCarousel` | `components/home/HeroCarousel/` | 3-slide image carousel with auto-advance |
| `CartContext` | `context/CartContext.tsx` | Global cart state (add, remove, update qty) |

---

## Styling Conventions

### Rules

1. **CSS Modules only** — Every component has a co-located `.module.css` file
2. **No inline styles** — Except dynamic values (e.g., `style={{ transform }}`)
3. **BEM-inspired naming** — `.heroTitle`, `.heroDesc`, `.heroCTAs` (flat hierarchy)
4. **Design tokens first** — Always use `var(--space-X)`, `var(--green-X)`, etc.
5. **Mobile-first responsive** — Breakpoints at `640px`, `768px`, `1024px`

### File Naming

```
ComponentName/
├── ComponentName.tsx          # React component
└── ComponentName.module.css   # Scoped styles
```

For page-level styles:
```
app/page-name/
├── page.tsx
└── page.module.css
```

---

## Environment Variables

Currently no environment variables are required. Future integrations will need:

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase API URL | For auth/checkout |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase public key | For auth/checkout |
| `NEXT_PUBLIC_RAZORPAY_KEY` | Payment gateway key | For payments |
| `NEXT_PUBLIC_GA_ID` | Google Analytics ID | For analytics |

---

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

```bash
# Build for production
npm run build

# The output is in .next/
# Serve with Node.js
npm run start
```

The build requires **Node.js 18.17+** and produces a server-rendered application.

---

## Roadmap

### ✅ Completed
- [x] Project scaffolding with Next.js 16 + TypeScript
- [x] Design system (CSS variables, animations, typography)
- [x] Navbar with dropdown menus + mobile responsive
- [x] Homepage — hero section, product grid, comparison, impact, testimonials
- [x] Hero carousel with original Saukhyam photography
- [x] Product catalog with category filters
- [x] Dynamic product detail pages
- [x] Shopping cart (context + drawer + full page)
- [x] Footer with sitemap and newsletter
- [x] About page with founder story + timeline
- [x] Science page with banana fiber technology
- [x] FAQ page with categorized accordions
- [x] Blog listing page
- [x] Contact page with form + map
- [x] Impact page — awards + press coverage
- [x] Programs hub + 3 sub-pages (Satellite, Buddy, Sports)
- [x] Official SVG logo integration
- [x] Ticker banner with scrolling messages

### 🔲 Planned
- [ ] Hindi/English language toggle (`next-intl`)
- [ ] Supabase backend — user auth, order management
- [ ] Razorpay payment gateway integration
- [ ] Checkout flow (address → payment → confirmation)
- [ ] Order tracking & history
- [ ] Product search with autocomplete
- [ ] Image optimization (next/image for all product images)
- [ ] SEO meta tags per page (`generateMetadata`)
- [ ] Blog detail pages (`/blog/[slug]`)
- [ ] Google Analytics integration
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] PWA support (service worker, offline)
- [ ] Unit & integration tests (Jest + React Testing Library)
- [ ] CI/CD pipeline with GitHub Actions

---

## Contributing

This is currently a **private project**. If you're part of the team:

1. Create a feature branch from `main`
2. Follow the [styling conventions](#styling-conventions)
3. Ensure `npm run lint` passes with no errors
4. Test on mobile, tablet, and desktop
5. Create a pull request with screenshots of visual changes

---

## License

This project is **proprietary** and owned by **Ayurarogya Saukhyam Foundation** (Section 8 Company under Mata Amritanandamayi Math). All rights reserved.

---

<p align="center">
  <sub>Built with 💚 for the women of India</sub>
</p>
