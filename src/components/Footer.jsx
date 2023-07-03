import React from 'react'

function Footer() {
    return (
        <footer className="w-full px-6 bg-[#141414] overflow-hidden">
            <div className="px-5 py-10 border-x  mx-auto flex md:items-center md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="md:border-r w-full md:w-1/2 px-5 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.6622730186928!2d75.53326897492673!3d31.395874574271303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a51d30c180edf%3A0x5b7633718d17ef33!2sDr%20B%20R%20Ambedkar%20National%20Institute%20of%20Technology%20Jalandhar!5e0!3m2!1sen!2sin!4v1688044920371!5m2!1sen!2sin" width="310" height="216" style={{ borderRadius: "20px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
                    </div>
                    <div className="flex items-center mt-5 gap-5">
                        <img src="/NITJLOGO.png" alt="nitlogo" className='w-[80px] ' />
                        <p className=" text-white text-2xl   font-bold uppercase ">DR B R AMBEDKAR NATIONAL institute of technology Jalandhar -punjab</p>
                    </div>
                </div>
                <div className="flex flex-grow mt-10  flex-wrap md:pl-20 text-left">
                    <div className="w-1/2 px-4">
                        <h2 className="mb-3  footerLinkHeading">navigate</h2>
                        <nav className="list-none mb-10  flex flex-col gap-3   cursor-pointer footerLinks   text-lg font-normal">
                            <a href='/' className="hover:text-gray-500 ">Home</a>
                            <a href="/speaker" className="hover:text-gray-500 ">Speakers</a>
                            <a href="/committee" className="hover:text-gray-500">committee</a>
                            <a href="/" className="hover:text-gray-500">Awards</a>
                            <a href="/" className=" hover:text-gray-500">Sponsors</a>
                            <a href="/" className=" hover:text-gray-500">Registrations</a>
                            <a href="/contact" className=" hover:text-gray-500">Contact us</a>
                        </nav>
                    </div>
                    <div className=" w-1/2 px-4">
                        <h2 className="mb-3 footerLinkHeading">Contact us</h2>
                        <nav className="list-none mb-10 footerLinks">
                            <li className="mb-5">
                                <a href="" className="  ">Dr B R Ambedkar National Institute of Technology Jalandhar G.T Road, Amritsar Bypass, Jalandhar, Punjab, India-144008</a>
                            </li>
                            <li className="mb-5 text-white">
                                Telephone  : +919888604632
                            </li>
                            <li>
                                <a href="mailto:wrec@nitj.ac.in" className="hover:text-gray-500" >Email: wrec@nitj.ac.in</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="copyright_div border-t mt-6">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="copyright">© Copyright —
                        <a href="" rel="noopener noreferrer" target="_blank">All Rights Reserved.</a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start cursor-pointer">
                        <a className="text-gray-500 " href='' target="_blank">
                            <img src="./instagram-icon.svg" className='w-6' alt="" />
                        </a>
                        <a className="ml-3 text-gray-500" href='' target="_blank">
                            <img src="./twitter-icon.svg" alt="" className='w-6' />
                        </a>
                        <a className="ml-3 text-gray-500" href='' target="_blank" >
                            <img src="./facebook-icon.svg" className='w-6' alt="" />
                        </a>
                        <a className="ml-3 text-gray-500" href='' target="_blank" >
                            <img src="./linkedin-icon.svg" alt="" className='w-6' />
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer