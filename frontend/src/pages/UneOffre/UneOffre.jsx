import React from "react";
import { useParams } from "react-router-dom";
import CartePrincipale from "@components/UI/Carteprincipale";
import CarteEntreprise from "@components/UI/CarteEntreprise";
import CarteProfil from "@components/UI/CarteProfil";
import ListOfOffers from "@components/UI/ListOfOffers";
import offreentete from "@assets/offre_emploi.jpg";

function UneOffre() {
  const { id } = useParams();

  return (
    <div className="container-offre">
      <div className="">
        <img src={offreentete} alt="" />
      </div>
      <CartePrincipale id={id} />
      <CarteEntreprise id={id} />
      <CarteProfil id={id} />
      <ListOfOffers />
    </div>
  );
}

export default UneOffre;
