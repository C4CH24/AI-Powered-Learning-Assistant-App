import React from 'react';
import { Link } from 'react-router-dom';

const DocumentListPage = () => {
  return (
    <div className="page documents-page p-6">
      <h1>Documents</h1>
      <p>List of documents will appear here.</p>
      <ul>
        <li><Link to="/documents/1">Document 1</Link></li>
        <li><Link to="/documents/2">Document 2</Link></li>
      </ul>
    </div>
  );
};

export default DocumentListPage;
