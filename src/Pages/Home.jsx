import React from 'react';
import VerticalDivider from '../components/VerticalDivider';

function Home() {
  return (
    <>
      <main className="view-container flex w-full ">
        <section className="hero-section flex flex-col gap-6 px-6 py-6 w-full items-start justify-start">
          <div className="main-wrapper flex flex-col gap-6 px-6 border-x border-black">
            <div className="flex flex-col gap-1">
              <span className="font-bold text-5xl leading-normal">2nd International Conference</span>
              <span className="font-bold text-8xl leading-none">WOMEN RESEARCHERS IN ELECTRONICS AND COMPUTING</span>
            </div>
            <div className="flex flex-row gap-6">
              <div className="left-side w-[770px] h-[520px]">
                <img src="./confImage.png" alt="" className="w-full" />
              </div>
              <VerticalDivider />
              <div className="right-side flex flex-col">
                <div className="flex py-6 border-b border-black font-bold font-[inter] text-3xl">
                  May 15th - 21st
                  <br />
                  Jalandhar + online
                </div>
                <div className="flex py-6 border-b border-black font-bold font-[inter] text-3xl">
                  May 15th - 21st
                  <br />
                  Jalandhar + online
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
