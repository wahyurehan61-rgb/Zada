"use client";

import { Star, ChevronDown, Truck, Flower2, Timer } from "lucide-react";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import AnimatedReveal from "@/components/AnimatedReveal";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import ProductImage from "@/components/ProductImage";
import { categories, bestSellers, testimonials } from "@/lib/data";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-[color:var(--bg-primary)]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 80% 30%, rgba(244,92,155,0.14), transparent 55%), radial-gradient(circle at 10% 80%, rgba(244,92,155,0.08), transparent 50%)",
          }}
        />
        {/* floating particles */}
        {[...Array(14)].map((_, i) => (
          <span
            key={i}
            aria-hidden
            className="animate-float pointer-events-none absolute h-1 w-1 rounded-full bg-[color:var(--accent)]/60"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              animationDelay: `${i * 0.4}s`,
              opacity: 0.5,
            }}
          />
        ))}
        {/* floating petals */}
        {[...Array(8)].map((_, i) => (
          <span
            key={`petal-${i}`}
            aria-hidden
            className="animate-petal pointer-events-none absolute h-2.5 w-2 rounded-[60%_40%_60%_40%] bg-[color:var(--accent-soft)]/40"
            style={{
              left: `${(i * 47 + 10) % 100}%`,
              top: "-5%",
              animationDelay: `${i * 1.7}s`,
            }}
          />
        ))}

        <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-6 pt-24 md:grid-cols-2 md:px-10 md:pt-16">
          <AnimatedReveal>
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[color:var(--accent-soft)]">
              Handcrafted With Love
            </p>
            <h1 className="font-display text-5xl leading-[1.08] font-semibold md:text-7xl">
              Flowers That
              <br /> Speak From
              <br /> The <span className="accent-gradient-text">Heart</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[color:var(--text-secondary)]">
              Beautiful handcrafted bouquets made to celebrate love,
              gratitude, birthdays, anniversaries, and life&rsquo;s
              unforgettable moments.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/collections" size="lg">Shop Collection</Button>
              <Button href="/custom-bouquet" variant="secondary" size="lg">Custom Bouquet</Button>
            </div>
            <button className="mt-8 flex items-center gap-2 text-sm text-[color:var(--text-secondary)] hover:text-[color:var(--accent-soft)] transition-colors">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10" aria-hidden>▶</span>
              Watch Our Story
            </button>
          </AnimatedReveal>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto aspect-[3/4] w-full max-w-md"
          >
            <div className="animate-float h-full w-full">
              <ProductImage
                src="/images/hero/hero-bouquet.jpg"
                alt="Luxury pink bouquet wrapped in premium paper with a satin ribbon"
                className="aspect-[3/4] w-full rounded-[24px] shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
                priority
                sizes="(max-width: 768px) 90vw, 480px"
              />
            </div>
          </motion.div>
        </div>

        <div className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[color:var(--text-muted)]">
          Scroll To Explore
          <ChevronDown size={16} className="animate-bounce text-[color:var(--accent-soft)]" />
        </div>
      </section>

      {/* PERKS STRIP */}
      <section className="border-y border-white/5 bg-[color:var(--bg-secondary)]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 divide-y divide-white/5 px-6 sm:grid-cols-3 sm:divide-y-0 sm:divide-x md:px-10">
          {[
            { icon: Truck, title: "Free City Delivery", desc: "On orders above Rp500.000" },
            { icon: Flower2, title: "Fresh Flower Guarantee", desc: "100% freshly sourced daily" },
            { icon: Timer, title: "Same-Day Delivery", desc: "Order before 3 PM" },
          ].map((p) => (
            <div key={p.title} className="flex items-center gap-4 px-4 py-6">
              <p.icon size={22} className="text-[color:var(--accent-soft)]" aria-hidden />
              <div>
                <p className="text-sm font-medium">{p.title}</p>
                <p className="text-xs text-[color:var(--text-muted)]">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-10">
        <SectionHeading
          eyebrow="Explore Our Collection"
          title="Shop by Occasion"
          cta="View All"
          ctaHref="/collections"
        />
        <div className="mt-14 grid grid-cols-3 gap-x-4 gap-y-10 sm:grid-cols-4 md:grid-cols-6">
          {categories.map((c, i) => (
            <AnimatedReveal key={c.name} delay={i * 0.04}>
              <CategoryCard name={c.name} slug={c.slug} />
            </AnimatedReveal>
          ))}
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="bg-[color:var(--bg-secondary)] py-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <SectionHeading
            eyebrow="Best Seller"
            title="Most Loved Bouquets"
            cta="View All"
            ctaHref="/collections"
          />
          <div className="divider-line my-8" />
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {bestSellers.map((p, i) => (
              <AnimatedReveal key={p.slug} delay={i * 0.06}>
                <ProductCard product={p} />
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-10">
        <SectionHeading eyebrow="Client Words" title="Loved By Our Clients" align="center" />
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <AnimatedReveal key={t.name} delay={i * 0.08}>
              <div className="h-full rounded-[24px] border border-white/5 bg-[color:var(--card)] p-8 transition-colors hover:bg-[color:var(--card-hover)] hover:border-[color:var(--accent-dark)]/40">
                <div className="flex gap-1" aria-hidden>
                  {[...Array(t.rating)].map((_, s) => (
                    <Star key={s} size={14} className="fill-[color:var(--accent)] text-[color:var(--accent)]" />
                  ))}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-[color:var(--text-secondary)]">
                  “{t.text}”
                </p>
                <p className="mt-6 font-display text-lg text-white">{t.name}</p>
                <p className="text-xs text-[color:var(--accent-soft)]">Verified Purchase</p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="bg-[color:var(--bg-secondary)] py-24">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:px-10">
          <AnimatedReveal>
            <ProductImage
              src="/images/about/atelier.jpg"
              alt="Florist hand-tying a bouquet in the Bloomé atelier"
              className="aspect-[4/3] w-full rounded-[24px]"
            />
          </AnimatedReveal>
          <AnimatedReveal delay={0.1}>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[color:var(--accent-soft)]">
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
              Crafted By Hand,
              <br />Delivered With Heart
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-[color:var(--text-secondary)]">
              Since our first bouquet, Bloomé has been devoted to a single
              craft: arranging fresh flowers into moments people remember. Every
              stem is chosen by hand, every wrap tied with intention.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="secondary">Discover Our Story</Button>
            </div>
          </AnimatedReveal>
        </div>
      </section>
    </>
  );
}
