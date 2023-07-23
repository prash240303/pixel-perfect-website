import React, { useState } from 'react';

function Announcement({ data }) {
  const [showMoreArr, setShowMoreArr] = useState(data.map(() => false));

  function handleReadmore(index) {
    const updatedShowMoreArr = [...showMoreArr];
    updatedShowMoreArr[index] = !updatedShowMoreArr[index];
    setShowMoreArr(updatedShowMoreArr);
  }

  return (
    <section className="bg-black flex px-6 md:py-12 py-6  w-full items-start justify-start">
      <div className="main-wrapper w-full flex flex-col px-6 border-x text-white border-white">
        <div className="text-5xl md:text-6xl md:mb-6 mb-3 font-custom font-bold leading-normal">
          Announcements
        </div>
        <div className="flex flex-col gap-8">
          {data.map((announcement, index) => (
            <div className="announcement flex flex-col items-start gap-3" key={announcement.id}>
              <div className="announcement-heading md:font-bold font-semibold text-2xl ">
                {announcement.title}
              </div>
              <div className="annoucement-details">
                <p>
                  {showMoreArr[index] || announcement.description.length <= 170
                    ? announcement.description
                    : `${announcement.description.slice(0, 170)}...`}
                </p>
                {announcement.description.length > 170 && (
                  <button onClick={() => handleReadmore(index)} className="font-semibold">
                    {showMoreArr[index] ? 'Read less' : 'Read more'}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Announcement;
