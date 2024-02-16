"use client";

import { useEffect } from "react";
import { Playfair_Display } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";

const playfair_display = Playfair_Display({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const Section2 = () => {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return (
    <div
      className={`w-full lg:h-[40vh] h-[60vh] bg-orange flex lg:flex-row flex-col ${playfair_display.className} lg:mb-0 mb-20 relative`}
    >
      <div
        className="flex-1 bg-[#E9C7DA] h-full p-8"
        data-aos="fade-right"
        data-aos-duration="1800"
      >
        <div className="w-full h-full  flex justify-center lg:items-start items-center gap-y-3 flex-col px-6">
          <div className="w-[4rem] h-[4rem] bg-[#C9649B] rounded-full border-white border-4 flex justify-center items-center"> 
            <div className="w-[80%] h-[80%] bg-[url('/seats.png')] bg-contain"></div>
          </div>
          <p className="text-2xl font-semibold">Outdoor Seating</p>
          <p className="text-base text-center lg:text-left">
            Patio or outdoor seating for members who prefer to dine or relax
            outdoors.
          </p>
        </div>
      </div>
      <div
        className="flex-1 bg-[#C7E1C7] h-full p-8"
        data-aos="fade-right"
        data-aos-duration="1400"
      >
        <div className="w-full h-full flex justify-center lg:items-start items-center gap-y-3 flex-col px-6">
        <div className="w-[4rem] h-[4rem] bg-[#64B164] rounded-full border-white border-4 flex justify-center items-center"> 
            <div className="w-[60%] h-[60%] bg-[url('/party.png')] bg-contain"></div>
          </div>
          <p className="text-2xl font-semibold">Entertainment</p>
          <p className="text-base text-center lg:text-left">
            Live music, bands, or DJs on specific days.Pool tables, dartboards,
            or other games for recreation. 
          </p>
        </div>
      </div>

      <div
        className="flex-1 bg-[#FFDAB9] h-full p-8"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="w-full h-full  flex justify-center lg:items-start items-center gap-y-3 flex-col px-6">
        <div className="w-[4rem] h-[4rem] bg-[#E7AC77] rounded-full border-white border-4 flex justify-center items-center"> 
            <div className="w-[60%] h-[60%] bg-[url('/drinks.png')] bg-contain"></div>
          </div>
          <p className="text-2xl font-semibold">Bar Services</p>
          <p className="text-base text-center lg:text-left">
            A fully stocked bar with a selection of alcoholic and non-alcoholic
            beverages. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
