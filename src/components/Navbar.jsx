import React from 'react'

function Navbar() {
  return (
    <div className="w-full flex items-center justify-center border-b px-6 pb-3 border-black">
            <div className="flex w-full py-3 flex-col md:flex-row items-center border-x border-black  justify-center">
              <div className="md:ml-auto md:mr-auto flex flex-wrap items-center  pt-3 font-bold text-lg uppercase text-[#7E7E7E] cursor-pointer justify-center navbarLinks">
                <a className="mr-10 hover:text-gray-900 ">Home</a>
                <a className="mr-10 hover:text-gray-900 ">paper themes</a>
                <a className="mr-10 hover:text-gray-900 ">speakers</a>
                <a className="mr-10 hover:text-gray-900 ">committee</a>
                <a className="mr-10 hover:text-gray-900 ">sponsors</a>
                <a className="mr-10 hover:text-gray-900 ">awards</a>
                <a className="mr-10 hover:text-gray-900 ">registrations</a>
                <a className="mr-10 hover:text-gray-900 ">contact us</a>

              </div>
            </div>
          </div>
  )
}

export default Navbar