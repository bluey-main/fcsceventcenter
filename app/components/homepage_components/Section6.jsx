"use client";
import React from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { useState, useEffect } from "react";

const playFair = Playfair_Display({ weight: "400", subsets: ["latin"] });
import AOS from "aos";
import "aos/dist/aos.css";

const Section6 = () => {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  let [index, setIndex] = useState(0);

  const incrementIndex = () => {
    setIndex((index + 1) % testimonials.length);

    console.log(index);
  };

  const decrementIndex = () => {
    setIndex((index - 1 + testimonials.length) % testimonials.length);

    console.log(index);
  };

  const testimonials = [
    {
      image: "/images/executives/exec1.jpg",
      name: "Adam",
      role: "Event planner",
      comment:
        "I would recommend fcsc for anyone trying to get the word out about their business. It has saved me so much time!",
    },
    {
      image: "/images/executives/exec2.jpg",
      name: "James",
      role: "Student",
      comment:
        "If you are a business owner, and you don't have fcsc in your toolkit just yet, I highly recommend that you check it out.!",
    },
    {
      image: "/images/executives/exec3.jpg",
      name: "Glory",
      role: "Worker",
      comment:
        "We don’t need to spend as much time in meetings now that we use fcsc..!",
    },
    {
      image: "/images/executives/exec4.jpg",
      name: "Maryjane",
      role: "Student",
      comment:
        "I recently attended an event at FCSC and was incredibly satisfied with the experience.",
    },
  ];

  return (
    <div className="w-full lg:h-screen h-[90vh] bg-orange my-16">
      <div className="w-full lg:h-[40%] h-[30%] flex flex-col justify-center items-center lg:px-64 gap-y-5 bg-green">
        <p
          className="text-4xl font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="1100"
        >
          Hear From Our Members
        </p>
        <p
          className="lg:text-xl text-lg text-center"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          Explore member testimonials on our Federal Civil Service Club&apos;s impact on careers and personal growth. Join us!
        </p>
      </div>

      <div
        className="w-full lg:h-[60%] h-[70%] flex justify-center items-end bg-yellow"
        data-aos="fade-left"
        data-aos-duration="1300"
      >
        <div className="lg:w-[80%] w-[90%] lg:h-[90%] h-[90%] bg-[#FFDAB9] flex justify-between items-center lg:flex-row flex-col gap-x-6 rounded-md overflow-hidden lg:p-0 p-2">
          <div
            className="lg:w-[30%] w-[10rem] lg:h-full h-[10rem] bg-slate-300 lg:rounded-r-[50%] lg:rounded-none rounded-full overflow-hidden"
            style={{
              backgroundImage: `url(${testimonials[index].image})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
              transition: "ease-in-out",
              transitionBehavior: "allow-discrete",
              transitionDuration: "1s",
            }}
          >
            {/* <Image
              src={`${testimonials[index].image}`}
              width={1000}
              height={1000}
              alt=""
              className="w-full h-full"
            /> */}
          </div>
          <div className="lg:w-[60%] w-full lg:h-full h-1/2 bg-blue py-7">
            <div className="w-full h-[20%] bg-pink">
              <div className="h-full w-16 bg-red">
                <Image
                  src={"/double-quotes.svg"}
                  width={1000}
                  height={1000}
                  alt=""
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="w-full h-[60%] bg-purple px-3">
              <p
                className={`${playFair.className} text-zinc-500 lg:text-lg text-base`}
              >
                {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Corrupti itaque laudantium nobis illum expedita? Mollitia
              minima neque dolores, laboriosam, doloribus quod alias,
              consequatur a aperiam doloremque animi libero sed nesciunt.
              Tenetur quos ullam ipsa officia inventore optio pariatur
              possimus illum. */}
                {testimonials[index].comment}
              </p>
            </div>
            <div
              className={`w-full lg:h-[30%] bg-pink ${playFair.className} flex justify-center items-center px-3`}
            >
              <div className="w-1/2 h-full  bg-blue">
                <p className="text-[1.6rem]">{testimonials[index].name}</p>
                <p>{testimonials[index].role}</p>
              </div>
              <div className="w-1/2 h-full bg-yellow flex justify-end items-center gap-x-5 ">
                <div
                  className="w-10 h-10 rounded-full bg-zinc-600 text-3xl font-bold flex justify-center items-center text-white cursor-pointer"
                  onClick={decrementIndex}
                >
                  &lt;
                </div>
                <div
                  className="w-10 h-10 rounded-full bg-zinc-400 text-3xl font-bold flex justify-center items-center text-white cursor-pointer"
                  onClick={incrementIndex}
                >
                  &gt;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
