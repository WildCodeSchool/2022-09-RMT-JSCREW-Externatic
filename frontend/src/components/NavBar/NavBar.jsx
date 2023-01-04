import { React, useState } from "react";
import logo from "@assets/Logo-Externatic.png";
import { Link } from "react-router-dom";

import "./NavBar.css";

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav className="navBar z-50 sticky bg-white top-0 grid justify-items-stretch">
      <div className="bg-white mt-4 justify-self-start ml-5 md:ml-0 md:justify-self-center">
        <Link to="/" className="logo">
          <img
            src={logo}
            alt="Logo"
            width="200"
            height="200"
            className="imageLogo"
          />
        </Link>
      </div>
      <div className="Menu justify-self-end -mt-7 mr-6">
        <button
          className={`burgerIcon space-y-2 hover:cursor-pointer w-fit ${
            !isNavOpen && "absolute top-0 right-0 px-8 py-4"
          }`}
          type="button"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-8 bg-darkPink" />
          <span className="block h-0.5 w-8 bg-darkPink" />
          <span className="block h-0.5 w-8 bg-darkPink" />
        </button>

        <div
          className={`transform transition-all duration-700 ${
            isNavOpen
              ? "showMenuNav md:rounded-l-[200px]"
              : "hideMenuNav translate-x-[420px]"
          }`}
        >
          <button
            className="absolute top-0 right-0 px-8 py-4 hover:cursor-pointer"
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
            <Link to="/" className="border-gray-400 my-6 ">
              <p className="bugerMenu hover:text-3xl hover:cursor-pointer">
                Accueil
              </p>
            </Link>
            <Link
              to="/offres"
              className="hover:decoration-blue-400 border-gray-400 my-6 "
            >
              <p className="bugerMenu hover:text-3xl hover:cursor-pointer">
                Offre d'emploi
              </p>
            </Link>
            <Link
              to="/profil"
              className="hover:decoration-blue-400 border-gray-400 my-6 "
            >
              <p className="bugerMenu hover:text-3xl hover:cursor-pointer">
                Profil
              </p>
            </Link>
            <Link
              to="/infos"
              className="hover:decoration-blue-400 border-gray-400 my-6 "
            >
              <p className="bugerMenu hover:text-3xl hover:cursor-pointer">
                Qui sommes-nous ?
              </p>
            </Link>
            <Link
              to="/"
              className="hover:decoration-blue-400 border-gray-400 my-6 "
            >
              <p className="bugerMenu hover:text-3xl hover:cursor-pointer">
                Contact
              </p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
