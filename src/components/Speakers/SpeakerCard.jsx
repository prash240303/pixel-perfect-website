import React from 'react'

const SpeakerCard = ({ item }) => {
  return (
<<<<<<< Updated upstream
    <div className='flex  w-full flex-row pb-6 border-b border-black justify-between '>
        <div className='flex w-full flex-col  items-start '>
=======
    <div className='flex  w-full flex-col md:flex-row pb-6 border-b border-black justify-between '>
      <div className='flex w-full flex-col  items-start '>
>>>>>>> Stashed changes
        <div className='flex flex-col gap-2 '>
          <div className='Name-title font-bold text-5xl leading-normal'>{item.Name}</div>
          <div className='design font-medium text-3xl leading-tight'>{item.Designation}</div>
          <div className='instit font-medium text-3xl leading-tight'>{item.Institute}</div>
        </div>
        <div className='font-bold text-2xl my-4 leading-normal uppercase'>profile link</div>
        <div className='flex flex-row gap-6'>
<<<<<<< Updated upstream
          <div className=''></div>
          </div>
=======
          <a href="">
            <div className='mt-6 flex items-center justify-center  py-5 px-7 text-xl md:text-2xl font-bold bg-[#141414] hover:bg-zinc-800 text-white rounded-full uppercase'>Bio</div>
          </a> 
          <a href="">
            <div className='mt-6 flex items-center justify-center  py-5 px-7 text-xl md:text-2xl font-bold bg-[#141414] hover:bg-zinc-800 text-white rounded-full uppercase'>Abstact</div>
          </a>
>>>>>>> Stashed changes
        </div>
          <img src={item.ImgLink} alt="" className='h-[330px] rounded-2xl' />
      </div>
<<<<<<< Updated upstream
=======
      <img src={item.ImgLink} alt="" className='h-[330px] w-[400px] my-10 md:my-0 overflow-hidden border border-black rounded-2xl' />
    </div>
>>>>>>> Stashed changes
  )
}

export default SpeakerCard