"use client";

import React, { useEffect } from "react";
import Link from "next/link";

// Constants
import { WORK_WITH_ME_TITLE, WORK_WITH_ME_URL } from "@/constants";

export default function WorkWithMe() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // metaKey indicates the Command key on macOS
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        window.open(WORK_WITH_ME_URL, '_blank');
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center space-y-2 group hover:scale-[1.02] transition-transform duration-300">
      <Link href={WORK_WITH_ME_URL} target="_blank" className="flex items-center gap-2 cursor-pointer">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute left-0 top-0 h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
        </span>
        
        <p className="grid-subtext group-hover:text-white ml-2">{WORK_WITH_ME_TITLE}</p>
        <div className="flex items-center gap-2 ml-2">
          <div className="bg-white/25 border border-white/10 rounded h-[1.35rem] w-[1.35rem] flex items-center justify-center">
            <p className="text-center text-white text-[14px] leading-none">⌘</p>
          </div>
          <div className="bg-white/25 border border-white/10 rounded h-[1.35rem] w-[1.35rem] flex items-center justify-center">
            <p className="text-center text-white text-[14px] leading-none">K</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
