import React from "react";
import "./form.css";

function Form() {
  return (
    <form className="form-container">
      <div className="name-input-container flex-container">
        <label htmlFor="name">CARDHOLDER NAME</label>
        <input type="text" id="name" placeholder="e.g. Jane Appleseed" />
      </div>
      <div className="card-input-container flex-container">
        <label htmlFor="card-number">CARD NUMBER</label>
        <input
          type="number"
          id="card-number"
          placeholder="e.g. 1234 5678 9123 0000"
        />
      </div>

      <div className="inline-input-container">
        <div className="exp-input-container inline-container flex-container">
          <label htmlFor="MM">EXP. DATE (MM/YY)</label>
          <div className="exp-number-container">
            <input type="number" id="MM" placeholder="MM" />
            <input type="number" id="YY" placeholder="YY" />
          </div>
        </div>

        <div className="cvc-input-container inline-container flex-container">
          <label htmlFor="cvc">CVC</label>
          <input type="number" id="cvc" placeholder="e.g. 123" />
        </div>
      </div>

      <button type="submit">Confirm</button>
    </form>
  );
}

export default Form;
