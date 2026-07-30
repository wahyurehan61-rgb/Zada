"use client";

import Link from "next/link";
import { Camera, Music2, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <p className="font-display text-3xl accent-gradient-text">Bloomé</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[color:var(--text-secondary)]">
              A luxury flower boutique crafting handcrafted bouquets for the
              moments that matter most.
            </p>
            <div className="mt-5 flex gap-3">
              {[Camera, Music2, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[color:var(--text-secondary)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent-soft)] transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[color:var(--accent-soft)]">
              Explore
            </p>
            <ul className="space-y-2.5 text-sm text-[color:var(--text-secondary)]">
              <li><Link href="/collections" className="hover:text-[color:var(--accent-soft)]">Collections</Link></li>
              <li><Link href="/custom-bouquet" className="hover:text-[color:var(--accent-soft)]">Custom Bouquet</Link></li>
              <li><Link href="/gallery" className="hover:text-[color:var(--accent-soft)]">Gallery</Link></li>
              <li><Link href="/about" className="hover:text-[color:var(--accent-soft)]">About Us</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[color:var(--accent-soft)]">
              Contact
            </p>
            <ul className="space-y-2.5 text-sm text-[color:var(--text-secondary)]">
              <li className="flex items-center gap-2"><Phone size={14} /> +62 812 3456 7890</li>
              <li className="flex items-center gap-2"><Mail size={14} /> hello@bloome.co</li>
              <li className="flex items-center gap-2"><MapPin size={14} /> Jakarta, Indonesia</li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[color:var(--accent-soft)]">
              Newsletter
            </p>
            <p className="mb-3 text-sm text-[color:var(--text-secondary)]">
              Private previews of new collections, first.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex overflow-hidden rounded-[14px] border border-white/10"
            >
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-[color:var(--text-muted)] outline-none"
              />
              <button className="px-4 text-sm font-medium text-[color:var(--accent-soft)] hover:text-[color:var(--accent-highlight)]">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-[color:var(--text-muted)] md:flex-row">
          <p>© {new Date().getFullYear()} Bloomé Flower Boutique. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {["QRIS", "BCA", "Mandiri", "BRI", "BNI", "Visa", "Mastercard", "Apple Pay", "Google Pay"].map(
              (p) => (
                <span
                  key={p}
                  className="rounded-md border border-white/10 px-2.5 py-1 text-[10px] text-[color:var(--text-secondary)]"
                >
                  {p}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
