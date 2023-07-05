import React, { useState } from 'react';

function PrizeCard({ item }) {
  console.log('prize data: ', item);
  const [showMore, setShowMore] = useState(false);

  function handleReadmore() {
    setShowMore(!showMore);
  }

  return (
    <div className="flex flex-col  mt-6 md:flex-row md:w-[300px] mx-6 px-2 md:py-6 md:h-max bg-black rounded-[20px] flex-grow">
      <div className="flex flex-col gap-4 place-items-center px-4 border-x text-white border-white w-full h-full">
        <div className="flex flex-row font-bold text-center tracking-tight font-custom text-5xl leading-snug items-center justify-center">
          {item.title1}
        </div>
        <div className="flex flex-wrap font-bold py-1 text-3xl px-2 items-center justify-center rounded-[12px] bg-white text-black">
          {item.title2}
        </div>
        <div className="flex flex-wrap font-normal text-left flex-grow">
          <p className="h-full">
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
  );
}

export default PrizeCard;
