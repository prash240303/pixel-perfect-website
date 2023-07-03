import React, { useState } from 'react';

function Announcement({ data }) {
  const [showMore, setShowMore] = useState(false);

  function handleReadmore() {
    setShowMore(!showMore);
  }

  return (
    <section className="announcement-section bg-black flex px-6 py-6 pb-6 w-full items-start justify-start">
      <div className="main-wrapper w-full flex flex-col px-6 border-x text-white border-white">
        <div className="text-6xl font-custom font-bold leading-normal">
          Announcements
        </div>
        <div className="flex flex-col gap-8">
          {data.map((announcement) => (
            <div className="announcement flex flex-col items-start gap-3" key={announcement.id}>
              <div className="announcement-heading font-bold text-2xl normal-case leading-normal">
                {announcement.title}
              </div>
              <div className="annoucement-details">
                <p>
                  {showMore || announcement.description.length <= 170
                    ? announcement.description
                    : `${announcement.description.slice(0, 170)}...`}
                </p>
                {announcement.description.length > 170 && (
                  <button onClick={handleReadmore} className="font-semibold">
                    {showMore ? 'Read less' : 'Read more'}
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
