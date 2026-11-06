import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Code,
  Database,
  FileText,
  Gamepad2,
  GraduationCap,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  { value: "2nd", label: "Year BSIT" },
  { value: "6", label: "Database entities" },
  { value: "3+", label: "Hobbies" },
  { value: "1", label: "Side hustle" },
];

const services = [
  {
    icon: Code,
    title: "Student Developer",
    text: "Building websites with Next.js, React, and shadcn/ui while learning how real systems are made.",
  },
  {
    icon: Database,
    title: "Data & Formatting",
    text: "Organizing and cleaning data so it is accurate, consistent, and easy to read.",
  },
  {
    icon: FileText,
    title: "Thesis Consulting",
    text: "Helping students prepare clean, properly formatted papers that are ready for submission.",
  },
];

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "shadcn/ui",
  "MySQL",
  "Git & GitHub",
  "Vercel",
];

const entities = [
  "users",
  "goals",
  "exercises",
  "workout_plans",
  "plan_exercises",
  "activity_logs",
];

export default function Home() {
  return (
    <div className="space-y-14">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl border bg-card px-6 py-12 animate-in fade-in slide-in-from-bottom-4 duration-700 sm:px-12 sm:py-16">
        <div className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-12 size-64 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative grid items-center gap-10 md:grid-cols-[1.3fr_1fr]">
          <div className="flex flex-col items-start gap-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-sm font-medium text-accent-foreground">
              <Sparkles className="size-4 text-primary" />
              Better habits / Stronger you
            </span>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
              Hi, I&apos;m <span className="text-primary">Niño M. Belen</span>
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              An IT student who loves turning everyday activity into
              structured, measurable data. Welcome to my portfolio.
            </p>

            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 text-primary" />
              Pamplona, Camarines Sur, Philippines
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/Education" className={buttonVariants()}>
                My Education
              </Link>
              <Link
                href="/Hobbies"
                className={buttonVariants({ variant: "outline" })}
              >
                My Hobbies
              </Link>
              <Link
                href="/Contact"
                className={buttonVariants({ variant: "ghost" })}
              >
                <Mail className="size-4" /> Contact me
              </Link>
            </div>
          </div>

          {/* PHOTO */}
          <div className="relative mx-auto w-full max-w-xs">
            <div className="absolute inset-0 -rotate-6 rounded-[2rem] bg-primary/30" />
            <div className="relative overflow-hidden rounded-[2rem] border-4 border-primary/60 bg-background shadow-xl">
              <Image
                src="/profile.jpg"
                alt="Portrait of Niño M. Belen"
                width={640}
                height={640}
                priority
                className="aspect-square w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-xl border bg-card px-3 py-2 text-sm font-medium shadow-lg">
              <GraduationCap className="size-4 text-primary" />
              BSIT Student
            </div>
            <div className="absolute -right-3 -top-3 flex items-center gap-2 rounded-xl border bg-card px-3 py-2 text-sm font-medium shadow-lg">
              <Gamepad2 className="size-4 text-primary" />
              Gamer &amp; Chess
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border bg-card p-5 text-center transition-colors hover:border-primary"
          >
            <p className="text-3xl font-extrabold text-primary">{s.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </section>

      {/* WHAT I DO */}
      <section className="space-y-6">
        <div className="space-y-1">
          <p className="text-sm font-medium text-primary">What I do</p>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Learning, building, and helping others
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <Card
              key={title}
              className="transition-all hover:-translate-y-1 hover:border-primary"
            >
              <CardHeader>
                <span className="mb-2 flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="size-6" />
                </span>
                <CardTitle className="text-lg">{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                {text}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Tools I use</h2>
        <div className="flex flex-wrap gap-2">
          {stack.map((t) => (
            <span
              key={t}
              className="rounded-full border bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground transition-colors hover:border-primary hover:bg-accent hover:text-accent-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section>
        <Card className="overflow-hidden border-primary/40">
          <div className="grid md:grid-cols-[1.4fr_1fr]">
            <div className="space-y-4 p-6 sm:p-8">
              <p className="text-sm font-medium text-primary">
                Featured project
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight">
                RE<span className="text-primary">:</span>BOOT
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                A database-driven wellness and fitness tracking system for IT
                students and digitally active young adults. It turns everyday
                physical activity into structured, measurable data through
                profiles, goals, workout plans, and activity logs.
              </p>
              <Link
                href="/About"
                className="inline-flex items-center gap-1 font-medium hover:text-primary"
              >
                Learn more <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="border-t bg-accent/40 p-6 sm:p-8 md:border-l md:border-t-0">
              <p className="mb-3 text-sm font-medium text-accent-foreground">
                Database entities
              </p>
              <div className="flex flex-wrap gap-2">
                {entities.map((e) => (
                  <code
                    key={e}
                    className="rounded-md border bg-card px-2.5 py-1 text-xs font-medium"
                  >
                    {e}
                  </code>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* CTA */}
      <section className="rounded-3xl bg-primary px-6 py-10 text-center text-primary-foreground sm:px-12">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
          Need help with your thesis or data formatting?
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm opacity-90 sm:text-base">
          Let&apos;s talk and make your paper clean, organized, and ready to
          submit.
        </p>
        <Link
          href="/Contact"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-background px-6 py-2.5 text-sm font-semibold text-foreground transition-transform hover:scale-105"
        >
          <Mail className="size-4" /> Get in touch
        </Link>
      </section>
    </div>
  );
}