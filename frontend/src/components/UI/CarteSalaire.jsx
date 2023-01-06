import React, { useState, useEffect } from "react";

function CarteSalaire({ id }) {
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
    <div className="flex flex-col min-w-full justify-items-center items-center p-4 mx-6 my-5 bg-darkPink text-white text-justify border-2 rounded-3xl drop-shadow-xl">
      <h1 className="underline underline-offset-8 mx-4 mb-4">Salaire 🌞</h1>
      <p className="font-bold text-white">{offre?.salaire}</p>
    </div>
  );
}

export default CarteSalaire;
