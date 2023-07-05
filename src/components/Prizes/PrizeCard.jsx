import React, { useState } from 'react';

function PrizeCard({ item }) {
    console.log("prize data: ", item)
    const [showMore, setShowMore] = useState(false);

  function handleReadmore() {
    setShowMore(!showMore);
  }
    return (
        <div className='flex  w-[360px] h-[440px] px-6 py-6 bg-black rounded-[20px]'>
            <div className='flex flex-col gap-4 h-auto place-items-center px-4 border-x text-white border-white'>
                <div className='flex flex-row  font-bold font-custom text-5xl  items-center  text-center'>{item.title1}</div>
                <div className='flex flex-wrap font-bold py-1 text-3xl px-2 items-center text-center w-45 rounded-[12px] bg-white text-black'>{item.title2}</div>
                <div className='flex flex-wrap font-normal text-justify'>
                    <p>
                        {showMore || item.description.length <= 130
                            ? item.description
                            : `${item.description.slice(0, 130)}...`}
                    </p>
                    {item.description.length > 130 && (
                        <button onClick={handleReadmore} className="font-semibold">
                            {showMore ? 'Read less' : 'Read more'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PrizeCard