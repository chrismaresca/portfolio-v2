"use client";
import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

// Constants
import { EMAIL } from "@/constants";

export default function CopyEmail() {
  const [hasCopied, setHasCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 3000); // Reset after 3 seconds
  };

  return (
    <div className={`space-y-2 flex flex-col flex-grow items-center justify-center`}>
      <p className="grid-subtext text-center">Contact Me</p>
      <div className={`copy-container z-100  ${!hasCopied && !isHovered ? "" : "scale-[1.02]"}`} onClick={handleCopy} onMouseOver={() => setIsHovered(true)} onMouseOut={() => setIsHovered(false)}>
        {hasCopied ? <Check className="text-green-500 size-5" /> : <Copy className="text-white-500 size-5" />}
        <p className={`lg:text-2xl md:text-xl font-medium ${hasCopied ? "text-green-500" : "text-gray_gradient"} text-white`}>cpm89@cornell.edu</p>
      </div>
    </div>
  );
}
