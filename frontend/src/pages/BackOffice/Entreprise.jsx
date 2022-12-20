import React, { useState, useEffect } from "react";
import axios from "axios";

function Entreprise() {
  const [entreprises, setEntreprises] = useState([]);

  // Fonction qui gère la récupération des données "entreprise" avec axios
  const getAllEntreprises = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/entreprises`)
      .then((firm) => setEntreprises(firm.data))
      .catch((error) => console.error(error));
  };

  // Données "entreprise" update
  useEffect(() => {
    getAllEntreprises();
  }, []);

  return (
    <div>
      <div>Entreprise</div>;
      <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <select
            className="form-select appearance-none
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding bg-no-repeat
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
          >
            <option selected> entreprise</option>
            {entreprises.map((entreprise) => (
              <option key={entreprise.id} value="">
                {entreprise.nom_entreprise}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Entreprise;
