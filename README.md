# Bloomé — Luxury Flower Boutique (Rose Pink Edition)

A luxury flower e-commerce site built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion** — dark luxury aesthetic in **rose pink** (no gold), designed for an emotional, feminine, editorial feel.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

To build for production:

```bash
npm run build
npm run start
```

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, perks strip, occasion categories, best sellers, testimonials, about teaser |
| `/collections` | Full product grid with category filter + sort (supports `?category=` query) |
| `/product/[slug]` | Product detail — real gallery, color/wrapping/greeting options, sticky purchase bar, related products, JSON‑LD Product + Breadcrumb schema |
| `/custom-bouquet` | 8-step interactive bouquet builder with live price + preview |
| `/gallery` | Masonry gallery with fullscreen viewer |
| `/cart` | Cart, promo code (`BLOOME10` for 10% off demo), order summary, WhatsApp order |
| `/about` | Founder story, timeline, reviews |
| `/contact` | Contact form, embedded map, business info |
| `/sitemap.xml`, `/robots.txt` | Auto-generated for SEO |

## Photography — upload your own images

This brief calls for real studio photography (no illustrations), so every
image in the site is rendered by `components/ProductImage.tsx` — a thin
wrapper over `next/image` that shows an elegant soft rose-pink blur
placeholder ("Photo coming soon") until a real file exists at the expected
path. **Nothing breaks if photos are missing — the site just looks like a
placeholder until you drop images in.**

Add your photos to `public/images/...` using these exact paths (derived from
`lib/data.ts` — check that file if you rename or add products):

```
public/images/
  hero/
    hero-bouquet.jpg          # hero section, right-side bouquet photo
  about/
    atelier.jpg               # home page "Our Story" teaser
    founder-story.jpg         # about page founder/workshop photo
  categories/
    graduation.jpg, wedding.jpg, birthday.jpg, anniversary.jpg,
    money-bouquet.jpg, snack-bouquet.jpg, luxury-roses.jpg, peonies.jpg,
    sunflowers.jpg, lilies.jpg, tulips.jpg, baby-breath.jpg
  flowers/
    rose.jpg, peony.jpg, sunflower.jpg, tulip.jpg, lily.jpg, baby-breath.jpg
    # used by the Custom Bouquet Builder's flower-type selector + live preview
  products/
    <product-slug>.jpg        # main card/thumbnail image, e.g. luxury-peony-bouquet.jpg
    <product-slug>-1.jpg      # product detail gallery (4 images per product)
    <product-slug>-2.jpg
    <product-slug>-3.jpg
    <product-slug>-4.jpg
  gallery/
    gallery-1.jpg ... gallery-18.jpg   # masonry Gallery page
```

Recommended shoot direction (matches the brief): studio lighting, dark
background, soft shadows, premium wrapping (black, cream, or champagne
paper), pink flowers, rose-satin or silk ribbon — vertical/square crops
work best for the card grids, and a taller portrait crop for the hero.

## Tech notes

- **Colors**: `app/globals.css` defines the full rose-pink dark-luxury token
  system (`--bg-primary: #080808`, `--accent: #f45c9b`, etc.) — no gold
  anywhere in the design system, per the brief.
- **Fonts**: Cormorant Garamond 600 (display) + Inter (body), self-hosted via
  `@fontsource/*` (no Google Fonts CDN dependency).
- **Icons**: `lucide-react`. Brand logos (Instagram, etc.) were removed from
  recent lucide versions for trademark reasons — the footer currently uses a
  generic `Camera` icon as a stand-in; swap in real brand SVGs if you want
  literal Instagram/TikTok glyphs.
- **State**: Cart is in-memory React context (`context/CartContext.tsx`) —
  wire up persistence (localStorage, a backend, etc.) as needed.
- **SEO**: per-product metadata + Open Graph/Twitter cards, `sitemap.xml`,
  `robots.txt`, and JSON-LD `Product` + `BreadcrumbList` schema on product
  pages. Update `siteUrl` in `app/layout.tsx`, `app/sitemap.ts`,
  `app/robots.ts`, and `app/product/[slug]/page.tsx` to your real domain
  before launch.
- **Accessibility**: skip-to-content link, focus-visible outlines, ARIA
  labels on icon-only buttons, alt text on all images, `prefers-reduced-motion`
  respected. Not a full WCAG AA audit — review with a screen reader and an
  automated tool (e.g. axe) before launch.
- **Payment icons, checkout, and the contact form** are UI-only placeholders —
  no real payment gateway or backend is wired up yet.

## Structure

```
app/            routes (App Router)
components/     shared UI (Navbar, Footer, ProductCard, ProductImage, Button, ...)
context/        CartContext (global cart state)
lib/data.ts     mock product/category/testimonial data + image paths
```
