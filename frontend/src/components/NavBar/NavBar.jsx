import { React, useState } from "react";
import logo from "@assets/Logo-Externatic.png";
import { Link } from "react-router-dom";
import ConnexionModal from "../UI/ConnexionModal";

import "./NavBar.css";

function NavBar() {
  const [connexionModalIsVisible, setConnexionModalIsVisible] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleOnCloseConnexionModal = () => {
    setConnexionModalIsVisible(false);
  };

  return (
    <nav className="navBar z-50 sticky bg-white top-0 grid justify-items-stretch font-roboto overflow-hidden">
      <div className="bg-white mt-4 justify-self-start ml-5 md:ml-0 justify-self-center">
        <Link to="/" className="logo">
          <img
            src={logo}
            alt="Logo"
            width="100"
            height="100"
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
          <div className="space-y-2 hover:cursor-pointer w-fit flex flex-col items-center">
            <span className="block h-0.5 w-8 bg-darkPink" />
            <span className="block h-0.5 w-8 bg-darkPink" />
          </div>
          <div className="mt-2 hover:cursor-pointer w-fit flex flex-col">
            <span className="block h-0.5 w-6 bg-darkPink" />
          </div>
        </button>
        <span className="block mx-12 md:mx-16 md:-mt-2">Menu</span>
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
              className="h-8 w-8 text-gray-600"
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
            <Link
              to="/"
              className="border-gray-400 my-6 "
              onClick={() => setIsNavOpen(false)}
            >
              <p className="bugerMenu hover:text-3xl hover:cursor-pointer">
                Accueil
              </p>
            </Link>
            <Link
              to="/offres"
              className="hover:decoration-blue-400 border-gray-400 my-6 "
              onClick={() => setIsNavOpen(false)}
            >
              <p className="bugerMenu hover:text-3xl hover:cursor-pointer">
                Offre d'emploi
              </p>
            </Link>
            <Link
              to="/profil"
              className="hover:decoration-blue-400 border-gray-400 my-6 "
              onClick={() => setIsNavOpen(false)}
            >
              <p className="bugerMenu hover:text-3xl hover:cursor-pointer">
                Profil
              </p>
            </Link>
            <Link
              to="/infos"
              className="hover:decoration-blue-400 border-gray-400 my-6 "
              onClick={() => setIsNavOpen(false)}
            >
              <p className="bugerMenu hover:text-3xl hover:cursor-pointer">
                Qui sommes-nous ?
              </p>
            </Link>
            <Link
              to="/"
              className="hover:decoration-blue-400 border-gray-400 my-6 "
              onClick={() => setIsNavOpen(false)}
            >
              <p className="bugerMenu hover:text-3xl hover:cursor-pointer">
                Contact
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="justify-self-end absolute -mr-10">
        <button
          className="mt-1 md:mt-3 transition-colors duration-300 bg-darkPink bottom-1/4 px-1 md:px-6 md:bottom-1/3 -translate-x-1/2 hover:bg-pink text-white rounded-full border-2"
          type="button"
          onClick={() => setConnexionModalIsVisible(true)}
        >
          Connexion
        </button>
      </div>
      <ConnexionModal
        visible={connexionModalIsVisible}
        onclose={handleOnCloseConnexionModal}
      />
    </nav>
  );
}

export default NavBar;
