"use client";
import React, { Suspense } from "react";
import Globe from "react-globe.gl";

const GlobeComponent = () => {
  return (
      <Suspense fallback={<p>Loading...</p>}>
        <Globe height={250} width={250} backgroundColor="rgba(0,0,0,0)" showAtmosphere globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg" bumpImageUrl="" />
      </Suspense>
    
  );
};

export default GlobeComponent;
