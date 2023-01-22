import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Card from "@components/UI/Card";
import connaissance from "@assets/connaissance.png";
import icon4 from "@assets/externatic_favicon.png";

function NosOffres() {
  const [offresData, setOffresData] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/offres`)
      .then((res) => res.json())
      .then((data) => {
        setOffresData(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nos offres</title>
        <meta
          name="description"
          content="Page Nos offres qui affiche toutes les offres d'emploi du site Externatic"
        />
        <link rel="icon" type="image/png" href={icon4} />
      </Helmet>
      <div className="flex flex-col items-center text-dark my-5 mx-5">
        <div className="font-bold text-center mb-4">
          Vos opportunités d'emploi,
          <br />
          uniquement chez les clients finaux
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={connaissance} alt="connaissance" className="w-10 mb-3" />
          <div className="text-justify w-12/12 md:w-8/12">
            Si vous recherchez des opportunités d’emploi dans le domaine
            informatique, le cabinet de recrutement Externatic peut mettre à
            votre disposition une équipe de consultants en technologie de
            l’information, pour vous aider à trouver l’emploi qui vous
            correspond.
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-around lg:mx-40 xl:mx-56 my-2">
        <h2 className="font-bold text-center mb-4 md:mb-0">
          Toutes nos offres :
        </h2>
        <div className="flex items-center my-2">
          <div className="border-solid border-2 border-darkPink rounded-3xl p-3">
            <select>
              <option selected>Titre du poste</option>
              <option value="devweb">Développeur Web</option>
              <option value="ingetest">Ingénieur automatisation de test</option>
              <option value="devjavaspring">Développeur Java Spring</option>
            </select>
          </div>
        </div>
        <div className="flex items-center my-2">
          <div className="border-solid border-2 border-darkPink rounded-3xl p-3 ">
            <select>
              <option selected>Ville</option>
              <option value="pariscv">Paris</option>
              <option value="lyoncv">Lyon</option>
              <option value="rennescv">Rennes</option>
            </select>
          </div>
        </div>
        <button
          type="button"
          className="text-darkPink border-solid border-2 border-darkPink rounded-xl px-3 mx-3 my-3 hover:bg-darkPink hover:text-white "
        >
          Recherche
        </button>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center mb-5 mx-14">
        {offresData &&
          offresData.map((offre) => (
            <Link to={`/offres/${offre.id}`}>
              <Card key={offre.id} offre={offre} />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default NosOffres;
