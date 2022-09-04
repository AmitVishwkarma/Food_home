import React from 'react';
import "./Banner.css";
import Boy from "../../png/boy1.jpg";

const Banner = () => {
  return (
    <div className="i">
      <div className="i-right">
      <div className="i-bg"></div>
        <img src={Boy} alt="" className="i-img" />
         
      </div>
      <div className="i-left">


        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Amit Kumar</h1>

          <p className="i-desc">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Banner