"use client";

import Link from "next/link";
import ProductImage from "./ProductImage";

export default function CategoryCard({
  name,
  slug,
}: {
  name: string;
  slug: string;
}) {
  return (
    <Link
      href={`/collections?category=${encodeURIComponent(name)}`}
      className="group flex flex-col items-center gap-3 text-center"
    >
      <div className="relative h-24 w-24 md:h-28 md:w-28 overflow-hidden rounded-full border border-[color:var(--accent-dark)]/40 shadow-[0_0_0_1px_rgba(244,92,155,0.05)] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[color:var(--accent)] group-hover:shadow-[0_10px_40px_rgba(244,92,155,0.25)]">
        <div className="h-full w-full transition-transform duration-700 group-hover:scale-110">
          <ProductImage
            src={`/images/categories/${slug}.jpg`}
            alt={name}
            className="h-full w-full rounded-full"
            sizes="112px"
          />
        </div>
      </div>
      <span className="text-sm text-[color:var(--text-secondary)] group-hover:text-[color:var(--accent-soft)] transition-colors">
        {name}
      </span>
    </Link>
  );
}
