import React, { useState } from 'react';

function PrizeCard({ item }) {
  console.log('prize data: ', item);
  const [showMore, setShowMore] = useState(false);

  function handleReadmore() {
    setShowMore(!showMore);
  }

  return (
    <div className="flex flex-col md:flex-row md:w-[300px] mx-6 px-3 py-4 md:py-4 bg-black rounded-[20px] flex-grow">
      <div className="flex flex-col gap-3 place-items-center px-3 border-x text-white border-white w-full h-full">
        <div className="flex flex-row font-bold text-center  font-custom text-4xl leading-snug items-center justify-center">
          {item.title1}
        </div>
        <div className="flex flex-wrap font-bold py-1 text-3xl px-2 items-center justify-center rounded-[12px] bg-white text-black">
          {item.title2}
        </div>
        <div className="flex flex-wrap font-normal text-left flex-grow">
          <p>
            {showMore || item.description.length <= 150
              ? item.description
              : `${item.description.slice(0, 150)}...`}
          </p>
          {item.description.length > 150 && (
            <button onClick={handleReadmore} className="font-semibold h-3">
              {showMore ? 'Read less' : 'Read more'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default PrizeCard;