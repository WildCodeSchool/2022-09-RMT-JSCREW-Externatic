import React, { useState, useEffect } from "react";
import apiConnexion from "@services/apiConnexion";

export default function CardStats() {
  const [nbCandidats, setNbCandidats] = useState([]);
  const [nbEntreprises, setNbEntreprises] = useState([]);
  const [nbOffres, setNbOffres] = useState([]);

  // Fonction qui gère la récupération des données "entreprise" avec axios
  const getCount = () => {
    apiConnexion
      .get(`/nbCandidats`)
      .then((nbUser) => setNbCandidats(nbUser.data[0].count))
      .catch((error) => console.error(error));
  };

  // Fonction qui gère la récupération des données "entreprise" avec axios
  const getCountEntp = () => {
    apiConnexion
      .get(`/nbEntreprises`)
      .then((nbEntp) => setNbEntreprises(nbEntp.data[0].count))
      .catch((error) => console.error(error));
  };

  // Fonction qui gère la récupération des données "entreprise" avec axios
  const getCountOffre = () => {
    apiConnexion
      .get(`/nbOffres`)
      .then((nbOffre) => setNbOffres(nbOffre.data[0].count))
      .catch((error) => console.error(error));
  };

  // Données "entreprise"
  useEffect(() => {
    getCount();
    getCountEntp();
    getCountOffre();
  }, []);

  return (
    <div className="container mx-auto mt-12 ">
      <div className="ml-3 grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3 ">
        <div className="w-full text-center px-4 py-5 bg-white rounded-lg shadow transform transition duration-500">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="text-indigo-500 w-12 h-12 mb-3 inline-block"
            viewBox="0 0 24 24"
          >
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
          </svg>
          <div className="mt-1 text-3xl text-center font-semibold text-gray-900">
            {nbCandidats}
          </div>
          <div className="text-l text-center font-medium text-gray-500 truncate">
            Total Candidats
          </div>
        </div>
        <div className="w-full text-center px-4 py-5 bg-white rounded-lg shadow transition duration-500">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-12 h-12 mb-3 inline-block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
            />
          </svg>
          <div className="mt-1 text-3xl  font-semibold text-gray-900">
            {nbEntreprises}
          </div>
          <div className="text-l text-center font-medium text-gray-500 truncate">
            Total Entreprises
          </div>
        </div>
        <div className="w-full text-center px-4 py-5 bg-white rounded-lg shadow transition duration-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-12 h-12 mb-3 inline-block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
            />
          </svg>
          <div className="mt-1 text-3xl text-center font-semibold text-gray-900">
            {nbOffres}
          </div>
          <div className="text-l font-medium text-gray-500 truncate">
            Total Offres
          </div>
        </div>
      </div>
    </div>
  );
}
