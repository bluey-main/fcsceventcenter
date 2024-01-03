import React from 'react'
import Image from 'next/image'
import { Playfair_Display } from 'next/font/google';


const playFair = Playfair_Display({ weight: "400", subsets: ["latin"] });

const Footer = () => {
  return (
    <div className="w-full lg:h-[50vh] h-[90vh] bg-slate flex lg:flex-row flex-col justify-center items-center lg:p-10">
    <div className="lg:w-[40%] w-full h-[80%] bg-red ">
      <div className="lg:w-[50%] w-full  h-[25%] bg-yellow">
        <Image
          src={"/fcscLogo.png"}
          width={1000}
          height={1000}
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="w-full h-[50%] bg-yellow flex justify-center items-center">
        <p>
          Lorem ipsum dolor sit amet consectetur. Aliquam sit sed donec orci
          varius tristique habitant in donec. At ultrices sagittis
        </p>
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
        <div className={`w-full h-[75%] bg-violet ${playFair.className} flex flex-col gap-y-4`} >
          <p>Membership</p>
          <p>Gallery</p>
          <p>About Us</p>
          <p>Facilities</p>

        </div>

      </div>
      <div className="h-full flex-1 bg-blue">
        <div className="w-full h-[25%] bg-violet">
          <p className="text-2xl">Facilities</p>
        </div>
        <div className={`w-full h-[75%] bg-violet ${playFair.className} flex flex-col gap-y-4`} >
          <p>Bar and Lounge</p>
          <p>Sporting</p>
          <p>Grand Hall</p>
        </div>

      </div>

      <div className="h-full flex-1 bg-blue">
        <div className="w-full h-[25%] bg-violet">
          <p className="text-2xl">Contact</p>
        </div>
        <div className={`w-full h-[75%] bg-violet ${playFair.className} flex flex-col gap-y-4`} >
          <p>08045234568</p>
          <p>info@ federal.com</p>
        

        </div>

      </div>

    </div>
  </div>
  )
}

export default Footer