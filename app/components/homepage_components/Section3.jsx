"use client";
import { Playfair } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const playFair = Playfair({weight:'400',  subsets:["latin"]})

const Section3 = () => {
  const [items, setItems] = useState([
    {
      img: "/images/event1.jpg",
      title: "Bar & Restaurant ",
      content:
        "Indulge in Culinary Excellence and Sip in Style at Our Bar & Restaurant. Experience a delectable journey through our exquisite menu, paired with the vibrant ambiance of our stylish bar",
    },
    {
      img: "/images/event2.jpg",
      title: "Our Grand Hall",
      content:
        "Discover our premier event center, tailored for unforgettable moments, and step into our Grand Hall to experience timeless elegance",
    },
    {
      img: "/images/event3.jpg",
      title: "Sporting Facilities",
      content:
        "Explore Our Cutting-Edge Sporting Facilities, Crafted for Unparalleled Athletic Experiences. Immerse yourself in our state-of-the-art sports arena and elevate your game to new heights",
    },
  ]);

  const handleClick = (index) => {
    setItems((prevState) => {
      const newItems = [...prevState];
      const currentMiddleIndex = Math.floor(newItems.length / 2);

      // Swap clicked element and current middle element
      const temp = newItems[index];
      newItems[index] = newItems[currentMiddleIndex];
      newItems[currentMiddleIndex] = temp;

      return newItems;
    });
  };

  return (
    <div className="w-full lg:h-[150vh]  h-[270vh]  mb-20" >
      <div className="w-full lg:h-[20rem] h-[40rem] flex justify-end items-center flex-col lg:gap-y-10 lg:px-0 px-3 mb-16">
        <div className="flex justify-center items-center flex-col lg:w-[60%] w-full h-[40%] gap-y-6">
          <p className="l:text-4xl text-3xl font-bold">Explore Our Clubhouse</p>
          <p className="lg:text-xl text-base text-center">
            Embark on a journey of unforgettable events, athletic excellence,
            and culinary delights in our premier spaces, tailored for your
            enjoyment
          </p>
        </div>

        <div className="w-full flex justify-center items-center">
          <div className="w-[12rem] h-[3.3rem] border-2 border-black rounded-xl flex justify-center items-center gap-x-2 text-black">
            <p>See More</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-x-5 justify-center items-center pb-12  px-3">
        {items.map((item, index) => (
          <div
            key={index}
            className={`${playFair.className} transition mb-9 ease-in-out delay-150 duration-300 ${
              index < 1 || index > 1
                ? "lg:w-[17rem] w-full lg:h-[28rem] h-[20rem]"
                : "lg:w-[22rem] w-full h-[32rem]"
            }  bg-orange-400 flex justify-center items-end overflow-hidden rounded-xl`}
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundSize: "cover",
              transition: "ease-in-out 0.8s ",
            }}
            onClick={() => handleClick(index)}
          >
            <div
              className="w-full h-[44%] backdrop-blur-xl flex flex-col"
              style={{ transition: "ease-in-out 0.8s " }}
            >
              <div
                className="w-full flex-1  flex justify-center items-center"
                style={{ transition: "ease-in-out 0.8s " }}
              >
                <span className="bg-white h-1 flex-1"></span>
                <p
                  className={`flex-2 px-3 ${
                    index < 1 || index > 1 ? "text-[1.2rem]" : "text-3xl"
                  }  text-white`}
                  style={{ transition: "ease-in-out 0.8s " }}
                >
                  {item.title}
                </p>
                <span className="bg-white h-1 flex-1"></span>
              </div>

              <div className="w-full flex-2 ">
                <p  className={`flex-2 text-center px-3 ${
                    index < 1 || index > 1 ? "text-sm" : "text-base"
                  }  text-white`}>{item.content}</p>
              </div>

              <div className="w-full flex-1  text-white flex justify-center items-center">
                <p>Learn More</p>
              </div>
            </div>
          </div>
          //   <button key={index} onClick={() => handleClick(index)}>
          //     {item}
          //   </button>
        ))}
      </div>
    </div>
  );
};

export default Section3;
