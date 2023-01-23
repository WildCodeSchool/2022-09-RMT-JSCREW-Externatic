import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "@components/UI/Card";
import connaissance from "@assets/connaissance.png";
import loupe from "@assets/loupe.png";
import localisationjob from "@assets/localisation.png";

function NosOffres() {
  const [offresData, setOffresData] = useState([]);
  const [selectedPoste, setSelectedPoste] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/offres`)
      .then((res) => res.json())
      .then((data) => {
        setOffresData(data);
      })
      .catch((err) => console.error(err));
  }, []);

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
              <option value={undefined} selected>
                Métier
              </option>
              {offresData
                .filter(
                  (offre) =>
                    !selectedCity || offre.localisation === selectedCity
                )
                .map((offre) => offre.poste)
                .filter((value, index, self) => self.indexOf(value) === index)
                .map((poste) => (
                  <option value={poste} key={poste} className="text-darkPink">
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
              <option value={undefined} selected>
                Ville
              </option>
              {offresData
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
      <div className="flex flex-col md:flex-row items-center justify-center mb-10 mx-14">
        {offresData &&
          offresData
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
    </div>
  );
}

export default NosOffres;
