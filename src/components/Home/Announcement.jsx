

import React from 'react'

function Announcement() {
    return (
        <section className="hero-section  bg-black flex flex-col gap-2 px-6 py-6 pb-6 w-full items-start justify-start">
            <div className='main-wrapper w-full flex flex-col gap-8  px-6 border-x text-white border-white'>
                <div className='text-6xl font-custom font-bold'>
                    Announcements
                </div>
                <div className='flex flex-col gap-8'>
                    <div className='announcement flex flex-col items-start gap-3'>
                        <div className='announcement-heading font-bold text-2xl normal-case '>Registrations for the event has been postponed to next two weeks</div>
                        <div className='annoucement-details '></div>
                    </div>
                    <div className='announcement flex flex-col items-start gap-3'>

                    </div>
                </div>

            </div>
        </section>)
}

export default Announcement