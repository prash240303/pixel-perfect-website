import React from 'react'

const Biocard = () => {
    return (

        <main className="view-container flex  my-6 px-6 w-full">
            <div className='flex flex-row px-6 items-start justify-between w-full gap-6  border border-x-black border-y-0'>

                <div className='flex   flex-col  items-start  '>
                    <div className=' text-[4rem]  font-custom font-bold uppercase'>
                    Prof Bimal Kumar Roy
                    </div>
                    <div className='font-bold text-2xl'>
                        PROFESSOR AI ETHICS, STANDFORD UNIVERSITY
                    </div>
                </div>

                <div className='flex flex-col w-full items-start justify-start px-6 border-l border-black'>
                    <div className=' upper-section flex flex-col items-start  w-full gap-6 border-b border-black'>
                        <div className='flex flex-row gap-6 items-start justify-start w-full pb-6'  >
                            <img src="https://5.imimg.com/data5/AK/RA/MY-68428614/apple.jpg" alt="" className='w-[200px] border border-black' />
                            <div className='flex flex-col gap-6'>
                                <div className='font-bold text-xl w-fit bg-black text-white px-5 py-3 rounded-full'>Profile Link</div>
                                <div className='text-lg'>
                                    <span className='block font-bold text-3xl'>Talk Title</span>
                                    The Continuing Evolution of Grid Operation and Control
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex  w-full flex-row gap-6  '>
                        <div className=' w-full flex flex-col gap-6'>
                            <div className='flex flex-col gap-4  items-start  '>
                                <div>
                                    <div className='text-xl font-semibold  leading-normal'>BIO</div>
                                    <div className='bio-content text-base '>
                                        Ken Maskall is a renowned AI Ethics leader with over 15 years of experience in the artificial intelligence domain. He holds a Ph.D. in Computer Science from Stanford University and has authored numerous publications on AI's ethical implications and responsible development. As the founder of the Responsible AI Institute, Ken has been instrumental in shaping global AI policy and promoting the adoption of ethical guidelines across industries. A frequent keynote speaker at international conferences, Ken is dedicated to fostering nterdisciplinary collaboration and raising awareness about the social impact of AI technology.
                                    </div>
                                </div>
                                <div>
                                    <div className='text-xl font-semibold  leading-normal'>ABSTRACT</div>
                                    <div className='abstract-content text-base'>
                                        Ken Maskall is a renowned AI Ethics leader with over 15 years of experience in the artificial intelligence domain. He holds a Ph.D. in Computer Science from Stanford University and has authored numerous publications on AI's ethical implications and responsible development.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default Biocard
