import React from 'react';
import { useParams, Link } from 'react-router-dom';

const QuizTakePage = () => {
  const { quizId } = useParams();
  return (
    <div className="page quiz-page p-6">
      <h1>Take Quiz {quizId}</h1>
      <p>Quiz interface placeholder.</p>
      <Link to={`/quizzes/${quizId}/results`}>See results</Link>
    </div>
  );
};

export default QuizTakePage;
