import React, { useState, useRef, useContext, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import apiConnexion from "@services/apiConnexion";
import cvUpload from "@assets/cv_uploaded.png";
import cv from "@assets/cv.png";
import avatar from "@assets/Avatar.png";
import Card from "@components/UI/Card";
import icon4 from "../../../public/externatic_favicon.png";
import User from "../../contexts/User";
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
  const { user, updateUserProfil } = useContext(User.UserContext);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const profilType = {
    nom: "",
    prenom: "",
    age: "",
    adresse: "",
    code_postal: "",
    ville: "",
    pays: "",
    email: user.utilisateur,
    description: "",
    metier: "",
    telephone: "",
    dateDisponibilite: "",
    connexion_id: user.id,
  };

  const [candidatures, setCandidatures] = useState([]);
  const [profil, setProfil] = useState(profilType);

  const handleProfil = (place, value) => {
    const newProfil = { ...profil };
    newProfil[place] = value;
    setProfil(newProfil);
  };

  const sendForm = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("avatar", inputRef1.current.files[0]);
    formData.append("cv", inputRef2.current.files[0]);
    formData.append("data", JSON.stringify(profil));

    if (user.profil) {
      apiConnexion
        .put(`/profil/${user.id}`, formData)
        .then(() => {
          toast.success(
            `Bonjour, votre profil a bien été modifié.`,
            toastifyConfig
          );
        })
        .catch((err) => {
          toast.error(
            `Veuillez vérifier vos champs, votre modification n'a pas été prise en compte `,
            toastifyConfig
          );
          console.warn(err);
        });
    } else {
      apiConnexion
        .post("/profil", formData)
        .then((res) => {
          handleProfil("id", res.id);
          updateUserProfil();
          toast.success(
            `Bonjour ${profil.nom} ${profil.prenom}, votre profil a bien été enregistré.`,
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
    }
  };

  // La fonction previewPicture
  const previewPicture = (evt, style) => {
    const image =
      style === "photo"
        ? document.getElementById("image")
        : document.getElementById("pdf");
    const [picture] = evt.target.files;
    if (picture && style === "photo") {
      const reader = new FileReader();
      reader.onload = (event) => {
        image.src = event.target.result;
      };
      reader.readAsDataURL(picture);
    } else {
      image.src = cvUpload;
    }
  };

  // Fonction qui gère la récupération des données profil
  const getFullProfil = () => {
    apiConnexion
      .get(`/profil/${user.id}`)
      .then((profilUser) => {
        setProfil(profilUser.data);
      })
      .catch((error) => console.error(error));
  };

  // Fonction qui gère la récupération des données de candidatures liées au profil
  const getCandidatures = () => {
    apiConnexion
      .get(`/candidatures/${user.id}`)
      .then((userCandidatures) => {
        setCandidatures(userCandidatures.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    if (user.profil) {
      getFullProfil();
    }
  }, []);

  // Données "candidatures"
  useEffect(() => {
    getCandidatures();
  }, []);

  return (
    <div className="profil flex justify-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Profil</title>
        <meta
          name="description"
          content="Page Profil qui affiche toutes les informations concernant un utilisateur"
        />
        <link rel="icon" type="image/png" href={icon4} />
      </Helmet>
      <form
        encType="multipart/form-data"
        onSubmit={(e) => sendForm(e)}
        className="w-full max-w-lg mb-5 p-5 rounded-3xl"
      >
        <div className="flex flex-wrap -mx-3 md:mb-6">
          <label className="container w-full md:w-1/2 px-3 mt-6 mb-6 md:mb-0 hover:cursor-pointer">
            <img
              src={
                profil.photo
                  ? `${import.meta.env.VITE_BACKEND_URL}/${profil.photo}`
                  : avatar
              }
              id="image"
              alt="avatar"
            />
            <input
              className="hidden"
              type="file"
              ref={inputRef1}
              name="avatar"
              accept=".jpg, .png, .gif"
              onChange={(evt) => previewPicture(evt, "photo")}
            />
          </label>
          <label className="container w-full md:w-1/2 px-3 mt-6 mb-6 md:mb-0 hover:cursor-pointer">
            <img src={profil.cv ? cvUpload : cv} alt="cv" id="pdf" />
            <input
              className="hidden"
              type="file"
              ref={inputRef2}
              name="cv"
              accept=".pdf"
              onChange={(evt) => previewPicture(evt, "pdf")}
            />
          </label>
        </div>

        <div className="flex flex-wrap -mx-3 md:mb-6">
          <div className="w-full md:w-1/2 px-3 mt-6 mb-6 md:mb-0">
            <input
              required
              className="appearance-none block w-full bg-white text-black rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="grid-nom"
              type="text"
              placeholder="Nom"
              name="nom"
              value={profil.nom}
              onChange={(e) => handleProfil(e.target.name, e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 md:mt-6">
            <input
              required
              className="appearance-none block w-full bg-white text-black rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="grid-last-name"
              type="text"
              placeholder="Prenom"
              name="prenom"
              value={profil.prenom}
              onChange={(e) => handleProfil(e.target.name, e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mt-6 mb-3 md:mb-0">
            <input
              required
              className="appearance-none block w-full bg-white text-black rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-age"
              type="text"
              placeholder="Age"
              name="age"
              value={profil.age}
              onChange={(e) => handleProfil(e.target.name, e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 md:mt-6">
            <input
              required
              className="appearance-none block w-full bg-white text-black rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-telephone"
              type="text"
              placeholder="Téléphone"
              name="telephone"
              value={profil.telephone}
              onChange={(e) => handleProfil(e.target.name, e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap md:grid md:grid-rows-3 md:grid-flow-col -mx-3 mt-6">
          <div className=" row-span-3 w-full pl-3 mr-4 md:mr-10">
            <textarea
              required
              className="block mb-6 w-full bg-white text-black rounded-2xl py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="grid-adresse"
              type="text"
              rows="8"
              placeholder="Adresse"
              name="adresse"
              value={profil.adresse}
              onChange={(e) => handleProfil(e.target.name, e.target.value)}
            />
          </div>
          <div className=" col-span-1 w-full px-4">
            <input
              required
              className="appearance-none block w-full md:ml-2 bg-white text-black rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-ville"
              type="text"
              placeholder="Ville"
              name="ville"
              value={profil.ville}
              onChange={(e) => handleProfil(e.target.name, e.target.value)}
            />
          </div>
          <div className=" row-span-1 col-span-2 w-full px-4 mt-6 md:mt-0">
            <input
              required
              className="appearance-none block w-full md:ml-2 bg-white text-black rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-pays"
              type="text"
              placeholder="code postal"
              name="code_postal"
              value={profil.code_postal}
              onChange={(e) => handleProfil(e.target.name, e.target.value)}
            />
          </div>
          <div className=" row-span-1 col-span-2 w-full px-4 mt-6 md:mt-0">
            <input
              required
              className="appearance-none block w-full md:ml-2 bg-white text-black rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-pays"
              type="text"
              placeholder="Pays"
              name="pays"
              value={profil.pays}
              onChange={(e) => handleProfil(e.target.name, e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6 mt-6 md:mt-0">
          <div className="w-full px-3">
            <input
              required
              className="appearance-none block w-full bg-white text-black rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              type="email"
              placeholder="nom@exemple.com"
              name="email"
              value={user.utilisateur}
              onChange={(e) => handleProfil(e.target.name, e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              required
              className="appearance-none block w-full bg-white text-black rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-dispo"
              type="date"
              placeholder="Disponibilité"
              name="dateDisponibilite"
              value={profil.dateDisponibilite.split("T").shift()}
              onChange={(e) => handleProfil(e.target.name, e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <input
              required
              className="appearance-none block w-full bg-white text-black rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-poste"
              type="text"
              placeholder="Métier"
              name="metier"
              value={profil.metier}
              onChange={(e) => handleProfil(e.target.name, e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2 mt-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <textarea
              required
              className="appearance-none block w-full bg-white text-black rounded-2xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-description"
              type="text"
              rows="4"
              placeholder="Description"
              name="description"
              value={profil.description}
              onChange={(e) => handleProfil(e.target.name, e.target.value)}
            />
          </div>
        </div>
        {!user.profil && (
          <div className="buttonvalid flex justify-center mt-5">
            <button
              className="bg-darkPink content-center hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-xl"
              type="submit"
            >
              Valider
            </button>
          </div>
        )}
        {user.profil && (
          <div className="buttonvalid flex justify-center mt-5">
            <button
              className="bg-darkPink content-center hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-xl"
              type="submit"
            >
              Mettre à jour
            </button>
          </div>
        )}
        {user.id && (
          <div>
            <h1 className="text-center">Vos candidatures</h1>
            <div className="lg:flex lg:justify-around lg:w-full">
              {candidatures.map((candidature) => (
                <Link to={`/offres/${candidature.id}`}>
                  <Card offre={candidature} key={candidature.id} />
                </Link>
              ))}
            </div>
          </div>
        )}
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
