import React from "react";
import Boy from "../../png/boy4.jpg";
import "./Section.css";

const Section = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="c-text">
          <p>
            <span className="a-text">Billing Software</span> <br />{" "}
            <span className="b-text">for</span>
            <s className="crass1">
              <span className="crass">the Computer</span>
            </s>{" "}
            <h1 className="crass2"> Humans </h1>
          </p>
          <p className="text-1">
            A simple <i><b>3-click</b></i> restaurant billing process ensures that<br/> even your
            most untrained staff can start printing bills in<br/> no time.
          </p>
          <li>Works on any PC, laptop, phone & printer</li>
            <li>Keyboard and Touchscreen Views</li>
            <li>Multiple KOT printer/ KDS Configuration</li>
            <li>Customizable bill format with QR-code for payment</li>
            <a href="" className="knowMore" >Know More</a>
        </div>
       
         
      </div>
      <div className="a-right">
        <img src={Boy} alt="" />
      </div>
    </div>
  );
};

export default Section;
