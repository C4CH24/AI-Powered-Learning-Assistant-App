import React from 'react';
import { useParams, Link } from 'react-router-dom';

const DocumentDetailPage = () => {
  const { id } = useParams();
  return (
    <div className="page document-detail-page p-6">
      <h1>Document {id}</h1>
      <p>Document details and actions (generate flashcards, summarize, etc.)</p>
      <Link to={`/documents/${id}/flashcards`}>View Flashcards</Link>
    </div>
  );
};

export default DocumentDetailPage;
