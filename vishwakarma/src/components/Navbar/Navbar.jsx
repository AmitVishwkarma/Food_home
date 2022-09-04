import React from "react";
import "./Navbar.css";

import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
       <div className="n-left">
        <div className="n-name"> AMIT </div>
        
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li className="dropdown">
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
              <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>

            <a href="#">Link 4</a>
            <a href="#">Link 5</a>

            <a href="#">Link 6</a>
          </div>
            </li>
            <li className="dropdown">
              <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
              <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>

            <a href="#">Link 4</a>
            <a href="#">Link 5</a>

            <a href="#">Link 6</a>
            <a href="#">Link 6</a>
            <a href="#">Link 6</a>

          </div>
            </li>
            <li className="dropdown">
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
              <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>

            <a href="#">Link 4</a>
            <a href="#">Link 5</a>
            <a href="#">Link 6</a>
            <a href="#">Link 6</a>
            <a href="#">Link 6</a>
            <a href="#">Link 6</a>

          </div>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
      </div>
       

    </div>
  );
};

export default Navbar;
