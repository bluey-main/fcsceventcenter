import React from 'react'

import { Playfair_Display } from 'next/font/google'


const playfair_display = Playfair_Display({weight: ['400', "500", '600'], subsets:["latin"]})

const Section2 = () => {
  return (
    <div className={`w-full lg:h-[40vh] h-[60vh] bg-orange-500 flex lg:flex-row flex-col ${playfair_display.className}`}>
      <div className="flex-1 bg-[#E9C7DA] h-full p-8">
        <div className="w-full h-full  flex justify-center lg:items-start items-center gap-y-3 flex-col px-6">
        <div className='w-[4rem] h-[4rem] bg-[#C9649B] rounded-full border-white border-4'></div>
        <p className="text-2xl font-semibold">Networking</p>
        <p className="text-base text-center lg:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente illo error magni! Delectus.</p>
        </div>
        
      </div>
      <div className="flex-1 bg-[#C7E1C7] h-full p-8">
        <div className="w-full h-full flex justify-center lg:items-start items-center gap-y-3 flex-col px-6">
        <div className='w-[4rem] h-[4rem] bg-[#64B164] rounded-full border-white border-4'></div>
        <p className="text-2xl font-semibold">Networking</p>
        <p className="text-base text-center lg:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente illo error magni! Delectus.</p>
        </div>
        
      </div>

      <div className="flex-1 bg-[#FFDAB9] h-full p-8">
        <div className="w-full h-full  flex justify-center lg:items-start items-center gap-y-3 flex-col px-6">
        <div className='w-[4rem] h-[4rem] bg-[#E7AC77] rounded-full border-white border-4'></div>
        <p className="text-2xl font-semibold">Networking</p>
        <p className="text-base text-center lg:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente illo error magni! Delectus.</p>
        </div>
        
      </div>

     </div>
  )
}

export default Section2