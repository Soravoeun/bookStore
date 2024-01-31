import React from "react";
import Oeil from "../assets/oeil.jpg";
import { Link } from "react-router-dom";

function Card(props) {
  const { index, img, title, description, showDescription } = props;
  return (
    <section className="cardSection">
      <div className="card">
        {/* Lien vers la page "book" selectionnée */}
        <Link to={`/books/${index}`}>
          <img src={img} alt="Logo" className="cardImage" />
          <h3 className="cardTitle">{title}</h3>

          {/* Affichage de la description si showDescription est vrai */}
          {showDescription && <p>{description}</p>}
        </Link>
      </div>
    </section>
  );
}

export default Card;
