import React from "react";
import "./Footer.css";


const Footer = () => {
  return (
    
       <footer>
           <div className="f-row">
            <div className="f-col">
              <h1>Petpooja</h1>
              <p> This is petpooja website</p>
            </div>
            <div className="f-col">
              <h2 className="f-col1">Petpooja <div className="underline"><span></span></div></h2>
              <p> &#10151; Fine Drive</p>
              <p> &#10151;QSP</p>
              <p>&#10151; Cafe</p>
              <p >&#10151; Food-Counts</p>
              <p>&#10151; Cloud Kitchens</p>
              <p>&#10151; Bakery</p>

            </div>
            <div className="f-col">
            <h2 className="f-col1">POS <div className="underline"><span></span></div></h2>
              <p>&#10151; Billing</p>
              <p>&#10151; Inventory</p>
              <p>&#10151; Reporting</p>
              <p>&#10151; Menu</p>
              <p>&#10151; CRM</p>
            </div>
            <div className="f-col">
            <h2 className="f-col1">Add-ons <div className="underline"><span></span></div></h2>
              <p>&#10151; App Marketplace</p>
              <p>&#10151; Integrations</p>
              
              <p> &#10151; Suppliers Hub</p>
              <p>&#10151; Community</p>
              <p> &#10148; +91 7272828681</p>
            </div>
           </div>
       </footer>
   
  );
};

export default Footer;
