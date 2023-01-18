import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import apiConnexion from "@services/apiConnexion";
import toastiConfig from "@services/toastiConfig";
import EntrepriseSelect from "./EntrepriseSelect";

function EntrepriseForm() {
  // fonction pour mettre à jour les dates en auto
  const dateinscript = () => {
    const year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let date = new Date().getDate();
    if (month < 10) {
      month = `0${month}`;
    }
    if (date < 10) {
      date = `0${date}`;
    }
    return `${year}-${month}-${date}`;
  };

  const [firm, setFirm] = useState({
    logo: null,
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
    dateInscription: dateinscript(),
    domaine_id: 2,
  });
  const [entreprises, setEntreprises] = useState([]);

  // Fonction qui gère la récupération des données "entreprise" avec axios
  const getAllEntreprises = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/entreprises`)
      .then((job) => setEntreprises(job.data))
      .catch((error) => console.error(error));
  };

  // Données "entreprise"
  useEffect(() => {
    getAllEntreprises();
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
          `Veuillez vérifier vos champs, votre inscription n'a pas été validée`,
          toastiConfig
        );
        console.warn(err);
      });
  };

  const selectEntreprise = (id) => {
    const entp = entreprises.find((e) => e.id === parseInt(id, 10));
    setFirm(entp);
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
            `Veuillez vérifier vos champs, votre modification n'a pas été prise en compte `,
            toastiConfig
          );
          console.warn(err);
        });
    }
  };

  return (
    <div className=" mt-5 mb-5 relative items-center flex flex-col justify-center min-h-screen w-full">
      <div className=" shadow-xl w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-darkPink lg:max-w-xl">
        <h2 className="font-roboto text-2xl font-light text-center capitalize ">
          Formulaire entreprise
        </h2>
        <EntrepriseSelect
          selectEntreprise={selectEntreprise}
          entreprises={entreprises}
        />
        <form className="mt-6">
          <div className="mb-2">
            <label>
              <span className="text-gray-700">nom de entreprise</span>
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
              <span className="text-gray-700">adresse</span>
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
              <span className="text-gray-700">code postal</span>
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
              <span className="text-gray-700">pays</span>
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
              <span className="text-gray-700">telephone</span>
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
                <span className="text-gray-700">description</span>
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
              <span className="text-gray-700">numero_siret</span>
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
              <span className="text-gray-700">nombre_employes</span>
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
                  focus:ring-opacity-50 "
                placeholder="nombre employes"
                required
              />
            </label>

            <label>
              <span className="text-gray-700">domaine</span>
              <input
                name="domaine "
                type="text"
                value={firm.domaine_id}
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
              />
            </label>
          </div>
          <div className="mb-6">
            {!firm.id && (
              <button
                type="button"
                onClick={sendFirm}
                className="
                  w-40 bg-white mt-4 transition duration-300 hover:bg-pink hover:text-white text-darkPink border-2 border-solid border-darkPink font-bold py-2 px-4 pl-2 rounded
                "
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
                "
              >
                Mettre à jour
              </button>
            )}
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
