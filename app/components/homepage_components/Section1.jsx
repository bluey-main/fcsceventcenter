"use client";
import { useEffect } from "react";
import React from "react";
import Image from "next/image";
//import
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

//useEffect

const Section1 = () => {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return (
    <div className="w-full lg:h-screen  min-h-screen flex lg:flex-row flex-col  justify-center items-center mb-20">
      <div className="lg:w-1/2 w-full  h-full   flex justify-center lg:items-end items-center ">
        <div className="w-full lg:h-[30rem] h-full  px-10 flex lg:justify-start lg:items-start justify-center items-center flex-col gap-y-8 ">
          <div className="w-full flex justify-center items-center lg:justify-start lg:items-end">
            <div
              className="w-[4rem] h-[4rem]"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <Image
                src={"/01.svg"}
                width={1000}
                height={1000}
                alt="01"
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="flex flex-col  gap-y-6 text-center lg:text-left">
            <p
              className="lg:text-[3.25rem] text-[2.8rem] leading-[3rem] font-bold lg:tracking-tight lg:leading-[4rem] "
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              Embrace unforgettable moments at our thriving social hub
            </p>
            <p
              className="font-medium text-lg"
              data-aos="fade-right"
              data-aos-duration="1400"
            >
              Explore vibrant connections and shared experiences at the heart of
              our welcoming community
            </p>
          </div>

          <div className="flex lg:flex-row flex-col w-full  justify-center items-center gap-y-5">
            <div className="lg:w-full  flex gap-x-8">
              <Link href={"/contact"}>
                <div
                  className="w-[9rem] h-[3.3rem] bg-custom-green rounded-xl flex justify-center items-center gap-x-2 text-white"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  <p>Contact Us</p>
                  <p className="font-bold">&#8594;</p>
                </div>
              </Link>

              <Link href={"/about"}>
                <div
                  className="w-[9rem] h-[3.3rem] border-2 border-custom-green rounded-xl flex justify-center items-center gap-x-2 text-white"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  <p className="text-custom-green">Learn More</p>
                </div>
              </Link>
            </div>

            {/* <div className="flex lg:w-[70%]  w-full justify-center items-center gap-x-16" data-aos = 'fade-right' data-aos-duration="1000">
            <div className="relative flex ">
              <div className="w-12 h-12 rounded-full bg-slate-600"></div>
              <div className="w-12 h-12 rounded-full bg-orange-600 absolute translate-x-7"></div>
              <div className="w-12 h-12 rounded-full bg-green-600 absolute translate-x-14"></div>
            </div>
            <div className="relative">
              <p>500+</p>
              <p>registered student</p>
            </div>
          </div> */}
          </div>
        </div>
      </div>

      <div
        className="lg:w-1/2 w-full h-full  lg:flex hidden justify-center items-end  "
        data-aos="fade-up"
      >
        <div className="w-full px-16">
          <div className="grid grid-cols-3 gap-4 ">
            <div className="h-[10rem] bg-orange-500 rounded-xl overflow-hidden">
              <Image
                src={"/images/event1.jpg"}
                width={1000}
                height={1000}
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="col-span-2 h-[10rem] bg-orange-500 rounded-xl overflow-hidden">
              <Image
                src={"/images/event2.jpg"}
                width={1000}
                height={1000}
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="col-span-2 h-[10rem] bg-orange-500 rounded-xl overflow-hidden">
              <Image
                src={"/images/event3.jpg"}
                width={1000}
                height={1000}
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="  h-[10rem] bg-orange-500 rounded-xl overflow-hidden">
              <Image
                src={"/images/event4.jpg"}
                width={1000}
                height={1000}
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className=" h-[10rem] bg-orange-500 rounded-xl overflow-hidden">
              <Image
                src={"/images/event5.jpg"}
                width={1000}
                height={1000}
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="col-span-2 h-[10rem] bg-orange-500 rounded-xl overflow-hidden">
              <Image
                src={"/images/event1.jpg"}
                width={1000}
                height={1000}
                alt=""
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
