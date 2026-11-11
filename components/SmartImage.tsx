"use client";
/* eslint-disable @next/next/no-img-element */
import { useState, type ReactNode } from "react";

type Props = { src?: string; alt: string; className?: string; fallback: ReactNode };

export default function SmartImage({ src, alt, className, fallback }: Props) {
  const [failed, setFailed] = useState<string | null>(null);

  if (!src || failed === src) return <>{fallback}</>;

  return (
    <img
      ref={(el) => {
        // catches images that failed before React hydrated
        if (el && el.complete && el.naturalWidth === 0) setFailed(src);
      }}
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(src)}
    />
  );
}