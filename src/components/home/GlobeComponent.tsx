"use client";
import React from "react";
import dynamic from "next/dynamic";

const GlobeClientComponent = dynamic(() => import("./GlobeComponent.client"), { ssr: false });

// Constants
import { LOCATION_TITLE, LOCATION_DESC } from "@/constants";

export default function GlobeComponent() {
  return (
    <>
      <div className="rounded-3xl w-full h-fit flex justify-center items-center">
        <GlobeClientComponent />
      </div>
      <div className="mt-auto">
        <p className="grid-headtext">{LOCATION_TITLE}</p>
        <p className="grid-subtext">{LOCATION_DESC}</p>
      </div>
    </>
  );
}
