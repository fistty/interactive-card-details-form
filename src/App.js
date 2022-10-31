import Header from "./components/Header";
import Form from "./components/Form";
import "./App.css";
import { useState } from "react";

function App() {
  const [cardName, setCardName] = useState("");
  const [cardInput, setCardInput] = useState("");
  const [cardMM, setCardMM] = useState("");
  const [cardYY, setCardYY] = useState("");
  const [cardCvc, setcardCvc] = useState("");

  const handleCardInput = (e) => {
    if (e.target.value.length > 20) {
      e.target.value = e.target.value.slice(0, 20);
    }

    e.target.value = e.target.value.replace(/\D/g, "");
    const rawText = [...e.target.value.split(" ").join("")]; // Remove old space
    const newNumber = []; // Create card as array
    rawText.forEach((t, i) => {
      if (i % 4 === 0) {
        newNumber.push(" "); // Add space
      }
      newNumber.push(t);
    });
    newNumber.join(""); // Transform card array to string
    setCardInput(newNumber.join(""));
  };

  const handleNameInput = (e) => {
    setCardName(e.target.value);
  };

  const handleCardMM = (e) => {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
    e.target.value = e.target.value.replace(/\D/g, "");

    setCardMM(e.target.value);
  };

  const handleCardYY = (e) => {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
    e.target.value = e.target.value.replace(/\D/g, "");

    setCardYY(e.target.value);
  };

  const handleCardCvc = (e) => {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
    e.target.value = e.target.value.replace(/\D/g, "");

    setcardCvc(e.target.value);
  };

  const setError = (parent) => {
    const parentElement = parent;
    const errorElement = parentElement.querySelector(".error");
    errorElement.innerText = "Can't be blank";
    errorElement.style.display = "block";
  };

  const handleSubmit = (e) => {
    const parentElement = document.querySelector(".name-input-container");
    if (cardName.match(/^\s*$/)) {
      setError(parentElement);
    }

    if (cardInput.match(/^\s*$/)) {
      const parentElement = document.querySelector(".card-input-container");
      setError(parentElement);
    }

    if (cardCvc.match(/^\s*$/)) {
      console.log(cardCvc);
      const parentElement = document.querySelector(".cvc-input-container");
      setError(parentElement, "Can't be blank");
    }

    if (cardMM.match(/^\s*$/)) {
      const parentElement = document.querySelector(".exp-input-container");
      setError(parentElement, "Can't be blank");
    }

    if (cardYY.match(/^\s*$/)) {
      const parentElement = document.querySelector(".cvc-input-container");
      setError(parentElement, "Can't be blank");
    }

    e.preventDefault();
  };

  return (
    <>
      <Header
        cardName={cardName}
        cardInput={cardInput}
        cardMM={cardMM}
        cardYY={cardYY}
        cardCvc={cardCvc}
      />
      <main>
        <Form
          cardName={cardName}
          cardInput={cardInput}
          cardMM={cardMM}
          cardYY={cardYY}
          cardCvc={cardCvc}
          handleCardInput={handleCardInput}
          handleNameInput={handleNameInput}
          handleCardMM={handleCardMM}
          handleCardYY={handleCardYY}
          handleCardCvc={handleCardCvc}
          handleSubmit={handleSubmit}
        />
      </main>
    </>
  );
}

export default App;
