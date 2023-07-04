import React from 'react'

const SpeakerCard = ({ item }) => {
  return (

    <div className='flex  w-full flex-col md:flex-row pb-6 border-b border-black justify-between '>
      <div className='flex w-full flex-col  items-start '>

        <div className='flex flex-col gap-2 '>
          <div className='Name-title font-bold text-4xl leading-normal'>{item.Name}</div>
          <div className='design font-medium text-2xl leading-tight'>{item.Designation}</div>
          <div className='instit font-medium text-2xl leading-tight'>{item.Institute}</div>
        </div>
        <a
          href={item.ProfileLink} target='_blank' rel='noreferrer'
          className="flex flex-row items-center mt-3 justify-start gap-0.5 transition-all text-2xl  font-bold leading-relaxed hover:text-zinc-800 hover:gap-3 active:text-cyan-500   uppercase"
        >
          <span>Profile</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-12 h-10"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>

        <div className='flex flex-row gap-6'>

          <a href="">
            <div className='mt-6 flex items-center justify-center  py-5 px-7 text-xl md:text-2xl font-bold bg-[#141414] hover:bg-zinc-800 text-white rounded-full uppercase'>Bio</div>
          </a>
          <a href="">
            <div className='mt-6 flex items-center justify-center  py-5 px-7 text-xl md:text-2xl font-bold bg-[#141414] hover:bg-zinc-800 text-white rounded-full uppercase'>Abstact</div>
          </a>
        </div>
        </div>
        <img src={item.ImgLink} alt="" className='h-[330px] w-[400px] my-10 md:my-0 overflow-hidden border border-black rounded-2xl' />
      


    </div>

  )
}

export default SpeakerCard