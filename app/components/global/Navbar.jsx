"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <nav className="w-full  lg:h-[4rem]  flex lg:flex-row flex-col justify-center items-center lg:px-10 lg:gap-y-0 gap-y-7 fixed top-0 z-50">
      <div className="lg:w-[30%] w-full  justify-between lg:px-0 px-10  flex">
        <Link href={"/"}>
          {/* <div className="w-full flex justify-center items-center pt-3">
          <Image
            src={"/images/coatofarms.png"}
            width={1000}
            height={1000}
            alt="fcsc logo"
            className="w-[6rem] h-full lg:ml-0 ml-[-3rem] scale-75 "
          />

          <div>
          <p className="lg:text-xl  font-extrabold text-[#2D7E3C]"> <span> Federal Civil Service Club, <br /> Yaba</span> </p>
          <p className="text-xs text-[#B1302B] pr-8">...building a productive and ethical civil service</p>
          </div>
          


          </div> */}
          <div className="w-[15rem] h-full ">
            <Image
              src={"/fcscLogo.png"}
              width={1000}
              height={1000}
              alt="fcsc logo"
              className="w-full h-full"
            />
          </div>
        </Link>

        <Image
          src={isOpen ? "/close.svg" : "/hamburgerMenu.svg"}
          width={40}
          height={40}
          alt="HAMBURGER MENU"
          className="lg:hidden transition ease-in-out "
          onClick={toggle}
        />
      </div>
      <div
        className={`lg:w-[70%] w-full h-full lg:px-0 px-8 lg:bg-transparent bg-[#333333]  lg:flex ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <ul className="p-6 rounded-lg lg:bg-transparent  w-full lg:h-full flex lg:justify-end lg:gap-x-7  lg:items-center lg:flex-row flex-col text-base text-white lg:text-black  font-[600] gap-y-5">
          <Link href={"/"} onClick={closeMenu}>
            <li className="cursor-pointer  p-4 rounded-xl">Home</li>
          </Link>
          <Link href={"/about"} onClick={closeMenu}>
            <li className="cursor-pointer  p-4 rounded-xl">About Us</li>
          </Link>

          <li className="cursor-pointer  p-4 rounded-xl bg-slate  gap-x-1 group ">
            <div className="flex justify-start items-center gap-x-1">
              Facilities{" "}
              <span className="h-[0.8rem] w-[0.8rem] bg-orange mt-[2.3px] lg:bg-[url('/down-arrow.png')] bg-[url('/down-arrow-white.png')]  bg-cover">
                {/* <Image
                  src={"/down-arrow.png"}
                  alt=""
                  height={1000}
                  width={1000}
                  className="w-full h-full"
                /> */}
              </span>
            </div>
            <ul
              className={`lg:absolute relative w-48 py-2 flex-col gap-y-2 lg:top-9 text-base lg:right-[22rem] mt-5 lg:bg-[#333333] rounded-lg text-white hidden group-hover:flex`}
            >
              <div className="w-full py-2 flex flex-col justify-center items-center lg:gap-y-2 gap-y-6  px-2 ">
                <Link href={"/sportingfacilities"} onClick={closeMenu}>
                  <li className="border-b-white border-b-2">
                    Sporting Facility
                  </li>
                </Link>

                <Link href={"/allposts"} onClick={closeMenu}>
                  <li className="border-b-white border-b-2">Bar & Resturant</li>
                </Link>
              </div>
            </ul>
          </li>

          <Link href={"/membership"} onClick={closeMenu}>
            <li className="cursor-pointer  p-4 rounded-xl">Membership</li>
          </Link>

          <div className="lg:w-[20%] w-full h-full py-10 flex lg:justify-center justify-start items-center">
            <Link href={"/contact"} onClick={closeMenu}>
              <div className="lg:w-[10rem] h-full w-[10rem]  text-white bg-custom-green flex p-3  justify-center items-center gap-x-3 rounded-xl lg:text-base text-base font-semibold">
                <p>Join Now</p>
                &#8594;
              </div>
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
