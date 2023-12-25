import React from 'react'
import {Playfair_Display } from "next/font/google";
import NameCard from './components/NameCard';


const playFair = Playfair_Display({ weight: "400", subsets: ["latin"] });

const Section5 = () => {
  return (
    <div className={`w-full h-[110vh] mt-10 `}>
    <div className="w-full h-[40%] flex flex-col justify-center items-center lg:px-64 gap-y-5">
      <p className="text-4xl font-bold">Meet Our Executives</p>
      <p className="lg:text-xl text-lg text-center">
        Our Executive Team Dedicated to Elevating Your Experience and
        Fostering a Thriving Community
      </p>
    </div>

    <div className= {`w-full h-[60%] flex lg:overflow-x-hidden overflow-x-scroll ${playFair.className}`}>
        <NameCard imageUrl={'/images/executives/exec1.jpg'} name={'Aduke Aderonke'} role={'Executive Director'} duration={'2020 - 2023'}/>
        <NameCard imageUrl={'/images/executives/exec2.jpg'} name={'Aduke Aderonke'} role={'Executive Director'} duration={'2020 - 2023'}/>
        <NameCard imageUrl={'/images/executives/exec3.jpg'} name={'Aduke Aderonke'} role={'Executive Director'} duration={'2020 - 2023'}/>
        <NameCard imageUrl={'/images/executives/exec4.jpg'} name={'Aduke Aderonke'} role={'Executive Director'} duration={'2020 - 2023'}/>



      
    </div>
  </div>
  )
}

export default Section5