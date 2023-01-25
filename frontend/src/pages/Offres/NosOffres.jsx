import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Card from "@components/UI/Card";
import Pagination from "@components/UI/Pagination";
import connaissance from "@assets/connaissance.png";
import loupe from "@assets/loupe.png";
import localisationjob from "@assets/localisation.png";

function NosOffres() {
  const [offresData, setOffresData] = useState();
  const [selectedPoste, setSelectedPoste] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedAll] = useState("");
  const [nbPages, setNbPages] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const page = parseInt(searchParams.get("page"), 10) || 1;
    fetch(`${import.meta.env.VITE_BACKEND_URL}/offres?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setOffresData(data);
        setNbPages(data.pages);
      })
      .catch((err) => console.error(err));
  }, [searchParams]);

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
        <div className="flex items-center my-4 md:mt-8">
          <div className="flex items-center border-solid border-2 border-darkPink rounded-3xl p-3">
            <img src={loupe} alt="loupejob" className="w-7 mr-5" />
            <select
              className="w-80"
              onChange={(event) => setSelectedPoste(event.target.value)}
            >
              <option value={selectedAll} selected>
                Métiers
              </option>
              {offresData &&
                offresData?.offre
                  .filter(
                    (offre) =>
                      !selectedCity || offre.localisation === selectedCity
                  )
                  .map((offre) => offre.poste)
                  .filter((value, index, self) => self.indexOf(value) === index)
                  .map((poste) => (
                    <option value={poste} key={poste} className="">
                      {poste}
                    </option>
                  ))}
            </select>
          </div>
        </div>
        <div className="flex items-center my-2">
          <div className="flex items-center border-solid border-2 border-darkPink rounded-3xl p-3 ">
            <img
              src={localisationjob}
              alt="localisationjob"
              className="w-7 mr-5"
            />
            <select
              className="w-80"
              onChange={(event) => setSelectedCity(event.target.value)}
            >
              <option value={selectedAll} selected>
                Villes
              </option>
              {offresData &&
                offresData?.offre
                  .filter(
                    (offre) => !selectedPoste || offre.poste === selectedPoste
                  )
                  .map((offre) => offre.localisation)
                  .filter((value, index, self) => self.indexOf(value) === index)
                  .map((localisation) => (
                    <option key={localisation}>{localisation}</option>
                  ))}
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center justify-items-center justify-center mb-5 mx-14">
        {offresData &&
          offresData?.offre
            .filter((offre) => !selectedPoste || offre.poste === selectedPoste)
            .filter(
              (offre) => !selectedCity || offre.localisation === selectedCity
            )
            .map((offre) => (
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
