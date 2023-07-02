import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="w-full flex items-center justify-center border-b px-6 pb-3 border-black">
            <div className="flex w-full py-3 flex-col md:flex-row items-center border-x border-black  justify-center">
              <div className="md:ml-auto md:mr-auto flex flex-wrap items-center  pt-3 font-bold text-lg uppercase text-[#7E7E7E] cursor-pointer justify-center navbarLinks">
                <Link  to="/" className="mr-10 hover:text-gray-900 ">Home</Link>
                <Link to="/" className="mr-10 hover:text-gray-900 ">paper themes</Link>
                <Link  to="/speakers" className="mr-10 hover:text-gray-900 ">speakers</Link>
                <Link to="/committee" className="mr-10 hover:text-gray-900 ">committee</Link>
                <Link  to="/" className="mr-10 hover:text-gray-900 ">sponsors</Link>
                <Link  to="/" className="mr-10 hover:text-gray-900 ">awards</Link>
                <Link  to="/" className="mr-10 hover:text-gray-900 ">registrations</Link>
                <Link  to="/contact" className="mr-10 hover:text-gray-900 ">contact us</Link>

              </div>
            </div>
          </div>
  )
}

export default Navbar