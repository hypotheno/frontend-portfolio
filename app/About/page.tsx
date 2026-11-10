"use client";
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { ImageIcon, Heart, Music2 } from "lucide-react";
import { site, gallery, songs, games } from "@/lib/site";

const tabs = [
  { id: "gallery", label: "Gallery", icon: ImageIcon },
  { id: "favorites", label: "Favorites", icon: Heart },
] as const;

export default function AboutPage() {
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("gallery");

  return (
    <main className="mx-auto max-w-5xl px-6 py-10 md:py-14">
      <section className="fade-up flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{site.name}</h1>
          <p className="text-muted-foreground">{site.school}</p>
        </div>

        <div role="tablist" className="flex rounded-full border p-1">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              role="tab"
              aria-selected={tab === id}
              onClick={() => setTab(id)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors ${
                tab === id
                  ? "bg-emerald-500 text-white"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="size-4" />
              {label}
            </button>
          ))}
        </div>
      </section>

      {tab === "gallery" && (
        <section key="gallery" className="fade-up mt-8 grid auto-rows-[9rem] grid-cols-2 gap-3 md:grid-cols-4">
          {gallery.map((g) => (
            <figure
              key={g.src}
              className={`group relative overflow-hidden rounded-2xl border ${g.className}`}
            >
              <img
                src={g.src}
                alt={g.caption}
                className="size-full object-cover transition duration-300 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-xs font-medium text-white opacity-0 transition group-hover:opacity-100">
                {g.caption}
              </figcaption>
            </figure>
          ))}
        </section>
      )}

      {tab === "favorites" && (
        <section key="favorites" className="fade-up mt-8 grid gap-8 md:grid-cols-[2fr_1fr]">
          <div>
            <Music2 className="mb-3 size-5 text-emerald-500" />
            <ul className="grid gap-3 sm:grid-cols-2">
              {songs.map((s) => (
                <li
                  key={s.title}
                  className="flex items-center gap-3 rounded-xl border bg-card p-3 transition hover:border-emerald-500/60"
                >
                  {s.cover ? (
                    <img src={s.cover} alt={s.title} className="size-12 rounded-lg object-cover" />
                  ) : (
                    <span className="grid size-12 place-items-center rounded-lg bg-emerald-500/15">
                      <Music2 className="size-5 text-emerald-500" />
                    </span>
                  )}
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{s.title}</p>
                    <p className="truncate text-xs text-muted-foreground">{s.artist}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <ul className="grid grid-cols-2 gap-3 self-start">
            {games.map((g) => (
              <li
                key={g.name}
                title={g.name}
                className="grid aspect-square place-items-center rounded-2xl border bg-card transition hover:-translate-y-0.5 hover:border-emerald-500/60"
              >
                <img src={g.logo} alt={g.name} className="size-16 rounded-xl object-cover" />
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}