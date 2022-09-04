import React from "react";
import Boy from "../../png/boy2.jpg";

const Section1 = () => {
  return (
    <div className="a">
      <div className="a-right">
        <img src={Boy} alt="" />
      </div>

      <div className="a-left">
        <div className="c-text">
          <p>
            <span className="a-text">Centralized Dashboard</span> <br />
            <span className="b-text">for</span>
            <s className="crass1">
              <span className="crass">Data Scientists</span>
            </s>
            <h1 className="crass2"> Owners </h1>
          </p>
          <p className="text-1">
            A<i><b>one-stop</b></i>
            restaurant analytics dashboard that
            <br /> ensures you don’t have to go through tonnes of
            <br /> reports to know how your restaurant is doing
          </p>
          <li>App and Web Dashboard</li>
          <li>Real-time reporting</li>
          <li>Monitor Multiple Outlets & Brands</li>
          <li>Multiple Aggregators in a single dashboard</li>
          <a href="" className="knowMore">
            Know More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section1;
