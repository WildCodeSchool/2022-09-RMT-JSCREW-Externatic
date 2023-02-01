import { React, useState, useContext } from "react";
import logo from "@assets/Logo-Externatic.png";
import { Link, useNavigate } from "react-router-dom";
import ConnexionModal from "../UI/ConnexionModal";
import User from "../../contexts/User";

import "./NavBar.css";

function NavBar() {
  const { user, logout } = useContext(User.UserContext);
  const navigate = useNavigate();
  const [connexionModalIsVisible, setConnexionModalIsVisible] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleOnCloseConnexionModal = () => {
    setConnexionModalIsVisible(false);
  };

  const setManageRedirect = (url) => {
    setIsNavOpen(false);
    navigate(url);
  };

  const profilConnex = () => {
    if (user) {
      const userId = user.id ? user.id : user;
      return (
        <button
          type="button"
          className="hover:decoration-blue-400 border-gray-400 my-6 "
          onClick={() => setManageRedirect(`/profil/${userId}`)}
        >
          <p className="bugerMenu hover:text-3xl hover:cursor-pointer">
            Profil
          </p>
        </button>
      );
    }
    return null;
  };

  return (
    <nav className="navBar z-50 sticky h-16 bg-white top-0 grid justify-items-stretch font-roboto overflow-hidden">
      <div className="bg-white mt-6 md:mt-4 mr-14 md:mr-2 justify-self-start md:ml-0 justify-self-center">
        <Link to="/" className="logo">
          <img
            src={logo}
            alt="Logo"
            width="120"
            height="120"
            className="imageLogo md:w-[200px] "
          />
        </Link>
      </div>
      <div className="Menu justify-self-start -mt-7 md:mr-6">
        <button
          className={`burgerIcon pl-2 md:pl-7 absolute py-1 top-0 left-0 px-8 md:py-4 ${
            !isNavOpen && "absolute top-0 left-0 px-8 py-4"
          }`}
          type="button"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <div className="flex flex-row">
            <div>
              <div className="space-y-2 hover:cursor-pointer w-fit flex flex-col items-center mt-1">
                <span className="block h-1 w-9 rounded-xl bg-darkPink" />
                <span className="block h-1 w-9 rounded-xl bg-darkPink" />
              </div>
              <div className="mt-2 hover:cursor-pointer w-fit flex flex-col">
                <span className="block h-1 w-7 rounded-xl bg-darkPink" />
              </div>
            </div>
            <h1 className="invisible md:visible mt-2 ml-4 text-black font-bold">
              Menu
            </h1>
          </div>
        </button>
        <div
          className={`transform transition-all duration-700 ${
            isNavOpen
              ? "showMenuNav md:rounded-r-[200px]"
              : "hideMenuNav -translate-x-[420px]"
          }`}
        >
          <button
            className="absolute top-0 left-0 px-8 py-4 hover:cursor-pointer"
            type="button"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="h-12 w-10 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <div className="flex flex-col justify-between min-h-[200px] w-80 text-2xl">
            <button
              type="button"
              className="border-gray-400 my-6 "
              onClick={() => setManageRedirect("/")}
            >
              <p className="bugerMenu hover:text-3xl hover:cursor-pointer">
                Accueil
              </p>
            </button>
            <button
              type="button"
              className="hover:decoration-blue-400 border-gray-400 my-6 "
              onClick={() => setManageRedirect("/offres")}
            >
              <p className="bugerMenu hover:text-3xl hover:cursor-pointer">
                Offres d'emploi
              </p>
            </button>
            {profilConnex()}
            <button
              type="button"
              className="hover:decoration-blue-400 border-gray-400 my-6 "
              onClick={() => setManageRedirect("/infos")}
            >
              <p className="bugerMenu hover:text-3xl hover:cursor-pointer">
                Qui sommes-nous ?
              </p>
            </button>
            <button
              type="button"
              className="hover:decoration-blue-400 border-gray-400 my-6 "
              onClick={() => setManageRedirect("/contact")}
            >
              <p className="bugerMenu hover:text-3xl hover:cursor-pointer">
                Contact
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="justify-self-end absolute -mr-12">
        {!user && (
          <button
            className="mt-4 md:mt-3 transition-colors duration-300 bg-darkPink bottom-1/4 p-1 md:p-2 px-4 md:px-6 -translate-x-1/2 hover:bg-pink text-white rounded-lg border-2"
            type="button"
            onClick={() => setConnexionModalIsVisible(true)}
          >
            Connexion
          </button>
        )}
        {user && (
          <button
            className="mt-4 md:mt-3 transition-colors duration-300 bg-darkPink bottom-1/4 p-1 md:p-2 px-4 md:px-6 -translate-x-1/2 hover:bg-pink text-white rounded-lg border-2"
            type="button"
            onClick={() => logout()}
          >
            Déconnexion
          </button>
        )}
      </div>
      <ConnexionModal
        visible={connexionModalIsVisible}
        onclose={handleOnCloseConnexionModal}
      />
    </nav>
  );
}

export default NavBar;
