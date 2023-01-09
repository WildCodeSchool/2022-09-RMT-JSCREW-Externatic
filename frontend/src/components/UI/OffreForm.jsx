import React, { useState } from "react";
import apiConnexion from "@services/apiConnexion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import toastiConfig from "@services/toastiConfig";

function OffreForm() {
  const [offre, setOffre] = useState({
    contrat: "",
    condition_travail: "",
    avantages: null,
    poste: "",
    localisation: "",
    dateOffre: "",
    date_fin_offre: "",
    salaire: null,
    mission: "",
    profil_recherche: "",
    specialitees: "",
    entreprise_id: "",
    domaine_id: "",
  });

  const handleOffre = (place, value) => {
    const newOffre = { ...offre };
    newOffre[place] = value;
    setOffre(newOffre);
  };

  const sendForm = (e) => {
    e.preventDefault();

    apiConnexion
      .post("/offres", offre)
      .then(() => {
        toast.success(`Votre offre a bien été enregistrée`, toastiConfig);
      })
      .catch((err) => {
        toast.error(
          `Veuillez renseigner vos champs, votre formulaire n'a pas été enregistré`,
          toastiConfig
        );
        console.warn(err);
      });
  };

  return (
    <div className="mt-5 mb-5 relative flex flex-col justify-center min-h-screen w-full ">
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
                name="contrat"
                value={offre.contrat}
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
                name="condition_travail"
                value={offre.condition_travail}
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
                name="avantages"
                value={offre.avantages}
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
                name="poste"
                value={offre.poste}
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
                name="localisation"
                value={offre.localisation}
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
                name="dateOffre"
                value={offre.dateOffre}
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
                name="dateOffre"
                value={offre.dateOffre}
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
                name="salaire"
                value={offre.salaire}
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
                name="mission"
                value={offre.mission}
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
                name="profil_recherche"
                value={offre.profil_recherche}
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
                name="specialitees"
                value={offre.specialitees}
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
                name="entreprise_id"
                value={offre.entreprise_id}
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
                name="domaine_id"
                value={offre.domaine_id}
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
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default OffreForm;
