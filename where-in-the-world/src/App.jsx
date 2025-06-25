import React, { useState } from "react";
import Flashcard from "./components/Flashcard";
import { cards as allCards } from "./data/cards";
import "./App.css";

function App() {
  const [cards, setCards] = useState(allCards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [streak, setStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [mastered, setMastered] = useState([]);
  const [shuffled, setShuffled] = useState(false);

  const currentCard = cards[currentIndex];

  const normalize = (text) =>
    text.toLowerCase().replace(/[^a-z0-9]/gi, "").trim();

  const handleGuessSubmit = () => {
    const userAnswer = normalize(guess);
    const correctAnswer = normalize(currentCard.city);

    if (
      correctAnswer.includes(userAnswer) ||
      userAnswer.includes(correctAnswer)
    ) {
      setFeedback("correct");
      setFlipped(true);
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > longestStreak) setLongestStreak(newStreak);
    } else {
      setFeedback("incorrect");
      setStreak(0);
    }
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setFlipped(false);
      setGuess("");
      setFeedback(null);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setFlipped(false);
      setGuess("");
      setFeedback(null);
    }
  };

  const handleMastered = () => {
    const masteredCard = cards[currentIndex];
    const updatedCards = cards.filter((_, idx) => idx !== currentIndex);
    setCards(updatedCards);
    setMastered([...mastered, masteredCard]);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
    setFlipped(false);
    setGuess("");
    setFeedback(null);
  };

  const handleShuffle = () => {
    const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
    setCurrentIndex(0);
    setShuffled(true);
    setFlipped(false);
    setGuess("");
    setFeedback(null);
  };

  return (
    <div className="app-container">
      <h1>🌍 Where in the World is This City?</h1>
      <p>Type your guess for the city based on the image and country shown.</p>

      <Flashcard card={currentCard} flipped={flipped} setFlipped={setFlipped} feedback={feedback} />

      <div className="input-section">
        <input
          type="text"
          placeholder="Your guess..."
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
        <button onClick={handleGuessSubmit}>Submit</button>
        {feedback && (
          <span className={feedback === "correct" ? "feedback-correct" : "feedback-incorrect"}>
            {feedback === "correct" ? "✅ Correct!" : "❌ Try again."}
          </span>
        )}
      </div>

      <div className="navigation-buttons">
        <button onClick={handlePrev} disabled={currentIndex === 0}>
          ⬅️ Back
        </button>
        <button onClick={handleNext} disabled={currentIndex >= cards.length - 1}>
          Next ➡️
        </button>
      </div>

      <div className="streak-info">
        <p>🔥 Streak: {streak}</p>
        <p>🏆 Longest Streak: {longestStreak}</p>
      </div>

      <button className="mastered-button" onClick={handleMastered}>
        Mark as Mastered ✅
      </button>

      <button className="shuffle-button" onClick={handleShuffle}>
        🔀 Shuffle Cards
      </button>

      {cards.length === 0 && <p>🎉 You've mastered all the cities!</p>}
    </div>
  );
}

export default App;
