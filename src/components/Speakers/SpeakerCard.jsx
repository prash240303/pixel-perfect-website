import React from 'react'

const SpeakerCard = ({ item }) => {
  return (
    <div className='flex  w-full flex-row pb-6 border-b border-black justify-between '>
        <div className='flex w-full flex-col  items-start '>
        <div className='flex flex-col gap-2 '>
          <div className='Name-title font-bold text-5xl leading-normal'>{item.Name}</div>
          <div className='design font-medium text-3xl leading-tight'>{item.Designation}</div>
          <div className='instit font-medium text-3xl leading-tight'>{item.Institute}</div>
        </div>
        <div className='font-bold text-2xl my-4 leading-normal uppercase'>profile link</div>
        <div className='flex flex-row gap-6'>
          <div className=''></div>
          </div>
        </div>
          <img src={item.ImgLink} alt="" className='h-[330px] rounded-2xl' />
      </div>
  )
}

export default SpeakerCard