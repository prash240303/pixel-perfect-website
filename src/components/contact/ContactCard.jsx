import React from 'react'
import './ContactCard.css'
import '../committee/PersonCard.css'
function ContactCard({ item }) {
    console.log(item.name)
    return (
        <div className='flex  w-full flex-row gap-6 border-b border-black '>
            <div className=' w-full flex flex-col gap-6'>
                <div className='flex flex-col  items-start  '>
                    <div className='text-4xl font-bold leading-normal'>{item.name}</div>
                    <div className='text-xl font-semibold  leading-normal'>{item.designation}</div>
                    <div className='text-xl font-semibold  leading-normal'>{item.institute}</div>
                    <div className='text-xl font-normal mt-3 leading-normal'>Phone No : <span className='font-semibold'> {item.phone}</span></div>
                    <div className='text-xl font-normal  leading-normal'>Email : <span className='font-semibold'> {item.email}</span></div>
                    <div className='text-xl font-normal  leading-normal'>Fax :  <span className='font-semibold'> {item.fax} </span></div>
                    <div className='flex flex-row  mt-6 justify-between gap-6 mb-6 font-semibold items-start'>
                        <a href={item.profileLink} className='font-bold text-xl'>PROFILE LINK</a>
                    </div>
                </div>
            </div>

            <div className='flex flex-col  item-center mb-6  gap-6'>
                <div className='img-cont'>
                    <img src={item.imgLink} className='image' alt="" />
                    <svg width="81" height="101" className='cutout' viewBox="0 0 81 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 101H61H81C69.9543 101 61 92.0457 61 81V40C61 28.9543 52.0457 20 41 20H20C8.95433 20 0 11.0457 0 0V20V101Z" fill="white" />
                    </svg>
                </div>
            </div>
        </div>
    )

}

export default ContactCard;
