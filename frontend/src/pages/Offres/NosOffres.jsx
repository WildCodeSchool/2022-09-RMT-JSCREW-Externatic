import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import apiConnexion from "@services/apiConnexion";
import Card from "@components/UI/Card";
import Pagination from "@components/UI/Offres/Pagination";
import FilterJob from "@components/UI/Offres/FilterJob";
import FilterLocalisation from "@components/UI/Offres/FilterLocalisation";
import connaissance from "@assets/connaissance.png";

function NosOffres() {
  const [offresData, setOffresData] = useState();
  const [selectedPoste, setSelectedPoste] = useState();
  const [selectedCity, setSelectedCity] = useState();
  const [nbPages, setNbPages] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const page = parseInt(searchParams.get("page"), 10) || 1;
    let url = `/offres?page=${page}`;
    if (selectedPoste?.poste) url += `&poste=${selectedPoste.poste}`;
    if (selectedCity?.localisation)
      url += `&localisation=${selectedCity.localisation}`;
    apiConnexion
      .get(url)
      .then((data) => {
        setOffresData(data.data.offre);
        setNbPages(data.data.pages);
      })
      .catch((err) => console.error(err));
  }, [searchParams, selectedPoste, selectedCity]);

  return (
    <div className="font-roboto text-black">
      <div className="flex flex-col items-center my-5 mx-5">
        <div className="font-bold text-center text-xl md:text-2xl mb-4">
          Vos opportunités d'emploi,
          <br />
          uniquement chez les clients finaux
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={connaissance} alt="connaissance" className="w-10 mb-3" />
          <div className="text-justify md:text-center w-12/12 md:w-8/12">
            Si vous recherchez des opportunités d’emploi dans le domaine
            informatique, le cabinet de recrutement Externatic peut mettre à
            votre disposition une équipe de consultants en technologie de
            l’information, pour vous aider à trouver l’emploi qui vous
            correspond.
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-around lg:mx-40 xl:mx-56 my-8 mb-8">
        <h2 className="font-bold text-center underline underline-offset-8 mb-4 md:mb-0">
          Toutes nos offres :
        </h2>
        <FilterJob
          selectedPoste={selectedPoste}
          setSelectedPoste={setSelectedPoste}
        />
        <FilterLocalisation
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
        />
      </div>
      <div className="flex flex-col md:grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center justify-items-center justify-center mb-5 mx-14">
        {offresData &&
          offresData.map((offre) => (
            <Link to={`/offres/${offre.id}`}>
              <Card key={offre.id} offre={offre} />
            </Link>
          ))}
      </div>
      <div className="flex flex-row justify-center my-5 mt-16">
        {new Array(nbPages).fill().map((_, index) => {
          return <Pagination index={index} setPages={setSearchParams} />;
        })}
      </div>
    </div>
  );
}

export default NosOffres;
