import React, { useState } from "react";
// import "./App.css";
import Data from "../../Data.json";

const FlipCard = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [ButtonName, setButtonName] = useState("Discription");

  const handleButtonClick = (cardNumber) => {
    setActiveCard(cardNumber);
    setButtonName((prevName) =>
      prevName === "Discription" ? "Go Back " : "Discription"
    );
  };

  const isCardFlipped = (cardNumber) => activeCard === cardNumber;

  return (
    <>
      <div className="list">
        {[1, 2, 3].map((cardNumber) => (
          <div
            key={cardNumber}
            className={`flip-card ${isCardFlipped(cardNumber) ? "flipped" : ""}`}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="img">
                  <img
                    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS1dx2Fp1m7fM6rXw09v9Li9_HkyDEMQrMJr466HdQCRovf3IPsv6GQg_2amx9b"
                    alt=""
                  />
                </div>
                <div>
                  <h2>Fullmetal Alchemist</h2>
                  <h2>April 5, 2009</h2>
                </div>
              </div>
              <div className="flip-card-back">
                <div className="Discription">
                  <h1>Description</h1>
                  <p className="Disc">
                    Based on the manga by Hiromu Arakawa, this series follows the
                    journey of two brothers, Edward and Alphonse Elric, as they
                    seek the Philosopher's Stone to restore their bodies.
                  </p>
                </div>
              </div>
            </div>
            <button className="btn" onClick={() => handleButtonClick(cardNumber)}>
              {ButtonName}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default FlipCard;
