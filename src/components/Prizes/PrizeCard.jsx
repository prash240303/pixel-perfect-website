import React, { useState } from 'react';

function PrizeCard({ item }) {
  console.log('prize data: ', item);
  const [showMore, setShowMore] = useState(false);

  function handleReadmore() {
    setShowMore(!showMore);
  }

  return (
    <div className="flex flex-col  md:flex-row md:w-[300px] mr-6 md:mr-0  px-3 md:mb-3  py-4 md:py-4 bg-black rounded-[20px] flex-grow">
      <div className="flex flex-col gap-3 place-items-center px-3 border-x text-white border-white w-full h-full">
        <div className="flex flex-row font-bold text-center px-2 py-1 rounded-[8px] w-full font-custom text-3xl md:text-4xl leading-snug bg-white text-black items-center justify-center">
          {item.title1}
        </div>
        <div className="flex flex-wrap font-semibold  md:text-2xl text-xl items-center justify-center ">
          {item.title2}
        </div>
        <div className="flex flex-wrap font-normal text-base  text-left flex-grow">
          <p>
            {showMore || item.description.length <= 130
              ? item.description
              : `${item.description.slice(0, 130)}...`}
          </p>
          {item.description.length > 130 && (
            <button  onClick={handleReadmore} className="font-semibold mb-3 h-3">
              {showMore ? 'Read less' : 'Read more'}  
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default PrizeCard;