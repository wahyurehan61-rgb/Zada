"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Button from "@/components/Button";
import AnimatedReveal from "@/components/AnimatedReveal";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-[1440px] px-6 pb-24 pt-28 md:px-10 md:pt-32">
      <AnimatedReveal>
        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent-soft)]">
          Get In Touch
        </p>
        <h1 className="mt-3 font-display text-4xl md:text-6xl font-medium">Contact Us</h1>
      </AnimatedReveal>

      <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <AnimatedReveal>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="space-y-4 rounded-[24px] border border-white/10 p-8"
          >
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-[color:var(--text-muted)]">
                Name
              </label>
              <input
                required
                className="w-full rounded-[14px] border border-white/10 bg-transparent px-4 py-3 text-sm outline-none focus:border-[color:var(--accent-dark)]"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-[color:var(--text-muted)]">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full rounded-[14px] border border-white/10 bg-transparent px-4 py-3 text-sm outline-none focus:border-[color:var(--accent-dark)]"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-[color:var(--text-muted)]">
                Message
              </label>
              <textarea
                rows={5}
                required
                className="w-full rounded-[18px] border border-white/10 bg-transparent px-4 py-3 text-sm outline-none focus:border-[color:var(--accent-dark)]"
              />
            </div>
            <Button type="submit" className="w-full">
              {sent ? "Message Sent ✓" : "Send Message"}
            </Button>
          </form>
        </AnimatedReveal>

        <AnimatedReveal delay={0.1} className="space-y-8">
          <div className="overflow-hidden rounded-[24px] border border-white/10">
            <iframe
              title="Bloomé Location"
              className="h-64 w-full grayscale invert-[0.9] contrast-[1.1]"
              src="https://maps.google.com/maps?q=Jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
            />
          </div>

          <div className="space-y-5 text-sm">
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-[color:var(--accent-soft)]" />
              <span>Jl. Kemang Raya No. 12, Jakarta Selatan</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-[color:var(--accent-soft)]" />
              <span>+62 812 3456 7890</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-[color:var(--accent-soft)]" />
              <span>hello@bloome.co</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={18} className="text-[color:var(--accent-soft)]" />
              <span>Mon – Sun, 8 AM – 9 PM</span>
            </div>
          </div>

          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            className="flex w-full items-center justify-center rounded-[18px] border border-white/10 py-3 text-sm hover:border-[color:var(--accent-dark)] hover:text-[color:var(--accent-soft)]"
          >
            Chat on WhatsApp
          </a>
        </AnimatedReveal>
      </div>
    </div>
  );
}
