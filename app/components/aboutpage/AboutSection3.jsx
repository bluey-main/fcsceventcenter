import React from "react";
import NameCard from "../homepage_components/components/NameCard";
import { Playfair_Display } from "next/font/google";

const playFair = Playfair_Display({ weight: "400", subsets: ["latin"] });

const AboutSection3 = () => {
  return (
    <div className={`w-full h-[110vh] mt-10 `}>
      <div className="w-full h-[30%] flex flex-col justify-center items-center lg:px-64 gap-y-5">
        <p className="text-4xl font-bold">Executives Team</p>
      </div>

      <div
        className={`w-full h-[60%] flex lg:overflow-x-hidden overflow-x-scroll ${playFair.className}`}
      >
        <NameCard
          imageUrl={"/images/executives/exec1.jpg"}
          name={"Aduke Aderonke"}
          role={"Executive Director"}
          duration={"2020 - 2023"}
        />
        <NameCard
          imageUrl={"/images/executives/exec2.jpg"}
          name={"Aduke Aderonke"}
          role={"Executive Director"}
          duration={"2020 - 2023"}
        />
        <NameCard
          imageUrl={"/images/executives/exec3.jpg"}
          name={"Aduke Aderonke"}
          role={"Executive Director"}
          duration={"2020 - 2023"}
        />
        <NameCard
          imageUrl={"/images/executives/exec4.jpg"}
          name={"Aduke Aderonke"}
          role={"Executive Director"}
          duration={"2020 - 2023"}
        />
      </div>
    </div>
  );
};

export default AboutSection3;
