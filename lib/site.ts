import {
  UserRound, Target, Dumbbell, ClipboardList, TrendingUp,
  Gamepad2, Code, Footprints, Headphones,
} from "lucide-react";

const devicon = (p: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${p}`;
const simple = (name: string, color = "") =>
  `https://cdn.simpleicons.org/${name}${color ? "/" + color : ""}`;

export const site = {
  brand: "PawNino",
  name: "Niño M. Belen",
  role: "BSIT Student · Web Developer",
  school: "Naga College Foundation Inc.",
  email: "nbelen@gbox.ncf.edu.ph", // TODO
  avatar: "/profile.jpg",
};

// mono: true = black icon, nagiging puti sa dark mode
export const tools = [
  { name: "Next.js", icon: devicon("nextjs/nextjs-original.svg"), mono: true },
  { name: "React", icon: devicon("react/react-original.svg") },
  { name: "TypeScript", icon: devicon("typescript/typescript-original.svg") },
  { name: "Tailwind CSS", icon: devicon("tailwindcss/tailwindcss-original.svg") },
  { name: "shadcn/ui", icon: simple("shadcnui"), mono: true },
  { name: "MySQL", icon: devicon("mysql/mysql-original.svg") },
  { name: "Git", icon: devicon("git/git-original.svg") },
  { name: "GitHub", icon: devicon("github/github-original.svg"), mono: true },
  { name: "Vercel", icon: devicon("vercel/vercel-original.svg"), mono: true },
];

export const project = {
  name: "RE:BOOT",
  outcome: "Turns sedentary habits into tracked, visible progress.",
  image: "/about/workout.jpg",
  github: "https://github.com/hypotheno/REBOOT",
  live: "", // TODO: ilagay ang Vercel link ng RE:BOOT; kapag walang laman, hindi lalabas ang button
  outcomes: [
    { icon: UserRound, label: "Profiles" },
    { icon: Target, label: "Goals" },
    { icon: Dumbbell, label: "Workouts" },
    { icon: ClipboardList, label: "Logs" },
    { icon: TrendingUp, label: "Progress" },
  ],
  stack: tools.filter((t) =>
    ["Next.js", "React", "TypeScript", "Tailwind CSS", "MySQL"].includes(t.name)
  ),
};

// Idagdag ang mas maraming photos sa /public/about at ilagay dito
export const gallery = [
  { src: "/about/coding.jpg", caption: "Coding", className: "col-span-2 row-span-2" },
  { src: "/about/workout.jpg", caption: "Workout", className: "" },
  { src: "/about/healthy.jpg", caption: "Healthy", className: "" },
  { src: "/profile.jpg", caption: "Me", className: "col-span-2" },
];

// TODO: palitan ng totoong favorites mo. Optional ang cover (e.g. "/songs/a.jpg")
export const songs = [
  { title: "Consume", artist: "Artist", cover: "Chase Atlantic" },
  { title: "Favorite Song 2", artist: "Artist", cover: "" },
  { title: "Favorite Song 3", artist: "Artist", cover: "" },
  { title: "Favorite Song 4", artist: "Artist", cover: "" },
];

// Rename mo ang files sa /public/logos para tumugma, o palitan ang paths dito
export const games = [
  { name: "Call of Duty: Mobile", logo: "/logos/codm.webp" },
  { name: "Mobile Legends", logo: "/logos/ml.png" },
];

export const education = [
  { logo: "/logos/dr-elementary.jpeg", school: "Del Rosario Elementary School", level: "Elementary", years: "20XX – 20XX" },
  { logo: "/logos/del-rosario.jpeg", school: "Del Rosario National High School", level: "Junior High", years: "20XX – 20XX" },
  { logo: "/logos/pamplona.jpeg", school: "Pamplona NationalSchool", level: "Senior High", years: "20XX – 20XX" },
  { logo: "/logos/ncf.jpeg", school: "Naga College Foundation Inc.", level: "BSIT", years: "20XX – Present" },
];

export const hobbies = [
  { icon: Gamepad2, label: "Gaming" },
  { icon: Code, label: "Coding" },
  { icon: Footprints, label: "Running" },
  { icon: Dumbbell, label: "Fitness" },
  { icon: Headphones, label: "Music" },
];

export const socials = [
  { name: "GitHub", href: "https://github.com/hypotheno", icon: simple("github"), mono: true },
  { name: "Facebook", href: "https://facebook.com/", icon: simple("facebook", "1877F2") }, // TODO
  { name: "LinkedIn", href: "https://linkedin.com/in/", icon: simple("linkedin", "0A66C2") }, // TODO
];