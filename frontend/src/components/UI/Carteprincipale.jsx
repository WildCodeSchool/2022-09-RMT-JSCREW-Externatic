import React, { useState, useEffect } from "react";

function CartePrincipale({ id }) {
  const [offre, setOffre] = useState();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/offres/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setOffre(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex flex-col md:w-6/12 xl:w-5/12 justify-items-center items-center mx-6 my-5 bg-darkPink text-white rounded-3xl drop-shadow-xl">
      <h1 className="text-center text-2xl underline underline-offset-8 my-4">
        {offre?.poste}
      </h1>
      <div className="flex flex-row justify-center">
        <h2 className="flex items-center justify-center w-32 bg-pink rounded-2xl border-2 text-center text-lg mx-4 my-4">
          {offre?.contrat}
        </h2>
        <h2 className="flex items-center justify-center w-32 bg-pink rounded-2xl border-2 text-center text-lg mx-4 my-4">
          {offre?.condition_travail}
        </h2>
      </div>
      <h2 className="w-90 md:w-96 p-1 bg-white rounded-2xl text-darkPink text-center text-lg mx-4 my-4">
        {offre?.specialitees}
      </h2>
      <div className="flex flex-row justify-center">
        <h2 className="flex items-center w-32 bg-pink rounded-2xl border-2 text-center text-lg mx-4 my-4">
          Posté le : {offre?.dateOffre}
        </h2>
        <h2 className="flex items-center w-32 bg-pink rounded-2xl border-2 text-center text-lg mx-4 my-4">
          Fin des candidatures : {offre?.date_fin_offre}
        </h2>
      </div>
      <div>
        <h1 className="text-center text-2xl underline underline-offset-8 my-4">
          Missions
        </h1>
        <p className="w-90 md:w-96 text-justify my-4 mx-6">
          🎯 {offre?.mission}
        </p>
      </div>
    </div>
  );
}

export default CartePrincipale;
