import React from 'react';

const Hero = ({ data, image }) => {
  const startDate = new Date(data.confStartDate).toLocaleDateString('en-US', {
    month: 'long',
    day: '2-digit',
  });

  const endDate = new Date(data.confEndDate).toLocaleDateString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  });

  return (
    <section className="flex px-6 pb-6 w-full items-start justify-start">
      <div className="main-wrapper flex flex-col gap-8 px-6 border-x border-black">
        <div className="wrapper flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-6xl md:text-8xl font-custom font-bold uppercase">
              {data.confName}
            </span>
          </div>
          <div className="flex flex-col md:flex-row justify-end rounded-3xl md:gap-6">
            <div className="w-full md:w-2/3 flex-grow flex md:pr-6 md:border-r md:border-black">
              <img
                src={image.imgLink}
                alt="conf-image"
                className="w-full rounded-2xl md:rounded-3xl h-[500px] aspect-auto object-cover"
              />
            </div>
            <div className="right-side sm:w-full md:w-1/3 flex flex-col justify-between">
              <div className="flex flex-col gap-2 py-6 border-b border-black font-bold text-xl md:text-3xl">
                <span>
                  {startDate}-{endDate}
                </span>
              </div>
              <div className="md:py-6 py-3 border-b flex flex-col items-center border-black">
                <img src={data.logo} alt="logo" />
              </div>
              <div className="socials flex py-5 flex-row px-6 justify-between items-center">
                <a href={data.twitterLink} target="_blank">
                  <img
                    src="./Socials/twitter.svg"
                    className="w-12"
                    alt="twitter icon"
                  />
                </a>
                <a href={data.instaLink} target="_blank">
                  <img
                    src="./Socials/instagram.svg"
                    className="w-12"
                    alt="instagram icon"
                  />
                </a>
                <a href={data.facebookLink} target="_blank">
                  <img
                    src="./Socials/facebook.svg"
                    className="w-12"
                    alt="facebook icon"
                  />
                </a>
                <a href={data.youtubeLink} target="_blank">
                  <img
                    src="./Socials/youtube.svg"
                    className="w-12"
                    alt="youtube icon"
                  />
                </a>
              </div>
              <div className=" cursor-pointer flex font-bold text-xl px-6 py-6 justify-center items-center rounded-2xl hover:bg-neutral-800 bg-black text-white">
                Register Now
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col self-stretch font-normal text-lg md:text-xl">
          {data.aboutConf}
        </div>
      </div>
    </section>
  );
};

export default Hero;
