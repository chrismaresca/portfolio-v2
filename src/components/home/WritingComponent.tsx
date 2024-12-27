// React and Next
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Icons
import { ArrowRight } from "lucide-react";

// Constants
import { WRITING_TITLE, WRITING_IMAGE } from "@/constants";

const WritingComponent = () => {

  return (
    <>
      <div className="flex flex-col flex-grow">
        {/* <p className="grid-headtext">What I&lsquo;m Writing</p> */}
        <Image src={WRITING_IMAGE} width={507} height={581} alt={WRITING_TITLE} className="w-full mb-6 h-[176px] object-contain" />
      </div>
      <div className="flex justify-between items-center">
        <p className={`grid-headtext !mb-0 motion-delay-2000 motion-preset-typewriter-[17] motion-loop-[0.5] motion-ease-in-out	cursor-default`}>{WRITING_TITLE}</p>

        <Link href="/articles" className="rounded-full bg-black-200 text-white-700 size-12 flex items-center justify-center hover:scale-[1.02] hover:ring-1 hover:ring-white-500">
          <ArrowRight />
        </Link>
      </div>
    </>
  );
};

export default WritingComponent;
