/* eslint-disable @next/next/no-img-element */
import { ExternalLink, Code } from "lucide-react";
import ToolIcons from "@/components/ToolIcons";
import { site, project, tools } from "@/lib/site";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 md:py-14">
      {/* Intro */}
      <section className="fade-up flex items-center gap-5">
        <img
          src={site.avatar}
          alt={site.name}
          className="size-20 rounded-full border-2 border-emerald-500 object-cover"
        />
        <div>
          <p className="text-sm font-medium text-emerald-500">Hi, I&apos;m</p>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{site.brand}</h1>
          <p className="text-muted-foreground">{site.role}</p>
        </div>
      </section>

      {/* Featured project */}
      <section
        className="fade-up mt-8 grid overflow-hidden rounded-2xl border bg-card md:grid-cols-2"
        style={{ animationDelay: "120ms" }}
      >
        <div className="relative min-h-56">
          <img
            src={project.image}
            alt={project.name}
            className="absolute inset-0 size-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-5 p-6 md:p-8">
          <span className="w-fit rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-500">
            Featured project
          </span>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              RE<span className="text-emerald-500">:</span>BOOT
            </h2>
            <p className="mt-2 text-muted-foreground">{project.outcome}</p>
          </div>

          <ul className="flex flex-wrap gap-2">
            {project.outcomes.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs"
              >
                <Icon className="size-3.5 text-emerald-500" />
                {label}
              </li>
            ))}
          </ul>

          <ToolIcons items={project.stack} />

          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-600"
            >
              <Code className="size-4" /> Code
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition hover:border-emerald-500/60"
              >
                <ExternalLink className="size-4" /> Live
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="fade-up mt-8" style={{ animationDelay: "240ms" }}>
        <ToolIcons items={tools} />
      </section>
    </main>
  );
}