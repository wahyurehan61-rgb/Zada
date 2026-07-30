"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SlidersHorizontal } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import AnimatedReveal from "@/components/AnimatedReveal";
import { products, categories } from "@/lib/data";

function CollectionsContent() {
  const params = useSearchParams();
  const initial = params.get("category") || "All";
  const [active, setActive] = useState(initial);
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(() => {
    let list =
      active === "All" ? products : products.filter((p) => p.category === active);
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [active, sort]);

  const tabs = ["All", ...categories.map((c) => c.name)];

  return (
    <div className="mx-auto max-w-[1440px] px-6 pb-24 pt-32 md:px-10 md:pt-40">
      <AnimatedReveal>
        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent-soft)]">
          The Full Boutique
        </p>
        <h1 className="mt-3 font-display text-4xl md:text-6xl font-medium">
          Collections
        </h1>
      </AnimatedReveal>

      <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-wide transition-colors ${
                active === t
                  ? "border-[color:var(--accent)] bg-[color:var(--accent)] text-black"
                  : "border-white/10 text-[color:var(--text-secondary)] hover:border-[color:var(--accent-dark)]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 text-sm text-[color:var(--text-secondary)]">
          <SlidersHorizontal size={15} />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-[12px] border border-white/10 bg-[color:var(--card)] px-3 py-2 text-sm outline-none"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      <p className="mt-6 text-xs text-[color:var(--text-muted)]">
        {filtered.length} bouquet{filtered.length !== 1 ? "s" : ""}
      </p>

      <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((p, i) => (
          <AnimatedReveal key={p.slug} delay={(i % 8) * 0.04}>
            <ProductCard product={p} />
          </AnimatedReveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-20 text-center text-sm text-[color:var(--text-muted)]">
          No bouquets found in this category yet.
        </p>
      )}
    </div>
  );
}

export default function CollectionsPage() {
  return (
    <Suspense fallback={null}>
      <CollectionsContent />
    </Suspense>
  );
}
