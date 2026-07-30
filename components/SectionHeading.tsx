import Link from "next/link";
import AnimatedReveal from "./AnimatedReveal";

export default function SectionHeading({
  eyebrow,
  title,
  cta,
  ctaHref,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  cta?: string;
  ctaHref?: string;
  align?: "left" | "center";
}) {
  return (
    <AnimatedReveal>
      <div
        className={`flex items-end justify-between gap-6 ${
          align === "center" ? "flex-col items-center text-center" : ""
        }`}
      >
        <div>
          {eyebrow && (
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[color:var(--accent-soft)]">
              {eyebrow}
            </p>
          )}
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight">
            {title}
          </h2>
        </div>
        {cta && ctaHref && (
          <Link
            href={ctaHref}
            className="shrink-0 text-sm text-[color:var(--accent-soft)] hover:text-[color:var(--accent-highlight)] transition-colors flex items-center gap-1"
          >
            {cta} <span aria-hidden>→</span>
          </Link>
        )}
      </div>
    </AnimatedReveal>
  );
}
