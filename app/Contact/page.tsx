"use client";
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Mail, Copy, Check } from "lucide-react";
import { site, socials } from "@/lib/site";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <main className="mx-auto max-w-xl px-6 py-10 md:py-14">
      <div className="fade-up flex items-center justify-between gap-3 rounded-2xl border bg-card p-5">
        <a href={`mailto:${site.email}`} className="flex min-w-0 items-center gap-3">
          <span className="grid size-12 place-items-center rounded-xl bg-emerald-500/15">
            <Mail className="size-5 text-emerald-500" />
          </span>
          <span className="truncate text-sm font-medium">{site.email}</span>
        </a>
        <button
          onClick={copy}
          aria-label="Copy email"
          className="grid size-10 place-items-center rounded-lg border transition hover:border-emerald-500/60"
        >
          {copied ? <Check className="size-4 text-emerald-500" /> : <Copy className="size-4" />}
        </button>
      </div>

      <ul className="fade-up mt-4 grid grid-cols-3 gap-4" style={{ animationDelay: "100ms" }}>
        {socials.map((s) => (
          <li key={s.name}>
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.name}
              title={s.name}
              className="grid aspect-square place-items-center rounded-2xl border bg-card transition hover:-translate-y-1 hover:border-emerald-500/60"
            >
              <img src={s.icon} alt={s.name} className={`size-9 ${s.mono ? "dark:invert" : ""}`} />
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}