// Website Content Constants

import { WORK_WITH_ME_URL } from "@/constants/social";

// Copyright Year
export const COPYRIGHT_YEAR = "2024";

const DEFAULT_METADATA_TITLE = "Chris Maresca";
const DEFAULT_METADATA_DESCRIPTION = "A space dedicated to building, learning, and exploring my curiosities.";
const DEFAULT_METADATA_URL = "www.chrismaresca.dev";

export const DEFAULT_METADATA = {
  title: DEFAULT_METADATA_TITLE,
  description: DEFAULT_METADATA_DESCRIPTION,
  openGraph: {
    title: DEFAULT_METADATA_TITLE,
    description: DEFAULT_METADATA_DESCRIPTION,
    type: "website",
    locale: "en_US",
    siteName: DEFAULT_METADATA_TITLE,
    url: DEFAULT_METADATA_URL,
  },
  twitter: {
    title: DEFAULT_METADATA_TITLE,
    description: DEFAULT_METADATA_DESCRIPTION,
  },
  alternates: {
    canonical: DEFAULT_METADATA_URL,
  },
};

// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// Nav Link Type
export type NavLink = {
  name: string;
  href: string;
  target?: string;
};

// Nav Links
export const navItems: NavLink[] = [
  {
    name: "About",
    href: "/#about",
    target: "_self",
  },
  {
    name: "Articles",
    href: "/articles",
    target: "_self",
  },
  {
    name: "Work with me",
    href: WORK_WITH_ME_URL,
    target: "_blank",
  },
];

// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// HOME PAGE

// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// Hero Constants
export const HERO_TITLE = "BUILDING";
export const HERO_SUBTITLE = "Building the future through artificial intelligence and design";

// LOCATION INFO
export const LOCATION_TITLE = "Based in New York";
export const LOCATION_DESC = "Focused on connecting and collaborating with others passionately crafting world-class user experiences with AI.";

// TECH STACK
export const TECH_STACK_TITLE = "Tech Stack";
export const TECH_STACK_DESC = "The languages and frameworks that form the foundation of my work.";

// WRITING
export const WRITING_TITLE = "What I'm Writing";
export const WRITING_IMAGE = "https://yrrzp4zqlhg33gdn.public.blob.vercel-storage.com/blog2-BwXUoxDQx6yK8P1xbDWTClEK45RAjw.png";

// QUOTE
// TODO: make list of quotes to loop through with animation
export const ABOUT_QUOTE = "Build the future";

// WORK WITH ME
export const WORK_WITH_ME_TITLE = "Work with me";

// VENTURES
export const VENTURES_TITLE = "Ventures & Experiences";
export const VENTURES_DESC = "....";

// VENTURES
export type Venture = {
  id: number;
  title: string;
  subtitle: string;
  href: string;
  badge?: string;
  target?: string;
};

// VENTURES
export const VENTURES: Venture[] = [
  {
    id: 1,
    title: "AI Arch",
    subtitle: "AI Consultancy Built For Founders",
    href: "https://www.architects.dev/",
    target: "_blank",
    badge: "Founder",
  },
  {
    id: 2,
    title: "Coming Soon...",
    subtitle: "Natural Language AI Automation For Everybody.",
    href: "",
    target: "_blank",
    badge: "Founder",
  },
  // {
  //   id: 3,
  //   title: "Coming Soon...",
  //   subtitle: "AI Content Marketer",
  //   href: "",
  //   target: "_blank",
  //   badge: "Founder",
  // },
  {
    id: 4,
    title: "1mind",
    subtitle: "AI Engineer building Superhuman GTM and Sales Engineers",
    href: "https://www.1mind.com/",
    target: "_blank",
  },

  {
    id: 5,
    title: "Nectar AI",
    subtitle: "AI Engineer Consulting",
    href: "https://nectarclimate.com/",
    target: "_blank",
  },
  {
    id: 6,
    title: "BlackRock",
    subtitle: "Fixed Income Analyst on the macro strategy team",
    href: "https://www.blackrock.com",
    target: "_blank",
  },
];

// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// ARTICLES

export const ARTICLES_TITLE = "Writing on artificial intelligence, product design, and just about anything I find interesting.";
export const ARTICLES_MOBILE_TITLE = "Writing on AI, product design, and just about anything I find interesting.";

export const ARTICLES_DESC = "My reflections on the art of building — from AI and design, to the curiosities that shape my journey.";
// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------

// ARTICLES DEFAULT METADATA

const DEFAULT_ARTICLES_METADATA_TITLE = "Articles";
const DEFAULT_ARTICLES_METADATA_DESCRIPTION = "Articles about artificial intelligence and reflections on the art of building.";
const DEFAULT_ARTICLES_METADATA_URL = "/articles";

export const ARTICLES_DEFAULT_METADATA = {
  title: ARTICLES_TITLE,
  description: ARTICLES_DESC,
  openGraph: {
    title: DEFAULT_ARTICLES_METADATA_TITLE,
    description: DEFAULT_ARTICLES_METADATA_DESCRIPTION,
    url: DEFAULT_ARTICLES_METADATA_URL,
  },
  twitter: {
    title: DEFAULT_ARTICLES_METADATA_TITLE,
    description: DEFAULT_ARTICLES_METADATA_DESCRIPTION,
  },
  alternates: {
    canonical: DEFAULT_ARTICLES_METADATA_URL,
  },
};

// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// ARTICLE PAGE

// export const LOCATION_
