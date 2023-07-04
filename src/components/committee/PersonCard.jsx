import React from 'react'
import './PersonCard.css'

const PersonCard = ({ single, item }) => {
    return (
        <div className='flex  items-start w-full gap-6 justify-between border-b pb-6 border-black person__card'>
            <div className='flex flex-col  gap-5 items-start  justify-between ' >
                <div className='flex flex-col items-start mr-6'>
                    <div className='flex flex-col  justify-center items-stretch font-bold font-custom text-[45px] '>{item.Type}</div>
                    <div className='flex flex-col justify-center font-bold   text-lg '>{item.Subtype}</div>
                </div>
                <div className='flex flex-col items-start'>
                    <div className='flex flex-col justify-center items-stretch font-bold   text-3xl'>{item.Name}</div>
                    <div className='flex flex-col justify-center items-stretch font-medium   text-xl'>{item.Designation}</div>
                    <div className='flex flex-col justify-center items-stretch font-medium   text-xl'> {item.Institute}</div>
                </div>
            </div>
            <div className='flex flex-col items-start self-strech gap-6'>
                <div className='personImage ' alt="image" style={{ backgroundImage: `url(${item.ImgLink})` }}>
                    <div className='whiteBoxUpper'>
                        <svg width="100" height="100">
                            <mask id="curved-mask">
                                <rect x="0" y="0" width="100%" height="100%" fill="black" />
                                <circle cx="50%" cy="50%" r="50%" fill="white" />
                            </mask>
                        </svg>
                    </div>
                    <div class='flex items-end'>
                        <div className='whiteBoxLower'>
                            <svg width="100" height="100">
                                <mask id="curved-mask">
                                    <rect x="0" y="0" width="100%" height="100%" fill="black" />
                                    <circle cx="50%" cy="50%" r="50%" fill="white" />                                
                                </mask>
                            </svg>
                        </div>
                        <div className='whiteBox'></div>
                    </div>
                </div>

                <div className='flex flex-row  justify-between  self-stretch  font-semibold items-start'>
                    <a href={item.ProfileLink} className='font-bold text-[0.78rem]'>PROFILE LINK</a>
                    <a href="" className='font-bold text-[0.78rem]'>LINKEDIN</a>
                    <a href="" className='font-bold text-[0.78rem]'>MEDIUM</a>
                </div>
            </div>

        </div>


    )
}

export default PersonCard


