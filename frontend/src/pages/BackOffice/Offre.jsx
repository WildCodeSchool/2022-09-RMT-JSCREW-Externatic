import React, { useState, useEffect } from "react";
import axios from "axios";

function Offres() {
  const [jobs, setjobs] = useState([]);

  // Fonction qui gère la récupération des données "offre" avec axios
  const getAllOffres = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/offres`)
      .then((offres) => setjobs(offres.data))
      .catch((error) => console.error(error));
  };

  // Données "offre" update
  useEffect(() => {
    getAllOffres();
  }, []);

  return (
    <div>
      <div className=" mb-3 flex justify-left">
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
            <option selected> offre</option>
            {jobs.map((offre) => (
              <option key={offre.id} value="">
                {offre.poste}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Offres;
