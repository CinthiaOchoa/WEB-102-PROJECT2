import React from "react";
import "./Flashcard.css";

function Flashcard({ card, flipped, setFlipped, feedback }) {
  return (
    <div
      className={`flashcard ${flipped ? "flipped" : ""} ${
        feedback === "correct" ? "flashcard-correct" : feedback === "incorrect" ? "flashcard-incorrect" : ""
      }`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="front">
        <img src={card.image} alt={card.city} />
        <p>What is the name of this city located in <strong>{card.country}</strong>?</p>
      </div>
      <div className="back">
        <img src={card.image} alt={card.city} />
        <div className="city-answer">
          <h3>{card.city}</h3>
          <p>{card.country}</p>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
