import React from "react";

// Sections
import Hero from "@/sections/home/Hero";
import About from "@/sections/home/About";

export const metadata = {
  title: "AI Engineer and Consultant - Portfolio",
  description: "Explore my journey in AI engineering, consultancy, and innovation. Discover my projects, ventures, experiences, and technical expertise.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}
