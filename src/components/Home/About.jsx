import React from 'react'

function About() {
  return (
    <section className="about-section  flex-col gap-2 px-6 py-6 pb-6 w-full items-start justify-start">
      <div className='main-wrapper w-full flex flex-col gap-8  px-6 border-x  border-black'>
        <div className='text-6xl font-custom font-bold uppercase'>
          About
        </div>
        <div className='flex w-full '>
          <img src="About.png" className=" rounded-2xl w-full" alt="img" />
        </div>

        <div className='about-content flex gap-6 mt-6 w-full'>

          <div className='left-side flex items-start justify-center flex-col gap-6 pr-6 border-r border-black '>
            <div className='font-custom font-semibold text-5xl'>About the Institution</div>
            <div className='font-normal text-lg leading-[27px]'>
              "Dr B R Ambedkar National Institute of Technology was established in the year 1987 as Regional Engineering College and was given the status of National Institute of Technology (Deemed University) by the Government of India on October 17, 2002 under the aegis of Ministry of Education (Shiksha Mantralaya), New Delhi. Now the Ministry of Education (Shiksha Mantralaya), Government of India has declared the Institute as “Institute of National Importance” under the act of Parliament-2007. A large number of reputed Industrial houses in the country visit the Institution and select the final year students as Engineers/ Management Trainees. As one of the National Institutes of Technology (NIT), the Institute has the responsibility of providing high quality education in Engineering, Technology and Sciences to produce competent technical and scientific manpower for the country. The Institute offers BTech, MTech, MSc, MBA and PhD programmes in the several disciplines of Engineering, Technology and Sciences.
            </div>
          </div>
          <div className='right-side flex flex-col gap-6  '>
            <div className='font-semibold text-2xl w-[484px] '>
          <span className='font-normal text-lg '>Organised by</span> <br/> Dr B R Ambedkar National Institute of Technology, Jalandhar, Punjab, India.
            </div>
            <div className='font-semibold text-2xl'>
          <span className='font-normal text-lg'>In Joint Collaboration with</span> <br/> Dr B R Ambedkar National Institute of Technology, Jalandhar, Punjab, India.
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