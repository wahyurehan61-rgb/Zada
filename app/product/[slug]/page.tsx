import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/lib/data";
import ProductDetailClient from "./ProductDetailClient";

const siteUrl = "https://bloome.example.com";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};

  const title = `${product.name} — Bloomé`;
  const description = product.description;
  const image = product.image ?? "/images/hero/hero-bouquet.jpg";

  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}/product/${product.slug}` },
    openGraph: {
      type: "website",
      title,
      description,
      url: `${siteUrl}/product/${product.slug}`,
      images: [{ url: image, width: 1200, height: 1200, alt: product.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image ? [siteUrl + product.image] : undefined,
    sku: product.slug,
    category: product.category,
    offers: {
      "@type": "Offer",
      url: `${siteUrl}/product/${product.slug}`,
      priceCurrency: "IDR",
      price: product.price,
      availability:
        product.stock === "In Stock"
          ? "https://schema.org/InStock"
          : product.stock === "Low Stock"
          ? "https://schema.org/LimitedAvailability"
          : "https://schema.org/PreOrder",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviews,
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Collections", item: `${siteUrl}/collections` },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `${siteUrl}/product/${product.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <ProductDetailClient slug={slug} />
    </>
  );
}
