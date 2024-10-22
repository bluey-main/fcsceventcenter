import React from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playFair = Playfair_Display({ weight: "400", subsets: ["latin"] });

const Footer = () => {
  return (
    <div className="w-full lg:h-[50vh] h-[90vh] bg-slate flex lg:flex-row flex-col justify-center items-center lg:p-10 p-6 ">
      <div className="lg:w-[40%] w-full h-[80%] bg-red ">
        {/* <div className="lg:w-[50%] w-[80%]  h-[25%] bg-yellow">
          <Image
            src={"/fcscLogo.png"}
            width={1000}
            height={1000}
            alt=""
            className="w-full h-full"
          />
        </div> */}

        <Link href={"/"}>
          <div className=" w-[80%] flex justify-center items-center pt-3">
          <Image
            src={"/coatofarms.png"}
            width={1000}
            height={1000}
            alt="fcsc logo"
            className="w-[6rem] h-full lg:ml-0 ml-[-3rem] scale-75 "
          />

          <div>
          <p className="lg:text-xl  font-extrabold text-[#2D7E3C]"> <span> Federal Civil Service Club, <br /> Yaba</span> </p>
          <p className="text-xs text-[#B1302B] pr-8">...building a productive and ethical civil service</p>
          </div>
          


          </div>
          
        </Link>
        <div className="w-full h-[50%] bg-yellow flex justify-center items-center">
          {/* <p>
            Lorem ipsum dolor sit amet consectetur. Aliquam sit sed donec orci
            varius tristique habitant in donec. At ultrices sagittis
          </p> */}
        </div>
        <div className="w-full h-[25%] bg-yellow flex gap-x-4">
          <div className="w-[3rem] h-[60%] bg-pink">
            <Image
              src={"/facebook.svg"}
              width={1000}
              height={1000}
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="w-[3rem] h-[60%] bg-pink">
            <Image
              src={"/instagram.svg"}
              width={1000}
              height={1000}
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="w-[3rem] h-[60%] bg-pink">
            <Image
              src={"/twitter.svg"}
              width={1000}
              height={1000}
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="lg:w-[60%] w-full h-[80%] bg-green flex justify-end items-center flex-wrap lg:pl-40 ">
        <div className="h-full flex-1  bg-blue">
          <div className="w-full h-[25%] bg-violet">
            <p className="text-2xl">Quick Links</p>
          </div>
          <div
            className={`w-full h-[75%] bg-violet ${playFair.className} flex flex-col gap-y-4`}
          >
            <Link href={"/membership"}>
              <p>Membership</p>
            </Link>

            {/* <Link href={"/membership"}>
              <p>Gallery</p>
            </Link> */}

            <Link href={"/about"}>
              <p>About Us</p>
            </Link>

            <Link href={"/sportingfacilities"}>
              <p>Facilities</p>
            </Link>
          </div>
        </div>
        <div className="h-full flex-1 bg-blue">
          <div className="w-full h-[25%] bg-violet">
            <p className="text-2xl">Facilities</p>
          </div>
          <div
            className={`w-full h-[75%] bg-violet ${playFair.className} flex flex-col gap-y-4`}
          >
            <Link href={"/bar_and_resturant"}>
              <p>Bar and Lounge</p>
            </Link>

            <Link href={"/sportingfacilities"}>
              <p>Sporting</p>
            </Link>

            {/* <Link href={"/bar_and_resturant"}>
              <p>Grand Hall</p>
            </Link> */}
          </div>
        </div>

        <div className="h-full flex-1 bg-blue">
          <div className="w-full h-[25%] bg-violet">
            <p className="text-2xl">Contact</p>
          </div>
          <div
            className={`w-full h-[75%] bg-violet ${playFair.className} flex flex-col gap-y-4`}
          >
            <p>08045234568</p>
            <p>info@ federal.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
