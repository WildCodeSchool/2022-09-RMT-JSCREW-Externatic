import React from "react";

import PageDefault from "@components/three/PageDefault";
import { Link } from "react-router-dom";

import "./page404.css";

function Page404() {
  return (
    <div>
      <div className="contain-404 font-tomorow">
        <div className="text">
          <div className="error">ERROR</div>
          <h1 className="error-title">404</h1>
          <PageDefault />
        </div>
        <div className="error">
          <Link to="/" className=" text-white hover:text-orange">
            Retour à la page d’accueil{" "}
          </Link>
        </div>
        <div className="astronaut">
          <img
            src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png"
            alt="astronaute"
          />
        </div>
      </div>
    </div>
  );
}

export default Page404;
