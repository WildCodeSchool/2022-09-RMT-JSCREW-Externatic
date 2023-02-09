import React from "react";
import iconAjout from "@assets/ajouter.png";

function Card({ offre }) {
  const { poste, localisation } = offre;
  return (
    <div className="w-72 md:w-56 border-2 border-white hover:scale-110 duration-300 rounded-lg shadow-2xl lg:max-w-lg mt-3 mx-3">
      <h3 className="bg-darkPink rounded-lg text-center text-1xl text-white font-semibold p-3 md:h-20">
        {poste}
      </h3>
      <div className="flex flex-col mx-3">
        <div className="flex flex-row justify-around items-center my-3">
          <p className="flex flex-row ml-4">📍 {localisation}</p>
          <img src={iconAjout} alt="bouton-ajout" className="ml-10 w-10 h-10" />
        </div>
      </div>
    </div>
  );
}

export default Card;
