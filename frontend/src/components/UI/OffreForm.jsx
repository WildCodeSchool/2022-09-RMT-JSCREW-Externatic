import React, { useEffect, useState } from "react";
import apiConnexion from "@services/apiConnexion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import toastiConfig from "@services/toastiConfig";
import SelectOffreForm from "./SelectOffreForm";

const offreType = {
  contrat: "",
  condition_travail: "",
  avantages: "",
  poste: "",
  localisation: "",
  date_fin_offre: "",
  salaire: "",
  mission: "",
  profil_recherche: "",
  specialitees: "",
  entreprise_id: "",
  domaine_id: "",
};

function OffreForm() {
  const [offre, setOffre] = useState(offreType);
  const [domaine, setDomaine] = useState([]);
  const [entreprise, setEntreprise] = useState([]);
  const [jobs, setJobs] = useState([]);

  // Fonction qui gère la récupération des données "offre" avec axios
  const getAllOffres = () => {
    apiConnexion
      .get(`/offreForm`)
      .then((job) => setJobs(job.data))
      .catch((error) => console.error(error));
  };
  const getAllDomaine = () => {
    apiConnexion
      .get(`/domaines`)
      .then((job) => setDomaine(job.data))
      .catch((error) => console.error(error));
  };

  const getAllEntreprises = () => {
    apiConnexion
      .get(`/entreprises`)
      .then((job) => setEntreprise(job.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getAllOffres();
    getAllDomaine();
    getAllEntreprises();
  }, []);

  const handleOffre = (place, value) => {
    const newOffre = { ...offre };
    newOffre[place] = value;
    setOffre(newOffre);
  };

  const sendForm = (e) => {
    e.preventDefault();

    apiConnexion
      .post("/offres", offre)
      .then((res) => {
        getAllOffres();
        setOffre(res.data);
        toast.success(`Votre offre a bien été enregistrée`, toastiConfig);
      })
      .catch((err) => {
        toast.error(err.response.data.details[0].message, toastiConfig);
        console.warn(err.response.data.details[0].message);
      });
  };

  const selectJobs = (id) => {
    if (parseInt(id, 10) !== 0) {
      const offs = jobs.find((e) => e.id === parseInt(id, 10));
      setOffre(offs);
    } else {
      setOffre(offreType);
    }
  };

  // // Mettre à jour une offre
  const handelUpdateOffre = () => {
    if (offre.id) {
      apiConnexion
        .put(`/offres/${offre.id}`, offre)
        .then(() => {
          toast.success(
            `Bonjour votre offre a bien été modifiée.`,
            toastiConfig
          );
        })
        .catch((err) => {
          toast.error(err.response.data.details[0].message, toastiConfig);
          console.warn(err.response.data.details[0].message);
        });
    }
  };
  return (
    <div className="mt-5 mb-5 relative items-center flex flex-col justify-center min-h-screen w-full">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-darkPink lg:max-w-xl">
        <h1 className="font-roboto text-2xl font-light text-center capitalize ">
          Formulaire offre
        </h1>

        <SelectOffreForm selectJobs={selectJobs} jobs={jobs} />
        <form className="mt-6">
          <div className="mb-2">
            <label className="">
              <span className="text-gray-700 mx-2">Contrat</span>
              <input
                required
                type="text"
                name="contrat"
                value={offre.contrat}
                onChange={(e) => handleOffre(e.target.name, e.target.value)}
                className="
                  w-full
                  block px-3 py-2 mt-2 mb-4 
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50"
                placeholder="Contrat"
              />
            </label>
            <label>
              <span className="text-gray-700 mx-2">Condition de travail</span>
              <input
                required
                type="text"
                name="condition_travail"
                value={offre.condition_travail}
                onChange={(e) => handleOffre(e.target.name, e.target.value)}
                className="
                  w-full
                  block px-3 py-2 mt-2 mb-4 
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50"
                placeholder="Condition de travail"
              />
            </label>
            <label>
              <span className="text-gray-700 mx-2">Avantages</span>
              <input
                required
                type="text"
                name="avantages"
                value={offre.avantages}
                onChange={(e) => handleOffre(e.target.name, e.target.value)}
                className="
                  w-full
                  block  px-3 py-2 mt-2 mb-4 
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50"
                placeholder="Avantages"
              />
            </label>
            <label>
              <span className="text-gray-700 mx-2">Poste</span>
              <input
                required
                type="text"
                name="poste"
                value={offre.poste}
                onChange={(e) => handleOffre(e.target.name, e.target.value)}
                className="
                  w-full
                  block  px-3 py-2 mt-2 mb-4 
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50"
                placeholder="Poste"
              />
            </label>
            <label>
              <span className="text-gray-700 mx-2">Localisation</span>
              <input
                required
                type="text"
                name="localisation"
                value={offre.localisation}
                onChange={(e) => handleOffre(e.target.name, e.target.value)}
                className="
                  w-full
                  block  px-3 py-2 mt-2 mb-4 
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50"
                placeholder="Localisation"
              />
            </label>

            <label>
              <span className="text-gray-700 mx-2">Date de fin de l'offre</span>
              <input
                required
                type="date"
                name="date_fin_offre"
                value={offre.date_fin_offre}
                onChange={(e) => handleOffre(e.target.name, e.target.value)}
                className="
                  w-full
                  block px-3 py-2 mt-2 mb-4 
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50"
                placeholder="Date fin de l'offre"
              />
            </label>
            <label>
              <span className="text-gray-700 mx-2">Salaire</span>
              <input
                required
                type="number"
                name="salaire"
                value={offre.salaire}
                onChange={(e) => handleOffre(e.target.name, e.target.value)}
                className="
                  w-full
                  block  px-3 py-2 mt-2 mb-4 
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50"
                placeholder="Salaire"
              />
            </label>
            <label>
              <span className="text-gray-700 mx-2">Mission</span>
              <input
                required
                type="text"
                name="mission"
                value={offre.mission}
                onChange={(e) => handleOffre(e.target.name, e.target.value)}
                className="
                  w-full
                  block  px-3 py-2 mt-2 mb-4 
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50"
                placeholder="Mission"
              />
            </label>
            <label>
              <span className="text-gray-700 mx-2">Profil recherché</span>
              <input
                required
                type="text"
                name="profil_recherche"
                value={offre.profil_recherche}
                onChange={(e) => handleOffre(e.target.name, e.target.value)}
                className="
                  w-full
                  block  px-3 py-2 mt-2 mb-4 
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50"
                placeholder="Profil recherché"
              />
            </label>
            <label>
              <span className="text-gray-700 mx-2">Specialités</span>
              <input
                required
                type="text"
                name="specialitees"
                value={offre.specialitees}
                onChange={(e) => handleOffre(e.target.name, e.target.value)}
                className="
                  w-full
                  block px-3 py-2 mt-2 mb-4 
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50"
                placeholder="Specialités"
              />
            </label>
            <label>
              <span className="text-gray-700 mx-2">Entreprise</span>
              <select
                required
                type="text"
                name="entreprise_id"
                onChange={(e) => handleOffre(e.target.name, e.target.value)}
                className="
                  w-full
                  block  px-3 py-2 mt-2 mb-4 
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50"
                placeholder="Entreprise"
              >
                {entreprise.map((ent) => {
                  return (
                    <option
                      key={ent.id}
                      value={ent.id}
                      selected={ent.id === offre.entreprise_id}
                    >
                      {ent.nom_entreprise}
                    </option>
                  );
                })}
              </select>
            </label>
            <label>
              <span className="text-gray-700 mx-2">Domaine</span>
              <select
                required
                type="text"
                name="domaine_id"
                onChange={(e) => handleOffre(e.target.name, e.target.value)}
                className="
                  w-full
                  block  px-3 py-2 mt-2 mb-4 
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50"
                placeholder="Domaine"
              >
                {domaine.map((dom) => {
                  return (
                    <option
                      key={dom.id}
                      value={dom.id}
                      selected={dom.id === offre.domaine_id}
                    >
                      {dom.nom}
                    </option>
                  );
                })}
              </select>
            </label>
          </div>
          <div className="mb-6">
            {!offre.id && (
              <button
                type="button"
                onClick={sendForm}
                className="
                  w-40 
                  bg-white 
                  mt-4 
                  mr-10
                  transition duration-300 
                  hover:bg-pink 
                  hover:text-white 
                  text-darkPink 
                  border-2 
                  border-solid 
                  border-darkPink 
                  font-bold 
                  py-2 px-4 
                  pl-2 rounded"
              >
                Ajouter
              </button>
            )}
            {offre.id && (
              <button
                type="button"
                onClick={() => handelUpdateOffre()}
                className="
                w-40
                bg-white 
                mt-4
                mr-10
                transition duration-300 
                hover:bg-pink 
                hover:text-white 
                text-darkPink 
                border-2 
                border-solid 
                border-darkPink 
                font-bold py-2 
                px-4 
                pl-2 
                rounded"
              >
                Mettre à jour
              </button>
            )}
            <button
              type="button"
              onClick={() => setOffre(offreType)}
              className=" 
                w-40 
                bg-white 
                mt-4 
                transition duration-300 
                hover:bg-pink 
                hover:text-white 
                text-darkPink 
                border-2 
                border-solid 
                border-darkPink 
                font-bold 
                py-2 
                px-4 
                pl-2 
                rounded"
            >
              Annuler
            </button>
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
        </form>
      </div>
    </div>
  );
}

export default OffreForm;
