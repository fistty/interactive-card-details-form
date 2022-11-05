import { useEffect, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import CompletedForm from "./components/CompletedForm";
import "./App.css";
import { handleSlice } from "./handleSlice";

function App() {
  const [cardName, setCardName] = useState("");
  const [cardInput, setCardInput] = useState("");
  const [cardMM, setCardMM] = useState("");
  const [cardYY, setCardYY] = useState("");
  const [cardCvc, setcardCvc] = useState("");
  const [isFormError, setIsFormError] = useState([false]);
  const [isFormCompleted, setIsFormCompleted] = useState(false);

  const handleIsInputError = () => {
    setIsFormError((prev) => {
      const newCopy = [...prev];
      newCopy.push(false);
      return newCopy;
    });
  };

  const handleIsCompleted = () => {
    setIsFormCompleted(false);
    setCardName("");
    setCardInput("");
    setCardMM("");
    setCardYY("");
    setcardCvc("");
  };

  const handleCardInput = (e) => {
    handleSlice(e, 20);

    const rawText = [...e.target.value]; // Remove old space
    // const rawText = [...e.target.value.split(" ").join("")]; // Remove old space
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
    handleSlice(e, 2);
    setCardMM(e.target.value);
  };

  const handleCardYY = (e) => {
    handleSlice(e, 2);
    setCardYY(e.target.value);
  };

  const handleCardCvc = (e) => {
    handleSlice(e, 3);
    setcardCvc(e.target.value);
  };

  const setError = (parent, message, id) => {
    const parentElement = parent;
    const errorElement = parentElement.querySelector(".error");
    const inputElement = parentElement.querySelector("input");

    if (id) {
      errorElement.innerText = message;
      errorElement.style.display = "block";
      const idElement = parentElement.querySelector("#" + id);
      idElement.classList.add("red-border");
      return;
    }
    errorElement.innerText = message;
    errorElement.style.display = "block";
    inputElement.classList.add("red-border");
  };

  const handleSubmit = (e) => {
    setIsFormError([]);
    if (cardName.match(/^\s*$/)) {
      const parentElement = document.querySelector(".name-input-container");
      setError(parentElement, "Can't be blank");
      handleIsInputError();
    }

    if (cardInput.match(/^\s*$/)) {
      const parentElement = document.querySelector(".card-input-container");
      setError(parentElement, "Can't be blank");
      handleIsInputError();
    } else if (cardInput.length < 16) {
      const parentElement = document.querySelector(".card-input-container");
      setError(parentElement, "Must be up to 16 digits");
      handleIsInputError();
    }

    if (cardMM.match(/^\s*$/)) {
      const parentElement = document.querySelector(".exp-input-container");
      setError(parentElement, "Can't be blank", "MM");
      handleIsInputError();
    } else if (cardMM < 1 || cardMM > 12) {
      const parentElement = document.querySelector(".exp-input-container");
      setError(parentElement, "Invalid Month", "MM");
      handleIsInputError();
    }

    if (cardYY.match(/^\s*$/)) {
      const parentElement = document.querySelector(".exp-input-container");
      setError(parentElement, "Can't be blankk", "YY");
      handleIsInputError();
    } else if (cardYY < 22) {
      const parentElement = document.querySelector(".exp-input-container");
      setError(parentElement, "Must be this year or above", "YY");
      handleIsInputError();
    }

    if (cardCvc.match(/^\s*$/)) {
      const parentElement = document.querySelector(".cvc-input-container");
      setError(parentElement, "Can't be blank");
      handleIsInputError();
    } else if (cardCvc.length < 3) {
      const parentElement = document.querySelector(".cvc-input-container");
      setError(parentElement, "CVC must be up to 3 digits");
      handleIsInputError();
    }
    e.preventDefault();
  };

  useEffect(() => {
    if (isFormError.indexOf(false) < 0) {
      setTimeout(() => {
        setIsFormCompleted(true);
      }, 500);
    }
  }, [isFormError]);

  return (
    <>
      <Header
        cardName={cardName}
        cardInput={cardInput}
        cardMM={cardMM}
        cardYY={cardYY}
        cardCvc={cardCvc}
        isFormCompleted={isFormCompleted}
      />
      {!isFormCompleted && (
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
      )}
      {isFormCompleted && (
        <main>
          <CompletedForm handleIsCompleted={handleIsCompleted} />
        </main>
      )}
    </>
  );
}

export default App;
