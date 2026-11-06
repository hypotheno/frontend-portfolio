import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EntityDrawer, { type Entity } from "@/components/EntityDrawer";
import Image from "next/image";

const features = [
  "User Profile & Metrics",
  "Goal Setting & Tracking",
  "Exercise Central Repository",
  "Structured Workout Plans",
  "Activity Logging & History",
];

const entities: Entity[] = [
  {
    name: "USERS",
    text: "Personal details, authentication, body data",
    relationship: "1:N Optional with goals and activity_logs. A user can have zero or many of each.",
    columns: [
      { name: "user_id", type: "INT", key: "PK", note: "AUTO_INCREMENT" },
      { name: "full_name", type: "VARCHAR(100)", note: "NOT NULL" },
      { name: "email", type: "VARCHAR(100)", note: "NOT NULL, UNIQUE" },
      { name: "password_hash", type: "VARCHAR(255)", note: "NOT NULL" },
      { name: "weight_kg", type: "DECIMAL(5,2)" },
      { name: "height_cm", type: "DECIMAL(5,2)" },
      { name: "created_at", type: "TIMESTAMP", note: "DEFAULT CURRENT_TIMESTAMP" },
    ],
  },
  {
    name: "GOALS",
    text: "Fitness milestones, target dates & status",
    relationship: "Each goal belongs to one user (goals.user_id → users.user_id, ON DELETE CASCADE).",
    columns: [
      { name: "goal_id", type: "INT", key: "PK", note: "AUTO_INCREMENT" },
      { name: "user_id", type: "INT", key: "FK", note: "NOT NULL" },
      { name: "goal_type", type: "VARCHAR(50)", note: "NOT NULL" },
      { name: "target_value", type: "VARCHAR(50)" },
      { name: "target_date", type: "DATE" },
      { name: "status", type: "ENUM", note: "Active, Completed, Cancelled" },
      { name: "created_at", type: "TIMESTAMP" },
    ],
  },
  {
    name: "EXERCISES",
    text: "Standardized exercise catalog & calories",
    relationship: "1:N Optional with activity_logs, and N:M with workout_plans through plan_exercises.",
    columns: [
      { name: "exercise_id", type: "INT", key: "PK", note: "AUTO_INCREMENT" },
      { name: "exercise_name", type: "VARCHAR(100)", note: "NOT NULL" },
      { name: "category", type: "VARCHAR(50)", note: "NOT NULL" },
      { name: "calories_per_minute", type: "DECIMAL(4,2)", note: "NOT NULL" },
      { name: "description", type: "TEXT" },
    ],
  },
  {
    name: "WORKOUT_PLANS",
    text: "Structured fitness routines",
    relationship: "N:M with exercises. A plan contains many exercises (resolved via plan_exercises).",
    columns: [
      { name: "plan_id", type: "INT", key: "PK", note: "AUTO_INCREMENT" },
      { name: "plan_name", type: "VARCHAR(100)", note: "NOT NULL" },
      { name: "difficulty_level", type: "ENUM", note: "Beginner, Intermediate, Advanced" },
      { name: "target_goal", type: "VARCHAR(50)" },
      { name: "created_at", type: "TIMESTAMP" },
    ],
  },
  {
    name: "PLAN_EXERCISES",
    text: "Junction entity mapping exercises, sets, and reps to workout plans",
    relationship: "Junction table with composite PK (plan_id, exercise_id). Both FKs use ON DELETE CASCADE.",
    columns: [
      { name: "plan_id", type: "INT", key: "PK", note: "FK → workout_plans" },
      { name: "exercise_id", type: "INT", key: "PK", note: "FK → exercises" },
      { name: "sets", type: "INT", note: "DEFAULT 3" },
      { name: "reps", type: "INT", note: "DEFAULT 10" },
    ],
  },
  {
    name: "ACTIVITY_LOGS",
    text: "Workout execution, duration & calories",
    relationship: "Each log belongs to one user and one exercise (1:N Optional from both).",
    columns: [
      { name: "log_id", type: "INT", key: "PK", note: "AUTO_INCREMENT" },
      { name: "user_id", type: "INT", key: "FK", note: "NOT NULL" },
      { name: "exercise_id", type: "INT", key: "FK", note: "NOT NULL" },
      { name: "duration_minutes", type: "INT", note: "NOT NULL" },
      { name: "calories_burned", type: "DECIMAL(6,2)" },
      { name: "date_completed", type: "DATE", note: "NOT NULL" },
      { name: "created_at", type: "TIMESTAMP" },
    ],
  },
];

export default function About() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <span className="inline-block rounded-full bg-primary/15 px-3 py-1 text-sm font-medium text-accent-foreground">
          Better habits / Stronger you
        </span>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          About RE<span className="text-primary">:</span>BOOT
        </h1>
        <p className="max-w-2xl leading-relaxed text-muted-foreground">
          RE:BOOT is a database-driven wellness and fitness tracking system
          tailored for IT students and digitally active young adults. It
          addresses sedentary habits and irregular physical exercise by
          providing a centralized platform for profiles, goals, workout plans,
          activity logs, and progress monitoring.
        </p>
      </div>

      {/* PHOTO COLLAGE */}
      <section className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:grid-rows-2">
        <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-2xl border sm:row-span-2 sm:aspect-auto sm:min-h-72">
          <Image
            src="/about/workout.jpg"
            alt="Students doing a workout together"
            fill
            sizes="(min-width: 640px) 66vw, 100vw"
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <p className="text-sm font-semibold text-white">
              Turn everyday activity into progress
            </p>
          </div>
        </div>

        <div className="relative aspect-square overflow-hidden rounded-2xl border sm:aspect-auto">
          <Image
            src="/about/coding.jpg"
            alt="Student coding on a laptop"
            fill
            sizes="(min-width: 640px) 33vw, 50vw"
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
            <p className="text-xs font-semibold text-white">Long hours at the screen</p>
          </div>
        </div>

        <div className="relative aspect-square overflow-hidden rounded-2xl border sm:aspect-auto">
          <Image
            src="/about/healthy.jpg"
            alt="Person staying active outdoors"
            fill
            sizes="(min-width: 640px) 33vw, 50vw"
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
            <p className="text-xs font-semibold text-white">Better habits</p>
          </div>
        </div>
      </section>

      {/* MEET THE DEVELOPER */}
      <section className="flex flex-col items-center gap-6 rounded-2xl border bg-card p-6 sm:flex-row sm:p-8">
        <div className="relative size-32 shrink-0 overflow-hidden rounded-full border-4 border-primary/60 sm:size-36">
          <Image
            src="/profile.jpg"
            alt="Niño M. Belen"
            fill
            sizes="144px"
            className="object-cover"
          />
        </div>
        <div className="space-y-2 text-center sm:text-left">
          <p className="text-sm font-medium text-primary">Meet the developer</p>
          <h2 className="text-xl font-bold">Niño M. Belen</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            BSIT student from Naga College Foundation Inc. who built RE:BOOT to show how everyday
            physical activity can become structured, measurable data for IT
            students who spend long hours on their computers.
          </p>
        </div>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Key Features</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid gap-2 text-sm sm:grid-cols-2">
            {features.map((f, i) => (
              <li key={f} className="flex items-center gap-3">
                <span className="flex size-6 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-accent-foreground">
                  {i + 1}
                </span>
                {f}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">System Entities</h2>
          <p className="text-sm text-muted-foreground">
            Click an entity to open its table structure.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {entities.map((e) => (
            <EntityDrawer key={e.name} entity={e} />
          ))}
        </div>
      </section>
    </div>
  );
}