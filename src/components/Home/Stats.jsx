import React from "react";

function Stats() {
  return (
    <section className="flex flex-col bg-white pt-6 pb-6 mb-4">
      <p className=" font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-black ">
        Our Outstanding Achievements
      </p>
      <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-y-5 lg:gap-y-0 gap-x-5 place-items-center w-full mx-auto max-w-7xl px-5">
        <div className="flex flex-col justify-center items-center bg-[#FFF6F3] px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center shadow-md shadow-gray-400">
          <div className="flex flex-col justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-smile"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 14s1.5 2 4 2 4-2 4-2" />
              <line x1="9" x2="9.01" y1="9" y2="9" />
              <line x1="15" x2="15.01" y1="9" y2="9" />
            </svg>
            <p className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
              10000+
            </p>
          </div>
          <p className="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">
            Happy Clients
          </p>
        </div>
        <div className="flex flex-col justify-center items-center bg-[#FFF6F3] px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center shadow-md shadow-gray-400">
          <div className="flex flex-col justify-center items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-arrow-up-narrow-wide"
            >
              <path d="m3 8 4-4 4 4" />
              <path d="M7 4v16" />
              <path d="M11 12h4" />
              <path d="M11 16h7" />
              <path d="M11 20h10" />
            </svg>
            <p className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
              99%
            </p>
          </div>
          <p className="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">
            Success Rate
          </p>
        </div>
        <div className="flex flex-col justify-center items-center bg-[#FFF6F3] px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center shadow-md shadow-gray-400">
          <div className="flex flex-col justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-user-round-check"
            >
              <path d="M2 21a8 8 0 0 1 13.292-6" />
              <circle cx="10" cy="8" r="5" />
              <path d="m16 19 2 2 4-4" />
            </svg>
            <p className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
              20+<span className="text-2xl">years</span>
            </p>
          </div>
          <p className="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">
            Industry Leadership
          </p>
        </div>
        <div className="flex flex-col justify-center items-center bg-[#FFF6F3] px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center shadow-md shadow-gray-400">
          <div className="flex flex-col justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-hand-heart"
            >
              <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
              <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
              <path d="m2 15 6 6" />
              <path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z" />
            </svg>
            <p className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
              100+
            </p>
          </div>
          <p className="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">
            Medical Aesthetics
          </p>
        </div>
      </div>
    </section>
  );
}

export default Stats;
