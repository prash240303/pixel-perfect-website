import React from 'react'
import '../../styles/Speakers.css'
const Biocard = ({data, showBio}) => {
    return (

        <main className=" view-container  mx-auto  px-6 py-6 w-full text-white bg-black">
            <div className='flex flex-col md:flex-row px-6 items-start justify-between  gap-6  border border-x-black border-y-0'>

                <div className='flex   flex-col  items-start  '>
                    <div className=' text-[4rem]  font-custom font-bold uppercase'>
                    {data.Name}
                    </div>
                    <div className='font-bold text-2xl'>
                        {data.Designation} {data.Institute}
                    </div>
                </div>

                <div className='flex flex-col w-full items-start justify-start px-6 border-l border-black'>
                    <div className=' upper-section flex flex-col items-start  w-full gap-6 border-b border-black'>
                        <div className='flex flex-col md:flex-row gap-6 items-start justify-start w-full pb-6'  >
                            <img src={data.ImgLink} alt="" className='w-[200px] border border-black' />
                            <div className='flex flex-col gap-6'>
                                {/* <div className='font-bold text-xl  bg-black text-white px-5 py-3 rounded-full'>Profile Link</div> */}
                                <div className='text-lg'>
                                    <span className='block font-bold text-3xl'>Talk Title</span>
                                    {data.TalkTitle}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex  w-full flex-row gap-6  '>
                        <div className=' w-full flex flex-col gap-6'>
                            <div className='flex flex-col gap-4  items-start  '>
                                {showBio==='bio' ? <div>
                                    <div className='text-xl font-semibold  leading-normal'>BIO</div>
                                    <div className='bio-content text-base '>
                                        {data.Bio}
                                    </div>
                                </div> :
                                <div>
                                    <div className='text-xl font-semibold  leading-normal'>ABSTRACT</div>
                                    <div className='abstract-content text-base'>
                                    {data.Abstract}
                                    </div>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default Biocard
