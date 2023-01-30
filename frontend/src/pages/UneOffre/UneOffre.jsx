import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import CartePrincipale from "@components/UI/CardOffre/CartePrincipale";
import CarteAvantages from "@components/UI/CardOffre/CarteAvantages";
import CarteProfil from "@components/UI/CardOffre/CarteProfil";
import CarteSalaire from "@components/UI/CardOffre/CarteSalaire";
import ListOfOffers from "@components/UI/CardOffre/ListOfOffers";
import icon4 from "../../../public/externatic_favicon.png";

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
  }, [id]);

  return (
    <div className="container-offre font-roboto">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Offre</title>
        <meta
          name="description"
          content="Page Offre qui affiche toutes les informations concernant une offre d'emploi du site Externatic"
        />
        <link rel="icon" type="image/png" href={icon4} />
      </Helmet>
      <div className="flex justify-center items-center bg-white h-20 border-y-2 border-darkPink fixed z-10 w-screen drop-shadow-xl hover:bg-darkPink hover:text-white text-xl text-black ">
        <button type="button" className="font-bold w-full h-full">
          Postuler à cette offre
        </button>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="flex justify-center md:w-7/12 lg:w-6/12 xl:w-5/12 mx-6 mt-4">
          <CartePrincipale offre={offre} />
        </div>
        <div className="flex flex-col md:w-5/12 lg:w-4/12 xl:w-4/12 mx-6 items-center md:mt-4">
          <CarteAvantages offre={offre} />
          <CarteProfil offre={offre} />
          <CarteSalaire offre={offre} />
        </div>
      </div>
      <ListOfOffers offre={offre} />
    </div>
  );
}

export default UneOffre;
