import React, { useState, useEffect } from "react";
import apiConnexion from "@services/apiConnexion";

export default function CardStats() {
  const [nbCandidats, setNbCandidats] = useState([]);
  // Fonction qui gère la récupération des données "entreprise" avec axios
  const getCount = () => {
    apiConnexion
      .get(`/nbCandidats`)
      .then((nbUser) => setNbCandidats(nbUser.data[0].count))
      .catch((error) => console.error(error));
  };

  // Données "entreprise"
  useEffect(() => {
    getCount();
  }, []);

  return (
    <div className="container mx-auto mt-12 ">
      <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
        <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
          <div className="text-sm font-medium text-gray-500 truncate">
            Total Candidats
          </div>
          <div className="mt-1 text-3xl font-semibold text-gray-900">
            {nbCandidats}
          </div>
        </div>
        <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
          <div className="text-sm font-medium text-gray-500 truncate">
            Total Entreprises
          </div>
          <div className="mt-1 text-3xl font-semibold text-gray-900">450k</div>
        </div>
        <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
          <div className="text-sm font-medium text-gray-500 truncate">
            Total Offres
          </div>
          <div className="mt-1 text-3xl font-semibold text-gray-900">20k</div>
        </div>
      </div>
    </div>
  );
}
