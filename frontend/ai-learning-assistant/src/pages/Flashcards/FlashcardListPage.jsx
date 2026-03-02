import React from 'react';
import { Link } from 'react-router-dom';

const FlashcardListPage = () => {
  return (
    <div className="page flashcards-page p-6">
      <h1>Flashcards</h1>
      <p>All flashcard sets</p>
      <ul>
        <li><Link to="/documents/1/flashcards">Flashcards for Document 1</Link></li>
      </ul>
    </div>
  );
};

export default FlashcardListPage;
