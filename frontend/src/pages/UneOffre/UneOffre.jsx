import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartePrincipale from "@components/UI/CardOffre/CartePrincipale";
import CarteAvantages from "@components/UI/CardOffre/CarteAvantages";
import CarteProfil from "@components/UI/CardOffre/CarteProfil";
import CarteSalaire from "@components/UI/CardOffre/CarteSalaire";
import ListOfOffers from "@components/UI/CardOffre/ListOfOffers";
import offreentete from "@assets/offre_emploi.jpg";

function UneOffre() {
  const { id } = useParams();
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
    <div className="container-offre">
      <div className="flex justify-center">
        <img className="h-auto w-screen" src={offreentete} alt="" />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="flex justify-center md:w-6/12 lg:w-6/12 xl:w-6/12 mx-6">
          <CartePrincipale offre={offre} />
        </div>
        <div className="flex flex-col md:w-6/12 lg:w-4/12 xl:w-4/12 mx-6 items-center">
          <CarteAvantages offre={offre} />
          <CarteProfil offre={offre} />
          <CarteSalaire offre={offre} />
        </div>
      </div>
      <ListOfOffers />
    </div>
  );
}

export default UneOffre;
