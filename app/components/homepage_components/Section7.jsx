import React from 'react'
import { Playfair_Display } from 'next/font/google';

const playFair = Playfair_Display({ weight: "400", subsets: ["latin"] });


const Section7 = () => {
  return (
    <div className="w-full h-[70vh] bg-slate-500 bg-[url('/images/event3.jpg')] bg-cover mt-10">
        <div className="w-full h-full bg-[#000000a8] flex flex-col justify-center items-center text-white gap-y-10">
          <p className={`lg:text-6xl text-4xl ${playFair.className} text-center`}>Unlock Connection & Excitement</p>
          <p className={`text-2xl ${playFair.className} text-center lg:px-60`}>Join Now to Experience Exclusive Events, Thriving Friendships, and Unforgettable</p>

          <div className="w-[18rem] h-[3.3rem] border-2 bg-white  rounded-xl flex justify-center items-center gap-x-2 text-black">
            <p>Join Now</p>
          </div>
        </div>

      </div>
  )
}

export default Section7