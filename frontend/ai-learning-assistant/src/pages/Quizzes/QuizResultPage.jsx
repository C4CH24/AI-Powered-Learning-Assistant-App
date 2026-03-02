import React from 'react';
import { useParams } from 'react-router-dom';

const QuizResultPage = () => {
  const { quizId } = useParams();
  return (
    <div className="page quiz-result-page p-6">
      <h1>Results for Quiz {quizId}</h1>
      <p>Results and stats will show here.</p>
    </div>
  );
};

export default QuizResultPage;
