// React and Next
import React from "react";

// Components
import HeroTag from "@/components/home/HeroTag";

function BackgroundGrid() {
  return (
    <div
      className="absolute inset-0 bg-[linear-gradient(to_right,#151515_1px,transparent_1px),linear-gradient(to_bottom,#151515_1px,transparent_1px)] bg-[size:4rem_4rem]"
      style={{
        maskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
      }}
    />
  );
}

export default function Hero() {
  return (
    <>
      <BackgroundGrid />
      <section className="max-h-screen h-dvh w-full flex flex-col relative" id="hero">
        {/* Hero Tag */}
        <HeroTag />
        {/* Sections */}
      </section>
    </>
  );
}
