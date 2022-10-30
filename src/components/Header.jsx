import React from "react";
import cardBack from "../images/bg-card-back.png";
import logo from "../images/card-logo.svg";
import "./Header.css";

function Header({ cardName, cardInput, cardMM, cardYY, cardCvc }) {
  return (
    <header>
      <div className="card-container">
        <div className="card-back">
          <img src={cardBack} alt="card's back" />
          <p className="card-back-p">{cardCvc || "000"}</p>
        </div>
        <div className="card-front">
          <div className="card-front-info">
            <div className="logo-container">
              <img src={logo} alt="logo" />
            </div>
            <div className="number-container">
              <p>{cardInput || "0000 0000 0000 0000"}</p>
            </div>
            <div className="last-container">
              <p>{cardName.toUpperCase() || "JANE APPLESEED"}</p>
              <p>
                {cardMM || "00"}/{cardYY || "00"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
