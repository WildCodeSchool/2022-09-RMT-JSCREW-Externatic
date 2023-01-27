import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import apiConnexion from "@services/apiConnexion";
import { ToastContainer, toast } from "react-toastify";
import User from "../../contexts/User";
import "react-toastify/dist/ReactToastify.css";

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

function ConnexionModal({ visible, onclose }) {
  const [connexion, setConnexion] = useState({
    utilisateur: "",
    mot_de_passe: "",
  });

  const userContext = useContext(User.UserContext);
  const navigate = useNavigate("");

  const handleConnexion = (place, value) => {
    const newConnexion = { ...connexion };
    newConnexion[place] = value;
    setConnexion(newConnexion);
  };
  const sendForm = (e) => {
    e.preventDefault();
    apiConnexion
      .post("/login", connexion)
      .then((data) => {
        userContext.handleUser(data.data);
        toast.success(`Bonjour à vous`, toastifyConfig);
        if (data.data.profil) {
          setTimeout(() => onclose(), 2000);
        } else {
          setTimeout(() => navigate(`profil/${data.data.id}`), 2000);
        }
      })
      .catch(() => {
        toast.error(
          `Votre email ou votre mot de passe n'est pas valide`,
          toastifyConfig
        );
      });
  };

  if (!visible) {
    return null;
  }
  return (
    <div className="fixed z-40 inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white w-5/6 lg:w-1/4 rounded-2xl shadow-md border-2 border-darkPink">
        <h2 className="text-center text-4xl font-bold mt-4">Connexion</h2>
        <form
          onSubmit={(e) => sendForm(e)}
          className="bg-white   px-8 pt-6 pb-8 mb-4"
        >
          <input
            required
            className="shadow appearance-none border rounded-full w-full bg-grey py-2 px-3 text-black placeholder-black"
            id="Email"
            name="utilisateur"
            value={connexion.utilisateur}
            type="text"
            placeholder="Email"
            onChange={(e) => handleConnexion(e.target.name, e.target.value)}
          />
          <input
            required
            className="shadow appearance-none border rounded-full w-full mt-4 py-2 bg-grey px-3 text-black placeholder-black"
            id="Mot de passe"
            name="mot_de_passe"
            value={connexion.mot_de_passe}
            type="password"
            placeholder="Mot de passe"
            onChange={(e) => handleConnexion(e.target.name, e.target.value)}
          />
        </form>
        <div className="mt-4 flex justify-around mb-6">
          <button
            type="button"
            className="rounded-full px-6 border-2 border-darkPink text-darkPink text-2xl"
            onClick={onclose}
          >
            Retour
          </button>
          <button
            onClick={(e) => sendForm(e)}
            type="submit"
            className="rounded-full px-6 bg-darkPink text-white hover:bg-white hover:text-darkPink text-2xl"
          >
            Valider
          </button>
        </div>
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

export default ConnexionModal;
