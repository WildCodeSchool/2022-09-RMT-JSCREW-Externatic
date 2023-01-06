import React from "react";
import { useParams } from "react-router-dom";
import CartePrincipale from "@components/UI/Carteprincipale";
import CarteEntreprise from "@components/UI/CarteEntreprise";
import CarteProfil from "@components/UI/CarteProfil";
import CarteSalaire from "@components/UI/CarteSalaire";
import ListOfOffers from "@components/UI/ListOfOffers";
import offreentete from "@assets/offre_emploi.jpg";

function UneOffre() {
  const { id } = useParams();

  return (
    <div className="container-offre">
      <div className="">
        <img src={offreentete} alt="" />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="flex justify-center md:w-6/12 xl:w-5/12 mx-6">
          <CartePrincipale id={id} />
        </div>
        <div className="flex flex-col md:w-6/12 xl:w-5/12 mx-3 items-center">
          <CarteEntreprise id={id} />
          <CarteProfil id={id} />
          <CarteSalaire id={id} />
        </div>
      </div>
      <ListOfOffers />
    </div>
  );
}

export default UneOffre;
