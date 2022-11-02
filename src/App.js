import { useEffect, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import CompletedForm from "./components/CompletedForm";
import "./App.css";

function App() {
  const [cardName, setCardName] = useState("");
  const [cardInput, setCardInput] = useState("");
  const [cardMM, setCardMM] = useState("");
  const [cardYY, setCardYY] = useState("");
  const [cardCvc, setcardCvc] = useState("");
  const [isFormError, setIsFormError] = useState([false]);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleIsFormError = () => {
    setIsFormError((prev) => {
      const newCopy = [...prev];
      newCopy.push(false);
      return newCopy;
    });
    console.log(isFormError);
  };

  const handleIsCompleted = () => {
    setIsCompleted(false);
  };

  const handleCardInput = (e) => {
    if (e.target.value.length > 20) {
      e.target.value = e.target.value.slice(0, 20);
    }

    e.target.value = e.target.value.replace(/\D/g, "");
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
      handleIsFormError();
    }

    if (cardInput.match(/^\s*$/)) {
      const parentElement = document.querySelector(".card-input-container");
      setError(parentElement, "Can't be blank");
      handleIsFormError();
    } else if (cardInput.length < 20) {
      const parentElement = document.querySelector(".card-input-container");
      setError(parentElement, "Must be up to 16 digits");
      handleIsFormError();
    }

    if (cardMM.match(/^\s*$/)) {
      const parentElement = document.querySelector(".exp-input-container");
      setError(parentElement, "Can't be blank", "MM");
      handleIsFormError();
    } else if (cardMM < 1 || cardMM > 12) {
      const parentElement = document.querySelector(".exp-input-container");
      setError(parentElement, "Invalid Month", "MM");
      handleIsFormError();
    }

    if (cardYY.match(/^\s*$/)) {
      const parentElement = document.querySelector(".exp-input-container");
      setError(parentElement, "Can't be blankk", "YY");
      handleIsFormError();
    } else if (cardYY < 22) {
      const parentElement = document.querySelector(".exp-input-container");
      setError(parentElement, "Must be this year or above", "YY");
      handleIsFormError();
    }

    if (cardCvc.match(/^\s*$/)) {
      const parentElement = document.querySelector(".cvc-input-container");
      setError(parentElement, "Can't be blank");
      handleIsFormError();
    } else if (cardCvc.length < 3) {
      const parentElement = document.querySelector(".cvc-input-container");
      setError(parentElement, "CVC must be up to 3 digits");
      handleIsFormError();
    }
    e.preventDefault();
  };

  useEffect(() => {
    if (isFormError.indexOf(false) < 0) {
      setIsCompleted(true);
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
      />
      {!isCompleted && (
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
      {isCompleted && (
        <main>
          <CompletedForm handleIsCompleted={handleIsCompleted} />
        </main>
      )}
    </>
  );
}

export default App;
