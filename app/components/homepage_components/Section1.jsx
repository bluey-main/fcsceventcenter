import React from 'react'
import Image from 'next/image'

const Section1 = () => {
  return (
    <div className="w-full lg:h-screen  min-h-screen flex lg:flex-row flex-col  justify-center items-center mb-20">
    <div className="lg:w-1/2 w-full  h-full   flex justify-center lg:items-end items-center ">
      <div className="w-full lg:h-[30rem] h-full  px-10 flex lg:justify-start lg:items-start justify-center items-center flex-col gap-y-8 ">
        <div className="w-full flex justify-center items-center lg:justify-start lg:items-end">
          <div className="w-[4rem] h-[4rem]">
            <Image
              src={"/01.svg"}
              width={1000}
              height={1000}
              alt="01"
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="flex flex-col  gap-y-6 text-center lg:text-left">
          <p className="lg:text-[3.25rem] text-[2.8rem] leading-[3rem] font-bold lg:tracking-tight lg:leading-[4rem] ">
            Embrace unforgettable moments at our thriving social hub
          </p>
          <p className="font-medium text-lg">
            Explore vibrant connections and shared experiences at the heart
            of our welcoming community
          </p>
        </div>

        <div className="flex lg:flex-row flex-col w-full  justify-center items-center gap-y-5">
          <div className="lg:w-[26%] ">
            <div className="w-[9rem] h-[3.3rem] bg-custom-green rounded-xl flex justify-center items-center gap-x-2 text-white">
              <p>Join Now</p>
              <p className="font-bold">&#8594;</p>
            </div>
          </div>

          <div className="flex lg:w-[70%]  w-full justify-center items-center gap-x-16">
            <div className="relative flex ">
              <div className="w-12 h-12 rounded-full bg-slate-600"></div>
              <div className="w-12 h-12 rounded-full bg-orange-600 absolute translate-x-7"></div>
              <div className="w-12 h-12 rounded-full bg-green-600 absolute translate-x-14"></div>
            </div>
            <div className="relative">
              <p>500+</p>
              <p>registered student</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="lg:w-1/2 w-full h-full  lg:flex hidden justify-center items-end  ">
      <div className="w-full px-16">
        <div class="grid grid-cols-3 gap-4 ">
          <div class="h-[10rem] bg-orange-500 rounded-xl overflow-hidden">
            <Image
              src={"/images/event1.jpg"}
              width={1000}
              height={1000}
              alt=""
              className="w-full h-full"
            />
          </div>
          <div class="col-span-2 h-[10rem] bg-orange-500 rounded-xl overflow-hidden">
            <Image
              src={"/images/event2.jpg"}
              width={1000}
              height={1000}
              alt=""
              className="w-full h-full"
            />
          </div>
          <div class="col-span-2 h-[10rem] bg-orange-500 rounded-xl overflow-hidden">
            <Image
              src={"/images/event3.jpg"}
              width={1000}
              height={1000}
              alt=""
              className="w-full h-full"
            />
          </div>
          <div class="  h-[10rem] bg-orange-500 rounded-xl overflow-hidden">
            <Image
              src={"/images/event4.jpg"}
              width={1000}
              height={1000}
              alt=""
              className="w-full h-full"
            />
          </div>
          <div class=" h-[10rem] bg-orange-500 rounded-xl overflow-hidden">
            <Image
              src={"/images/event5.jpg"}
              width={1000}
              height={1000}
              alt=""
              className="w-full h-full"
            />
          </div>
          <div class="col-span-2 h-[10rem] bg-orange-500 rounded-xl overflow-hidden">
            <Image
              src={"/images/event1.jpg"}
              width={1000}
              height={1000}
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Section1