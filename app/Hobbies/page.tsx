"use client";
import { useState } from "react";
import { Plus, Sparkles, Clock } from "lucide-react";
import InfoModal from "@/components/InfoModal";
import { hobbies } from "@/lib/site";

export default function HobbiesPage() {
  const [open, setOpen] = useState<number | null>(null);
  const h = open !== null ? hobbies[open] : null;

  return (
    <main className="mx-auto max-w-5xl px-6 py-10 md:py-14">
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-5">
        {hobbies.map(({ icon: Icon, label }, i) => (
          <li key={label} className="fade-up" style={{ animationDelay: `${i * 70}ms` }}>
            <button
              onClick={() => setOpen(i)}
              className="group relative flex aspect-square w-full flex-col items-center justify-center gap-3 rounded-2xl border bg-card/70 backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:border-emerald-500/60 hover:shadow-[0_0_40px_-12px_rgba(16,185,129,0.6)]"
            >
              <Plus className="absolute right-3 top-3 size-4 text-muted-foreground transition duration-300 group-hover:rotate-90 group-hover:text-emerald-500" />
              <Icon className="size-10 text-emerald-500 transition group-hover:scale-110" />
              <span className="text-sm font-medium">{label}</span>
            </button>
          </li>
        ))}
      </ul>

      <InfoModal open={!!h} onClose={() => setOpen(null)} label={h?.label ?? "Hobby"}>
        {h && (
          <div className="flex flex-col items-center text-center">
            <span className="grid size-20 place-items-center rounded-full bg-emerald-500/15">
              <h.icon className="size-10 text-emerald-500" />
            </span>
            <h2 className="mt-4 text-xl font-bold">{h.label}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{h.tagline}</p>
            <span className="mt-3 flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs text-muted-foreground">
              <Clock className="size-3.5 text-emerald-500" /> Since {h.since}
            </span>
            <ul className="mt-5 grid w-full gap-2 text-left">
              {h.facts.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 rounded-lg bg-emerald-500/10 px-3 py-2 text-sm"
                >
                  <Sparkles className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}
      </InfoModal>
    </main>
  );
}