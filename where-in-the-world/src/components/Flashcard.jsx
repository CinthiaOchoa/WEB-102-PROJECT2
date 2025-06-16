import React from "react";
import "./Flashcard.css";

function Flashcard({ card, flipped, setFlipped }) {
  return (
    <div
      className={`flashcard ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="front">
        <div>
          <img src={card.image} alt={card.city} />
          <p>
            What is the name of this city located in <strong>{card.country}</strong>?
          </p>
        </div>
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
