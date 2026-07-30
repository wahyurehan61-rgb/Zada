"use client";

import { useState } from "react";
import { Trash2, ShoppingBag } from "lucide-react";
import ProductImage from "@/components/ProductImage";
import Button from "@/components/Button";
import AnimatedReveal from "@/components/AnimatedReveal";
import { formatIDR } from "@/lib/data";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal } = useCart();
  const [promo, setPromo] = useState("");
  const [discount, setDiscount] = useState(0);

  const shipping = items.length > 0 ? 15000 : 0;
  const total = subtotal + shipping - discount;

  const applyPromo = () => {
    if (promo.trim().toUpperCase() === "BLOOME10") {
      setDiscount(Math.round(subtotal * 0.1));
    } else {
      setDiscount(0);
    }
  };

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-[1440px] flex-col items-center px-6 pb-24 pt-40 text-center md:px-10">
        <ShoppingBag size={40} className="text-[color:var(--accent-soft)]" />
        <h1 className="mt-6 font-display text-3xl">Your cart is empty</h1>
        <p className="mt-3 max-w-sm text-sm text-[color:var(--text-secondary)]">
          Browse our collections and find a bouquet worth sending.
        </p>
        <Button href="/collections" className="mt-8">Shop Collection</Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1440px] px-6 pb-24 pt-28 md:px-10 md:pt-32">
      <AnimatedReveal>
        <h1 className="font-display text-4xl md:text-5xl font-medium">My Cart</h1>
      </AnimatedReveal>

      <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
        {/* Items */}
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.product.slug}
              className="flex gap-4 rounded-[20px] border border-white/5 bg-[color:var(--card)] p-4"
            >
              <ProductImage
                src={item.product.image}
                alt={item.product.name}
                className="h-24 w-24 shrink-0 rounded-[16px]"
                sizes="96px"
              />
              <div className="flex flex-1 flex-col justify-between">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-display text-lg">{item.product.name}</p>
                    <p className="text-sm text-[color:var(--accent-soft)]">
                      {formatIDR(item.product.price)}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(item.product.slug)}
                    className="text-[color:var(--text-muted)] hover:text-red-400"
                    aria-label="Remove item"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                <div className="flex items-center gap-3 rounded-full border border-white/10 px-2 py-1 w-fit">
                  <button
                    onClick={() => updateQuantity(item.product.slug, item.quantity - 1)}
                    className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-white/5"
                  >
                    −
                  </button>
                  <span className="w-4 text-center text-sm">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.product.slug, item.quantity + 1)}
                    className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-white/5"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <AnimatedReveal delay={0.1}>
          <div className="rounded-[24px] border border-white/10 p-6">
            <div className="space-y-3 text-sm text-[color:var(--text-secondary)]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-white">{formatIDR(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-white">{formatIDR(shipping)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-[color:var(--accent-soft)]">
                  <span>Discount</span>
                  <span>- {formatIDR(discount)}</span>
                </div>
              )}
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
              <span className="font-display text-xl">Total</span>
              <span className="font-display text-2xl text-[color:var(--accent-soft)]">
                {formatIDR(total)}
              </span>
            </div>

            <div className="mt-6">
              <p className="mb-2 text-xs text-[color:var(--text-muted)]">Have a promo code?</p>
              <div className="flex gap-2">
                <input
                  value={promo}
                  onChange={(e) => setPromo(e.target.value)}
                  placeholder="Enter your promo code"
                  className="w-full rounded-[14px] border border-white/10 bg-transparent px-4 py-2.5 text-sm outline-none placeholder:text-[color:var(--text-muted)] focus:border-[color:var(--accent-dark)]"
                />
                <button
                  onClick={applyPromo}
                  className="rounded-[14px] bg-white/10 px-4 text-xs uppercase tracking-wide hover:bg-white/15"
                >
                  Apply
                </button>
              </div>
              <p className="mt-1 text-[10px] text-[color:var(--text-muted)]">Try: BLOOME10</p>
            </div>

            <Button className="mt-6 w-full" size="lg">
              Checkout ({items.length})
            </Button>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              className="mt-3 flex items-center justify-center rounded-[18px] border border-white/10 py-3 text-sm text-[color:var(--text-secondary)] hover:border-[color:var(--accent-dark)] hover:text-[color:var(--accent-soft)]"
            >
              Order via WhatsApp
            </a>

            <div className="mt-6 flex flex-wrap gap-2">
              {["QRIS", "BCA", "Mandiri", "BRI", "BNI", "Visa", "Mastercard"].map((p) => (
                <span
                  key={p}
                  className="rounded-md border border-white/10 px-2.5 py-1 text-[10px] text-[color:var(--text-secondary)]"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </div>
  );
}
