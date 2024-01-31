import React from "react";
import Card from "../components/Card.jsx";
import oeil from "../assets/oeil.jpg";

function Accueil() {
  return (
    <section className="accueil">
      <h1>Prochainement en librairie!</h1>
      <article className="description">
        <section className="cardSection">
          <div className="card">
            <Card img={oeil} title="Il me reste encore un œil" />
          </div>
        </section>

        <p>
          « Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
          molestias dolorum expedita necessitatibus rem ullam vel consectetur
          sapiente porro. Magnam, aspernatur maiores debitis deleniti iure illo
          dolore libero consectetur consequuntur! »
        </p>
      </article>
    </section>
  );
}

export default Accueil;
