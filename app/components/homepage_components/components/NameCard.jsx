"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const NameCard = ({ imageUrl, name, role, duration, animation_duration }) => {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);
  return (
    <div
      className="flex-1 h-full bg-slate-400 bg-cover bg-center border-x-2 border-gray-300 "
      style={{ backgroundImage: `url(${imageUrl})` }}
      data-aos="fade-right"
      data-aos-duration= {animation_duration}
    >
      <div className="w-full h-full bg-[#00000067] flex flex-col justify-end gap-y-4 text-white px-7">
        <div className="">
          <p className="text-5xl font-bold">{name}</p>
        </div>

        <div className="mb-4">
          <p>{role}</p>
          <p>{duration}</p>
        </div>
      </div>
    </div>
  );
};

export default NameCard;
