import React from 'react'

function About({ data }) {
  return (
    <section className="about-section   px-6 py-6 pb-6 w-full items-start  border-b  border-black justify-start">
      <div className='main-wrapper w-full flex flex-col gap-8  px-6 border-x  border-black '>
        <div className='text-6xl font-custom font-bold uppercase'>
          About
        </div>
        <div className='flex w-full '>
          <img src="About.png" className=" rounded-2xl w-full" alt="img" />
        </div>

        <div className='about-content md:flex gap-6  w-full'>

          <div className='left-side w-full md:w-2/3 flex items-start justify-start flex-col gap-6 pr-6 border-r border-black '>
            <div className='font-custom font-bold text-5xl'>About the Institution</div>
            <div className=' text-lg font-medium leading-[27px]'>
              {data.aboutIns}
            </div>
          </div>
          <div className='right-side w-full md:w-1/3 flex flex-col gap-6  '>
            <div className='font-semibold text-2xl '>
              <span className='font-base text-lg '>Organised by</span> <br /> Dr B R Ambedkar National Institute of Technology, Jalandhar, Punjab, India.
            </div>
            <div className='font-semibold text-2xl'>
              <span className='font-base text-lg'>In Joint Collaboration with</span> <br /> Dr B R Ambedkar National Institute of Technology, Jalandhar, Punjab, India.
            </div>
            <div className='images flex gap-12 py-6'>
              <img src="./NITJLOGO.png" alt="" className='w-28' />
              <img src="./NITJLOGO.png" alt="" className='w-28' />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About