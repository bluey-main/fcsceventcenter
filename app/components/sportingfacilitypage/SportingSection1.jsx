import React from "react";
import { Playfair_Display } from "next/font/google";

const playFair = Playfair_Display({ weight: "400", subsets: ["latin"] });

const SportingSection1 = () => {
  return (
    <div className="w-full lg:h-screen h-[150vh] flex lg:flex-row flex-col ">
      <div className="lg:w-1/2 w-full lg:h-full h-[35%] flex justify-center items-center">
        <div className="lg:w-[29rem] w-[18rem] lg:h-[27rem] h-[18rem] bg-black rounded-xl">
          <div className="w-full h-full bg-pink-500 rotate-[-20deg] rounded-xl border-white border-4 bg-[url('/images/event4.jpg')] bg-cover"></div>
        </div>
      </div>
      <div className="lg:w-1/2 w-full lg:h-full h-1/2 flex justify-center items-center">
        <div className="w-full lg:h-[80%] h-full ">
          <div className="w-full lg:h-[20%] h-[30%] flex lg:justify-start  justify-center items-center ">
            <p
              className={`lg:text-5xl text-4xl font-semibold text-center ${playFair.className}`}
            >
              Sporting Facilities
            </p>
          </div>
          <div className="flex w-full  h-[80%]">
            <div className="w-[0.8%] h-full bg-gray-400 rounded-xl lg:block hidden"></div>
            <div className="lg:w-[95%] w-full h-full  flex flex-col lg:justify-start lg:items-start justify-center items-center gap-y-5 rounded-xl lg:px-10 px-4">
              <p className="lg:text-lg text-lg lg:text-left text-center ">
                Discover the array of amenities available to members at the
                Federal Civil Service Club. From friendly matches on our table
                tennis and lawn tennis courts to competitive games of billiards
                and darts, there&apos;s something for everyone to enjoy. <br /> <br /> Our
                well-maintained facilities provide the perfect setting for
                leisurely pursuits and friendly competition among colleagues and
                friends. Additionally, our spacious car park ensures convenient
                and hassle-free parking for members, making it easy to access
                our club and enjoy all that it has to offer.
              </p>
              {/* <p className="text-lg">Learn More</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportingSection1;
