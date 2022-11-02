import React from "react";

function Form({
  cardName,
  cardInput,
  cardMM,
  cardYY,
  cardCvc,
  handleCardInput,
  handleNameInput,
  handleCardMM,
  handleCardYY,
  handleCardCvc,
  handleSubmit,
}) {
  const preventKey = (e) => {
    if (["e", "E", "+", "-"].includes(e.key)) {
      e.preventDefault();
    }
    const parentElement = e.target.parentElement;
    const errorElement = parentElement.querySelector(".error");
    if (errorElement === null) {
      const newParentElement = parentElement.parentElement;

      const newErrorElement = newParentElement.querySelector(".error");
      newErrorElement.style.display = "none";

      const inputElement = parentElement.querySelectorAll("input");

      inputElement.forEach((input) => {
        input.classList.remove("red-border");
      });

      return;
    }
    errorElement.style.display = "none";
    const inputElement = parentElement.querySelector("input");
    inputElement.classList.remove("red-border");
  };
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="name-input-container flex-container">
        <label htmlFor="name">CARDHOLDER NAME</label>
        <input
          type="text"
          id="name"
          placeholder="e.g. Jane Appleseed"
          value={cardName}
          onChange={handleNameInput}
          onKeyDown={preventKey}
        />
        <div className="error"></div>
      </div>
      <div className="card-input-container flex-container">
        <label htmlFor="card-input">CARD NUMBER</label>
        <input
          type="tel"
          inputMode="numeric"
          autoComplete="cc-number"
          id="card-input"
          placeholder="e.g. 1234 5678 9123 0000"
          value={cardInput}
          onChange={handleCardInput}
          onKeyDown={preventKey}
        />
        <div className="error"></div>
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
              onKeyDown={preventKey}
            />

            <input
              type="number"
              id="YY"
              maxLength={2}
              placeholder="YY"
              value={cardYY}
              onChange={handleCardYY}
              onKeyDown={preventKey}
            />
          </div>
          <div className="error"></div>
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
            onKeyDown={preventKey}
          />
          <div className="error"></div>
        </div>
      </div>

      <button type="submit">Confirm</button>
    </form>
  );
}

export default Form;
