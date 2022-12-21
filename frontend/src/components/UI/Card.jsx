import React from "react";
import iconAjout from "@assets/ajouter.png";

function Card() {
  return (
    <div className="w-72 rounded-lg shadow-md lg:max-w-lg mt-3 mx-auto">
      <div className="space-y-2">
        <h3 className="bg-darkPink rounded-lg text-center text-1xl text-white font-semibold p-3">
          Développeur fullstack web
        </h3>
        <div className="flex flex-row justify-between ">
          <p className="text-gray-600 p-1 ml-1">Nantes centres</p>
          <img src={iconAjout} alt="bouton-ajout" className=" mt-2 w-10 " />
        </div>
        <div className="">
          <p className="text-gray-600 ml-1">@Foodtech</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
