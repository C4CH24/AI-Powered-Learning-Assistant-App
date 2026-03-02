import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="page not-found p-6">
    <h1>404 — Page Not Found</h1>
    <p>The page you requested does not exist.</p>
    <p><Link to="/">Go home</Link></p>
  </div>
);

export default NotFoundPage;
