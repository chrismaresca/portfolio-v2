import React from "react";
import StackIcon from "tech-stack-icons";

import { TECH_STACK_TITLE, TECH_STACK_DESC } from "@/constants";

const TechStack = () => {
  return (
    <>
      <div className="flex flex-col">
        <p className="grid-headtext">{TECH_STACK_TITLE}</p>
        <p className="grid-subtext">{TECH_STACK_DESC}</p>
      </div>
      <div className="flex flex-col lg:items-center w-full flex-grow">
        <div className="grid grid-rows-3 gap-4 text-white w-full max-w-lg md:max-w-md pt-8 pb-4 lg:pb-0">
          {/* Row One */}
          <div className="grid grid-cols-4 md:grid-cols-5 gap-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <div className="bg-gradient-to-tl from-black-100 to-black-300 border border-black-300 border-opacity-50 shadow-lg h-16 flex items-center justify-center text-center rounded-2xl">
              <span className="md:hidden">
                <StackIcon name="nodejs" className="size-[2.3rem]" />
              </span>
            </div>
            <div className="bg-gradient-to-tl from-black-100 to-black-300 border border-black-300 border-opacity-50 shadow-lg h-16 flex items-center justify-center text-center rounded-2xl">
              <svg className="size-[2.1rem]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="openai">
                  <g id="openai_2">
                    <path
                      id="Vector"
                      d="M93.0601 40.9371C94.3101 37.4996 94.6226 34.0621 94.3101 30.6246C93.9976 27.1871 92.7476 23.7496 91.1851 20.6246C88.3726 15.9371 84.3101 12.1871 79.6226 9.99963C74.6226 7.81213 69.3101 7.18713 63.9976 8.43713C61.4976 5.93713 58.6851 3.74963 55.5601 2.18713C52.4351 0.624634 48.6851 -0.000366211 45.2476 -0.000366211C39.9351 -0.000366211 34.6226 1.56213 30.2476 4.68713C25.8726 7.81213 22.7476 12.1871 21.1851 17.1871C17.4351 18.1246 14.3101 19.6871 11.1851 21.5621C8.37257 23.7496 6.18507 26.5621 4.31007 29.3746C1.49757 34.0621 0.560072 39.3746 1.18507 44.6871C1.81007 49.9996 3.99757 54.9996 7.43507 59.0621C6.18507 62.4996 5.87257 65.9371 6.18507 69.3746C6.49757 72.8121 7.74757 76.2496 9.31007 79.3746C12.1226 84.0621 16.1851 87.8121 20.8726 89.9996C25.8726 92.1871 31.1851 92.8121 36.4976 91.5621C38.9976 94.0621 41.8101 96.2496 44.9351 97.8121C48.0601 99.3746 51.8101 99.9996 55.2476 99.9996C60.5601 99.9996 65.8726 98.4371 70.2476 95.3121C74.6226 92.1871 77.7476 87.8121 79.3101 82.8121C82.7476 82.1871 86.1851 80.6246 88.9976 78.4371C91.8101 76.2496 94.3101 73.7496 95.8726 70.6246C98.6851 65.9371 99.6226 60.6246 98.9976 55.3121C98.3726 49.9996 96.4976 44.9996 93.0601 40.9371ZM55.5601 93.4371C50.5601 93.4371 46.8101 91.8746 43.3726 89.0621C43.3726 89.0621 43.6851 88.7496 43.9976 88.7496L63.9976 77.1871C64.6226 76.8746 64.9351 76.5621 65.2476 75.9371C65.5601 75.3121 65.5601 74.9996 65.5601 74.3746V46.2496L73.9976 51.2496V74.3746C74.3101 85.3121 65.5601 93.4371 55.5601 93.4371ZM15.2476 76.2496C13.0601 72.4996 12.1226 68.1246 13.0601 63.7496C13.0601 63.7496 13.3726 64.0621 13.6851 64.0621L33.6851 75.6246C34.3101 75.9371 34.6226 75.9371 35.2476 75.9371C35.8726 75.9371 36.4976 75.9371 36.8101 75.6246L61.1851 61.5621V71.2496L40.8726 83.1246C36.4976 85.6246 31.4976 86.2496 26.8101 84.9996C21.8101 83.7496 17.7476 80.6246 15.2476 76.2496ZM9.93507 32.8121C12.1226 29.0621 15.5601 26.2496 19.6226 24.6871V25.3121V48.4371C19.6226 49.0621 19.6226 49.6871 19.9351 49.9996C20.2476 50.6246 20.5601 50.9371 21.1851 51.2496L45.5601 65.3121L37.1226 70.3121L17.1226 58.7496C12.7476 56.2496 9.62257 52.1871 8.37257 47.4996C7.12257 42.8121 7.43507 37.1871 9.93507 32.8121ZM78.9976 48.7496L54.6226 34.6871L63.0601 29.6871L83.0601 41.2496C86.1851 43.1246 88.6851 45.6246 90.2476 48.7496C91.8101 51.8746 92.7476 55.3121 92.4351 59.0621C92.1226 62.4996 90.8726 65.9371 88.6851 68.7496C86.4976 71.5621 83.6851 73.7496 80.2476 74.9996V51.2496C80.2476 50.6246 80.2476 49.9996 79.9351 49.6871C79.9351 49.6871 79.6226 49.0621 78.9976 48.7496ZM87.4351 36.2496C87.4351 36.2496 87.1226 35.9371 86.8101 35.9371L66.8101 24.3746C66.1851 24.0621 65.8726 24.0621 65.2476 24.0621C64.6226 24.0621 63.9976 24.0621 63.6851 24.3746L39.3101 38.4371V28.7496L59.6226 16.8746C62.7476 14.9996 66.1851 14.3746 69.9351 14.3746C73.3726 14.3746 76.8101 15.6246 79.9351 17.8121C82.7476 19.9996 85.2476 22.8121 86.4976 25.9371C87.7476 29.0621 88.0601 32.8121 87.4351 36.2496ZM34.9351 53.7496L26.4976 48.7496V25.3121C26.4976 21.8746 27.4351 18.1246 29.3101 15.3121C31.1851 12.1871 33.9976 9.99963 37.1226 8.43713C40.2476 6.87463 43.9976 6.24963 47.4351 6.87463C50.8726 7.18713 54.3101 8.74963 57.1226 10.9371C57.1226 10.9371 56.8101 11.2496 56.4976 11.2496L36.4976 22.8121C35.8726 23.1246 35.5601 23.4371 35.2476 24.0621C34.9351 24.6871 34.9351 24.9996 34.9351 25.6246V53.7496ZM39.3101 43.7496L50.2476 37.4996L61.1851 43.7496V56.2496L50.2476 62.4996L39.3101 56.2496V43.7496Z"
                      fill="white"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div className="bg-gradient-to-tl from-black-100 to-black-300 border border-black-300 border-opacity-50 shadow-lg h-16 flex items-center justify-center text-center rounded-2xl">
              <StackIcon name="python" className="size-[2.3rem]" />
            </div>
            <div className="bg-gradient-to-tl from-black-100 to-black-300 border border-black-300 border-opacity-50 shadow-lg h-16 flex items-center justify-center text-center rounded-2xl">
              <StackIcon name="typescript" className="size-[2.3rem]" />
            </div>
            <div className="bg-gradient-to-tl from-black-100 to-black-300 border border-black-300 border-opacity-50 shadow-lg h-16 hidden md:flex items-center justify-center text-center rounded-2xl">{/* <StackIcon name="docker" className="size-[2.3rem]" /> */}</div>
          </div>

          {/* Row Two */}
          <div className="grid grid-cols-4 md:grid-cols-5 gap-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <div className="bg-gradient-to-tl from-black-100 to-black-300 border border-black-300 border-opacity-50 shadow-lg h-16 flex items-center justify-center text-center rounded-2xl">
              <span className="md:hidden">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-[2.1rem]">
                  <g id="framer">
                    <g id="framer_2">
                      <path id="Vector" d="M80.8222 64.8218C81.8722 65.8718 81.1278 67.6663 79.6444 67.6663H52C51.0778 67.6663 50.3333 68.4107 50.3333 69.3329V96.9774C50.3333 98.4607 48.5389 99.2052 47.4889 98.1552L17.65 68.3163C17.2333 67.8996 17 67.3329 17 66.7441V35.9996C17 35.0774 17.7444 34.3329 18.6667 34.3329H50.3333L80.8222 64.8218Z" fill="white" />
                      <path id="Vector_2" d="M50.3333 34.333L19.8444 3.84408C18.7944 2.79408 19.5389 0.999634 21.0222 0.999634H82C82.9222 0.999634 83.6666 1.74408 83.6666 2.6663V32.6663C83.6666 33.5885 82.9222 34.333 82 34.333H50.3333Z" fill="white" />
                    </g>
                  </g>
                </svg>
              </span>
            </div>
            <div className="bg-gradient-to-tl from-black-100 to-black-300 border border-black-300 border-opacity-50 shadow-lg h-16 flex items-center justify-center text-center rounded-2xl">
              <StackIcon name="reactjs" className="size-[2.3rem]" style={{ color: "white" }} />
            </div>
            <div className="bg-gradient-to-tl from-black-100 to-black-300 border border-black-300 border-opacity-50 shadow-lg h-16 flex items-center justify-center text-center rounded-2xl">
              <StackIcon name="nextjs2" className="size-[2.3rem]" />
            </div>
            <div className="bg-gradient-to-tl from-black-100 to-black-300 border border-black-300 border-opacity-50 shadow-lg h-16 flex items-center justify-center text-center rounded-2xl">
              <StackIcon name="tailwindcss" className="size-[2.3rem]" />
            </div>
            <div className="bg-gradient-to-tl from-black-100 to-black-300 border border-black-300 border-opacity-50 shadow-lg h-16 hidden md:flex items-center justify-center text-center rounded-2xl">
              {/* <svg viewBox="0 0 103 104" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-[2.1rem]">
                  <g id="threejs">
                    <g id="threejs_2">
                      <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M26.7016 102L2 2.00049L101.023 30.5097L26.7016 102Z" stroke="white" strokeWidth="2.2865" strokeMiterlimit="10" strokeLinejoin="round" />
                      <path id="Vector_2" fill-rule="evenodd" clip-rule="evenodd" d="M51.4929 16.2579L63.8349 66.2728L14.3511 52.0136L51.4929 16.2579Z" stroke="white" strokeWidth="2.2865" strokeMiterlimit="10" strokeLinejoin="round" />
                      <path id="Vector_3" fill-rule="evenodd" clip-rule="evenodd" d="M39.2146 58.7971L33.0845 33.9514L57.6689 41.0087L39.2146 58.7971Z" stroke="white" strokeWidth="2.2865" strokeMiterlimit="10" strokeLinejoin="round" />
                      <path id="Vector_4" fill-rule="evenodd" clip-rule="evenodd" d="M26.9519 9.13611L33.082 33.9818L8.49756 26.9245L26.9519 9.13611Z" stroke="white" strokeWidth="2.2865" strokeMiterlimit="10" strokeLinejoin="round" />
                      <path id="Vector_5" fill-rule="evenodd" clip-rule="evenodd" d="M76.1186 23.2992L82.2487 48.1449L57.6643 41.0876L76.1186 23.2992Z" stroke="white" strokeWidth="2.2865" strokeMiterlimit="10" strokeLinejoin="round" />
                      <path id="Vector_6" fill-rule="evenodd" clip-rule="evenodd" d="M39.2173 58.8142L45.3474 83.6599L20.7629 76.6026L39.2173 58.8142Z" stroke="white" strokeWidth="2.2865" strokeMiterlimit="10" strokeLinejoin="round" />
                    </g>
                  </g>
                </svg> */}
            </div>
          </div>

          {/* Row Three */}
          <div className="grid grid-cols-4 md:grid-cols-5 gap-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <div className="bg-gradient-to-tl from-black-100 to-black-300 border border-black-300 border-opacity-50 shadow-lg h-16 hidden md:flex items-center justify-center text-center rounded-2xl">
              {/* <svg className="size-[2.1rem]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="liveblocks">
                    <g id="liveblocks_2">
                      <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M67.5 22.9996H0L20 42.9996V70.4996L67.5 22.9996Z" fill="white" />
                      <path id="Vector_2" fill-rule="evenodd" clip-rule="evenodd" d="M32.5 77.9996H100L80 57.9996V30.4996L32.5 77.9996Z" fill="white" />
                    </g>
                  </g>
                </svg> */}
            </div>
            <div className="bg-gradient-to-tl from-black-100 to-black-300 border border-black-300 border-opacity-50 shadow-lg h-16 flex items-center justify-center text-center rounded-2xl">
              <StackIcon name="firebase" className="size-[2.3rem]" />
            </div>
            <div className="bg-gradient-to-tl from-black-100 to-black-300 border border-black-300 border-opacity-50 shadow-lg h-16 flex items-center justify-center text-center rounded-2xl">
              <StackIcon name="mongodb" className="size-[2.3rem]" />
            </div>
            <div className="bg-gradient-to-tl from-black-100 to-black-300 border border-black-300 border-opacity-50 shadow-lg h-16 flex items-center justify-center text-center rounded-2xl">
              <StackIcon name="postgresql" className="size-[2.3rem]" />
            </div>
            <div className="bg-gradient-to-tl from-black-100 to-black-300 border border-black-300 border-opacity-50 shadow-lg h-16 flex items-center justify-center text-center rounded-2xl">
              <span className="md:hidden">
                <StackIcon name="figma" className="size-[2.3rem]" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechStack;
