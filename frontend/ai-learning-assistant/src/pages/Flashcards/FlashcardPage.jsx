import React from 'react';
import { useParams } from 'react-router-dom';

const FlashcardPage = () => {
  const { id } = useParams();
  return (
    <div className="page flashcard-page p-6">
      <h1>Flashcards for Document {id}</h1>
      <p>Flashcards UI goes here.</p>
    </div>
  );
};

export default FlashcardPage;
