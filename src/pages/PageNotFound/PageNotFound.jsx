import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';  // We'll create this CSS file next

const PageNotFound = () => {
  return (
    <div className="not-found-container">
      <h1>Oops!</h1>
      <p>The page you're looking for isn't here.</p>
      <Link to="/" className="home-link">Go Home</Link>
    </div>
  );
};

export default PageNotFound;
