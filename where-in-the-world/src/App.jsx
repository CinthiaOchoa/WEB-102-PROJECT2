import React, { useState } from "react";
import Flashcard from "./components/Flashcard";
import { cards } from "./data/cards";
import "./App.css";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const [flipped, setFlipped] = useState(false); // <- added

  const handleNext = () => {
    const next = Math.floor(Math.random() * cards.length);
    setCurrentIndex(next);
    setFlipped(false); // <- reset to front of card
  };

  const handleStart = () => {
    setStarted(true);
    handleNext();
  };

  return (
    <div className="app-container">
      <h1>🌍 Where in the World is This City?</h1>
      <p>Test your world knowledge with beautiful flashcards!</p>

      {!started ? (
        <div className="start-card">
          <div className="intro-card">
            <h2>Ready to explore the world?</h2>
            <p>Click below to start guessing cities from stunning places 🌆</p>
            <button className="start-button" onClick={handleStart}>
              Start Game
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="card-container">
            <Flashcard
              card={cards[currentIndex]}
              flipped={flipped}
              setFlipped={setFlipped}
            />
            <button className="next-button" onClick={handleNext}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
