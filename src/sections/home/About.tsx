// Next and React
import React from "react";

// Constants
import { ABOUT_QUOTE } from "@/constants";

// Components
import WritingComponent from "@/components/home/WritingComponent";
import TechStack from "@/components/home/TechStack";
import GlobeComponent from "@/components/home/GlobeComponent";
import Ventures from "@/components/home/Ventures";
import WorkWithMe from "@/components/home/WorkWithMe";
// import CopyEmail from "@/components/home/CopyEmail";

const About = () => {
  return (
    <section className="x-space my-20 px-2 2xl:px-0" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          {/* First Section */}

          <div className="h-full w-full intersect-once intersect:motion-preset-slide-up motion-duration-700 motion-delay-200 md:motion-delay-1000 motion-ease-in">
            <div className="bento-container-outer">
              <div className="bento-container-inner">
                <TechStack />
              </div>
            </div>
          </div>
        </div>
        {/* End First Section */}

        {/* Start Second Section */}

        <div className="col-span-1 grid grid-cols-subgrid gap-4 row-span-1 xl:row-span-3">
          <div className="xl:row-span-2">
            <div className="h-full w-full intersect-once intersect:motion-preset-slide-right motion-duration-700 motion-delay-400 motion-ease-in">
              <div className="bento-container-outer">
                <div className="bento-container-inner">
                  <WritingComponent />
                </div>
              </div>
            </div>
          </div>
          <div className="xl:row-span-1">
            <div className="h-full w-full intersect-once intersect:motion-preset-fade motion-duration-1000 motion-delay-700 motion-ease-in">
              <div className="bento-container-outer">
                <div className="bento-container-inner">
                  <WorkWithMe />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* End Second Section */}

        {/* Start Third Column */}
        <div className="xl:row-span-4">
          <div className="h-full w-full intersect-once intersect:motion-preset-slide-left motion-duration-500 motion-delay-300 motion-ease-in">
            <div className="bento-container-outer">
              <div className="bento-container-inner !px-2">
                <Ventures />
              </div>
            </div>
          </div>
        </div>
        {/* End Third Section */}

        {/* Start Fourth Section */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="h-full w-full intersect-once intersect:motion-preset-blur-up motion-ease-in motion-duration-1000 motion-delay-[0.9s]" id="contact">
            <div className="bento-container-outer">
              <div className="bento-container-inner">
                {/* Globe Component */}

                <GlobeComponent />
              </div>
            </div>
          </div>
        </div>
        {/* End Fourth Section */}

        {/* Start Fifth Column */}
        <div className="col-span-1 md:col-span-2 lg:row-span-2 xl:col-span-1">
          <div className="h-full w-full intersect-once intersect:motion-preset-slide-up motion-duration-500 motion-delay-500 motion-ease-in">
            <div className="bento-container-outer">
              <div className="bento-container-inner flex items-center justify-center h-full">
                {/* Start Quote Component */}
                <p className="grid-subtext text-center group-hover:cursor-default group-hover:text-white">{ABOUT_QUOTE} </p>
                {/* End Quote Component */}
              </div>
            </div>
          </div>
        </div>
        {/* End Fifth Section */}
      </div>
    </section>
  );
};

export default About;
