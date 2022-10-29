import React, { useState } from "react";
import cardBack from "../images/bg-card-back.png";
import logo from "../images/card-logo.svg";
import "./Header.css";

function Header() {
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  return (
    <header>
      <div className="card-container">
        <div className="card-back">
          <img src={cardBack} alt="card's back" />
          <p className="card-back-p">000</p>
        </div>
        <div className="card-front">
          <div className="card-front-info">
            <div className="logo-container">
              <img src={logo} alt="logo" />
            </div>
            <div className="number-container">
              <p>{cardNumber}</p>
            </div>
            <div className="last-container">
              <p>JANE APPLESEED</p>
              <p>00/00</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
