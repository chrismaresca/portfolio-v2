// Next and React
import Link from "next/link";
import React from "react";

// Icons
import { Github, Linkedin, X } from "@/components/social-icons";

// Constants
import { COPYRIGHT_YEAR, X_URL, GITHUB_URL, LINKEDIN_URL } from "@/constants";

export default function MainFooter() {
  return (
    <section className="c-space pt-7 pb-10 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>© {COPYRIGHT_YEAR} Chris Maresca</p>
      </div>
      <div className="flex gap-3">
        <Link href={X_URL} className="social-icon" target="_blank" rel="noreferrer">
          <X />
        </Link>
        <Link href={GITHUB_URL} className="social-icon" target="_blank" rel="noreferrer">
          <Github />
        </Link>
        <Link href={LINKEDIN_URL} className="social-icon" target="_blank" rel="noreferrer">
          <Linkedin />
        </Link>
      </div>
    </section>
  );
}
