"use client";
import { useState } from "react";
import { GraduationCap, Award, MapPin, CalendarDays, ChevronRight } from "lucide-react";
import InfoModal from "@/components/InfoModal";
import SmartImage from "@/components/SmartImage";
import { education } from "@/lib/site";

function Logo({ src, alt, size }: { src: string; alt: string; size: string }) {
  return (
    <span
      className={`grid shrink-0 place-items-center overflow-hidden rounded-xl bg-white p-1.5 ${size}`}
    >
      <SmartImage
        src={src}
        alt={alt}
        className="size-full object-contain"
        fallback={<GraduationCap className="size-1/2 text-emerald-600" />}
      />
    </span>
  );
}

export default function EducationPage() {
  const [open, setOpen] = useState<number | null>(null);
  const e = open !== null ? education[open] : null;

  return (
    <main className="mx-auto max-w-5xl px-6 py-10 md:py-14">
      <ol className="grid gap-4 sm:grid-cols-2">
        {education.map((item, i) => (
          <li key={item.school} className="fade-up" style={{ animationDelay: `${i * 80}ms` }}>
            <button
              onClick={() => setOpen(i)}
              className="group flex w-full items-center gap-5 rounded-2xl border bg-card/70 p-5 text-left backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:border-emerald-500/60 hover:shadow-[0_0_40px_-12px_rgba(16,185,129,0.6)]"
            >
              <Logo src={item.logo} alt={item.school} size="size-20" />
              <span className="min-w-0 flex-1">
                <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-medium text-emerald-500">
                  {item.level}
                </span>
                <span className="mt-2 block font-semibold leading-snug">{item.school}</span>
                <span className="block text-sm text-muted-foreground">{item.years}</span>
              </span>
              <ChevronRight className="size-5 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-emerald-500" />
            </button>
          </li>
        ))}
      </ol>

      <InfoModal open={!!e} onClose={() => setOpen(null)} label={e?.school ?? "School"}>
        {e && (
          <div className="flex flex-col items-center text-center">
            <Logo src={e.logo} alt={e.school} size="size-24" />
            <span className="mt-4 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-medium text-emerald-500">
              {e.level}
            </span>
            <h2 className="mt-2 text-xl font-bold leading-snug">{e.school}</h2>
            <div className="mt-3 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <CalendarDays className="size-4 text-emerald-500" /> {e.years}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="size-4 text-emerald-500" /> {e.place}
              </span>
            </div>
            <ul className="mt-5 grid w-full gap-2 text-left">
              {e.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2 rounded-lg bg-emerald-500/10 px-3 py-2 text-sm"
                >
                  <Award className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        )}
      </InfoModal>
    </main>
  );
}