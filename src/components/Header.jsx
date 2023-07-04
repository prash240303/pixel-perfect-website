import React from 'react'

function Header() {
    return (
<<<<<<< Updated upstream
        <div className='main_header w-full min-w-full bg-black px-6  flex items-center justify-center self-strech '>
            <div className='main_div__header flex w-full border-x border-white justify-between items-center px-6 py-6'>
                <img src="/NITJLOGO.png" alt="nitlogo" />
                <div className='main__heading w-1/2  text-white '>
                    <h1 className='text-white text-3xl  font-bold text-center uppercase '>DR B R AMBEDKAR NATIONAL institute of technology Jalandhar -punjab</h1>
                </div>
                <img src="/WIE_purple_pms526 1.png" alt="women" />
=======
        <div className='main_header w-full min-w-full bg-black px-6 flex items-center justify-center self-stretch'>
            <div className='main_div__header flex w-full border-x border-white justify-between items-center py-2 md:px-6 md:py-6'>
                <img src="https://www.nitj.ac.in/public/assets/images/logo_250.png" className='w-[60px] hidden md:block' alt="nitlogo" />
                <div className='md:w-1/2 text-white'>
                    <h1 className='text-white text-xl md:text-3xl font-bold text-center uppercase'>DR B R AMBEDKAR NATIONAL institute of technology Jalandhar -punjab</h1>
                </div>
                <img src={imageData.logo} alt="women" className='w-[70px] bg-white hidden md:block rounded-sm p-1' />

>>>>>>> Stashed changes
            </div>
        </div>
        )
}

export default Header