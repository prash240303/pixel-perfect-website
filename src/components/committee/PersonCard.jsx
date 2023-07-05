import React from 'react'
import './PersonCard.css'

const PersonCard = ({ single, item }) => {
    return (
        <div className='flex  items-start w-full gap-6 justify-between border-b pb-6 py-6 border-black person__card'>
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
            <div className='img-cont'>
                    <img src={item.ImgLink} className='image' alt="" />
                <svg width="81" height="101" className='cutout' viewBox="0 0 81 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 101H61H81C69.9543 101 61 92.0457 61 81V40C61 28.9543 52.0457 20 41 20H20C8.95433 20 0 11.0457 0 0V20V101Z" fill="white" />
                </svg>
            </div>
        </div>


    )
}

export default PersonCard


