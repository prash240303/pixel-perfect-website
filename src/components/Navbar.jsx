import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="w-full flex items-center justify-center border-b px-6 pb-3 border-black">
            <div className="flex w-full py-3 flex-col md:flex-row items-center border-x border-black  justify-center">
              <div className="md:ml-auto md:mr-auto flex flex-wrap items-center  pt-3 font-bold text-lg uppercase text-black cursor-pointer justify-center navbarLinks">
                <Link  to="/" className="mr-10  hover:text-[#7E7E7E] ">Home</Link>
                <Link to="/" className="mr-10  hover:text-[#7E7E7E] ">paper themes</Link>
                <Link  to="/speaker" className="mr-10  hover:text-[#7E7E7E] ">speakers</Link>
                <Link to="/committee" className="mr-10  hover:text-[#7E7E7E] ">committee</Link>
                <Link  to="/" className="mr-10  hover:text-[#7E7E7E] ">sponsors</Link>
                <Link  to="/" className="mr-10  hover:text-[#7E7E7E] ">awards</Link>
                <Link  to="/" className="mr-10  hover:text-[#7E7E7E] ">registrations</Link>
                <Link  to="/contact" className="mr-10  hover:text-[#7E7E7E] ">contact us</Link>
              </div>
            </div>
          </div>
  )
}

export default Navbar