"use client";

import { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Star, Heart, Share2, ChevronLeft, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import ProductImage from "@/components/ProductImage";
import Button from "@/components/Button";
import AnimatedReveal from "@/components/AnimatedReveal";
import ProductCard from "@/components/ProductCard";
import { products, formatIDR } from "@/lib/data";
import { useCart } from "@/context/CartContext";

const wrappings = ["Black Wrap", "Cream Wrap", "Champagne", "Kraft Linen", "Charcoal"];

export default function ProductDetailClient({ slug }: { slug: string }) {
  const product = products.find((p) => p.slug === slug);
  const { addItem } = useCart();

  const [colorIdx, setColorIdx] = useState(0);
  const [wrapIdx, setWrapIdx] = useState(0);
  const [note, setNote] = useState("");
  const [qty, setQty] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) return notFound();

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  const handleAdd = () => {
    addItem(product, qty, note);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="mx-auto max-w-[1440px] px-6 pb-24 pt-28 md:px-10 md:pt-32">
      <Link
        href="/collections"
        className="mb-6 inline-flex items-center gap-1 text-sm text-[color:var(--text-secondary)] hover:text-[color:var(--accent-soft)]"
      >
        <ChevronLeft size={16} /> Back to Collections
      </Link>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* GALLERY */}
        <AnimatedReveal>
          <div className="relative">
            <div className="absolute right-0 top-0 z-10 flex gap-2">
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 backdrop-blur border border-white/10 hover:border-[color:var(--accent)]"
                aria-label="Add to wishlist"
              >
                <Heart size={16} />
              </button>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 backdrop-blur border border-white/10 hover:border-[color:var(--accent)]"
                aria-label="Share this product"
              >
                <Share2 size={16} />
              </button>
            </div>
            <ProductImage
              src={(product.gallery && product.gallery[activeThumb]) || product.image}
              alt={`${product.name} — view ${activeThumb + 1}`}
              className="aspect-square w-full rounded-[24px]"
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
            />
            <span className="absolute bottom-4 right-4 rounded-full bg-black/60 px-3 py-1 text-xs text-[color:var(--text-secondary)] backdrop-blur">
              {activeThumb + 1} / {product.gallery?.length ?? 1}
            </span>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3" role="tablist" aria-label="Product gallery thumbnails">
            {(product.gallery ?? [product.image]).map((src, i) => (
              <button
                key={src}
                onClick={() => setActiveThumb(i)}
                role="tab"
                aria-selected={activeThumb === i}
                aria-label={`View image ${i + 1} of ${product.name}`}
                className={`aspect-square overflow-hidden rounded-[14px] border transition-colors ${
                  activeThumb === i ? "border-[color:var(--accent)]" : "border-white/10"
                }`}
              >
                <ProductImage src={src} alt="" className="h-full w-full" sizes="120px" />
              </button>
            ))}
          </div>
        </AnimatedReveal>

        {/* INFO */}
        <AnimatedReveal delay={0.1}>
          <h1 className="font-display text-3xl md:text-5xl font-medium leading-tight">
            {product.name}
          </h1>
          <div className="mt-3 flex items-center gap-3 text-sm text-[color:var(--text-secondary)]">
            <span className="flex items-center gap-1">
              <Star size={14} className="fill-[color:var(--accent)] text-[color:var(--accent)]" />
              {product.rating} ({product.reviews} review)
            </span>
            <span className="text-[color:var(--text-muted)]">|</span>
            <span>{product.sold}+ sold</span>
          </div>

          <p className="mt-5 font-display text-3xl text-[color:var(--accent-soft)]">
            {formatIDR(product.price)}
          </p>

          <p className="mt-5 max-w-lg text-sm leading-relaxed text-[color:var(--text-secondary)]">
            {product.description}
          </p>

          {/* Colors */}
          <div className="mt-8">
            <p className="mb-3 text-xs uppercase tracking-widest text-[color:var(--text-muted)]">
              Choose Flower Colour
            </p>
            <div className="flex gap-3">
              {product.colors.map((c, i) => (
                <button
                  key={c + i}
                  onClick={() => setColorIdx(i)}
                  className={`h-10 w-10 rounded-full border-2 transition-transform ${
                    colorIdx === i ? "scale-110 border-[color:var(--accent)]" : "border-white/20"
                  }`}
                  style={{ backgroundColor: c }}
                  aria-label={`color ${i}`}
                />
              ))}
            </div>
          </div>

          {/* Wrapping */}
          <div className="mt-8">
            <p className="mb-3 text-xs uppercase tracking-widest text-[color:var(--text-muted)]">
              Choose Wrapping
            </p>
            <div className="flex flex-wrap gap-2">
              {wrappings.map((w, i) => (
                <button
                  key={w}
                  onClick={() => setWrapIdx(i)}
                  className={`rounded-full border px-4 py-2 text-xs transition-colors ${
                    wrapIdx === i
                      ? "border-[color:var(--accent)] bg-[color:var(--accent)]/10 text-[color:var(--accent-soft)]"
                      : "border-white/10 text-[color:var(--text-secondary)] hover:border-[color:var(--accent-dark)]"
                  }`}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>

          {/* Greeting card */}
          <div className="mt-8">
            <p className="mb-3 text-xs uppercase tracking-widest text-[color:var(--text-muted)]">
              Greeting Card
            </p>
            <textarea
              value={note}
              maxLength={120}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Write your greeting message..."
              rows={3}
              className="w-full rounded-[18px] border border-white/10 bg-[color:var(--card)] p-4 text-sm outline-none placeholder:text-[color:var(--text-muted)] focus:border-[color:var(--accent-dark)]"
            />
            <p className="mt-1 text-right text-[10px] text-[color:var(--text-muted)]">
              {note.length}/120
            </p>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <p className="mb-3 text-xs uppercase tracking-widest text-[color:var(--text-muted)]">
              Quantity
            </p>
            <div className="flex items-center gap-4 rounded-full border border-white/10 px-2 py-1 w-fit">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/5"
              >
                −
              </button>
              <span className="w-4 text-center text-sm">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/5"
              >
                +
              </button>
            </div>
          </div>

          {/* Guarantees */}
          <div className="mt-8 space-y-3 border-t border-white/5 pt-6">
            {[
              { icon: ShieldCheck, title: "100% Fresh Flowers", desc: "Only the finest blooms, hand-selected" },
              { icon: Truck, title: "On-Time Delivery", desc: "Arrives exactly when scheduled" },
              { icon: RotateCcw, title: "Satisfaction Guarantee", desc: "Full refund if you are not delighted" },
            ].map((g) => (
              <div key={g.title} className="flex items-center gap-3 text-sm">
                <g.icon size={18} className="text-[color:var(--accent-soft)]" />
                <div>
                  <p>{g.title}</p>
                  <p className="text-xs text-[color:var(--text-muted)]">{g.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Sticky purchase */}
          <div className="sticky bottom-4 z-20 mt-8 flex flex-col gap-3 rounded-[24px] border border-white/10 bg-black/80 p-4 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
            <p className="font-display text-2xl text-[color:var(--accent-soft)]">
              {formatIDR(product.price * qty)}
            </p>
            <div className="flex flex-1 gap-3 sm:justify-end">
              <Button variant="secondary" onClick={handleAdd} className="flex-1 sm:flex-none">
                {added ? "Added ✓" : "Add to Cart"}
              </Button>
              <Button href="/cart" className="flex-1 sm:flex-none">
                Buy Now
              </Button>
            </div>
          </div>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            className="mt-3 flex items-center justify-center gap-2 rounded-[18px] border border-white/10 py-3 text-sm text-[color:var(--text-secondary)] hover:border-[color:var(--accent-dark)] hover:text-[color:var(--accent-soft)]"
          >
            Order via WhatsApp
          </a>
        </AnimatedReveal>
      </div>

      {/* Details */}
      <AnimatedReveal className="mt-20 grid grid-cols-1 gap-6 border-t border-white/5 pt-12 md:grid-cols-3">
        <div>
          <p className="text-xs uppercase tracking-widest text-[color:var(--accent-soft)]">
            Flower Meaning
          </p>
          <p className="mt-2 text-sm text-[color:var(--text-secondary)]">{product.meaning}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-[color:var(--accent-soft)]">
            Origin
          </p>
          <p className="mt-2 text-sm text-[color:var(--text-secondary)]">{product.origin}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-[color:var(--accent-soft)]">
            Availability
          </p>
          <p className="mt-2 text-sm text-[color:var(--text-secondary)]">{product.stock}</p>
        </div>
      </AnimatedReveal>

      {/* Related */}
      {related.length > 0 && (
        <div className="mt-24">
          <h2 className="font-display text-3xl font-medium">You May Also Love</h2>
          <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
