"use client";
import React from "react";
import Link from "next/link";

// Socials
import { Github, Linkedin, X } from "@/components/social-icons";

// Constants
import { HERO_TITLE, HERO_SUBTITLE } from "@/constants/website";

export default function HeroTag() {
  return (
    <div className="w-full mx-auto flex flex-col items-center mt-56 gap-3 text-center">
      {/* Step 1: Title */}
      <h1
        id="hero-h1"
        className="
          text-white 
          font-bold 
          text-6xl 
          sm:text-8xl 
          tracking-tighter
          motion-opacity-in-0 
          motion-translate-y-in-100
          motion-duration-[1000ms] 
          motion-ease-[ease-in-out] 
          motion-delay-[500ms]
        "
      >
        {HERO_TITLE}
      </h1>

      <p
        id="hero-p"
        className="
          text-gray-300 
          md:mt-2
          tracking-tighter
          text-xl
          md:text-2xl 
          max-w-xl
          lg:max-w-full
          px-8
          motion-opacity-in-0 
          motion-translate-y-in-100
          motion-duration-[1000ms] 
          motion-ease-[ease-in-out] 
          motion-delay-[1400ms]
        "
      >
        {HERO_SUBTITLE}
      </p>

      <div
        id="hero-icons"
        className="
          mt-2
          flex 
          gap-6
          motion-opacity-in-0 
          motion-translate-y-in-100
          motion-duration-[1000ms] 
          motion-ease-[ease-in-out] 
          motion-delay-[2100ms]
        "
      >
        <Link className="group -m-1 p-1" aria-label="Follow on X" href="https://x.com/TheChrisMaresca" target="_blank" rel="noreferrer">
          <X />
        </Link>
        <Link className="group -m-1 p-1" aria-label="Follow on GitHub" href="https://github.com/chrismaresca" target="_blank" rel="noreferrer">
          <Github />
        </Link>
        <Link className="group -m-1 p-1" aria-label="Follow on LinkedIn" href="https://www.linkedin.com/in/chris-maresca/" target="_blank" rel="noreferrer">
          <Linkedin />
        </Link>
      </div>
    </div>
  );
}
