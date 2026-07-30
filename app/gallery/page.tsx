"use client";

import { useState } from "react";
import { X } from "lucide-react";
import ProductImage from "@/components/ProductImage";
import AnimatedReveal from "@/components/AnimatedReveal";

const items = Array.from({ length: 18 }).map((_, i) => ({
  id: i,
  src: `/images/gallery/gallery-${i + 1}.jpg`,
  tall: i % 3 === 0,
}));

export default function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-[1440px] px-6 pb-24 pt-28 md:px-10 md:pt-32">
      <AnimatedReveal>
        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent-soft)]">
          Behind The Blooms
        </p>
        <h1 className="mt-3 font-display text-4xl md:text-6xl font-semibold">Gallery</h1>
        <p className="mt-4 max-w-lg text-sm text-[color:var(--text-secondary)]">
          A curated look at our arrangements, wrapping details, and studio
          craftsmanship.
        </p>
      </AnimatedReveal>

      <div className="mt-14 columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
        {items.map((it, i) => (
          <AnimatedReveal key={it.id} delay={(i % 8) * 0.03} className="break-inside-avoid">
            <button
              onClick={() => setActive(it.id)}
              className="block w-full"
              aria-label={`Open gallery image ${it.id + 1}`}
            >
              <ProductImage
                src={it.src}
                alt={`Bloomé bouquet gallery photo ${it.id + 1}`}
                className={`w-full rounded-[20px] ${it.tall ? "aspect-[3/4]" : "aspect-square"}`}
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </button>
          </AnimatedReveal>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-8 backdrop-blur"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
        >
          <button
            onClick={() => setActive(null)}
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white hover:border-[color:var(--accent)]"
            aria-label="Close image viewer"
          >
            <X size={18} />
          </button>
          <div className="w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
            <ProductImage
              src={items[active].src}
              alt={`Bloomé bouquet gallery photo ${active + 1}, enlarged`}
              className="aspect-square w-full rounded-[20px]"
            />
          </div>
        </div>
      )}
    </div>
  );
}
