import React, { useState } from "react";

import rigole from "../assets/jean-rigole.jpg";
import bahamas from "../assets/bahamas.jpg";
import oeil from "../assets/oeil.jpg";
import Card from "./Card";

function Grids() {
  const [isHovering, setIsHovering] = useState(false);

  // Index de la page actuellement survolée
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleMouseOver = (index) => {
    setCurrentIndex(index);
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setCurrentIndex(null);
    setIsHovering(false);
  };

  const grid = [
    {
      img: rigole,
      title: "Après coup Jean rigole",
      description:
        "Après coup Jean rigole.....Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem molestias, repudiandae consequatur ullam nisi ab sunt nesciunt vitae ratione provident qui, officia voluptatibus dicta, blanditiis iste esse iusto voluptates ea. Hic a alias fugiat sapiente minima ea debitis nostrum nulla? Beatae illo atque quod a dolorem facilis ab eum delectus? Cum nobis quia consequuntur? Ad esse aliquid qui, nisi optio ipsam alias sit impedit minus eos blanditiis vitae asperiores perspiciatis velit est necessitatibus laudantium ea deleniti? Fugit debitis tenetur, doloribus minus libero velit modi ullam amet ratione? Fuga in consectetur perspiciatis quibusdam. Consectetur, provident placeat. Magni ut quidem sequi facilis?",
    },
    {
      img: bahamas,
      title: "Des vacances aux Bahamas",
      description:
        "Des vacances aux Bahamas.....Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae autem itaque facilis quia omnis harum, veniam unde. Omnis doloremque, suscipit architecto a accusamus iusto. Modi reiciendis impedit repudiandae, deserunt laudantium velit totam nesciunt laboriosam, esse maiores sequi consectetur accusantium beatae iure eius. Accusamus facilis obcaecati ex incidunt voluptatem eligendi, impedit distinctio, tenetur blanditiis ullam error, nulla deserunt maiores illo consectetur perspiciatis laboriosam dolor nesciunt sunt commodi cum! Dolores veritatis accusamus praesentium asperiores, eligendi numquam perspiciatis esse consequatur harum delectus, deserunt ducimus doloribus iure earum minus eum corporis. Dolore, quo similique corporis quaerat non aliquid error natus eveniet sequi. Obcaecati, laudantium.",
    },
    {
      img: oeil,
      title: "Il me reste encore un œil",
      description:
        "Il me reste encore un œil....Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, iste distinctio laboriosam aspernatur ducimus quam unde, impedit exercitationem quia velit nam dicta perferendis fuga consectetur minus obcaecati tempora cumque nostrum itaque atque consequatur, ex perspiciatis. Sunt totam voluptatibus aut voluptas dolorum explicabo distinctio harum, voluptatem, vitae debitis quis corrupti perspiciatis?",
    },
  ];
  return (
    <>
      {/* Conteneur de grille pour les cartes */}
      <div className="grid">
        {/* Mapping des données de carte dans des éléments div */}
        {grid.map((item, index) => (
          <div
            key={index}
            onMouseOver={() => handleMouseOver(index)}
            onMouseOut={handleMouseOut}
          >
            {/* Composant Card avec les données de chaque carte */}
            <Card {...item} />
          </div>
        ))}
      </div>
      {/* Affichage de la description de la carte survolée si survolée */}
      <div>
        {isHovering && currentIndex !== null && (
          <p>{grid[currentIndex].description}</p>
        )}
      </div>
    </>
  );
}

export default Grids;
