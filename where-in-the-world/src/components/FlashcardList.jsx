import Flashcard from "./Flashcard";

export default function FlashcardList({ cards }) {
  return (
    <div className="card-list">
      {cards.map((card, index) => (
        <Flashcard card={card} key={index} />
      ))}
    </div>
  );
}
