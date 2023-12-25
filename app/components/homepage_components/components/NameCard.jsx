import React from 'react'

const NameCard = ({imageUrl, name, role, duration}) => {
  return (
    <div className="flex-1 h-full bg-slate-400 bg-cover bg-center border-x-2 border-gray-300 " style={{backgroundImage:`url(${imageUrl})`}}>
    <div className="w-full h-full bg-[#00000067] flex flex-col justify-end gap-y-4 text-white px-7">
      <div className="">
        <p className="text-5xl font-bold">{name}</p>
      </div>

      <div className='mb-4'>
        <p>{role}</p>
        <p>{duration}</p>
      </div>
    </div>
  </div>
  )
}

export default NameCard