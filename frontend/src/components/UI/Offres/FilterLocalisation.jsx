import React, { useEffect, useState } from "react";
import apiConnexion from "@services/apiConnexion";
import localisationjob from "@assets/localisation.png";

function FilterLocalisation({ selectedCity, setSelectedCity }) {
  const [localisations, setLocalisations] = useState([]);

  useEffect(() => {
    apiConnexion
      .get(`/localisation`)
      .then((data) => {
        setLocalisations(data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex items-center my-2">
      <div className="flex items-center border-solid border-2 border-darkPink rounded-3xl p-3 ">
        <img src={localisationjob} alt="localisationjob" className="w-7 mr-5" />
        <select
          className="w-80"
          value={selectedCity?.localisation}
          onChange={(event) =>
            setSelectedCity({ localisation: event.target.value })
          }
        >
          <option value="">Choississez une ville</option>
          {localisations &&
            localisations.map((localisation) => (
              <option key={localisation.localisation}>
                {localisation.localisation}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}

export default FilterLocalisation;
