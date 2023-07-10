const Hero = ({ data, image }) => {
  return (

    <section className="hero-section flex px-6 pb-6 w-full items-start justify-start">
      <div className='main-wrapper flex flex-col gap-8 px-6 border-x border-black'>
        <div className="wrapper flex flex-col gap-6  ">
          <div className="flex flex-col gap-1">
            <span className="text-6xl md:text-8xl  font-custom font-bold uppercase">{data.confName}
            </span>
          </div>
          <div className="flex flex-col sm:flex-col md:flex-row justify-end self-stretch rounded-3xl gap-6">
            <div className="left-side sm:w-full  md:w-2/3 flex-grow flex pr-6 border border-y-0 border-l-0 border-r-black">
              <img src= {image.imgLink} alt="conf-image" className="w-full rounded-3xl h-[500px] object-cover" />
            </div>
            <div className="right-side sm:w-full md:w-1/3 flex flex-col justify-between">
              <div className="flex flex-col gap-2 py-6 border-b  border-black font-bold  text-3xl">
                <span>
                  {new Date(data.confStartDate).toLocaleDateString('en-US', {
                    month: 'long',
                    day: '2-digit',
                  })}-{new Date(data.confEndDate).toLocaleDateString('en-US', {
                    month: 'long',
                    day: '2-digit',
                    year: 'numeric',
                  })}
                </span>

              </div>
              <div className='py-6 border-b flex flex-col items-center border-black'>
                <img src={data.logo} alt="" className="" />
              </div>
              <div className='socials flex py-5 flex-row  px-6 justify-between items-center'>
                <a href={data.twitterLink} target='_blank'> <img src="./Socials/twitter.svg" className='w-12' alt="" /> </a>
                <a href={data.instaLink} target='_blank'>  <img src="./Socials/instagram.svg" className='w-12' alt="" /></a>
                <a href={data.facebookLink} target='_blank'>  <img src="./Socials/facebook.svg" className='w-12' alt="" /></a>
                <a href={data.youtubeLink} target='_blank'>  <img src="./Socials/youtube.svg" className='w-12' alt="" /></a>
              </div>
              <div className='button  flex  font-bold text-xl px-6 py-6 justify-center items-center rounded-2xl bg-black text-white'>Register Now</div>
            </div>
          </div>
        </div>
        <div className='content-wrapper flex flex-col self-stretch font-normal text-xl'>
          {data.aboutConf}
        </div>
      </div>

    </section> 
  );
};

export default Hero
