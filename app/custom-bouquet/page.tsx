"use client";

import { useMemo, useState } from "react";
import { Check } from "lucide-react";
import ProductImage from "@/components/ProductImage";
import Button from "@/components/Button";
import AnimatedReveal from "@/components/AnimatedReveal";
import { formatIDR } from "@/lib/data";
import { useCart } from "@/context/CartContext";

const flowerOptions = [
  { name: "Roses", art: "rose", slug: "rose", price: 150000 },
  { name: "Peonies", art: "peony", slug: "peony", price: 220000 },
  { name: "Sunflowers", art: "sunflower", slug: "sunflower", price: 120000 },
  { name: "Tulips", art: "tulip", slug: "tulip", price: 140000 },
  { name: "Lilies", art: "lily", slug: "lily", price: 160000 },
  { name: "Baby's Breath", art: "baby-breath", slug: "baby-breath", price: 60000 },
];

const colorOptions = ["#c23b4a", "#eec9d8", "#f4e7d3", "#7f8fc9", "#c9a7d6", "#f45c9b"];
const wrappingOptions = ["Black Wrap", "Cream Wrap", "Champagne", "Kraft Linen"];
const ribbonOptions = ["Rose Satin", "Champagne Silk", "Black Velvet", "Ivory Cotton"];
const decorationOptions = ["Dried Blooms", "Pearls", "Silk Petals", "None"];
const addOns = [
  { name: "Teddy Bear", price: 85000 },
  { name: "Chocolates", price: 65000 },
  { name: "Perfume", price: 250000 },
  { name: "Gift Box", price: 45000 },
];

const steps = [
  "Flowers",
  "Colors",
  "Wrapping",
  "Ribbon",
  "Decoration",
  "Add-ons",
  "Greeting",
  "Preview",
];

export default function CustomBouquetPage() {
  const [step, setStep] = useState(0);
  const [flower, setFlower] = useState(flowerOptions[0]);
  const [color, setColor] = useState(colorOptions[0]);
  const [wrapping, setWrapping] = useState(wrappingOptions[0]);
  const [ribbon, setRibbon] = useState(ribbonOptions[0]);
  const [decoration, setDecoration] = useState(decorationOptions[0]);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [greeting, setGreeting] = useState("");
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const price = useMemo(() => {
    const base = 95000;
    const addOnTotal = selectedAddOns.reduce(
      (sum, name) => sum + (addOns.find((a) => a.name === name)?.price || 0),
      0
    );
    return base + flower.price + addOnTotal;
  }, [flower, selectedAddOns]);

  const toggleAddOn = (name: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(name) ? prev.filter((a) => a !== name) : [...prev, name]
    );
  };

  const handleAdd = () => {
    addItem(
      {
        slug: `custom-${flower.art}-${Date.now()}`,
        name: `Custom ${flower.name} Bouquet`,
        price,
        rating: 5,
        reviews: 0,
        sold: 0,
        art: flower.art,
        image: `/images/flowers/${flower.slug}.jpg`,
        category: "Custom Bouquet",
        description: "Your one-of-a-kind design, built stem by stem.",
        meaning: "Made entirely to your taste.",
        origin: "Custom-assembled in-house.",
        colors: [color],
        stock: "Made to Order",
      },
      1,
      greeting
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="mx-auto max-w-[1440px] px-6 pb-24 pt-28 md:px-10 md:pt-32">
      <AnimatedReveal>
        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent-soft)]">
          Interactive Experience
        </p>
        <h1 className="mt-3 font-display text-4xl md:text-6xl font-medium">
          Custom Bouquet Builder
        </h1>
        <p className="mt-4 max-w-lg text-sm text-[color:var(--text-secondary)]">
          Design a bouquet entirely your own — choose every flower, colour,
          wrap and finishing detail. Watch your creation come together in
          real time.
        </p>
      </AnimatedReveal>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* STEPS */}
        <div>
          {/* Step indicator */}
          <div className="mb-10 flex flex-wrap gap-2">
            {steps.map((s, i) => (
              <button
                key={s}
                onClick={() => setStep(i)}
                className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs transition-colors ${
                  step === i
                    ? "border-[color:var(--accent)] text-[color:var(--accent-soft)]"
                    : "border-white/10 text-[color:var(--text-muted)]"
                }`}
              >
                <span
                  className={`flex h-4 w-4 items-center justify-center rounded-full text-[9px] ${
                    step > i ? "bg-[color:var(--accent)] text-black" : "border border-current"
                  }`}
                >
                  {step > i ? <Check size={10} /> : i + 1}
                </span>
                {s}
              </button>
            ))}
          </div>

          {step === 0 && (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {flowerOptions.map((f) => (
                <button
                  key={f.name}
                  onClick={() => setFlower(f)}
                  className={`overflow-hidden rounded-[20px] border transition-colors ${
                    flower.name === f.name ? "border-[color:var(--accent)]" : "border-white/10"
                  }`}
                >
                  <ProductImage
                    src={`/images/flowers/${f.slug}.jpg`}
                    alt={f.name}
                    className="aspect-square w-full"
                  />
                  <div className="bg-[color:var(--card)] p-3 text-left">
                    <p className="text-sm">{f.name}</p>
                    <p className="text-xs text-[color:var(--accent-soft)]">+{formatIDR(f.price)}</p>
                  </div>
                </button>
              ))}
            </div>
          )}

          {step === 1 && (
            <div className="flex flex-wrap gap-4">
              {colorOptions.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`h-14 w-14 rounded-full border-2 transition-transform ${
                    color === c ? "scale-110 border-[color:var(--accent)]" : "border-white/20"
                  }`}
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          )}

          {step === 2 && (
            <div className="flex flex-wrap gap-3">
              {wrappingOptions.map((w) => (
                <button
                  key={w}
                  onClick={() => setWrapping(w)}
                  className={`rounded-full border px-5 py-2.5 text-sm transition-colors ${
                    wrapping === w
                      ? "border-[color:var(--accent)] bg-[color:var(--accent)]/10 text-[color:var(--accent-soft)]"
                      : "border-white/10 text-[color:var(--text-secondary)]"
                  }`}
                >
                  {w}
                </button>
              ))}
            </div>
          )}

          {step === 3 && (
            <div className="flex flex-wrap gap-3">
              {ribbonOptions.map((r) => (
                <button
                  key={r}
                  onClick={() => setRibbon(r)}
                  className={`rounded-full border px-5 py-2.5 text-sm transition-colors ${
                    ribbon === r
                      ? "border-[color:var(--accent)] bg-[color:var(--accent)]/10 text-[color:var(--accent-soft)]"
                      : "border-white/10 text-[color:var(--text-secondary)]"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          )}

          {step === 4 && (
            <div className="flex flex-wrap gap-3">
              {decorationOptions.map((d) => (
                <button
                  key={d}
                  onClick={() => setDecoration(d)}
                  className={`rounded-full border px-5 py-2.5 text-sm transition-colors ${
                    decoration === d
                      ? "border-[color:var(--accent)] bg-[color:var(--accent)]/10 text-[color:var(--accent-soft)]"
                      : "border-white/10 text-[color:var(--text-secondary)]"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          )}

          {step === 5 && (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {addOns.map((a) => (
                <button
                  key={a.name}
                  onClick={() => toggleAddOn(a.name)}
                  className={`rounded-[18px] border p-4 text-left transition-colors ${
                    selectedAddOns.includes(a.name)
                      ? "border-[color:var(--accent)] bg-[color:var(--accent)]/10"
                      : "border-white/10"
                  }`}
                >
                  <p className="text-sm">{a.name}</p>
                  <p className="text-xs text-[color:var(--accent-soft)]">+{formatIDR(a.price)}</p>
                </button>
              ))}
            </div>
          )}

          {step === 6 && (
            <textarea
              value={greeting}
              maxLength={140}
              onChange={(e) => setGreeting(e.target.value)}
              rows={5}
              placeholder="Write your greeting message..."
              className="w-full max-w-lg rounded-[18px] border border-white/10 bg-[color:var(--card)] p-4 text-sm outline-none placeholder:text-[color:var(--text-muted)] focus:border-[color:var(--accent-dark)]"
            />
          )}

          {step === 7 && (
            <div className="max-w-lg space-y-3 text-sm text-[color:var(--text-secondary)]">
              <p><span className="text-[color:var(--accent-soft)]">Flowers:</span> {flower.name}</p>
              <p><span className="text-[color:var(--accent-soft)]">Colour:</span> <span className="inline-block h-3 w-3 rounded-full align-middle" style={{ backgroundColor: color }} /></p>
              <p><span className="text-[color:var(--accent-soft)]">Wrapping:</span> {wrapping}</p>
              <p><span className="text-[color:var(--accent-soft)]">Ribbon:</span> {ribbon}</p>
              <p><span className="text-[color:var(--accent-soft)]">Decoration:</span> {decoration}</p>
              <p><span className="text-[color:var(--accent-soft)]">Add-ons:</span> {selectedAddOns.join(", ") || "None"}</p>
              {greeting && <p><span className="text-[color:var(--accent-soft)]">Greeting:</span> “{greeting}”</p>}
            </div>
          )}

          <div className="mt-10 flex gap-3">
            <Button
              variant="secondary"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
            >
              Back
            </Button>
            {step < steps.length - 1 ? (
              <Button onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}>
                Next
              </Button>
            ) : (
              <Button onClick={handleAdd}>{added ? "Added ✓" : "Add to Cart"}</Button>
            )}
          </div>
        </div>

        {/* LIVE PREVIEW */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="relative rounded-[24px] border border-white/10 p-6">
            <p className="mb-4 text-xs uppercase tracking-widest text-[color:var(--text-muted)]">
              Live Preview
            </p>
            <ProductImage
              src={`/images/flowers/${flower.slug}.jpg`}
              alt={`Live preview of a custom ${flower.name.toLowerCase()} bouquet`}
              className="aspect-square w-full"
            />
            <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-6">
              <span className="text-sm text-[color:var(--text-secondary)]">Estimated Price</span>
              <span className="font-display text-2xl text-[color:var(--accent-soft)]">
                {formatIDR(price)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
