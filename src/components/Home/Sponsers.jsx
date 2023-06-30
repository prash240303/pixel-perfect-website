import React from 'react'

function Sponsers() {
    return (
        <section className="sponsers-section   px-6 py-6 pb-6 w-full items-start  border-t  border-black justify-start">
            <div className='main-wrapper w-full flex flex-row gap-8  px-6 border-x  border-black '>
                <div className=' pr-6  border-r border-black text-7xl '>
                    <div className='font-custom font-bold w-[380px] leading-normal'>SPONSERS</div>
                </div>
                <div className='flex sponsers-list  w-full flex-col gap-6'>
                    <div className='flex gap-[120px] w-full mb-6 justify-between items-center border-b border-black pb-6'>
                        <div className='Gold font-custom   font-bold text-5xl'> technical co-sponsers</div>
                        <div className='flex flex-col gap-12'>
                            <img src="./sponsers.png" alt="" />
                            <img src="./sponsers1.png" alt="" />
                            <img src="./sponsers2.png" alt="" />
                        </div>
                    </div>
                    <div className='flex gap-[120px] w-full justify-between items-center border-b border-black pb-6'>
                        <div className='platinum  font-custom   font-bold text-5xl'> platinum sponsers</div>
                        <div className='flex flex-col gap-12'>
                            <img src="./sponsers.png" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )
}

export default Sponsers