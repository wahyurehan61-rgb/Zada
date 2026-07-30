"use client";

import Link from "next/link";
import { useState } from "react";
import { Heart, Star, ShoppingBag } from "lucide-react";
import { Product, formatIDR } from "@/lib/data";
import ProductImage from "./ProductImage";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const [wishlisted, setWishlisted] = useState(false);
  const { addItem } = useCart();

  return (
    <div className="group relative">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden rounded-[24px] border border-white/5 bg-[color:var(--card)] transition-all duration-500 group-hover:border-[color:var(--accent-dark)]/50">
          <div className="h-full w-full transition-transform duration-700 group-hover:scale-110">
            <ProductImage src={product.image} alt={product.name} className="h-full w-full" sizes="(max-width: 768px) 50vw, 25vw" />
          </div>

          {product.badge && (
            <span className="absolute left-4 top-4 rounded-full bg-black/60 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-wider text-[color:var(--accent-highlight)] border border-[color:var(--accent-dark)]/40">
              {product.badge}
            </span>
          )}

          <button
            onClick={(e) => {
              e.preventDefault();
              setWishlisted((w) => !w);
            }}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 backdrop-blur border border-white/10 transition-colors hover:border-[color:var(--accent)]"
            aria-label="Add to wishlist"
          >
            <Heart
              size={16}
              className={wishlisted ? "fill-[color:var(--accent)] text-[color:var(--accent)]" : "text-white"}
            />
          </button>

          <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/90 to-transparent p-4 pt-10 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <button
              onClick={(e) => {
                e.preventDefault();
                addItem(product, 1);
              }}
              className="btn-shine flex w-full items-center justify-center gap-2 rounded-[14px] py-2.5 text-sm font-medium text-black"
              style={{
                backgroundImage:
                  "linear-gradient(110deg, #c23c78, #f45c9b 40%, #ffd7e8 55%, #f45c9b 70%, #c23c78)",
              }}
            >
              <ShoppingBag size={15} /> Add to Cart
            </button>
          </div>
        </div>

        <div className="mt-4 space-y-1.5">
          <p className="text-[11px] uppercase tracking-widest text-[color:var(--text-muted)]">
            {product.category}
          </p>
          <h3 className="font-display text-lg leading-snug text-white group-hover:text-[color:var(--accent-soft)] transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-1.5 text-xs text-[color:var(--text-secondary)]">
            <Star size={13} className="fill-[color:var(--accent)] text-[color:var(--accent)]" />
            <span>{product.rating}</span>
            <span className="text-[color:var(--text-muted)]">({product.reviews})</span>
          </div>
          <div className="flex items-baseline gap-2 pt-1">
            <span className="font-display text-xl text-[color:var(--accent-soft)]">
              {formatIDR(product.price)}
            </span>
            {product.compareAt && (
              <span className="text-xs text-[color:var(--text-muted)] line-through">
                {formatIDR(product.compareAt)}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
