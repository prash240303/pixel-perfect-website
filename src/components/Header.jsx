import React from 'react'

function Header() {
    return (
        <div className='main__header bg-black px-6  flex items-center justify-center self-strech '>
            <div className='main_div__header flex w-full border-x border-white justify-between items-center px-6 py-6'>
                
                <img src="/NITJLOGO.png" alt="nitlogo" />
                <div className='main__heading w-1/2  text-white '>
                    <h1 className='text-white text-3xl font-[inter] font-bold text-center uppercase '>DR B R AMBEDKAR NATIONAL institute of technology Jalandhar -punjab</h1>
                </div>
                <img src="/WIE_purple_pms526 1.png" alt="women" />
            </div>
        </div>
        )
}

export default Header