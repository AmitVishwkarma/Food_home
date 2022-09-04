import React from "react";
import { useState } from "react";
import "./Tablist.css";
import Boy1 from "../../png/img1.png";
import Boy2 from "../../png/img2.png";
import Boy3 from "../../png/img3.png";
import Boy4 from "../../png/img4.png";

const Tablist = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="t">
      <div className="t-heading">
        <h1>
          <span className="heading2">Why PetPooja?</span>
        </h1>
      </div>
      <div className="box">
        <div className="box-1">
          <div className="bloc-tabs">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              Simplicity
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              Integrations
            </button>
            <button
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}
            >
              Support
            </button>
            <button
              className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(4)}
            >
              Innovation
            </button>
          </div>

          <div className="content-tabs">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <div className="t-1">
                <div className="t-left">
                  <div className="img2">
                    <img src={Boy1} alt="" />
                  </div>
                </div>
                <div className="t-right">
                  <span className="span-color"> 01</span>
                  <h2>Simplicity</h2>
                  <p>
                    <span className="span-text">
                      Easy to learn, easy to teach
                    </span>
                    <br />
                    <br />
                    Our POS works in perfect balance; simple enough for basic
                    users like billers and staff, yet extremely comprehensive
                    for power users like managers and restaurant owners.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
               
               <div className="t-1">
                <div className="t-left">
                  <div className="img2">
                    <img src={Boy2} alt="" />
                  </div>
                </div>
                <div className="t-right">
                  <span className="span-color"> 02</span>
                  <h2>Integrations</h2>
                  <p>
                    <span className="span-text">
                    Managing your restaurant is not rocket science
                    </span>
                    <br />
                    <br />
                    With 150+
                    third-party integrations, all your restaurant operations can be
                   handled from a single screen without any hassle
                  </p>
                </div>
              </div>

            </div>

            <div
              className={
                toggleState === 3 ? "content  active-content" : "content"
              }
            >
              <span className="span-color"> 03</span>


               <div className="t-1">
                <div className="t-left">
                  <div className="img2">
                    <img src={Boy3} alt="" />
                  </div>
                </div>
                <div className="t-right">
                 
                  <h2>Support</h2>
                  <p>
                    <span className="span-text">
                    Customer service & satisfaction are the highest virtues we abide
                by
                    </span>
                    <br />
                    <br />
                    Our 24x7 on-call support, on-ground assistance, live demo and
                training, & regular feedback, all ensure an unparalleled
                customer experience for our restaurant partners.
                  </p>
                </div>
              </div>

            </div>
            <div
              className={
                toggleState === 4 ? "content  active-content" : "content"
              }
            >
              <span className="span-color"> 04</span>
              {/* <h2>Innovation</h2>
              <p>
                Major force behind our success: Research & Innovation Petpooja
                stands out from other players in the industry by coming up with
                unique products and features that make restaurant management
                appear like a cakewalk
              </p> */}

              <div className="t-1">
                <div className="t-left">
                  <div className="img2">
                    <img src={Boy4} alt="" />
                  </div>
                </div>
                <div className="t-right">
                  <h2>Innovation</h2>
                  <p>
                    <span className="span-text">
                    Major force behind our success: Research & Innovation
                    </span>
                    <br />
                    <br />
                    Petpooja
                stands out from other players in the industry by coming up with
                unique products and features that make restaurant management
                appear like a cakewalk
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tablist;
