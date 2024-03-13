import React from "react";

const AboutSection1 = () => {
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
            <p className="text-5xl font-semibold">About Us</p>
          </div>
          <div className="flex w-full  h-[80%]">
            <div className="w-[0.8%] h-full bg-gray-400 rounded-xl lg:block hidden"></div>
            <div className="lg:w-[95%] w-full h-full  flex flex-col lg:justify-start lg:items-start justify-center items-center gap-y-5 rounded-xl lg:px-10 px-4">
              <p className="lg:text-lg text-lg lg:text-left text-center ">
                Welcome to the Federal Civil Service Club, your hub for
                camaraderie, growth, and excellence within the federal civil
                service sector. <br /> <br />  At Federal Civil Service Club, we&apos;re dedicated
                to uniting professionals from diverse backgrounds and agencies,
                fostering a vibrant community where collaboration thrives and
                careers flourish. <br /> <br /> Whether you&apos;re seeking networking
                opportunities, professional development resources, or simply a
                supportive community to connect with, you&apos;ve come to the right
                place. Join us as we strive to elevate the standards and impact
                of the federal civil service together.
              </p>
              {/* <p className="text-lg">Learn More</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection1;
