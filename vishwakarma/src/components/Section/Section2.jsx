import React from "react";
import Boy from "../../png/boy3.jpg";

const Section2 = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="c-text">
          <p>
            <span className="a-text">Inventory Management</span> <br />
            <span className="b-text">for</span>
            <s className="crass1">
              <span className="crass">Supply Chain</span>
            </s>
            <s className="crass1">
              <span className="crass">Professionals</span>
            </s>
            <span className="b-text">your</span>
            <h1 className="crass2">
              {" "}
              <i>Manager</i>{" "}
            </h1>
          </p>
          <p className="text-1">
            With our restaurant inventory management software
            <br /> you don’t need a “Stockist”. Your manager can finish
            <br /> tallying the whole inventory in less than
            <i>
              <b>3-click</b>
            </i>
          </p>
          <li>Raw Material management</li>
          <li>Multi-stage Recipes</li>
          <li>Live food-cost reporting</li>
          <li>Central Kitchen Management</li>
          <a href="" className="knowMore">
            Know More
          </a>
        </div>
      </div>
      <div className="a-right">
        <img src={Boy} alt="" />
      </div>
    </div>
  );
};

export default Section2;
