"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Renders real studio bouquet photography via next/image.
 *
 * Drop photo files into /public/images/... matching the `src` paths used in
 * lib/data.ts (see README.md for the exact folder structure), and they will
 * render automatically. Until a photo exists at that path, this component
 * shows an elegant soft-focus rose-pink placeholder (not an illustration —
 * just ambient blur/glow) so the layout still looks intentional.
 */
export default function ProductImage({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  src?: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const [errored, setErrored] = useState(false);
  const showPlaceholder = !src || errored;

  return (
    <div className={`relative overflow-hidden bg-[color:var(--card)] ${className}`}>
      {showPlaceholder ? (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background:
              "radial-gradient(circle at 28% 25%, rgba(244,92,155,0.35), transparent 55%), radial-gradient(circle at 75% 70%, rgba(255,120,181,0.22), transparent 50%), linear-gradient(160deg, #151515, #0d0d0d)",
          }}
        >
          <span className="px-4 text-center text-[10px] uppercase tracking-[0.25em] text-white/35">
            Photo coming soon
          </span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
          onError={() => setErrored(true)}
        />
      )}
    </div>
  );
}
