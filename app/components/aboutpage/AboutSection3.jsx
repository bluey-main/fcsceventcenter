import React from "react";
import NameCard from "../homepage_components/components/NameCard";
import { Playfair_Display } from "next/font/google";

const playFair = Playfair_Display({ weight: "400", subsets: ["latin"] });

const AboutSection3 = () => {
  return (
    <div className={`w-full h-[110vh] mt-10 `}>
      <div className="w-full h-[30%] flex flex-col justify-center items-center lg:px-64 gap-y-5">
        <p className="text-4xl font-bold">Past Chairmen Of The Club</p>
      </div>

      <div
        className={`w-full h-[60%] flex lg:overflow-x-hidden overflow-x-scroll ${playFair.className}`}
      >
        <NameCard
          imageUrl={"/images/executives/exec4.jpg"}
          name={"Mr. j.o obasanya"}
          role={"Chairman"}
          duration={"2015 - DEC 2015"}
        />
        <NameCard
          imageUrl={"/images/executives/exec2.jpg"}
          name={"Ayoola abiodun fatai"}
          role={"Chairman, Interim Exco"}
          duration={"DEC 2015 - JAN 2017"}
        />
        <NameCard
          imageUrl={"/images/executives/exec3.jpg"}
          name={"Arekemase olatunji isaac"}
          role={"Chairman"}
          duration={"2017 - 2020"}
        />
        <NameCard
          imageUrl={"/images/executives/exec1.jpg"}
          name={"Dr. haastrup ade victor"}
          role={"Chairman"}
          duration={"2020 - Present"}
        />
      </div>
    </div>
  );
};

export default AboutSection3;
