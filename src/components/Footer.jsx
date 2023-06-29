import React from 'react'

function Footer() {
    return (
        <footer class="w-full px-6 bg-[#141414]">
            <div class="px-5 py-10 border-x  mx-auto flex md:items-center md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div class="border-r w-1/2 px-5  flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.6622730186928!2d75.53326897492673!3d31.395874574271303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a51d30c180edf%3A0x5b7633718d17ef33!2sDr%20B%20R%20Ambedkar%20National%20Institute%20of%20Technology%20Jalandhar!5e0!3m2!1sen!2sin!4v1688044920371!5m2!1sen!2sin" width="310" height="216" style={{ borderRadius: "20px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
                    </div>
                    <div class="flex items-center mt-5 gap-5">
                        <img src="/NITJLOGO.png" alt="nitlogo" className='w-[80px] ' />
                        <p class=" text-white text-2xl font-[inter] font-bold uppercase mt-6">DR B R AMBEDKAR NATIONAL institute of technology Jalandhar -punjab</p></div>
                </div>
                <div class="flex flex-grow   flex-wrap md:pl-20 text-left">
                    <div class="w-1/2 px-4">
                        <h2 class="mb-3  footerLinkHeading">navigate</h2>
                        <nav class="list-none mb-10  flex flex-col gap-3   cursor-pointer footerLinks font-[inter] text-lg font-normal">
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
                                <a class="text-gray-600 ">Dr B R Ambedkar National Institute of Technology Jalandhar G.T Road, Amritsar Bypass, Jalandhar, Punjab, India-144008</a>
                            </li>
                            <li class="mb-5">
                                <a class="text-gray-600 ">Telephone  : +919888604632</a>
                            </li>
                            <li>
                                <a class="text-gray-600 ">Email: wrec@nitj.ac.in</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="copyright_div border-t mt-6">
                <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p class="copyright">© Copyright —
                        <a href="" rel="noopener noreferrer" target="_blank">All Rights Reserved.</a>
                    </p>
                    <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start cursor-pointer">
                        <a class="text-gray-500 " href='' target="_blank">
                            <img src="./instagram-icon.svg" className='w-6' alt="" />
                        </a>
                        <a class="ml-3 text-gray-500" href='' target="_blank">
                            <img src="./twitter-icon.svg" alt="" className='w-6' />
                        </a>
                        <a class="ml-3 text-gray-500" href='' target="_blank" >
                            <img src="./facebook-icon.svg" className='w-6' alt="" />
                        </a>
                        <a class="ml-3 text-gray-500" href='' target="_blank" >
                            <img src="./linkedin-icon.svg" alt="" className='w-6' />
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer