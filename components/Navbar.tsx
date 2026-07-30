"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Search, Heart, ShoppingBag, User, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const links = [
  { href: "/", label: "Home" },
  { href: "/collections", label: "Collections" },
  { href: "/collections?category=Occasions", label: "Occasions" },
  { href: "/custom-bouquet", label: "Custom Bouquet" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about#reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/85 backdrop-blur-xl border-b border-white/5"
          : "bg-gradient-to-b from-black/40 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 md:px-10">
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>

        <Link href="/" className="font-display text-2xl tracking-wide accent-gradient-text">
          Bloomé
          <span className="ml-2 hidden text-[10px] uppercase tracking-[0.35em] text-[color:var(--text-muted)] align-middle md:inline">
            Flower Boutique
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm text-[color:var(--text-secondary)]">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="hover:text-[color:var(--accent-soft)] transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-white">
          <button className="hidden sm:block hover:text-[color:var(--accent-soft)] transition-colors" aria-label="Search">
            <Search size={19} />
          </button>
          <button className="hidden sm:block hover:text-[color:var(--accent-soft)] transition-colors" aria-label="Wishlist">
            <Heart size={19} />
          </button>
          <Link href="/cart" className="relative hover:text-[color:var(--accent-soft)] transition-colors" aria-label="Cart">
            <ShoppingBag size={19} />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[color:var(--accent)] text-[9px] font-semibold text-black">
                {count}
              </span>
            )}
          </Link>
          <button className="hidden sm:block hover:text-[color:var(--accent-soft)] transition-colors" aria-label="Profile">
            <User size={19} />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl md:hidden">
          <div className="flex items-center justify-between px-6 py-4">
            <span className="font-display text-2xl accent-gradient-text">Bloomé</span>
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-white">
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-6 pt-6">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-4 font-display text-2xl text-white hover:text-[color:var(--accent-soft)] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
