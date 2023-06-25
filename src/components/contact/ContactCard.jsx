import React from 'react'
import HorizontalDivider from '../HorizontalDivider'

function ContactCard({ item }) {
    return (
        <div className='flex self-stretch flex-row gap-6 px-6 border border-x-black'>
            <div className='w-[500px] flex flex-col gap-6'>
                <div className='flex flex-col gap-3 items-start font-[inter]'>
                    <div className='text-3xl font-bold'>{item.name}</div>
                    <div className='text-lg font-semibold'>{item.designation}</div>
                    <div className='text-lg font-semibold'>{item.institute}</div>
                    <div className='text-lg font-semibold'>Phone No: {item.phone}</div>
                    <div className='text-lg font-semibold'>Email: {item.email}</div>
                    <div className='text-lg font-semibold'>Fax: {item.fax}</div>
                </div>
                <div className='flex flex-col items-start font-bold font-[inter] gap-3'>
                    <div> PROFILE LINK</div>
                    <a href=""><img src="/pixel-white.svg" alt="" className='w-11' /></a>
                </div>
            </div>

            <div className='flex self-stretch'>
                <div >
                    <img src={item.imgLink} alt=" " className='border border-blue-300  w-[450px] object-cover' />
                </div>
            </div>

            <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath id="myClip">
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M20 0C8.9543 0 0 8.95432 0 20V140.744C0 151.79 8.95431 160.744 20 160.744H144.67C149.602 160.744 153.6 156.746 153.6 151.814V131.274C153.6 126.342 157.598 122.344 162.53 122.344H183.07C188.002 122.344 192 118.346 192 113.414V20C192 8.95431 183.046 0 172 0H20Z"
                            fill="#C3C3C3" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    )
}

export default ContactCard;
