"use client";
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import {
  ImageIcon, Heart, UserRound, Briefcase, Send, Gamepad2, Trophy, Clock, Star, Swords,
} from "lucide-react";
import MusicPlayer from "@/components/MusicPlayer";
import InfoModal from "@/components/InfoModal";
import SmartImage from "@/components/SmartImage";
import { site, bio, facts, gallery, games, songs, services } from "@/lib/site";

const tabs = [
  { id: "gallery", label: "Gallery", icon: ImageIcon },
  { id: "favorites", label: "Favorites", icon: Heart },
  { id: "me", label: "About me", icon: UserRound },
  { id: "hustle", label: "Side hustle", icon: Briefcase },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function AboutPage() {
  const [tab, setTab] = useState<TabId>("gallery");
  const [view, setView] = useState<number | null>(null);

  return (
    <main className="mx-auto max-w-5xl px-6 py-10 md:py-14">
      <section className="fade-up flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{site.name}</h1>
          <p className="text-muted-foreground">{site.school}</p>
        </div>

        <div role="tablist" className="flex rounded-full border bg-card/70 p-1 backdrop-blur-sm">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              role="tab"
              aria-selected={tab === id}
              aria-label={label}
              onClick={() => setTab(id)}
              className={`flex items-center gap-2 rounded-full px-3 py-2 text-sm transition-colors sm:px-4 ${
                tab === id
                  ? "bg-emerald-500 text-white"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="size-4" />
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      {tab === "gallery" && (
        <section
          key="gallery"
          className="mt-8 grid auto-rows-[9rem] grid-cols-2 gap-3 md:grid-cols-4"
        >
          {gallery.map((g, i) => (
            <button
              key={g.src}
              onClick={() => setView(i)}
              aria-label={`Open ${g.caption}`}
              className={`fade-up group relative overflow-hidden rounded-2xl border text-left ${g.className}`}
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <img
                src={g.src}
                alt={g.caption}
                className="size-full object-cover transition duration-300 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-xs font-medium text-white opacity-0 transition group-hover:opacity-100">
                {g.caption}
              </span>
            </button>
          ))}
        </section>
      )}

      {/* FAVORITES */}
      {tab === "favorites" && (
        <section key="favorites" className="mt-8 grid items-start gap-6 md:grid-cols-[3fr_2fr]">
          <div className="fade-up">
            <MusicPlayer songs={songs} />
          </div>

          <div className="fade-up" style={{ animationDelay: "120ms" }}>
            <Gamepad2 className="mb-3 size-5 text-emerald-500" aria-label="Games" />
            <ul className="grid gap-3">
              {games.map((g) => (
                <li
                  key={g.name}
                  className="group flex gap-4 rounded-2xl border bg-card/70 p-4 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-emerald-500/60 hover:shadow-[0_0_40px_-12px_rgba(16,185,129,0.6)]"
                >
                  <span className="size-16 shrink-0 overflow-hidden rounded-xl bg-emerald-500/15">
                    <SmartImage
                      src={g.logo}
                      alt={g.name}
                      className="size-full object-cover"
                      fallback={
                        <span className="grid size-full place-items-center">
                          <Gamepad2 className="size-7 text-emerald-500" />
                        </span>
                      }
                    />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="truncate font-semibold">{g.name}</p>
                      <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[11px] font-medium text-emerald-500">
                        {g.genre}
                      </span>
                    </div>
                    <ul className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs text-muted-foreground">
                      <li className="flex items-center gap-1.5">
                        <UserRound className="size-3.5 text-emerald-500" /> {g.ign}
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Trophy className="size-3.5 text-emerald-500" /> {g.rank}
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Clock className="size-3.5 text-emerald-500" /> {g.since}
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Star className="size-3.5 text-emerald-500" /> {g.fav}
                      </li>
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ABOUT ME */}
      {tab === "me" && (
        <section key="me" className="mt-8">
          <p className="fade-up max-w-2xl text-lg text-muted-foreground">{bio}</p>
          <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
            {facts.map(({ icon: Icon, label, value }, i) => (
              <li
                key={label}
                className="fade-up rounded-2xl border bg-card/70 p-4 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-emerald-500/60"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <Icon className="size-5 text-emerald-500" />
                <p className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">
                  {label}
                </p>
                <p className="mt-1 text-sm font-medium">{value}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* SIDE HUSTLE */}
      {tab === "hustle" && (
        <section key="hustle" className="mt-8">
          <p className="fade-up flex items-center gap-2 text-sm text-emerald-500">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Open for work
          </p>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {services.map((s, i) => (
              <article
                key={s.title}
                className="fade-up flex flex-col gap-5 rounded-2xl border bg-card/70 p-6 backdrop-blur-sm transition hover:border-emerald-500/60 hover:shadow-[0_0_40px_-12px_rgba(16,185,129,0.6)]"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <span className="grid size-12 place-items-center rounded-xl bg-emerald-500/15">
                    <s.icon className="size-6 text-emerald-500" />
                  </span>
                  <div>
                    <h2 className="font-semibold leading-tight">{s.title}</h2>
                    <p className="text-sm text-muted-foreground">{s.subtitle}</p>
                  </div>
                </div>

                <ul className="grid grid-cols-3 gap-3">
                  {s.skills.map(({ icon: Icon, label }) => (
                    <li
                      key={label}
                      className="flex flex-col items-center gap-2 rounded-xl border py-4 text-xs transition hover:-translate-y-0.5 hover:border-emerald-500/60"
                    >
                      <Icon className="size-6 text-emerald-500" />
                      {label}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/Contact"
                  className="mt-auto inline-flex w-fit items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-600"
                >
                  <Send className="size-4" /> Hire me
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}

      <InfoModal open={view !== null} onClose={() => setView(null)} label="Photo" size="lg">
        {view !== null && (
          <figure>
            <img
              src={gallery[view].src}
              alt={gallery[view].caption}
              className="max-h-[75vh] w-full rounded-xl object-contain"
            />
            <figcaption className="px-2 pb-1 pt-3 text-sm text-muted-foreground">
              {gallery[view].caption}
            </figcaption>
          </figure>
        )}
      </InfoModal>
    </main>
  );
}