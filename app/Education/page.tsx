import { BookOpen, GraduationCap, Library, School } from "lucide-react";

const education = [
  {
    level: "Elementary",
    school: "Del Rosario Elementary School",
    detail: "Grade 1 to Grade 6",
    years: "2012 - 2018",
    icon: School,
  },
  {
    level: "Junior High School",
    school: "Del Rosario National High School",
    detail: "Grade 7 to Grade 10",
    years: "2018 - 2022",
    icon: BookOpen,
  },
  {
    level: "Senior High School",
    school: "Pamplona National High School",
    detail: "Your strand (ICT-CSS)",
    years: "2022 - 2024",
    icon: Library,
  },
  {
    level: "College",
    school: "Naga College Foundation Inc.",
    detail: "BS Information Technology · 2nd Year",
    years: "2025 - Present",
    icon: GraduationCap,
  },
];

export default function Education() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <p className="text-sm font-medium text-primary">My journey</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Education
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          From elementary to college, here is where my learning started and
          where it is heading.
        </p>
      </div>

      <ol className="relative ml-4 space-y-8 border-l-2 border-primary/30">
        {education.map((e) => (
          <li key={e.level} className="relative pl-8">
            <span className="absolute -left-[21px] top-1 flex size-10 items-center justify-center rounded-full border-2 border-primary bg-background text-primary">
              <e.icon className="size-5" />
            </span>
            <div className="rounded-xl border bg-card p-5 transition-colors hover:border-primary">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-lg font-semibold">{e.level}</h2>
                <span className="rounded-full bg-primary/15 px-3 py-0.5 text-xs font-medium text-accent-foreground">
                  {e.years}
                </span>
              </div>
              <p className="mt-1 font-medium">{e.school}</p>
              <p className="text-sm text-muted-foreground">{e.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}