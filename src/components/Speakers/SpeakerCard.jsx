import React, { useState } from 'react'
import '../../styles/Speakers.css'
import Biocard from './Biocard';
import { Modal } from 'react-bootstrap';
const SpeakerCard = ({ item }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [bio, setBio] = React.useState('bio'); 
  const modelHandlerOnBio = () => {
    setShowModal(true);
    setBio('bio');

  }
  const modelHandlerOnAbstract = () => {
    setShowModal(true);
    setBio('abstract');

  }
  return (

    <div className='flex  w-full flex-col md:flex-row pb-6 border-b border-black justify-between '>
      <div className='flex w-full flex-col  items-start '>

        <div className='flex flex-col gap-2 '>
          <div className='Name-title font-bold text-4xl leading-normal'>{item.Name}</div>
          <div className='design font-medium text-2xl leading-tight'>{item.Designation}</div>
          <div className='instit font-medium text-2xl leading-tight'>{item.Institute}</div>
        </div>
        <a
          href={item.ProfileLink} target='_blank' rel='noreferrer'
          className="flex flex-row items-center mt-3 justify-start gap-0.5 transition-all text-2xl  font-bold leading-relaxed hover:text-zinc-800 hover:gap-3 active:text-cyan-500   uppercase"
        >
          <span>Profile</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-12 h-10"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>

        <div className='flex flex-row gap-6'>


          <div className='mt-6 flex items-center justify-center  py-5 px-7 text-xl md:text-2xl font-bold bg-[#141414] hover:bg-zinc-800 text-white rounded-full uppercase'><button onClick={modelHandlerOnBio}><span className='uppercase'>Bio</span></button></div>


          <div className='mt-6 flex items-center justify-center  py-5 px-7 text-xl md:text-2xl font-bold bg-[#141414] hover:bg-zinc-800 text-white rounded-full uppercase'><button onClick={modelHandlerOnAbstract}><span className='uppercase'>Abstract</span></button></div>

        </div>
      </div>

      <img src={item.ImgLink} alt="" className='h-[330px] w-[400px] my-10 md:my-0 overflow-hidden border border-black rounded-2xl' />
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative flex justify-center">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full md:w-3/5 bg-black outline-none focus:outline-none">
                {/*header*/}
                
                <Biocard data={item} showBio={bio}/>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  {/* <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      






      </div>

      )
}

      export default SpeakerCard