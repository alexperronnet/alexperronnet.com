type WebUrl = `https://${string}`;

interface SiteConfig {
  archive: readonly { label: string; href: WebUrl }[];
  birthDates: { age: string; blueAge: string };
  carbon: { href: WebUrl; rating: string; testedOn: string };
  description: string;
  email: `${string}@${string}`;
  introduction: readonly string[];
  name: string;
  personalNote: string;
  repository: WebUrl;
  resumes: readonly { label: string; language: string; href: WebUrl }[];
  role: string;
  social: readonly { label: string; href: WebUrl }[];
  socialImage: { path: string; width: number; height: number; alt: string };
  url: WebUrl;
  visitorClock: boolean;
}

export const site = {
  archive: [
    { href: "https://v1.alexperronnet.com", label: "v1" },
    { href: "https://v2.alexperronnet.com", label: "v2" },
  ],
  birthDates: { age: "1995-07-26", blueAge: "2021-06-21" },
  carbon: {
    href: "https://www.websitecarbon.com/website/alexperronnet-com/",
    rating: "A+",
    testedOn: "2026-09-20",
  },
  description:
    "Software engineer and indie hacker based in France. I build web and mobile products with thoughtful design and a little help from AI.",
  email: "hello@alexperronnet.com",
  introduction: [
    "Hey, I'm Alexandre. I'm {age}, a software engineer and indie hacker from New Caledonia, now calling France home.",
    "I build web and mobile products, from the interface to the API. I have a soft spot for clean architecture and the small details that make software feel good. I also build independent products of my own.",
    "I'm an AI-augmented engineer: tools and agents are part of how I think, prototype, and ship. They help me move faster; I stay hands-on with the code and the decisions behind it.",
  ],
  name: "Alexandre Perronnet",
  personalNote:
    "I share my home with Blue, my {blueAge}-year-old Border Collie. If you'd like to talk code, side projects, or dogs, say hello.",
  repository: "https://github.com/alexperronnet/alexperronnet.com",
  resumes: [
    {
      href: "https://rxresu.me/aperronnet/alexandre-perronnet-resume-en-with-photo",
      label: "English",
      language: "en",
    },
    {
      href: "https://rxresu.me/aperronnet/alexandre-perronnet-resume-fr-with-photo",
      label: "French",
      language: "fr",
    },
  ],
  role: "Software Engineer & Indie Hacker",
  social: [
    { href: "https://github.com/alexperronnet", label: "GitHub" },
    { href: "https://www.linkedin.com/in/alexperronnet/", label: "LinkedIn" },
  ],
  socialImage: {
    alt: "Alexandre Perronnet — Software Engineer & Indie Hacker, based in France.",
    height: 630,
    path: "/og.png",
    width: 1200,
  },
  url: "https://www.alexperronnet.com",
  visitorClock: true,
} as const satisfies SiteConfig;
