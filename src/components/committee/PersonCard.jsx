import React from "react";
import "./PersonCard.css";

const PersonCard = ({ single, item, lastCard }) => {
  return (
    <div
      className={`flex items-start md:flex-row flex-col w-full gap-6 justify-between ${
        lastCard ? "" : "border-b pb-6 border-black"
      }`}
    >
      <div className="flex flex-col  md:gap-6 gap-3  items-start  justify-start ">
        <div className="flex flex-col items-start justify-start md:mr-6">
          <div className="flex flex-col  justify-center items-stretch font-bold font-custom md:text-5xl text-4xl ">
            {item.Type}
          </div>
          {/* <div className='flex flex-col justify-start font-bold text-lg'>{item.Subtype}</div> */}
        </div>
        <div className="flex flex-col items-start">
          <div className="flex flex-col justify-center font-bold  md:text-3xl text-2xl">
            {item.Name}
          </div>
          <div className="flex flex-col justify-center font-medium md:text-2xl text-xl">
            {item.Designation}
          </div>
          <div className="flex flex-col justify-center font-medium md:text-2xl text-xl">
            {item.Institute}
          </div>
        </div>
        <a
          href={item.ProfileLink}
          target="_blank"
          rel="noreferrer"
          className="flex flex-row mt-2 items-center  gap-0.5 transition-all md:text-2xl text-xl  font-bold leading-relaxed hover:text-zinc-800 hover:gap-3 active:text-cyan-500 "
        >
          <span>PROFILE</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="md:w-12 md:h-10 w-10 h-8"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>
      </div>
      
      <div className="img-cont  w-full md:w-[300px]">
        <img src={item.ImgLink} className="image" alt={item.Name} />
        <svg
          width="100"
          height="101"
          className="cutout"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 101H61H81C69.9543 101 61 92.0457 61 81V40C61 28.9543 52.0457 20 41 20H20C8.95433 20 0 11.0457 0 0V20V101Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default PersonCard;
