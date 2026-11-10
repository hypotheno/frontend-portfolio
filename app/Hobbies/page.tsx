import { hobbies } from "@/lib/site";

export default function HobbiesPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 md:py-14">
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-5">
        {hobbies.map(({ icon: Icon, label }, i) => (
          <li
            key={label}
            className="fade-up group flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl border bg-card transition duration-200 hover:-translate-y-1 hover:border-emerald-500/60"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <Icon className="size-10 text-emerald-500 transition group-hover:scale-110" />
            <span className="text-sm font-medium">{label}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}