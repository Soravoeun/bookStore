import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

function Navbar() {
  // Déclaration de l'état actif et de son setstate, par defaut c'est la page "app"
  const [active, setActive] = useState("app");
  const activeClass = "active";

  return (
    <div className="navbar">
      <h2>Jean Neymar</h2>
      <section className="routerLink">
        <nav className="nav">
          <RouterLink
            to="/app"
            // Gestion du clic sur le lien "Accueil"
            onClick={() => setActive("app")}
            // Appliquer la classe active si le lien est actif
            className={active === "app" ? activeClass : ""}
          >
            <span>Accueil</span>
          </RouterLink>

          <RouterLink
            to="/about"
            onClick={() => setActive("about")}
            className={active === "about" ? activeClass : ""}
          >
            <span>A Propos</span>
          </RouterLink>

          <RouterLink
            to="/books"
            onClick={() => setActive("books")}
            className={active === "books" ? activeClass : ""}
          >
            <span>Oeuvres</span>
          </RouterLink>
        </nav>
      </section>
    </div>
  );
}

export default Navbar;
