import React from 'react'

function Hero() {
  return (
    <section className="hero-section flex px-6 pb-6 w-full items-start justify-start">
    <div className='main-wrapper flex flex-col gap-8 px-6 border-x border-black'>
      <div className="wrapper flex flex-col gap-6  ">
        <div className="flex flex-col gap-1">
          <span className="text-8xl leading-none font-custom font-bold">WOMEN RESEARCHERS IN ELECTRONICS AND COMPUTING</span>
        </div>
        <div className="flex justify-end self-stretch rounded-3xl gap-6">
          <div className="left-side flex-grow flex pr-6 border border-y-0 border-l-0 border-r-black">
            <img src="./confImage.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="right-side flex w-[350px]  flex-col justify-between">
            <div className="flex flex-col py-6 border-b border-black font-bold  text-3xl">
              <span>May 15th - 21st</span>
              <span>Jalandhar + online</span>
            </div>
            <div className='py-6 border-b border-black'>
              <img src="./WIR.png" alt="" className='w-full' />
            </div>
            <div className='socials flex flex-row  justify-between items-center'>
              <a href="" target='_blank'> <img src="./twitter.svg" className='w-12' alt="" /> </a>
              <a href="" target='_blank'>  <img src="./instagram.svg" className='w-12' alt="" /></a>
              <a href="" target='_blank'>  <img src="./facebook.svg" className='w-12' alt="" /></a>
              <a href="" target='_blank'>  <img src="./youtube.svg" className='w-12' alt="" /></a>
            </div>
            <div className='button  flex  font-bold text-xl px-6 py-6 justify-center items-center rounded-2xl bg-black text-white'>Register Now</div>
          </div>
        </div>
      </div>
      <div className='content-wrapper flex flex-col self-stretch font-normal text-xl'>
        The 2023 Silicon Valley Women in Engineering (WiE) Conference is structured to provide you with opportunities to learn cutting-edge technical topics and career development skills that you will need to thrive in the workplace. The WiE Conference provides a wealth of opportunities to connect with accomplished women technologists and fellow students for inspiration and support.  The WiE Conference features morning and lunch time plenary sessions. During these sessions, featured keynote speakers will share highlights from their professional experience and personal insights regarding technology trends that impact campus to career pathways for women in engineering.
      </div>
    </div>

  </section>  )
}

export default Hero