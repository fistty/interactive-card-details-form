import React from "react";

function Form({
  cardName,
  cardNumber,
  cardMM,
  cardYY,
  cardCvc,
  handleCardInput,
  handleNameInput,
  handleCardMM,
  handleCardYY,
  handleCardCvc,
}) {
  return (
    <form className="form-container">
      <div className="name-input-container flex-container">
        <label htmlFor="name">CARDHOLDER NAME</label>
        <input
          type="text"
          id="name"
          placeholder="e.g. Jane Appleseed"
          value={cardName}
          onChange={handleNameInput}
        />
      </div>
      <div className="card-input-container flex-container">
        <label htmlFor="card-number">CARD NUMBER</label>
        <input
          type="number"
          id="card-number"
          placeholder="e.g. 1234 5678 9123 0000"
          value={cardNumber}
          onChange={handleCardInput}
          maxLength={16}
        />
      </div>

      <div className="inline-input-container">
        <div className="exp-input-container inline-container flex-container">
          <label htmlFor="MM">EXP. DATE (MM/YY)</label>
          <div className="exp-number-container">
            <input
              type="number"
              id="MM"
              maxLength={2}
              placeholder="MM"
              value={cardMM}
              onChange={handleCardMM}
              max={12}
            />
            <input
              type="number"
              id="YY"
              maxLength={2}
              placeholder="YY"
              value={cardYY}
              onChange={handleCardYY}
              min={21}
            />
          </div>
        </div>

        <div className="cvc-input-container inline-container flex-container">
          <label htmlFor="cvc">CVC</label>
          <input
            type="number"
            id="cvc"
            maxLength={3}
            placeholder="e.g. 123"
            value={cardCvc}
            onChange={handleCardCvc}
            min={21}
          />
        </div>
      </div>

      <button type="submit">Confirm</button>
    </form>
  );
}

export default Form;
