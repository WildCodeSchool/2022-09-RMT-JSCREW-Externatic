import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartePrincipale from "@components/UI/CartePrincipale";
import CarteAvantages from "@components/UI/CarteAvantages";
import CarteProfil from "@components/UI/CarteProfil";
import CarteSalaire from "@components/UI/CarteSalaire";
import ListOfOffers from "@components/UI/ListOfOffers";
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
        <img className="h-auto lg:w-9/12" src={offreentete} alt="" />
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
