"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const Section4 = () => {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);
  return (
    <div className="w-full lg:h-screen h-[150vh] flex lg:flex-row flex-col border-y-2 border-gray-300">
      <div
        className="lg:w-1/2 w-full lg:h-full h-[35%] flex justify-center items-center"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="lg:w-[29rem] w-[18rem] lg:h-[27rem] h-[18rem] bg-black rounded-xl">
          <div className="w-full h-full bg-pink-500 rotate-[-20deg] rounded-xl border-white border-4 bg-[url('/images/event4.jpg')] bg-cover"></div>
        </div>
      </div>
      <div className="lg:w-1/2 w-full lg:h-full h-1/2 flex justify-center items-center">
        <div className="w-full lg:h-[80%] h-full ">
          <div className="w-full lg:h-[20%] h-[30%] flex lg:justify-start  justify-center items-center ">
            <p
              className="text-5xl font-semibold"
              data-aos="fade-left"
              data-aos-duration="1100"
            >
              About Us
            </p>
          </div>
          <div className="flex w-full  h-[80%]">
            <div className="w-[1.2%] h-full bg-gray-400 rounded-xl lg:block hidden"></div>
            <div className="lg:w-[95%] w-full h-full  flex flex-col lg:justify-start lg:items-start justify-center items-center gap-y-5 rounded-xl lg:px-10 px-4">
              <p
                className="lg:text-xl text-lg lg:text-left text-center "
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                Lorem ipsum dolor sit amet consectetur. Aliquam sit sed donec
                orci varius tristique habitant in donec. <br /> <br /> At
                ultrices sagittis ac eleifend sit gravida tristique mi cursus.
                Vulputate pellentesque et in id. In tellus rutrum sagittis ut
                vitae varius. <br /> <br /> Quis non cras enim mi justo cras
                maecenas elit neque. Proin dignissim nunc augue aliquet dolor.{" "}
                <br /> <br /> Ultrices commod o porttitor tortor eros tortor
                blandit viverra euismod malesuada. At ultricies euismod
                facilisis nulla. Etiam enim ante sit quis.a\\
              </p>

              <Link href={"/about"} data-aos="fade-left"
                data-aos-duration="1200">
                <p className="text-xl font-bold text-custom-green">Learn More</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
