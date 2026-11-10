"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, GraduationCap, Gamepad2, Mail, PawPrint } from "lucide-react";
import ThemeToggle from "./ThemeToggle"; // kung named export ito: import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "/Home", label: "Home", icon: Home },
  { href: "/About", label: "About", icon: User },
  { href: "/Education", label: "Education", icon: GraduationCap },
  { href: "/Hobbies", label: "Hobbies", icon: Gamepad2 },
  { href: "/Contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const pathname = usePathname() ?? "/";
  const isActive = (href: string) =>
    pathname.toLowerCase().startsWith(href.toLowerCase()) ||
    (pathname === "/" && href === "/Home");

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/Home" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="grid size-8 place-items-center rounded-lg bg-emerald-500 text-white">
            <PawPrint className="size-4" />
          </span>
          <span>Paw<span className="text-emerald-500">Nino</span></span>
        </Link>

        <nav className="flex items-center gap-1">
          {links.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              aria-label={label}
              aria-current={isActive(href) ? "page" : undefined}
              className={`flex items-center gap-2 rounded-full px-3 py-2 text-sm transition-colors ${
                isActive(href)
                  ? "bg-emerald-500/15 font-medium text-emerald-500"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="size-4" />
              <span className="hidden sm:inline">{label}</span>
            </Link>
          ))}
          <div className="ml-2"><ThemeToggle /></div>
        </nav>
      </div>
    </header>
  );
}