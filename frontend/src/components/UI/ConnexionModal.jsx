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

  const [confirmConsulant, setConfirmConsulant] = useState(true);
  const [confirm, setConfirm] = useState({
    password: "",
    confirmpassword: "",
    oldpassword: "",
  });
  const userContext = useContext(User.UserContext);
  const navigate = useNavigate("");

  const handleConnexion = (place, value) => {
    const newConnexion = { ...connexion };
    newConnexion[place] = value;
    setConnexion(newConnexion);
  };

  const handleConfirm = (place, value) => {
    const newConfirm = { ...confirm };
    newConfirm[place] = value;
    setConfirm(newConfirm);
  };

  const sendForm = (e) => {
    e.preventDefault();
    apiConnexion
      .post("/login", connexion)
      .then((data) => {
        toast.success(`Bonjour à vous`, toastifyConfig);
        if (data.data.profil === 0 && data.data.role === "candidat") {
          userContext.handleUser(data.data);
          setTimeout(() => navigate(`/profil`), 2000);
          setTimeout(() => onclose(), 2000);
        }
        if (data.data.profil === 1 && data.data.role === "candidat") {
          userContext.handleUser(data.data);
          setTimeout(() => navigate(`/`), 2000);
          setTimeout(() => onclose(), 2000);
        } else if (data.data.profil === 1 && data.data.role === "consultant") {
          userContext.handleUser(data.data);
          setConfirmConsulant(false);
          setTimeout(
            () =>
              navigate(`dashboard/consultant/candidatures/${userContext.id}`),
            2000
          );
        } else if (
          data.data.profil === 1 &&
          data.data.role === "administrateur"
        ) {
          userContext.handleUser(data.data);
          setTimeout(() => navigate(`dashboard/admin/entreprises`), 2000);
        } else {
          userContext.handleUser(data.data);
          setTimeout(() => onclose(), 2000);
        }
      })
      .catch(() => {
        toast.error(
          `Votre email ou votre mot de passe n'est pas valide`,
          toastifyConfig
        );
      });
  };

  const changePWD = (e) => {
    e.preventDefault();
    if (
      confirm.password === confirm.confirmpassword &&
      confirm.password.length > 10
    ) {
      apiConnexion
        .put("/firstconnexion", confirm)
        .then((data) => {
          toast.success(`Bonjour à vous`, toastifyConfig);
          userContext.handleUser(data.data);
          setTimeout(() => onclose(), 2000);
        })
        .catch(() => {
          toast.error(
            `Votre email ou votre mot de passe n'est pas valide`,
            toastifyConfig
          );
        });
    } else {
      toast.error(
        `Vos mots de passe ne sont pas identiques ou inférieur à 10 caractères`,
        toastifyConfig
      );
    }
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed z-40 inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      {confirmConsulant && (
        <div className="bg-white w-5/6 lg:w-1/4 rounded-2xl shadow-md border-2 border-darkPink">
          <h2 className="text-center text-black text-4xl font-bold mt-4">
            Connexion
          </h2>
          <form
            onSubmit={(e) => sendForm(e)}
            className="bg-white px-6 pt-6 pb-8"
          >
            <input
              required
              className="shadow appearance-none border rounded-xl w-full bg-grey py-2 px-3 text-black placeholder-black"
              id="Email"
              name="utilisateur"
              value={connexion.utilisateur}
              type="text"
              placeholder="Email"
              onChange={(e) => handleConnexion(e.target.name, e.target.value)}
            />
            <input
              required
              className="shadow appearance-none border rounded-xl w-full mt-4 py-2 bg-grey px-3 text-black placeholder-black"
              id="Mot de passe"
              name="mot_de_passe"
              value={connexion.mot_de_passe}
              type="password"
              placeholder="Mot de passe"
              onChange={(e) => handleConnexion(e.target.name, e.target.value)}
            />
          </form>
          <div className="flex flex-col items-center mb-6">
            <button
              type="submit"
              className="rounded-xl px-6 py-2 bg-darkPink text-white hover:bg-white hover:text-darkPink hover:border-2 hover:scale-110 text-xl"
            >
              Valider
            </button>
            <button
              type="button"
              className="px-6 mt-3 text-darkPink text-md hover:underline"
              onClick={onclose}
            >
              Retour
            </button>
          </div>
        </div>
      )}
      {!confirmConsulant && (
        <div className="bg-white w-5/6 lg:w-1/4 rounded-2xl shadow-md border-2 border-darkPink">
          <h2 className="text-center text-4xl font-bold mt-4">Connexion</h2>
          <form
            onSubmit={(e) => changePWD(e)}
            className="bg-white   px-8 pt-6 pb-8 mb-4"
          >
            <input
              required
              className="shadow appearance-none border rounded-full w-full bg-grey py-2 px-3 text-black placeholder-black"
              name="oldpassword"
              value={confirm.oldpassword}
              type="password"
              placeholder="Ancien mot de passe"
              onChange={(e) => handleConfirm(e.target.name, e.target.value)}
            />
            <input
              required
              className="shadow appearance-none border rounded-full w-full mt-4 py-2 bg-grey px-3 text-black placeholder-black"
              name="password"
              value={confirm.password}
              type="password"
              placeholder="Mot de passe"
              onChange={(e) => handleConfirm(e.target.name, e.target.value)}
            />
            <input
              required
              className="shadow appearance-none border rounded-full w-full mt-4 py-2 bg-grey px-3 text-black placeholder-black"
              name="confirmpassword"
              value={confirm.confirmpassword}
              type="password"
              placeholder="Mot de passe confirmé"
              onChange={(e) => handleConfirm(e.target.name, e.target.value)}
            />
            <div className="mt-4 flex justify-around mb-6">
              <button
                type="submit"
                className="rounded-full px-6 bg-darkPink text-white hover:bg-white hover:text-darkPink text-2xl"
              >
                Valider
              </button>
            </div>
          </form>
        </div>
      )}
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
