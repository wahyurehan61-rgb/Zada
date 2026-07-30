"use client";

import { ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  disabled,
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[18px] font-medium tracking-wide transition-all duration-300 select-none disabled:opacity-40 disabled:pointer-events-none";

  const sizes = {
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variants = {
    primary:
      "btn-shine text-black shadow-[0_8px_30px_rgba(244,92,155,0.25)] hover:shadow-[0_8px_40px_rgba(244,92,155,0.4)] hover:-translate-y-0.5",
    secondary:
      "bg-transparent border border-[color:var(--accent-dark)] text-[color:var(--accent-soft)] hover:bg-[color:var(--accent)] hover:text-black hover:border-[color:var(--accent)] hover:-translate-y-0.5",
    ghost:
      "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:-translate-y-0.5",
  };

  const style =
    variant === "primary"
      ? {
          backgroundImage:
            "linear-gradient(110deg, #c23c78, #f45c9b 40%, #ffd7e8 55%, #f45c9b 70%, #c23c78)",
        }
      : undefined;

  const classes = clsx(base, sizes[size], variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      style={style}
    >
      {children}
    </button>
  );
}
