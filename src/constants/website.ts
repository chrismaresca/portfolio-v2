// Website Content Constants

import { WORK_WITH_ME_URL } from "@/constants/social";
import { Project } from "@/types";

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
    name: "Projects",
    href: "/projects",
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
    title: "Ares AI",
    subtitle: "AI For Personal Injury Lawyers",
    href: "https://areslegal.ai/",
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
// PROJECTS INFO

export const PROJECTS_TITLE = "The Playground of Ideas";
export const PROJECTS_MOBILE_TITLE = "The Playground of Ideas";
export const PROJECTS_DESC = "A dedicated space for my curiosities, experiments, and challenges.";
export const PROJECT_CTA = "Visit Project";

// PROJECTS DEFAULT METADATA
export const PROJECTS_DEFAULT_METADATA = {
  title: PROJECTS_TITLE,
  description: PROJECTS_DESC,
  openGraph: {
    title: PROJECTS_TITLE,
    description: PROJECTS_DESC,
    url: DEFAULT_ARTICLES_METADATA_URL,
  },
};

// PROJECTS

export const PROJECTS: Project[] = [
  {
    id: 0,
    title: "Ares AI",
    subtitle: "Vertical AI agent for personal injury lawyers. Co-founded with Karn Rahal, we've rapidly gained traction, securing three demo clients within our first week of launch.",
    projectUrl: "https://areslegal.ai/",
    target: "_blank",
    dateCreated: new Date("2025-02-20"),
    dateUpdated: new Date("2025-02-20"),
    delay: 0,
  },
  {
    id: 1,
    title: "AI First CMS Platform",
    subtitle:
      "Engineered a frontend dashboard and REST API using Next.js to centralize content creation and management with an AI-first approach. The platform includes a built-in markdown editor powered by TipTap, leveraging TipTap's AI features to capture and replicate user-specific writing styles, significantly accelerating content development. It also implements custom agentic web scrapers for knowledge retrieval and resource aggregation, streamlining the content generation process. Integrated with APIs from major blog providers (Medium, LinkedIn, Dev.to) to enable efficient distribution across multiple platforms.",
    projectUrl: "https://github.com/chrismaresca/AI-CMS-API-LIVE",
    target: "_blank",
    dateCreated: new Date("2024-12-20"),
    dateUpdated: new Date("2024-12-27"),
    delay: 0,
  },
  {
    id: 2,
    title: "Jarvis v2",
    subtitle:
      "Built a CLI tool that lets me control my computer with voice commands using OpenAI’s Real-Time API. It’s tailored for coding workflows like running shell commands, web scraping documentation, and saving it in an AI-friendly markdown format, as well as file and directory creation. Designed with a modular structure, it’s ready for adding more tools in future iterations. I also integrated the audio buffer mechanism from my Twilio Phone Assistant, ensuring smooth and responsive voice interactions, even when I interrupt the AI mid-task.",
    projectUrl: "https://github.com/chrismaresca/jarvis-v2",
    target: "_blank",
    dateCreated: new Date("2024-10-25"),
    dateUpdated: new Date("2024-10-30"),
    delay: 400,
  },
  {
    id: 3,
    title: "Architects.dev",
    subtitle: "A landing page for my AI consultancy business that I'm launching with a fellow engineer, built from scratch within a couple of hours using Next.js, Tailwind CSS, Framer Motion, and Rombo's Tailwind motion library.",
    projectUrl: "https://www.architects.dev/",
    target: "_blank",
    dateCreated: new Date("2024-12-18"),
    dateUpdated: new Date("2024-12-24"),
    delay: 100,
  },
  {
    id: 4,
    title: "Twilio Realtime​ AI Phone Assistant",
    subtitle: "Developed a Twilio Phone Assistant powered by OpenAI's Real-Time Assistant API to deliver immediate, context-aware responses during live phone conversations. The system is built with FastAPI to handle the API layer and Twilio for seamless call management. Implemented an integrated audio buffer to enhance interaction quality and effectively manage interruptions, improving the overall user experience.",
    projectUrl: "https://github.com/chrismaresca/twilio-realtime",
    target: "_blank",
    dateCreated: new Date("2024-11-30"),
    dateUpdated: new Date("2024-12-05"),
    delay: 200,
  },
  {
    id: 5,
    title: "AI Slide Creation Workflow",
    subtitle:
      "Developed an automated pipeline for generating tailored slide deck content from meeting transcripts and AI-generated notes (via Circleback.ai). Leveraged LlamaIndex with Pydantic output parsing, implemented prior to OpenAI's structured output response model. Built with FastAPI and Jinja2 templates for prompt templating, the system enables efficient slide content generation. The use of Jinja2 allows for highly flexible prompt injection, offering extensive customization to adapt outputs to specific requirements.",
    projectUrl: "https://github.com/chrismaresca/simpleLLMworkflow",
    target: "_blank",
    dateCreated: new Date("2024-11-15"),
    dateUpdated: new Date("2024-11-22"),
    delay: 300,
  },
  {
    id: 6,
    title: "RAG Knowledge Repository Orchestrator",
    subtitle: "A FastAPI Microservices Architecture leveraging Redis for messaging, enabling dynamic public and private knowledge repositories for Retrieval-Augmented Generation workflows. Integrates Pinecone for embeddings and Neo4j for graph-based data, with a scalable CI/CD pipeline for seamless deployment of containerized microservices.",
    projectUrl: "https://github.com/chrismaresca/knowledge-micro-ex",
    target: "_blank",
    dateCreated: new Date("2024-10-10"),
    dateUpdated: new Date("2024-11-21"),
    delay: 500,
  },
  {
    id: 7,
    title: "Continue Package Manager",
    subtitle: "A challenge that required me to build a basic package manager in 2 hours with Node.js and implement two commands: add (to add a package) and install (to install all packages). Decided to use a depth-first-search traversal algorithm for dependency management.",
    projectUrl: "https://github.com/chrismaresca/continue-package-manager",
    target: "_blank",
    dateCreated: new Date("2024-09-25"),
    dateUpdated: new Date("2024-09-28"),
    delay: 600,
  },
  {
    id: 8,
    title: "SaaS Landing Page with Framer Motion",
    subtitle: "An illustrative SaaS landing page I built to explore Framer Motion scroll animations and demonstrate smooth user interaction concepts.",
    projectUrl: "https://sass-lp-ex2.vercel.app/",
    target: "_blank",
    dateCreated: new Date("2024-09-15"),
    dateUpdated: new Date("2024-09-16"),
    delay: 700,
  },
];

// export const LOCATION_
