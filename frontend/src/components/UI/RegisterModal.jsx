import React, { useState, useContext } from "react";
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

function RegisterModal({ visible, onclose }) {
  const userContext = useContext(User.UserContext);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [registration, setRegistration] = useState({
    utilisateur: "",
    mot_de_passe: "",
  });

  const handleRegistration = (place, value) => {
    const newRegistration = { ...registration };
    newRegistration[place] = value;
    setRegistration(newRegistration);
  };

  const sendForm = (e) => {
    e.preventDefault();
    if (registration.mot_de_passe !== confirmPassword) {
      toast.error(
        `Les deux mots de passe doivent être identiques`,
        toastifyConfig
      );
    } else {
      apiConnexion
        .post("/register", registration)
        .then((data) => {
          userContext.handleUser(data.data.insertId);
          toast.success(
            `Veuillez vous connecter pour continuer l'aventure`,
            toastifyConfig
          );
          setTimeout(() => onclose(), 1500);
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

  if (!visible) {
    return null;
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white w-5/6 lg:w-1/4 rounded-2xl shadow-md border-2 border-darkPink">
        <h2 className="text-center text-4xl font-bold mt-4">Inscription</h2>
        <form
          onSubmit={(e) => sendForm(e)}
          className="bg-white   px-6 pt-6 pb-8 mb-4"
        >
          <input
            required
            className="shadow appearance-none border rounded-full w-full bg-grey py-2 px-3 text-black placeholder-black"
            id="Email"
            name="utilisateur"
            value={registration.utilisateur}
            type="text"
            placeholder="Email"
            onChange={(e) => handleRegistration(e.target.name, e.target.value)}
          />
          <input
            required
            className="shadow appearance-none border rounded-full w-full mt-4 py-2 bg-grey px-3 text-black placeholder-black"
            id="Mot de passe"
            name="mot_de_passe"
            value={registration.mot_de_passe}
            type="password"
            placeholder="Mot de passe"
            onChange={(e) => handleRegistration(e.target.name, e.target.value)}
          />
          <input
            required
            className="shadow appearance-none border rounded-full w-full mt-4 py-2 px-3 bg-grey text-black placeholder-black"
            id="Confirmer mot de passe"
            type="password"
            placeholder="Confirmer mot de passe"
            onChange={(e) => setConfirmPassword(e.target.value)}
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
            className="rounded-full px-6 bg-darkPink text-white hover:bg-white hover:text-darkPink text-xl"
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

export default RegisterModal;
