import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="not-found-container">
      <h1>Oops!</h1>
      <p>La page que vous recherchez n'est pas ici.</p>
      <Link to="/" className="home-link">
        Aller à la page d'accueil
      </Link>
    </div>
  );
};

export default PageNotFound;
