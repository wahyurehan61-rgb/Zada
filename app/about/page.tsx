"use client";

import { Star } from "lucide-react";
import ProductImage from "@/components/ProductImage";
import AnimatedReveal from "@/components/AnimatedReveal";
import SectionHeading from "@/components/SectionHeading";
import { testimonials } from "@/lib/data";

const timeline = [
  { year: "2016", title: "The First Bouquet", text: "Bloomé began in a small studio, hand-tying arrangements for a handful of loyal clients." },
  { year: "2019", title: "The Boutique Opens", text: "Our first flagship boutique opened its doors, bringing the atelier experience to walk-in guests." },
  { year: "2022", title: "Custom Bouquet Studio", text: "We launched a bespoke design service, letting clients build bouquets stem by stem." },
  { year: "2025", title: "A Digital Atelier", text: "Bloomé online brings the boutique experience to every city we deliver to." },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1440px] px-6 pb-24 pt-28 md:px-10 md:pt-32">
      <AnimatedReveal>
        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent-soft)]">
          Our Story
        </p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl md:text-6xl font-medium leading-tight">
          Craftsmanship, Patience, and a Love for Flowers
        </h1>
      </AnimatedReveal>

      <div className="mt-16 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <AnimatedReveal>
          <ProductImage
            src="/images/about/founder-story.jpg"
            alt="Bloomé founder arranging a bouquet in the studio"
            className="aspect-[4/3] w-full rounded-[24px]"
          />
        </AnimatedReveal>
        <AnimatedReveal delay={0.1}>
          <p className="text-sm leading-relaxed text-[color:var(--text-secondary)]">
            Bloomé was founded on a simple belief: that a bouquet should feel
            like a gift in itself, not an afterthought. Every arrangement
            leaving our studio is hand-tied by a florist who has trained for
            years in structure, colour balance, and the quiet art of
            wrapping. We work with a small circle of growers who share our
            standard for freshness, and we never let a bouquet leave our
            hands unless we would send it to someone we love.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[color:var(--text-secondary)]">
            Today, that same care travels with every delivery — from a single
            rose to a full bridal installation.
          </p>
        </AnimatedReveal>
      </div>

      {/* Timeline */}
      <div className="mt-28">
        <SectionHeading eyebrow="Milestones" title="Our Journey" />
        <div className="mt-14 space-y-10 border-l border-white/10 pl-8">
          {timeline.map((t, i) => (
            <AnimatedReveal key={t.year} delay={i * 0.08}>
              <div className="relative">
                <span className="absolute -left-[38px] top-1 h-3 w-3 rounded-full bg-[color:var(--accent)]" />
                <p className="text-xs uppercase tracking-widest text-[color:var(--accent-soft)]">
                  {t.year}
                </p>
                <h3 className="mt-1 font-display text-2xl">{t.title}</h3>
                <p className="mt-2 max-w-lg text-sm text-[color:var(--text-secondary)]">
                  {t.text}
                </p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div id="reviews" className="mt-28 scroll-mt-32">
        <SectionHeading eyebrow="Client Words" title="Loved By Our Clients" />
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <AnimatedReveal key={t.name} delay={i * 0.08}>
              <div className="h-full rounded-[24px] border border-white/5 bg-[color:var(--card)] p-8">
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, s) => (
                    <Star key={s} size={14} className="fill-[color:var(--accent)] text-[color:var(--accent)]" />
                  ))}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-[color:var(--text-secondary)]">
                  “{t.text}”
                </p>
                <p className="mt-6 font-display text-lg">{t.name}</p>
                <p className="text-xs text-[color:var(--accent-soft)]">Verified Purchase</p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
