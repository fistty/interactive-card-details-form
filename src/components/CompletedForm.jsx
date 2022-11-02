import React from "react";
import iconComplete from "../images/icon-complete.svg";

function CompletedForm({ handleIsCompleted }) {
  return (
    <div>
      <div className="completed-image-container">
        <img src={iconComplete} alt="completed icon" />
      </div>
      <div className="completed-text-container">
        <p>THANK YOU!</p>
        <p>We've added your card details</p>
      </div>
      <button className="completed-button" onClick={handleIsCompleted}>
        Continue
      </button>
    </div>
  );
}

export default CompletedForm;
