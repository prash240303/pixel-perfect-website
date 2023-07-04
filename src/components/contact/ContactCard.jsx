import React from 'react'
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

            <div className='flex flex-col items-start  mb-6 w-full gap-6'>
                <div className='personImage  w-full rounded-2xl' alt="image" style={{ backgroundImage: `url(${item.imgLink})` }}>
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
            </div>
        </div>
    )

}

export default ContactCard;
