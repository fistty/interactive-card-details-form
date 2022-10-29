import Header from "./components/Header";
import Form from "./components/Form";
import "./App.css";
import { useState } from "react";

function App() {
  const [cardInput, setCardInput] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardMM, setCardMM] = useState("");
  const [cardYY, setCardYY] = useState("");
  const [cardCvc, setcardCvc] = useState("");

  const handleCardInput = (e) => {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }

    const rawText = [...e.target.value.split(" ").join("")]; // Remove old space
    const creditCard = []; // Create card as array
    rawText.forEach((t, i) => {
      if (i % 4 === 0) creditCard.push(" "); // Add space
      creditCard.push(t);
    });
    creditCard.join("");
    // 
    setCardInput(creditCard);
    // Transform card array to string
    // setCardInput(e.target.value);
  };

  const handleNameInput = (e) => {
    setCardName(e.target.value);
  };

  const handleCardMM = (e) => {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
    setCardMM(e.target.value);
  };

  const handleCardYY = (e) => {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
    setCardYY(e.target.value);
  };

  const handleCardCvc = (e) => {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
    setcardCvc(e.target.value);
  };

  return (
    <>
      <Header
        cardName={cardName}
        cardNumber={cardInput}
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
        />
      </main>
    </>
  );
}

export default App;
