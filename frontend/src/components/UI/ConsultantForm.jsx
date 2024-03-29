import React, { useState, useEffect } from "react";
import apiConnexion from "@services/apiConnexion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import toastiConfig from "@services/toastiConfig";
import ConsultantSelect from "./consultantSelect";

const consultType = {
  image_url: "",
  role: "",
  nom_consultant: "",
  telephone: "",
  email: "",
  LinkedIn: "",
};

function FormConsultants() {
  const [consult, setConsult] = useState(consultType);
  const [admin, setAdmin] = useState([]);
  // Fonction qui gère la récupération des données "consultants" avec axios
  const getAllConsultants = () => {
    apiConnexion
      .get(`/consultants`)
      .then((consults) => {
        setAdmin(consults.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getAllConsultants();
  }, []);

  const handleConsult = (place, value) => {
    const newConsult = { ...consult };
    newConsult[place] = value;
    setConsult(newConsult);
  };

  const selectConsultants = (id) => {
    if (parseInt(id, 10) !== 0) {
      const consults = admin.find((e) => e.id === parseInt(id, 10));
      setConsult(consults);
    } else {
      setConsult(consultType);
    }
  };

  const sendForm = (e) => {
    e.preventDefault();
    apiConnexion
      .post("/consultants", consult)
      .then(() => {
        getAllConsultants();
        toast.success(`Le consultant a bien été enregistré`, toastiConfig);
      })
      .catch((err) => {
        toast.error(err.response.data.details[0].message, toastiConfig);
        console.warn();
      });
  };

  // // Mettre à jour un consultant
  const handelUpdateConsult = () => {
    if (consult.id) {
      apiConnexion
        .put(`/consultants/${consult.id}`, consult)
        .then(() => {
          toast.success(`Le consultant a bien été modifié.`, toastiConfig);
        })
        .catch((err) => {
          toast.error(err.response.data.details[0].message, toastiConfig);
          console.warn();
        });
    }
  };

  return (
    <div className="mt-5 mb-5 relative items-center flex flex-col justify-center min-h-screen w-full">
      <div className="shadow-xl w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-darkPink lg:max-w-xl">
        <h1 className="font-roboto text-2xl font-light text-center capitalize ">
          Formulaire Consultants
        </h1>
        <ConsultantSelect
          selectConsultants={selectConsultants}
          consultants={admin}
        />
        <form className="mt-6">
          <div className="mb-2">
            <label>
              <span className="text-gray-700">photo consultant</span>
              <input
                required
                type="text"
                name="image_url"
                value={consult.image_url}
                onChange={(e) => handleConsult(e.target.name, e.target.value)}
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
                placeholder="image_url"
              />
            </label>
            <label>
              <span className="text-gray-700">role</span>
              <input
                required
                type="text"
                name="role"
                value={consult.role}
                onChange={(e) => handleConsult(e.target.name, e.target.value)}
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
                placeholder="role"
              />
            </label>
            <label>
              <span className="text-gray-700">nom</span>
              <input
                required
                type="text"
                name="nom_consultant"
                value={consult.nom_consultant}
                onChange={(e) => handleConsult(e.target.name, e.target.value)}
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
                placeholder="nom"
              />
            </label>
            <label>
              <span className="text-gray-700">téléphone</span>
              <input
                required
                type="text"
                name="telephone"
                value={consult.telephone}
                onChange={(e) => handleConsult(e.target.name, e.target.value)}
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
                placeholder="téléphone"
              />
            </label>
            <label>
              <span className="text-gray-700">email</span>
              <input
                required
                type="email"
                name="email"
                value={consult.email}
                onChange={(e) => handleConsult(e.target.name, e.target.value)}
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
                placeholder="Email"
              />
            </label>
            <label>
              <span className="text-gray-700">lien LinkedIn</span>
              <input
                require
                type="text"
                name="LinkedIn"
                value={consult.LinkedIn}
                onChange={(e) => handleConsult(e.target.name, e.target.value)}
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
                placeholder="LinkedIn"
              />
            </label>
          </div>
          <div className="mb-6">
            {!consult.id && (
              <button
                type="button"
                onClick={sendForm}
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
                  py-2 px-4 
                  pl-2 rounded"
              >
                Ajouter
              </button>
            )}
            {consult.id && (
              <button
                type="button"
                onClick={() => handelUpdateConsult()}
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
              onClick={() => setConsult(consultType)}
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

export default FormConsultants;
