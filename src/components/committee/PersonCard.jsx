import React from 'react'
import HorizontalDivider from '../HorizontalDivider'

const PersonCard= ({single , item}) =>{
    return (
        <div key={item.id} className='flex flex-col items-start  gap-6 '>
            <div className='flex flex-row gap-6'>
                <div className='flex flex-col  w-[430px] gap-5 items-start  justify-items-stretch ' >
                    <div className='flex flex-col items-start '>
                        <div className='flex flex-col  justify-center items-stretch font-bold text-[56px] leading-[4.5rem]'>{item.Type}</div>
                        <div className='flex flex-col justify-center font-bold  font-[inter]  text-lg '>{item.Subtype}</div>
                    </div>
                    <div className='flex flex-col items-start'>
                        <div className='flex flex-col justify-center items-stretch font-bold  font-[inter] text-2xl'>{item.Name}</div>
                        <div className='flex flex-col justify-center items-stretch font-medium  font-[inter] text-lg'>DIRECTOR</div>
                        <div className='flex flex-col justify-center items-stretch font-medium  font-[inter] text-lg'> IIT Gandhinagar</div>
                    </div>
                </div>
                <div className='flex flex-col items-start self-strech gap-6'>
                    <img src="public\pixel-white.svg" className='w-[26.5rem] h-[22.5rem] ' alt="image" />
                    <div className='flex flex-row  justify-between  self-stretch font-[inter] font-semibold items-start'>
                        <a href="" className='font-bold text-[0.78rem]'>TWITTER</a>
                        <a href="" className='font-bold text-[0.78rem]'>LINKEDIN</a>
                        <a href="" className='font-bold text-[0.78rem]'>MEDIUM</a>
                    </div>


                </div>
            </div>
            <HorizontalDivider />
        </div>


    )
}

export default PersonCard