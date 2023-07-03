import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="w-full flex items-center justify-center border-b px-6 pb-3 border-black">
            <div className="flex w-full py-3 flex-col md:flex-row items-center border-x border-black  justify-center">
              <div className="md:ml-auto md:mr-auto flex flex-wrap items-center  pt-3 font-bold text-lg uppercase text-black cursor-pointer justify-center navbarLinks">
                <Link  to="/" className="mr-10  hover:text-gray-700 ">Home</Link>
                <Link to="/" className="mr-10  hover:text-gray-700 ">paper themes</Link>
                <Link  to="/speaker" className="mr-10  hover:text-gray-700 ">speakers</Link>
                <Link to="/committee" className="mr-10  hover:text-gray-700 ">committee</Link>
                <Link  to="/" className="mr-10  hover:text-gray-700 ">sponsors</Link>
                <Link  to="/" className="mr-10  hover:text-gray-700 ">awards</Link>
                <Link  to="/" className="mr-10  hover:text-gray-700 ">registrations</Link>
                <Link  to="/contact" className="mr-10  hover:text-gray-700 ">contact us</Link>

              </div>
            </div>
          </div>
  )
}

export default Navbar