import React from 'react';
import VerticalDivider from '../components/VerticalDivider';
import './Home.css';

function Home() {
  return (
    <>
      <main className="view-container flex w-full">

        <section className="hero-section flex flex-col gap-2 w-full items-start justify-start">
          <div className='main__header flex items-center justify-center'>
            <div className='main_div__header px-6 py-6'>
              <img src="/image 1.png" alt="nitlogo" />
              <div className='main__heading'>
                <h1>DR B R AMBEDKAR NATIONAL institute of technology Jalandhar -punjab</h1>
              </div>

              <img src="/WIE_purple_pms526 1.png" alt="women" />

            </div>
          </div>
          <div class="w-full flex items-center justify-center navbarcss">
            <div class="flex flex-wrap p-8 flex-col md:flex-row items-center  justify-center">

              <div class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center navbarLinks">
                <a class="mr-10 hover:text-gray-900">Home</a>
                <a class="mr-10 hover:text-gray-900">paper themes</a>
                <a class="mr-10 hover:text-gray-900">speakers</a>
                <a class="mr-10 hover:text-gray-900">committee</a>
                <a class="mr-10 hover:text-gray-900">sponsors</a>
                <a class="mr-10 hover:text-gray-900">awards</a>
                <a class="mr-10 hover:text-gray-900">registrations</a>
                <a class="mr-10 hover:text-gray-900">contact us</a>
              </div>
            </div>
          </div>
          <hr />
          <div className='main-wrapper flex flex-col gap-8 px-6 border-x border-black'>
            <div className="wrapper flex flex-col gap-6  ">
              <div className="flex flex-col gap-1">
                <span className="font-bold text-8xl leading-none">WOMEN RESEARCHERS IN ELECTRONICS AND COMPUTING</span>
              </div>
              <div className="flex justify-end self-stretch rounded-3xl gap-6">
                <div className="left-side flex-grow flex pr-6 border border-y-0 border-l-0 border-r-black">
                  <img src="./confImage.png" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="right-side flex w-[350px]  flex-col justify-between">
                  <div className="flex flex-col py-6 border-b border-black font-bold font-[inter] text-3xl">
                    <span>May 15th - 21st</span>
                    <span>Jalandhar + online</span>
                  </div>
                  <div className='py-6 border-b border-black'>
                    <img src="./WIR.png" alt="" />
                  </div>
                  <div className='socials flex flex-row justify-between items-center'>
                    <a href=""> <img src="./twitter.svg" alt="" /> </a>
                    <a href="">  <img src="./instagram.svg" alt="" /></a>
                    <a href="">  <img src="./facebook.svg" alt="" /></a>
                    <a href="">  <img src="./youtube.svg" alt="" /></a>
                  </div>
                  <div className='button  flex font-[inter] font-bold text-xl px-6 py-6 justify-center items-center rounded-xl bg-black text-white'>Register Now</div>
                </div>
              </div>
            </div>
            <div className='content-wrapper flex flex-col self-stretch font-normal font-[inter] text-xl'>
              The 2023 Silicon Valley Women in Engineering (WiE) Conference is structured to provide you with opportunities to learn cutting-edge technical topics and career development skills that you will need to thrive in the workplace. The WiE Conference provides a wealth of opportunities to connect with accomplished women technologists and fellow students for inspiration and support.  The WiE Conference features morning and lunch time plenary sessions. During these sessions, featured keynote speakers will share highlights from their professional experience and personal insights regarding technology trends that impact campus to career pathways for women in engineering.
            </div>
          </div>
          <footer class="w-full">
            <div class="px-5 py-10 border-b-2 mx-auto flex md:items-center md:flex-row md:flex-nowrap flex-wrap flex-col">
              <div class="border-x-2 w-1/2 px-5 py-5 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                <div>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.6622730186928!2d75.53326897492673!3d31.395874574271303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a51d30c180edf%3A0x5b7633718d17ef33!2sDr%20B%20R%20Ambedkar%20National%20Institute%20of%20Technology%20Jalandhar!5e0!3m2!1sen!2sin!4v1688044920371!5m2!1sen!2sin" width="310" height="216" style={{ borderRadius: "20px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
                </div>
                <div class="flex items-center mt-5 gap-5">
                <img src="/image 1.png" alt="nitlogo" />
                <p class="footer_college">DR B R AMBEDKAR NATIONAL institute of
 technology Jalandhar -punjab</p></div>
              </div>
              <div class="flex flex-grow flex border-r-2 flex-wrap md:pl-20 text-left">

                <div class="w-1/2 px-4">
                  <h2 class="mb-3 footerLinkHeading">navigate</h2>
                  <nav class="list-none mb-10 footerLinks">
                    <li>
                      <a class="text-gray-600 hover:text-gray-500 ">Home</a>
                    </li>
                    <li>
                      <a class="text-gray-600 hover:text-gray-500 ">Speakers</a>
                    </li>
                    <li>
                      <a class="text-gray-600 hover:text-gray-500">Commitee</a>
                    </li>
                    <li>
                      <a class="text-gray-600 hover:text-gray-500">Awards</a>
                    </li>
                    <li>
                      <a class="text-gray-600 hover:text-gray-500">Sponsors</a>
                    </li>
                    <li>
                      <a class="text-gray-600 hover:text-gray-500">Registrations</a>
                    </li>
                    <li>
                      <a class="text-gray-600 hover:text-gray-500">Contact us</a>
                    </li>
                  </nav>
                </div>
                <div class=" w-1/2 px-4">
                  <h2 class="mb-3 footerLinkHeading">Contact us</h2>
                  <nav class="list-none mb-10 footerLinks">
                    <li class="mb-5">
                      <a class="text-gray-600 hover:text-gray-500">Dr B R Ambedkar National Institute of Technology Jalandhar
G.T Road, Amritsar Bypass, Jalandhar, Punjab, India-144008</a>
                    </li>
                    <li class="mb-5">
                      <a class="text-gray-600 hover:text-gray-500">Telephone  : +919888604632</a>
                    </li>
                    <li>
                      <a class="text-gray-600 hover:text-gray-500">Email: wrec@nitj.ac.in</a>
                    </li>
                  
                  </nav>
                </div>
              </div>
            </div>
            <div class="copyright_div">
              <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                <p class="copyright">© Copyright —
                  <a href="" rel="noopener noreferrer" target="_blank">All Rights Reserved.</a>
                </p>
                <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                  <a class="text-gray-500">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a class="ml-3 text-gray-500">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a class="ml-3 text-gray-500">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a class="ml-3 text-gray-500">
                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                      <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                      <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </>
  );
}

export default Home;
