import React, { useEffect, useState } from "react";
import apiConnexion from "@services/apiConnexion";
import loupe from "@assets/loupe.png";

function FilterJob({ selectedPoste, setSelectedPoste }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    apiConnexion
      .get(`/job`)
      .then((data) => {
        setJobs(data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex items-center my-4 md:mt-8">
      <div className="flex items-center border-solid border-2 border-darkPink rounded-3xl p-3">
        <img src={loupe} alt="loupejob" className="w-7 mr-5" />
        <select
          className="w-60 md:w-80"
          value={selectedPoste?.poste}
          onChange={(event) => setSelectedPoste({ poste: event.target.value })}
        >
          <option value="">Choississez un poste</option>
          {jobs &&
            jobs.map((poste) => (
              <option value={poste.poste} key={poste.poste}>
                {poste.poste}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}

export default FilterJob;
