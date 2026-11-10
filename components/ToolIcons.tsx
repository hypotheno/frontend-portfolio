/* eslint-disable @next/next/no-img-element */
type Tool = { name: string; icon: string; mono?: boolean };

export default function ToolIcons({ items }: { items: Tool[] }) {
  return (
    <ul className="flex flex-wrap gap-3">
      {items.map((t) => (
        <li key={t.name} className="group relative" title={t.name}>
          <div className="grid size-12 place-items-center rounded-xl border bg-card transition duration-200 hover:-translate-y-0.5 hover:border-emerald-500/60">
            <img
              src={t.icon}
              alt={t.name}
              className={`size-6 ${t.mono ? "dark:invert" : ""}`}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}