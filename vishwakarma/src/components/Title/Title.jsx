import React from "react";
import Dinner1 from "../../png/2am.png";
import Dinner2 from "../../png/1am.png";
import Dinner3 from "../../png/10am.png";
import Dinner4 from "../../png/4am.png";
import Dinner5 from "../../png/11am.png";
import Dinner6 from "../../png/3am.png";
import Dinner7 from "../../png/5am.png";
import Dinner8 from "../../png/7am.png";
import Dinner9 from "../../png/6am.png";
import Dinner10 from "../../png/9am.png";

import "./Title.css";

const Title = () => {
  return (
    <div className="title">
      <div className="t-heading">
        <h1><span className="heading2">Outlet Types</span> </h1>
       <p><span className="span-page"> The <i><b>all-in-one</b></i> Restaurant Management System for<br/>
           all types of restaurant formats and food outlets</span> </p>
      </div>
      <div className="title-row">
        <div className="title-column">
       <div className="title-content">
         <img src={Dinner1}  alt="Mountains" style={{width: '100%'}} />
        <p>Fine Dine</p>
      </div>
     </div>
         
     <div className="title-column">
       <div className="title-content">
         <img src={Dinner2}  alt="Mountains" style={{width: '100%'}} />
        <p>Cafe</p>
      </div>
     </div>

     <div className="title-column">
       <div className="title-content">
         <img src={Dinner3}  alt="Mountains" style={{width: '100%'}} />
        <p>Cloud-Kitchans</p>
      </div>
     </div>
     <div className="title-column">
       <div className="title-content">
         <img src={Dinner4}  alt="Mountains" style={{width: '100%'}} />
        <p>QSR</p>
      </div>
     </div>
     <div className="title-column">
       <div className="title-content">
         <img src={Dinner5}  alt="Mountains" style={{width: '100%'}} />
        <p>Food-Courts</p>
      </div>
     </div>
     <div className="title-column">
       <div className="title-content">
         <img src={Dinner6}  alt="Mountains" style={{width: '100%'}} />
        <p>Dessert</p>
      </div>
     </div>
     <div className="title-column">
       <div className="title-content">
         <img src={Dinner7}  alt="Mountains" style={{width: '100%'}} />
        <p>Bar </p>
      </div>
     </div>
     <div className="title-column">
       <div className="title-content">
         <img src={Dinner8}  alt="Mountains" style={{width: '100%'}} />
        <p>Pizza</p>
      </div>
     </div>
     <div className="title-column">
       <div className="title-content">
         <img src={Dinner9}  alt="Mountains" style={{width: '100%'}} />
        <p>Bakery</p>
      </div>
     </div>
     <div className="title-column">
       <div className="title-content">
         <img src={Dinner10}  alt="Mountains" style={{width: '100%'}} />
        <p>Large Chains</p>
      </div>
     </div>
    </div>
    </div>
  );
};

export default Title;
