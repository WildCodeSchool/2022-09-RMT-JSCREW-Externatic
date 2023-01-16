import React from "react";

function CarteProfil({ offre }) {
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
