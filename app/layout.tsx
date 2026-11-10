import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "PawNino | Portfolio",
  description:
    "Personal portfolio of Niño M. Belen (PawNino), featuring RE:BOOT, education, and hobbies.",
};

const themeScript = `
(function () {
  try {
    var t = localStorage.getItem("theme");
    var dark = t ? t === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", dark);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={geist.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-screen flex-col bg-background font-sans text-foreground antialiased">
        <Navbar />
        <div className="flex-1">{children}</div>
        <footer className="border-t py-6 text-center text-sm text-muted-foreground">
          © 2026 PawNino
        </footer>
      </body>
    </html>
  );
}