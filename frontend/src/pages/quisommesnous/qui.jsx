import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import apiConnexion from "@services/apiConnexion";
import CardConsultants from "@components/UI/CardConsultants";

import "./qui.css";
import dessinduo1 from "@assets/pictureduo.png";
import dessinduo2 from "@assets/pictureduo2.png";
import icon4 from "../../../public/externatic_favicon.png";

function Quisommesnous() {
  const [consultants, setConsultants] = useState([]);

  useEffect(() => {
    apiConnexion
      .get(`/consultants`)
      .then((job) => setConsultants(job.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="parent">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Qui sommes nous</title>
        <meta
          name="description"
          content="Page Qui sommes nous qui affiche toutes les informations utiles sur l'entreprise Externatic et ses consultants"
        />
        <link rel="icon" type="image/png" href={icon4} />
      </Helmet>
      <div className="container flex flex-col w-5/6 place-items-center m-auto mt-4">
        <h1 className="font-bold text-3xl text-black text-center">
          Qui sommes-nous ?
        </h1>
        <div className="flex flex-end items-center mx-auto">
          <h2 className="text-black p-5 drop-shadow-xl rounded-3xl px-2 font-bold">
            Nos valeurs humaines et professionnelles
          </h2>
          <img src={dessinduo1} alt="dessinduo" className="w-40" />
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-darkPink text-white p-5 drop-shadow-xl rounded-3xl text-center">
            <p className="my-2 mb-4">
              Externatic, c’est avant tout une équipe d’experts IT, tous animés
              par la même passion des relations humaines.
            </p>
            <p className="my-2 mb-4">
              L’intelligence émotionnelle et l’éducation cognitive ne peuvent
              être remplacées par des algorithmes.
            </p>
            <p className="my-2 mb-4">
              Notre cabinet de recrutement s’appuie sur des méthodes
              authentiques, où l’humain est tout simplement indispensable.
              Depuis 10 ans, externatic a développé un savoir-faire sur le
              recrutement de profils pénuriques.
            </p>
            <p className="my-2 mb-4">
              Ces compétences nous permettent d’intervenir sur d’autres secteurs
              que l’IT. Notamment l’industrie avec Induseo et la cybersécurité
              avec Underguard.
            </p>
          </div>
          <div className="flex flex-row mt-5">
            <a href="https://www.induseo.fr/">
              <p className="discover text-darkPink border-solid border-2 border-darkPink rounded-xl px-3 mx-3">
                Découvrir Induseo
              </p>
            </a>
            <a href="https://www.underguard.fr/">
              <p className="discover text-darkPink border-solid border-2 border-darkPink rounded-xl px-3 mx-3">
                Découvrir underguard
              </p>
            </a>
          </div>
          <div className="flex flex-row items-center mx-auto">
            <img src={dessinduo2} alt="dessinduo2" className="w-40" />
            <h2 className="text-black p-5 drop-shadow-xl rounded-3xl w-2/3 px-2 font-bold text-end">
              Nos valeurs humaines et professionnelles
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center bg-darkPink py-5 px-5">
        <div className="bg-white text-black p-5 drop-shadow-xl rounded-3xl text-center">
          <p className="my-2 mb-4">
            Notre mission de connecter les bonnes personnes, commence avec des
            rencontres.
          </p>
          <p className="my-2 mb-4">
            Notre professionnalisme nous permet de construire de vraies
            relations.
          </p>
          <p className="my-2 mb-4">
            Nous mettons en place des équipes qui représentent les valeurs des
            entreprises sur le long-terme.
          </p>
        </div>
      </div>
      <div className="mb-6">
        <h1 className="font-bold text-black text-2xl text-center mt-6 m-5">
          Nos consultants 👇
        </h1>
        <div className="flex flex-col md:grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 items-center m-5 md:m-0">
          {consultants &&
            consultants.map((consultant) => (
              <CardConsultants key={consultant.id} consultant={consultant} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Quisommesnous;
