"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/Home", label: "Home" },
  { href: "/About", label: "About" },
  { href: "/Education", label: "Education" },
  { href: "/Hobbies", label: "Hobbies" },
  { href: "/Contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-3">
        <Link href="/Home" className="text-lg font-extrabold tracking-tight">
          RE<span className="text-primary">:</span>BOOT
        </Link>

        <ul className="order-3 flex w-full items-center justify-between gap-1 text-sm sm:order-none sm:w-auto sm:justify-start">
          {links.map((link) => {
            const active =
              pathname === link.href ||
              (link.href === "/Home" && pathname === "/");
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "rounded-full px-3 py-1.5 transition-colors",
                    active
                      ? "bg-primary/15 font-semibold text-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <ThemeToggle />
      </nav>
    </header>
  );
}