import React from 'react'

function Navbar() {
  return (
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
  )
}

export default Navbar