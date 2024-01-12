"use client";
// import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import React, { useState } from "react";
import { items } from "../Items.json";
import { Carousel } from "react-responsive-carousel";

import Image from "next/image";

const SportingSection2 = () => {
  const { responsive } = items;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => setIndex(selectedIndex);

  return (
    <div className="w-full lg:h-[100vh] flex justify-center lg:items-center bg-green lg:mt-9">
      <div className="lg:w-[60%] w-full lg:h-[85%]   bg-orange overflow-hidden rounded-xl flex justify-center items-center">
        <Carousel
          showArrows={true}
          showIndicators={true}
          infiniteLoop={true}
          dynamicHeight={false}
          className="w-full h-full"
        >
          {responsive.map((item) => (
            <div className="w-full h-full" key={item.id}>
              <Image
                src={item.image}
                width={1000}
                height={1000}
                alt=""
                className="w-full h-full"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default SportingSection2;
