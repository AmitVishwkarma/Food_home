import React from "react";
import "./Banner1.css";
import Photo from "../../png/photo.png";

const Banner1 = () => {
  return (
    <>
      <div className="heading">
        <h1> <span className="text">Trusted by</span> <span className="num1">54,000</span><span className="num">+</span> <span className="text">Restaurant Partners</span> </h1>
      </div>
      <div className="logo">
      <img src={Photo} alt="" className="i-im" />
      </div>
    </>
  );
};

export default Banner1;
