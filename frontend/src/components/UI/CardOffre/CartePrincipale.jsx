import React from "react";
import "./CartePrincipale.css";

function CartePrincipale({ offre }) {
  return (
    <div className="bganimationcard flex flex-col min-w-full justify-items-center items-center my-5 text-white rounded-3xl drop-shadow-xl">
      <h1 className="text-center text-2xl underline underline-offset-8 my-4 p-3">
        {offre?.poste}
      </h1>
      <div className="flex flex-row justify-center">
        <h2 className="flex items-center justify-center p-3 w-36 lg:w-48 xl:w-64 bg-pink rounded-2xl border-2 text-center text-lg mx-4 my-4">
          {offre?.contrat}
        </h2>
        <h2 className="flex items-center justify-center p-3 w-36 lg:w-48 xl:w-64 bg-pink rounded-2xl border-2 text-center text-lg mx-4 my-4">
          {offre?.condition_travail}
        </h2>
      </div>
      <h2 className="w-90 md:w-96 p-3 bg-white rounded-2xl text-darkPink text-center text-lg mx-4 my-4">
        {offre?.specialitees}
      </h2>
      <div className="flex flex-row justify-center">
        <h2 className="flex items-center justify-center p-3 w-36 lg:w-48 xl:w-64 bg-pink rounded-2xl border-2 text-center text-lg mx-4 my-4">
          Posté le : {offre?.dateOffre}
        </h2>
        <h2 className="flex items-center justify-center p-3 w-36 lg:w-48 xl:w-64 bg-pink rounded-2xl border-2 text-center text-lg mx-4 my-4">
          Fin des candidatures : {offre?.date_fin_offre}
        </h2>
      </div>
      <div>
        <h1 className="text-center text-2xl underline underline-offset-8 my-4">
          Missions
        </h1>
        <p className="text-center text-justify my-4 mx-6 p-3">
          🎯 {offre?.mission}
        </p>
      </div>
    </div>
  );
}

export default CartePrincipale;
