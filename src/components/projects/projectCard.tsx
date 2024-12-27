// Next and React
import React from "react";
import Link from "next/link";

// Format Date
import { formatDate } from "@/lib/formatDate";

// Shadcn UI
import { Button } from "@/components/ui/button";

// Types
import { Project } from "@/types";

// Icons
import { ArrowRightIcon } from 'lucide-react';

// Constants
import { PROJECT_CTA } from "@/constants/website";

export default function ProjectCard({ title, subtitle, projectUrl, target, dateUpdated, delay }: Project) {
  return (
    <div className={`w-full rounded-xl flex justify-between px-4 py-6 items-center hover:bg-neutral-800/50 group intersect-once intersect:motion-preset-slide-up motion-duration-[1s] motion-ease-spring-smooth motion-delay-[${delay}ms]`}>
      <div className="flex flex-col w-[16rem] sm:w-[20rem] md:w-[26rem] lg:w-[34rem]">
        <div className="line-clamp-2 flex-grow text-balance">
          <span className="text-white text-sm md:text-base tracking-tight">{title}</span>
        </div>
        <div className="block mt-2 text-muted-foreground text-xs md:text-sm tracking-tighter !line-clamp-4">{subtitle}</div>
      </div>
      <div className="flex flex-col items-end gap-2 ml-4 flex-shrink-0 mt-1">
        <div className="text-muted-foreground text-xs whitespace-nowrap tracking-tighter">{formatDate(dateUpdated)}</div>
        <Button asChild variant="link" className="p-0 mt-1 h-auto text-xs md:text-sm">
          <Link href={projectUrl} target={target}>
            {PROJECT_CTA} <ArrowRightIcon className="w-4 h-4 ml-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

