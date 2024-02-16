import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-full h-screen  flex lg:flex-row-reverse flex-col-reverse ">
      <div className="lg:w-[40%] lg:h-full w-full h-[50%] bg-[#007046] flex flex-col justify-center px-10  gap-y-10">
        <p className="text-4xl font-bold text-white">Info</p>
        <div className="w-full  flex flex-col gap-y-4 text-white text-xl">
          <div className="w-full flex  gap-x-2 items-center">
            <Image
              src={"/envelope.svg"}
              width={30}
              height={30}
              alt="envelope icon"
              className="w-[2rem] h-[2rem]"
            />
            <a
              href="mailto:victorekeocha016@gmail.com"
              className="text-red-400 underline"
            >
              FederalCivilhallyaba@gmail.com
            </a>
          </div>
          <div className="w-full flex  gap-x-2 items-center">
            <Image
              src={"/phone.svg"}
              width={30}
              height={30}
              alt="envelope icon"
              className="w-[2rem] h-[2rem]"
            />
            <p>+234 809 4398 734</p>
          </div>
          <div className="w-full flex  gap-x-2 items-center">
            <Image
              src={"/building.svg"}
              width={30}
              height={30}
              alt="envelope icon"
              className="w-[2rem] h-[2rem]"
            />
            <p>G99H+8JV, Abule ijesha, Lagos 101245,Lagos</p>
          </div>
        </div>
      </div>
      <div className="lg:w-[60%] lg:h-full w-full h-[50%]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.0065800405401!2d3.379051499999996!3d6.518352100000009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c5602c4da7f%3A0xad06ec91760bd76e!2sFederal%20Civil%20Service%20Staff%20Club!5e0!3m2!1sen!2sng!4v1708092982670!5m2!1sen!2sng"
          className="w-full h-full flex justify-center"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default page;
