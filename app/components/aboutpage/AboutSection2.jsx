import React from "react";

const AboutSection2 = () => {
  return (
    <div className="w-full lg:h-[50vh] h-[80vh] bg-orange-300 flex lg:flex-row flex-col  my-10">
      <div className="flex-1 h-full bg-[#ffdabaff] flex flex-col justify-center lg:items-start items-center gap-y-4 lg:px-16 p-8 ">
        <p className="text-4xl font-bold ">Our Mission</p>
        <p className="lg:text-justify text-center">
          To foster a united and supportive community among civil service
          professionals, providing opportunities for networking, professional
          development, and personal growth.
        </p>
      </div>
      <div className="flex-1 h-full bg-[#c5e0c5ff] flex flex-col justify-center lg:items-start items-center gap-y-4 lg:px-16 p-8">
        <p className="text-4xl font-bold ">Our Vision</p>
        <p className="lg:text-justify text-center">
          Our vision for the club is to become the ultimate gathering place for
          civil service professionals. We aim to create a welcoming and vibrant
          community where members can connect, grow, and succeed together. We
          envision a club that fosters lasting relationships, supports career
          development, and makes a meaningful impact in the federal
          civil service sector.
        </p>
      </div>
    </div>
  );
};

export default AboutSection2;
