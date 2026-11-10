/* eslint-disable @next/next/no-img-element */
import { education } from "@/lib/site";

export default function EducationPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 md:py-14">
      <ol className="grid gap-4 sm:grid-cols-2">
        {education.map((e, i) => (
          <li
            key={e.school}
            className="fade-up flex items-center gap-5 rounded-2xl border bg-card p-5 transition hover:border-emerald-500/60"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <img src={e.logo} alt={e.school} className="size-20 shrink-0 object-contain" />
            <div className="min-w-0">
              <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-medium text-emerald-500">
                {e.level}
              </span>
              <p className="mt-2 font-semibold leading-snug">{e.school}</p>
              <p className="text-sm text-muted-foreground">{e.years}</p>
            </div>
          </li>
        ))}
      </ol>
    </main>
  );
}