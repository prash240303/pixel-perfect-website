// eslint-disable-next-line no-unused-vars
import React from "react";
import "./style.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="div">
        <img className="line" alt="Line" src="line-4.svg" />
        <div className="frame">
          <div className="image-wrapper">
            <img className="image" alt="Image" src="image-1.png" />
          </div>
          <div className="flex-container">
            <div className="text">
              <span className="text-wrapper">
                DR B R AMBEDKAR NATIONAL institute of
                <br />
              </span>
            </div>
            <div className="text">
              <span className="text-wrapper"> technology Jalandhar -punjab</span>
            </div>
          </div>
          <img className="WIE-purple" alt="Wie purple" src="WIE-purple-pms526-1.svg" />
        </div>
        <img className="img" alt="Line" src="image.svg" />
      </div>
    </div>
  );
};