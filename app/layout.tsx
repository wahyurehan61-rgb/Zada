import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = "https://bloome.example.com";
const title = "Bloomé — Luxury Flower Boutique";
const description =
  "Beautiful handcrafted bouquets made to celebrate love, gratitude, birthdays, anniversaries, and life's unforgettable moments. Same-day delivery.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Bloomé",
  },
  description,
  keywords: [
    "luxury flowers",
    "flower delivery",
    "bouquet",
    "custom bouquet",
    "anniversary flowers",
    "birthday flowers",
    "wedding flowers",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: "Bloomé",
    images: [{ url: "/images/hero/hero-bouquet.jpg", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero/hero-bouquet.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-[color:var(--bg-primary)] text-[color:var(--text-primary)]">
        <CartProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[999] focus:rounded-full focus:bg-[color:var(--accent)] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-black"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
