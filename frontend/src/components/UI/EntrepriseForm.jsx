import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import apiConnexion from "@services/apiConnexion";
import toastiConfig from "@services/toastiConfig";

function EntrepriseForm() {
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
    dateInscription: "",
    domaine_id: 2,
  });

  const handleEntreprise = (place, value) => {
    const newFirm = { ...firm };
    newFirm[place] = value;
    setFirm(newFirm);
  };

  const sendFirm = (e) => {
    e.preventDefault();

    apiConnexion

      .post("/entreprises", firm)
      .then(() => {
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

  return (
    <div className=" mt-5 mb-5 relative items-center flex flex-col justify-center min-h-screen w-full">
      <div className=" shadow-xl w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-darkPink lg:max-w-xl">
        <h1 className="font-poppins text-2xl font-semibold text-center text-indigo-700  uppercase ">
          Formulaire entreprise
        </h1>
        <form onSubmit={(e) => sendFirm(e)} className="mt-6">
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
            focus:ring-opacity-50
          "
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
            focus:ring-opacity-50
          "
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
            focus:ring-opacity-50
          "
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
            focus:ring-opacity-50
          "
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
            focus:ring-opacity-50
          "
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
            focus:ring-opacity-50
          "
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
            focus:ring-opacity-50
          "
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
            focus:ring-opacity-50
          "
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
            focus:ring-opacity-50
          "
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
            focus:ring-opacity-50
          "
                placeholder="nombre employes"
                required
              />
            </label>
            <label>
              <span className="text-gray-700">date inscription</span>
              <input
                name="dateInscription"
                type="date"
                value={firm.dateInscription}
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
            focus:ring-opacity-50
          "
                placeholder="date inscription"
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
            focus:ring-opacity-50
          "
                placeholder="domaine"
                required
              />
            </label>
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="
              w-40 bg-white mt-4 transition duration-300 hover:bg-pink hover:text-white text-darkPink border-2 border-solid border-darkPink font-bold py-2 px-4 pl-2 rounded
          "
            >
              Envoyer
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
