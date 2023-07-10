import React, { useEffect, useState } from 'react';
import fetchAPI from '../utils/fetchAPI';
import "../styles/Header.css"
function Header() {
    const [imageData, setImageData] = useState({});
    const [loading, setLoading] = useState(true); // Initialize loading state as true
    const imageEndPoint = "/home/conf/647f315f62cdb3a26174fc38";

    useEffect(() => {
        fetchAPI(setImageData, setLoading, imageEndPoint);
    }, []);

    return (
<div className='main_header w-full min-w-full bg-black px-6 flex items-center justify-center self-stretch'>
            <div className='main_div__header flex w-full border-x border-white justify-between items-center py-2 md:px-6 md:py-6'>
                <img src="https://www.nitj.ac.in/public/assets/images/logo_250.png" className='w-[68px] hidden md:block' alt="nitlogo" />
                <div className='md:w-1/2 text-white'>
                    <h1 className='text-white text-xl md:text-3xl font-bold text-center uppercase'>DR B R AMBEDKAR NATIONAL institute of technology Jalandhar -punjab</h1>
                </div>
                <img src={imageData.logo} alt="women" className='w-[70px] bg-white hidden md:block rounded-sm p-1' />
            </div>
        </div>
        );
}

export default Header;
