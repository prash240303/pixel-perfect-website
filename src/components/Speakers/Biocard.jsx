import React, { useState } from "react";
import "../../styles/Speakers.css";

const Biocard = ({ data, showBio }) => {
  // const [showMore, setShowMore] = useState(false);
  const [showMore, setShowMore] = useState(false);

  function handleReadmore() {
    setShowMore(!showMore);
  }

  return (
    <main className="rounded-lg mt-20 px-6 py-6 w-full text-white bg-black">
          <div className=" upper-section flex flex-col items-start  w-full gap-6 border-b border-black">
            <div className="flex flex-col md:flex-row gap-6 items-start justify-start w-full pb-6">
              <div className="flex flex-col gap-6">
                <div className="text-lg">
                  <span className="block font-bold text-3xl">Talk Title</span>
                  {data.TalkTitle}
                </div>
              </div>
            </div>
          </div>
          <div className="flex  w-full flex-row  ">
            <div className=" w-full flex flex-col ">
              <div className="flex flex-col gap-4  w-full items-start  ">
                {showBio === "bio" ? (
                  <div>
                    <div className="md:text-base text-sm font-semibold  leading-normal">
                      BIO
                    </div>
                    <div className="bio-content text-base ">
                      <p>
                        {showMore || data.Bio.length <= 170
                          ? data.Bio
                          : `${data.Bio.slice(0, 170)}...`}
                      </p>
                      {data.Bio.length > 170 && (
                        <button
                          onClick={handleReadmore}
                          className="font-semibold"
                        >
                          {showMore ? "Read less" : "Read more"}
                        </button>
                      )}
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="text-xl font-semibold  leading-normal">
                      ABSTRACT
                    </div>
                    <div className="abstract-content md:text-base text-sm">
                      <p>
                        {showMore || data.Bio.length <= 170
                          ? data.Abstract
                          : `${data.Abstract.slice(0, 170)}...`}
                      </p>
                      {data.Abstract.length > 170 && (
                        <button
                          onClick={handleReadmore}
                          className="font-semibold"
                        >
                          {showMore ? "Read less" : "Read more"}
                        </button>
                      )}{" "}
                    </div>
                  </div>
                )}
              </div>
            </div>
      </div>
    </main>
  );
};

export default Biocard;
