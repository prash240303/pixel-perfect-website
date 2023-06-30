import React from 'react'
function Dates() {
    return (
        <section className="about-section  flex px-6 py-6 pb-6  w-full items-start justify-start">
            <div className='main-wrapper w-full flex flex-row  gap-6 justify-between px-6 border-x border-black'>
                <div className=' pr-6 w-full  border-r border-black text-7xl '>
                    <div className='font-custom font-bold w-[380px]'>IMPORTANT DATES</div></div>
                <div className='flex dates-list  w-full flex-col gap-6'>
                    <div className='flex gap-[120px] w-full justify-between border-b border-black pb-6'>
                        <div className='date font-custom font-bold text-5xl'> 06 Jun 2023</div>
                        <div className='event font-bold text-4xl'>conference date</div>
                    </div>
                    <div className='flex gap-[120px] w-full justify-between border-b border-black pb-6'>
                        <div className='date font-custom font-bold text-5xl'> 06 Jun 2023</div>
                        <div className='event font-bold text-4xl'>conference date</div>
                    </div>
                    <div className='flex gap-[120px] w-full justify-between border-b border-black pb-6'>
                        <div className='date font-custom font-bold text-5xl'> 06 Jun 2023</div>
                        <div className='event font-bold text-4xl'>conference date</div>
                    </div>
                    <div className='flex gap-[120px] w-full justify-between border-b border-black pb-6'>
                        <div className='date font-custom font-bold text-5xl'> 06 Jun 2023</div>
                        <div className='event font-bold text-4xl'>conference date</div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Dates