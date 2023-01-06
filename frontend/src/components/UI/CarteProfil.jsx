import React, { useState, useEffect } from "react";

function CarteProfil({ id }) {
  const [profil, setProfil] = useState();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/offres/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProfil(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex flex-col min-w-full justify-items-center items-center p-4 mx-6 my-5 text-darkPink text-justify border-2 rounded-3xl drop-shadow-xl">
      <h1 className="underline underline-offset-8 mx-4 mb-4">
        Profil recherché 🌱
      </h1>
      <p className="text-black">{profil?.profil_recherche}</p>
    </div>
  );
}

export default CarteProfil;
