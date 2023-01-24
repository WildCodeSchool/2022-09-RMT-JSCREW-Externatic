import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import apiConnexion from "@services/apiConnexion";
import toastiConfig from "@services/toastiConfig";
import EntrepriseSelect from "./EntrepriseSelect";

const firmType = {
  nom_entreprise: "",
  adresse: "",
  code_postal: "",
  ville: "",
  pays: "",
  email: "",
  telephone: "",
  description: "",
  numero_siret: "",
  nombre_employes: "",
  domaine_id: 2,
};

function EntrepriseForm() {
  const [domain, setDomain] = useState([]);
  const [firm, setFirm] = useState(firmType);
  const [entreprises, setEntreprises] = useState([]);

  // Fonction qui gère la récupération des données "entreprise" avec axios
  const getAllEntreprises = () => {
    apiConnexion
      .get(`/entreprises`)
      .then((job) => setEntreprises(job.data))
      .catch((error) => console.error(error));
  };

  const getAllDomain = () => {
    apiConnexion
      .get(`/domaines`)
      .then((job) => setDomain(job.data))
      .catch((error) => console.error(error));
  };

  // Données "entreprise"
  useEffect(() => {
    getAllEntreprises();
    getAllDomain();
  }, []);

  const handleEntreprise = (place, value) => {
    const newFirm = { ...firm };
    newFirm[place] = value;
    setFirm(newFirm);
  };

  const sendFirm = (e) => {
    e.preventDefault();   
    apiConnexion
      .post("/entreprises", firm)
      .then((res) => {
        getAllEntreprises();
        setFirm(res.data);
        toast.success(
          `Bonjour  votre entreprise au nom de  ${firm.nom_entreprise} a bien été enregistrée .`,
          toastiConfig
        );
      })
      .catch((err) => {
        toast.error(
          err.response.data.details[0].message,
          toastiConfig
        );
        console.warn();
      });
  };

  const selectEntreprise = (id) => {
    const entp = entreprises.find((e) => e.id === parseInt(id, 10));
    const newEntp = { ...entp };
    delete newEntp.logo;
    setFirm(newEntp);
  };

  /**
   * update the entreprise
   */

  const handelUpdateEntreprise = () => {
    if (firm.id) {
      apiConnexion
        .put(`/entreprises/${firm.id}`, firm)
        .then(() => {
          toast.success(
            `Bonjour  votre entreprise au nom de  ${firm.nom_entreprise} à bien été modifier.`,
            toastiConfig
          );
        })
        .catch((err) => {
          toast.error(
            err.response.data.details[0].message,
            toastiConfig
          );
          console.warn();
        });
    }
  };

  return (
    <div className=" mt-5 mb-5 relative items-center flex flex-col justify-center min-h-screen w-full">
      <div className=" shadow-xl w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-darkPink lg:max-w-xl">
        <h2 className="font-roboto text-#52525b text-2xl font-light text-center capitalize ">
          Formulaire entreprise
        </h2>
        <EntrepriseSelect
          selectEntreprise={selectEntreprise}
          entreprises={entreprises}
        />
        <form className="mt-6">
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Nom de entreprise</span>
              <input
                required
                type="text"
                name="nom_entreprise"
                value={firm.nom_entreprise}
                onChange={(e) =>
                  handleEntreprise(e.target.name, e.target.value)
                }
                className="
                w-full
                block px-16 py-2 mt-2
                border-gray-300
                rounded-md
                shadow-sm
                focus:border-indigo-300
                focus:ring
                focus:ring-indigo-200
                focus:ring-opacity-50"
                placeholder="nom de entreprise"
              />
            </label>
            <label>
              <span className="text-gray-700">Adresse</span>
              <input
                type="text"
                name="adresse"
                value={firm.adresse}
                onChange={(e) =>
                  handleEntreprise(e.target.name, e.target.value)
                }
                className="
                w-full
                block px-16 py-2 mt-2
                border-gray-300
                rounded-md
                shadow-sm
                focus:border-indigo-300
                focus:ring
                focus:ring-indigo-200
                focus:ring-opacity-50"
                placeholder="Adresse"
              />
            </label>
            <label>
              <span className="text-gray-700">Code postal</span>
              <input
                type="text"
                name="code_postal"
                value={firm.code_postal}
                onChange={(e) =>
                  handleEntreprise(e.target.name, e.target.value)
                }
                className="
                w-full
                block px-16 py-2 mt-2
                border-gray-300
                rounded-md
                shadow-sm
                focus:border-indigo-300
                focus:ring
                focus:ring-indigo-200
                focus:ring-opacity-50"
                placeholder="Code postale"
              />
            </label>
            <label>
              <span className="text-gray-700">Ville</span>
              <input
                type="text"
                name="ville"
                value={firm.ville}
                onChange={(e) =>
                  handleEntreprise(e.target.name, e.target.value)
                }
                className="
                  w-full
                  block px-16 py-2 mt-2
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50"
                placeholder="ville"
              />
            </label>
            <label>
              <span className="text-gray-700">Pays</span>
              <input
                type="text"
                name="pays"
                value={firm.pays}
                onChange={(e) =>
                  handleEntreprise(e.target.name, e.target.value)
                }
                className="
                  w-full
                  block px-16 py-2 mt-2
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50 "
                placeholder="pays"
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700"> Adresse email</span>
              <input
                name="email"
                type="email"
                value={firm.email}
                onChange={(e) =>
                  handleEntreprise(e.target.name, e.target.value)
                }
                className="
                  block
                  w-full
                  mt-2 px-16 py-2
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50"
                placeholder="john.cooks@example.com"
                required
              />
            </label>
            <label>
              <span className="text-gray-700">Téléphone</span>
              <input
                name="telephone"
                type="tel"
                value={firm.telephone}
                onChange={(e) =>
                  handleEntreprise(e.target.name, e.target.value)
                }
                className="
                  block
                  w-full
                  mt-2 px-16 py-2
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50"
                placeholder="telephone"
                required
              />
            </label>
            <div className="mb-2">
              <label>
                <span className="text-gray-700">Description</span>
                <input
                  name="description"
                  type="text"
                  value={firm.description}
                  onChange={(e) =>
                    handleEntreprise(e.target.name, e.target.value)
                  }
                  className="
                    block
                    w-full
                    mt-2 px-16 py-8
                    border-gray-300
                    rounded-md
                    shadow-sm
                    focus:border-indigo-300
                    focus:ring
                    focus:ring-indigo-200
                    focus:ring-opacity-50   "
                  rows="5"
                />
              </label>
            </div>
            <label>
              <span className="text-gray-700">Numéro de siret</span>
              <input
                name="numero_siret"
                type="text"
                value={firm.numero_siret}
                onChange={(e) =>
                  handleEntreprise(e.target.name, e.target.value)
                }
                className="
                  block
                  w-full
                  mt-2 px-16 py-2
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50 "
                placeholder="numero siret"
                required
              />
            </label>
            <label>
              <span className="text-gray-700">Nombre d'employés</span>
              <input
                name="nombre_employes"
                type="text"
                value={firm.nombre_employes}
                onChange={(e) =>
                  handleEntreprise(e.target.name, e.target.value)
                }
                className="
                  block
                  w-full
                  mt-2 px-16 py-2
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50"
                placeholder="nombre employes"
                required
              />
            </label>
            <label>
              <span className="text-gray-700">Domaine</span>
              <select
                name="domaine_id"
                type="text"
                onChange={(e) =>
                  handleEntreprise(e.target.name, e.target.value)
                }
                className="
                  block
                  w-full
                  mt-2 px-16 py-2
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50 "
                placeholder="domaine"
                required
              >
                {domain.map((dom) => {
                  return (
                    <option
                      key={dom.id}
                      value={dom.id}
                      selected={dom.id === firm.domaine_id}
                    >
                      {dom.nom}
                    </option>
                  );
                })}
              </select>
            </label>
          </div>
          <div className="mb-6">
            {!firm.id && (
              <button
                type="button"
                onClick={sendFirm}
                className="
                  w-40 bg-white mt-4 transition duration-300 hover:bg-fushia hover:text-white ease-in-out text-darkPink border-2 border-solid border-darkPink font-bold py-2 px-4 pl-2 rounded
                 mr-10"
              >
                Ajouter
              </button>
            )}
            {firm.id && (
              <button
                type="button"
                onClick={() => handelUpdateEntreprise()}
                className="
                  w-40 bg-white mt-4 transition duration-300 hover:bg-pink hover:text-white text-darkPink border-2 border-solid border-darkPink font-bold py-2 px-4 pl-2 rounded
                  mr-10 "
              >
                Mettre à jour
              </button>
            )}
            <button
              type="button"
              onClick={() => setFirm(firmType)}
              className="
                w-40 bg-white mt-4 transition duration-300 hover:bg-pink hover:text-white text-darkPink border-2 border-solid border-darkPink font-bold py-2 px-4 pl-2 rounded
              "
            >
              Annuler
            </button>
          </div>
          <div />
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
export default EntrepriseForm;
