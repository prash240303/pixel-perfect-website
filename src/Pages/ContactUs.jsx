import React from 'react'

function ContactUs() {
    return (
        <div className='w-fill flex px-6 py-6 border border-blue-400  '>
            <div className='flex w-fill flex-row gap-5  border border-x-black'>
                <div className='w-[500px] flex flex-col px-6 gap-6 border border-r-black'>
                    <div className='flex font-bold text-7xl'>Contact Us</div>
                    <div className='flex w-[500px] flex-col gap-3 items-start font-[inter]'>
                        <div className='text-3xl font-bold'>Name</div>
                        <div className='text-lg font-semibold' >Associate Professor, Electrical Engineering</div>
                        <div className='text-lg font-semibold' >Indian Institute of Technology Gandhinagar</div>
                        <div className='text-lg font-semibold' >Palaj, Gandhinagar - 382355, Gujarat, India</div>
                        <div className='text-lg font-semibold' >phone no - 999999999</div>
                        <div className='text-lg font-semibold' >email - abc@gmail.com</div>
                        <div className='text-lg font-semibold' >fAx - 126326352362</div>
                    </div>
                </div>
                <div className='flex flex-col gap-3 '>
                    <div>  AROUND THE WEB:</div>
                    <a href=""><img src="/pixel-white.svg" alt="" className='w-11' /></a>
                </div>
                <div >
                <img src="/pixel-white.svg" alt="" className='w-[430px] h-[400px]' />
                </div>
            </div>

        </div>
    )
}

export default ContactUs