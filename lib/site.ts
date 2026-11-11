import {
  UserRound, Target, Dumbbell, ClipboardList, TrendingUp, Gamepad2, Code,
  Footprints, Headphones, MapPin, GraduationCap, Languages, Cake, Quote,
  Coffee, FileSpreadsheet, FileText, Calculator, Lightbulb, Table as TableIcon,
  ImageIcon,
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
  email: "nbelen@gbox.ncf.edu.ph",
  avatar: "/profile.jpg",
};

/* ---------------- TOOLS & PROJECT (same as before) ---------------- */
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
  live: "", // TODO: Vercel link ng RE:BOOT
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

/* ---------------- ABOUT: GALLERY ---------------- */
// Dagdagan ng photos sa /public/about
export const gallery = [
  { src: "/about/coding.jpg", caption: "Coding", className: "col-span-2 row-span-2" },
  { src: "/about/workout.jpg", caption: "Workout", className: "" },
  { src: "/about/healthy.jpg", caption: "Healthy", className: "" },
  { src: "/profile.jpg", caption: "Me", className: "col-span-2" },
  { src: "/about/bicep.jpg", caption: "Bicep", className: "col-span-2 row-span-2" },
  { src: "/about/progress.jpg", caption: "Progress", className: "col-span-2 row-span-2" },
  { src: "/about/backmcle.jpg", caption: "BackMuscle", className: "col-span-4 row-span-6" },
];

/* ---------------- ABOUT: ALL ABOUT ME ---------------- */
export const bio =
  "BSIT student who turns ideas into clean, useful web apps."; // TODO: palitan

export const facts = [
  { icon: MapPin, label: "From", value: "Del Rosario, Pamplona, Camarines Sur" }, // TODO
  { icon: GraduationCap, label: "Course", value: "BSIT · NCF" },
  { icon: Cake, label: "Birthday", value: "December 25, 2005" }, // TODO
  { icon: Languages, label: "Languages", value: "Bikol · Filipino · English" }, // TODO
  { icon: Code, label: "Learning", value: "Next.js · MySQL" }, // TODO
  { icon: Target, label: "Goal", value: "Become a full-stack developer" }, // TODO
  { icon: Coffee, label: "Fuel", value: "Chess & music" }, // TODO
  { icon: Quote, label: "Motto", value: "Better habits, stronger you." }, // TODO
];

/* ---------------- ABOUT: SIDE HUSTLE ---------------- */
export const services = [
  {
    icon: TrendingUp,
    title: "Data Analyst",
    subtitle: "Statistical Consultant",
    skills: [
      { icon: FileSpreadsheet, label: "Excel" },
      { icon: Calculator, label: "Computations" },
      { icon: Lightbulb, label: "Interpretation" },
    ],
  },
  {
    icon: FileText,
    title: "Thesis Formatter",
    subtitle: "Document Specialist",
    skills: [
      { icon: FileText, label: "Word" },
      { icon: TableIcon, label: "Tables" },
      { icon: ImageIcon, label: "Figures" },
    ],
  },
];

/* ---------------- ABOUT: FAVORITE MUSIC ---------------- */
export type Song = {
  title: string;
  artist: string;
  cover?: string;   // "/music/consume.jpg" (file sa public/music)
  audio?: string;   // "/music/consume.mp3" -> custom player
  spotify?: string; // Spotify track ID -> embed player + auto cover
};

export const songs: Song[] = [
  { title: "Consume", artist: "Chase Atlantic", spotify: "0X2bh8NVQ8svDQIn2AdCbW" }, // TODO
  { title: "Ultraviolence", artist: "Lana Del Rey", spotify: "1y3r6RXiJZNBV1EI0NggpS" }, // TODO
  { title: "The Morning", artist: "The Weeknd", spotify: "6u0dQik0aif7FQlrhycG1L" }, // TODO
  { title: "Right and a Wrong Way", artist: "Keith Sweat", spotify: "6gTWAUYQMAQV3Cw2t5kWrx" }, // TODO
];

/* ---------------- ABOUT: FAVORITE GAMES ---------------- */
export const games = [
  {
    name: "Call of Duty: Mobile",
    logo: "/logos/codm.webp",
    genre: "FPS",
    ign: "NiNU", // TODO
    rank: "Grandmaster", // TODO
    since: "2020", // TODO
    fav: "Shotgun / Multiplayer", // TODO
  },
  {
    name: "Mobile Legends",
    logo: "/logos/ml.png",
    genre: "MOBA",
    ign: "Consume", // TODO
    rank: "Mythical Immortal(216 star)", // TODO
    since: "2018", // TODO
    fav: "Main hero - Khufra / role - Roamer", // TODO
  },
  {
    name: "Honor of Kings",
    logo: "/logos/hok.png",
    genre: "MOBA",
    ign: "NiNU", // TODO
    rank: "Master", // TODO
    since: "2025", // TODO
    fav: "Main hero - Musashi / Any Role", // TODO
  },
  {
    name: "Chess.com",
    logo: "/logos/chess.jpeg",
    genre: "Strategy",
    ign: "NiNUUH", // TODO
    rank: "Blitz-1172 | Rapid-1864 | Bullet-1755", // TODO
    since: "2024", // TODO
    fav: "Blitz / Rapid"
  },
];

/* ---------------- EDUCATION ---------------- */
// TODO: i-check ang totoong filenames sa public/logos
export const education = [
  {
    logo: "/logos/dr-elementary.png",
    school: "Del Rosario Elementary School",
    level: "Elementary",
    years: "2013 – 2018",
    place: "Del Rosario, Pamplona, Camarines Sur",
    highlights: ["Achievers", "Kab Scouts", "Representative of CHESS 2nd congressional district in the division meet"],
  },
  {
    logo: "/logos/del-rosario-.jpeg",
    school: "Del Rosario National High School",
    level: "Junior High",
    years: "2019 – 2022",
    place: "Del Rosario, Pamplona, Camarines Sur",
    highlights: ["With Honor", "Representative of CHESS Pamplona district in the 2nd Congressional meet"],
  },
  {
    logo: "/logos/pamplona.jpeg",
    school: "Pamplona National School",
    level: "Senior High",
    years: "2023 – 2024",
    place: "Poblacion, Pamplona, Camarines Sur",
    highlights: ["ICT - Computer System Servicing", "With High Honor"],
  },
  {
    logo: "/logos/ncf.jpeg",
    school: "Naga College Foundation Inc.",
    level: "BSIT",
    years: "2025 – Present",
    place: "Naga City, Camarines Sur",
    highlights: ["Built RE:BOOT", "Dean Lister", "Representative of CHESS College of Computer Studies department"],
  },
];

/* ---------------- HOBBIES ---------------- */
export const hobbies = [
  {
    icon: Gamepad2,
    label: "Gaming",
    tagline: "Where I unwind and compete.",
    since: "2019",
    facts: ["CODM and Mobile Legends are my main games", "I play for teamwork and strategy", "Improve my communication skills"],
  },
  {
    icon: Code,
    label: "Coding",
    tagline: "Turning ideas into working apps.",
    since: "2026",
    facts: ["Built RE:BOOT with Next.js and MySQL", "Currently learning more full-stack", "Improve my problem-solving skills"],
  },
  {
    icon: Footprints,
    label: "Running",
    tagline: "Clears my head after long screen time.",
    since: "2024",
    facts: ["Favorite route or place", "4 km", "Improve my endurance and stamina"],
  },
  {
    icon: Dumbbell,
    label: "Fitness",
    tagline: "Better habits, stronger me.",
    since: "2023",
    facts: ["Push, Pull, and Legs", "Bulking", "Improve my strength and muscle mass"],
  },
  {
    icon: Headphones,
    label: "Music",
    tagline: "Always has a playlist on.",
    since: "Always",
    facts: ["Mood/Dark R&B", "Alternative", "Cinematic Pop"],
  },
];

/* ---------------- CONTACT ---------------- */
export const socials = [
  { name: "GitHub", href: "https://github.com/hypotheno", icon: simple("github"), mono: true },
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61590484050688", icon: simple("facebook", "1877F2") }, // TODO
  { name: "LinkedIn", href: "https://www.linkedin.com/in/niño-belen-a1ba0744a", icon: devicon("linkedin/linkedin-original.svg") }, // TODO
];