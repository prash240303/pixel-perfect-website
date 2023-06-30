

import React from 'react'


function Announcement() {
    function handleReadmore() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    }

    return (
        <section className="announcement-section  bg-black flex px-6 py-6 pb-6 w-full items-start justify-start">
            <div className='main-wrapper w-full flex flex-col   px-6 border-x text-white border-white'>
                <div className='text-6xl font-custom font-bold leading-normal'>
                    Announcements
                </div>
                <div className='flex flex-col gap-8'>
                    <div className='announcement flex flex-col items-start gap-3'>
                        <div className='announcement-heading font-bold text-2xl normal-case leading-normal'>Registrations for the event has been postponed to next two weeks</div>
                        <div className='annoucement-details '>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel erisque enim ligula venenatis dolor. Maecenas nisl , ultrices nec congue eget, <span id="dots">...</span><span id="more" className='hidden '>auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</span></p>
                            <button onClick={handleReadmore} className='font-semibold' id="myBtn">Read more</button>
                        </div>
                    </div>
                   

                </div>

            </div>
        </section>)
}

export default Announcement