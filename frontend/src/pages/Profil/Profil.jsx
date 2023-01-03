import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import apiConnexion from "@services/apiConnexion";
import avatar from "@assets/Avatar.png";
import cv from "@assets/cv.png";
import "react-toastify/dist/ReactToastify.css";
import "@pages/Profil/Profil.css";

const toastifyConfig = {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

function Profil() {
  // ajout d'un zéro pour les dates et les mois inférieurs à 10
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

  const [profil, setProfil] = useState({
    profil_photo: avatar,
    profil_nom: "",
    profil_prenom: "",
    profil_age: "",
    profil_adresse: "",
    profil_code_postal: "",
    profil_ville: "",
    profil_pays: "",
    profil_email: "",
    profil_cv: cv,
    profil_description: "",
    profil_metier: "",
    profil_telephone: "",
    profil_dateInscription: dateinscript(),
    profil_dateDisponibilite: "",
    profil_connexion_id: "3",
  });

  const handleProfil = (place, value) => {
    const newProfil = { ...profil };
    newProfil[place] = value;
    setProfil(newProfil);
  };

  const sendForm = (e) => {
    e.preventDefault();
    apiConnexion
      .post("/profil", profil)
      .then(() => {
        toast.success(
          `Bonjour ${profil.profil_nom} ${profil.profil_prenom} votre inscription a bien été enregistrée.`,
          toastifyConfig
        );
      })
      .catch((err) => {
        toast.error(
          `Veuillez vérifier vos champs, votre inscription n'a pas été validée`,
          toastifyConfig
        );
        console.warn(err);
      });
  };

  return (
    <div className="profil p-9 flex justify-center">
      <form onSubmit={(e) => sendForm(e)} className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 md:mb-6">
          <label className="container w-full md:w-1/2 px-3 mt-6 mb-6 md:mb-0 hover:cursor-pointer">
            <img src={profil.profil_photo} alt="avatar" />
            <input className="hidden" type="file" />
          </label>
          <label className="container w-full md:w-1/2 px-3 mt-6 mb-6 md:mb-0 hover:cursor-pointer">
            <img src={profil.profil_cv} alt="cv" />
            <input className="hidden" type="file" />
          </label>
        </div>

        <div className="flex flex-wrap -mx-3 md:mb-6">
          <div className="w-full md:w-1/2 px-3 mt-6 mb-6 md:mb-0">
            <input
              required
              className="appearance-none block w-full bg-[#D9D9D9] text-gray-700 rounded-full py-3 px-4 mb-3 focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-nom"
              type="text"
              placeholder="Nom"
              name="profil_nom"
              value={profil.profil_nom}
              onChange={(e) => handleProfil(e.target.name, e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 md:mt-6">
            <input
              required
              className="appearance-none block w-full bg-[#D9D9D9] text-gray-700 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Prenom"
              name="profil_prenom"
              value={profil.profil_prenom}
              onChange={(e) => handleProfil(e.target.name, e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mt-6 mb-3 md:mb-0">
            <input
              required
              className="appearance-none block w-full bg-[#D9D9D9] text-gray-700 rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-age"
              type="text"
              placeholder="Age"
              name="profil_age"
              value={profil.profil_age}
              onChange={(e) => handleProfil(e.target.name, e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 md:mt-6">
            <input
              required
              className="appearance-none block w-full bg-[#D9D9D9] text-gray-700 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-telephone"
              type="text"
              placeholder="Téléphone"
              name="profil_telephone"
              value={profil.profil_telephone}
              onChange={(e) => handleProfil(e.target.name, e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap md:grid md:grid-rows-3 md:grid-flow-col -mx-3 mt-6">
          <div className=" row-span-3 w-full pl-3 mr-4 md:mr-10">
            <textarea
              required
              className="block mb-6 w-full bg-[#D9D9D9] rounded-2xl py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="grid-adresse"
              type="text"
              rows="8"
              placeholder="Adresse"
              name="profil_adresse"
              value={profil.profil_adresse}
              onChange={(e) => handleProfil(e.target.name, e.target.value)}
            />
          </div>
          <div className=" col-span-1 w-full px-4">
            <input
              required
              className="appearance-none block w-full md:mx-4 bg-[#D9D9D9] text-gray-700 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-ville"
              type="text"
              placeholder="Ville"
              name="profil_ville"
              value={profil.profil_ville}
              onChange={(e) => handleProfil(e.target.name, e.target.value)}
            />
          </div>
          <div className=" row-span-1 col-span-2 w-full px-4 mt-6 md:mt-0">
            <input
              required
              className="appearance-none block w-full md:ml-2 bg-[#D9D9D9] text-gray-700 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-pays"
              type="text"
              placeholder="code postal"
              name="profil_code_postal"
              value={profil.profil_code_postal}
              onChange={(e) => handleProfil(e.target.name, e.target.value)}
            />
          </div>
          <div className=" row-span-1 col-span-2 w-full px-4 mt-6 md:mt-0">
            <input
              required
              className="appearance-none block w-full md:ml-2 bg-[#D9D9D9] text-gray-700 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-pays"
              type="text"
              placeholder="Pays"
              name="profil_pays"
              value={profil.profil_pays}
              onChange={(e) => handleProfil(e.target.name, e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6 mt-6 md:mt-0">
          <div className="w-full px-3">
            <input
              required
              className="appearance-none block w-full bg-[#D9D9D9] text-gray-700 rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              type="email"
              placeholder="nom@exemple.com"
              name="profil_email"
              value={profil.profil_email}
              onChange={(e) => handleProfil(e.target.name, e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              required
              className="appearance-none block w-full bg-[#D9D9D9] text-gray-700 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-dispo"
              type="date"
              placeholder="Disponibilité"
              name="profil_dateDisponibilite"
              value={profil.profil_dateDisponibilite}
              onChange={(e) => handleProfil(e.target.name, e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <input
              required
              className="appearance-none block w-full bg-[#D9D9D9] text-gray-700 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-poste"
              type="text"
              placeholder="Métier"
              name="profil_metier"
              value={profil.profil_metier}
              onChange={(e) => handleProfil(e.target.name, e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2 mt-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <textarea
              required
              className="appearance-none block w-full bg-[#D9D9D9] text-gray-700 rounded-2xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-description"
              type="text"
              rows="4"
              placeholder="Description"
              name="profil_description"
              value={profil.profil_description}
              onChange={(e) => handleProfil(e.target.name, e.target.value)}
            />
          </div>
        </div>
        <div className="buttonvalid flex justify-center mt-5">
          <button
            className="bg-pink content-center hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-xl"
            type="submit"
          >
            Valider
          </button>
        </div>
      </form>
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

export default Profil;
