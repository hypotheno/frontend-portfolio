import { Briefcase, Clapperboard, Crown, Gamepad2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const hobbies = [
  {
    title: "Chess",
    icon: Crown,
    text: "I enjoy playing chess because it trains patience, planning ahead, and thinking through every move.",
    tags: ["Strategy", "Focus"],
  },
  {
    title: "Online Games",
    icon: Gamepad2,
    text: "Gaming is how I relax and bond with friends through competitive team play.",
    tags: ["Mobile Legends", "Call of Duty: Mobile", "and more"],
  },
  {
    title: "K-Drama & Movies",
    icon: Clapperboard,
    text: "I love watching K-dramas and movies on Netflix, especially stories with great characters and plot twists.",
    tags: ["Netflix", "K-Drama", "Movies"],
  },
];

const services = [
  "Thesis consulting and guidance",
  "Data organization and formatting",
  "Paper and document formatting",
];

export default function Hobbies() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <p className="text-sm font-medium text-primary">Outside the classroom</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Hobbies
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          What I do for fun, and the side hustle that keeps me busy.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {hobbies.map(({ title, icon: Icon, text, tags }) => (
          <Card key={title} className="transition-colors hover:border-primary">
            <CardHeader>
              <span className="mb-2 flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Icon className="size-6" />
              </span>
              <CardTitle className="text-lg">{title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-primary/40 bg-accent/40">
        <CardHeader>
          <span className="mb-2 flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Briefcase className="size-6" />
          </span>
          <CardTitle className="text-xl">
            Side Hustle: Thesis Consultant / Data &amp; Formatting Consultant
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm leading-relaxed text-muted-foreground">
            I help students make their thesis and papers clean, organized, and
            ready for submission.
          </p>
          <ul className="grid gap-2 text-sm sm:grid-cols-3">
            {services.map((s) => (
              <li
                key={s}
                className="rounded-lg border bg-card px-3 py-2 font-medium"
              >
                {s}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}