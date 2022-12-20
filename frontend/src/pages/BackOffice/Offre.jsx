import React, { useState } from "react";

function Offre() {
  const [offre, setOffre] = useState({
    offre_contrat: "",
    offre_condition_travail: "",
    offre_avantages: "",
    offre_poste: "",
    offre_localisation: "",
    offre_dateOffre: "",
    offre_date_fin_offre: "",
    offre_salaire: "",
    offre_mission: "",
    offre_profil_recherche: "",
    offre_specialitees: "",
    offre_entreprise_id: "",
    offre_domaine_id: "",
  });

  const handleOffre = (place, value) => {
    const newOffre = { ...offre };
    newOffre[place] = value;
    setOffre(newOffre);
  };

  const sendForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mt-5 mb-5 relative flex flex-col justify-center min-h-screen ">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
        <h1 className="font-poppins text-2xl font-semibold text-center text-indigo-700 underline uppercase ">
          Formulaire creation offre
        </h1>
        <form onSubmit={(e) => sendForm(e)} className="mt-6">
          <div className="mb-2">
            <label>
              <span className="text-gray-700">contrat</span>
              <input
                required
                type="text"
                name="offre_contrat"
                value={offre.offre_contrat}
                onChange={(e) => handleOffre(e.target.name, e.target.value)}
                className="

                  w-full
                  block px-16 py-2 mt-2
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
          "
                placeholder="contrat"
              />
            </label>
            <label>
              <span className="text-gray-700">condition de travail</span>
              <input
                type="text"
                name="offre_condition_travail"
                value={offre.offre_condition_travail}
                onChange={(e) => handleOffre(e.target.name, e.target.value)}
                className="

                  w-full
                  block px-16 py-2 mt-2
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
          "
                placeholder="condition de travail"
              />
            </label>
            <label>
              <span className="text-gray-700">avantages</span>
              <input
                type="text"
                name="offre_avantages"
                value={offre.offre_avantages}
                onChange={(e) => handleOffre(e.target.name, e.target.value)}
                className="

                  w-full
                  block px-16 py-2 mt-2
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
          "
                placeholder="avantages"
              />
            </label>
            <label>
              <span className="text-gray-700">poste</span>
              <input
                type="text"
                name="offre_poste"
                value={offre.offre_poste}
                onChange={(e) => handleOffre(e.target.name, e.target.value)}
                className="

                  w-full
                  block px-16 py-2 mt-2
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
              "
                placeholder="poste"
              />
            </label>
            <label>
              <span className="text-gray-700">localisation</span>
              <input
                type="text"
                name="offre_localisation"
                value={offre.offre_localisation}
                onChange={(e) => handleOffre(e.target.name, e.target.value)}
                className="

                  w-full
                  block px-16 py-2 mt-2
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
              "
                placeholder="localisation"
              />
            </label>
            <label>
              <span className="text-gray-700">date de l'offre</span>
              <input
                type="date"
                name="offre_dateOffre"
                value={offre.offre_dateOffre}
                onChange={(e) => handleOffre(e.target.name, e.target.value)}
                className="

                  w-full
                  block px-16 py-2 mt-2
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
              "
                placeholder="date de l'offre"
              />
            </label>
            <label>
              <span className="text-gray-700">date de fin de l'offre</span>
              <input
                type="date"
                name="offre_dateOffre"
                value={offre.offre_dateOffre}
                onChange={(e) => handleOffre(e.target.name, e.target.value)}
                className="

                  w-full
                  block px-16 py-2 mt-2
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
              "
                placeholder="date fin de l'offre"
              />
            </label>
            <label>
              <span className="text-gray-700">salaire</span>
              <input
                type="number"
                name="offre_salaire"
                value={offre.offre_salaire}
                onChange={(e) => handleOffre(e.target.name, e.target.value)}
                className="

                  w-full
                  block px-16 py-2 mt-2
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
              "
                placeholder="salaire"
              />
            </label>
            <label>
              <span className="text-gray-700">mission</span>
              <input
                type="text"
                name="offre_mission"
                value={offre.offre_mission}
                onChange={(e) => handleOffre(e.target.name, e.target.value)}
                className="

                  w-full
                  block px-16 py-2 mt-2
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
              "
                placeholder="mission"
              />
            </label>
            <label>
              <span className="text-gray-700">profil recherché</span>
              <input
                type="text"
                name="offre_profil_recherche"
                value={offre.offre_profil_recherche}
                onChange={(e) => handleOffre(e.target.name, e.target.value)}
                className="

                  w-full
                  block px-16 py-2 mt-2
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
            "
                placeholder="profil recherché"
              />
            </label>
            <label>
              <span className="text-gray-700">specialitées</span>
              <input
                type="text"
                name="offre_specialitees"
                value={offre.offre_specialitees}
                onChange={(e) => handleOffre(e.target.name, e.target.value)}
                className="

                  w-full
                  block px-16 py-2 mt-2
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
            "
                placeholder="specialitées"
              />
            </label>
            <label>
              <span className="text-gray-700">identifiant de l'entreprise</span>
              <input
                type="text"
                name="offre_entreprise_id"
                value={offre.offre_entreprise_id}
                onChange={(e) => handleOffre(e.target.name, e.target.value)}
                className="

                  w-full
                  block px-16 py-2 mt-2
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
            "
                placeholder="identifiant de l'entreprise"
              />
            </label>
            <label>
              <span className="text-gray-700">identifiant du domaine</span>
              <input
                type="text"
                name="offre_domaine_id"
                value={offre.offre_domaine_id}
                onChange={(e) => handleOffre(e.target.name, e.target.value)}
                className="

                  w-full
                  block px-16 py-2 mt-2
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
            "
                placeholder="identifiant du domaine"
              />
            </label>
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="
                  w-40 bg-white 
                  mt-4 transition 
                  duration-300 
                  hover:bg-pink 
                  hover:text-white 
                  text-darkPink 
                  border-2 
                  border-solid 
                  border-darkPink 
                  font-bold 
                  py-2 px-4 
                  pl-2 rounded
                  "
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Offre;
