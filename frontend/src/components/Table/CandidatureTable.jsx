import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

import apiConnexion from "@services/apiConnexion";

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

function CandidatureTable({ user }) {
  const [candidatures, setCandidatures] = useState([]);

  const getCandidatures = () => {
    apiConnexion
      .get(`/candidatures/${user.data.id}`)
      .then((userCandidatures) => {
        setCandidatures(userCandidatures.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getCandidatures();
  }, []);

  const handleUpdateCandidature = (id) => {
    if (user.id) {
      apiConnexion
        .put(`/candidatures/${id}`)
        .then(() => {
          getCandidatures();
          toast.success(
            `Bonjour  votre candidature a bien été archivée.`,
            toastifyConfig
          );
        })
        .catch((err) => {
          toast.error(`Une erreur s'est produite`, toastifyConfig);
          console.warn(err);
        });
    }
  };

  return (
    <div className="mt-4">
      <h1 className="text-center text-2xl font-bold text-black mb-4">
        Vos candidatures en cours
      </h1>
      <div className="w-full">
        <table className="table-fixed w-full border-collapse mb-8">
          <thead>
            <tr>
              <th className="text-center border border-slate-600 bg-darkPink text-white">
                Poste
              </th>
              <th className="text-center border border-slate-600 bg-darkPink text-white">
                Lieu
              </th>
              <th className="text-center border border-slate-600 bg-darkPink text-white">
                Date
              </th>
              <th className="text-center border border-slate-600 bg-darkPink text-white">
                Contact
              </th>
              <th className="text-center border border-slate-600 bg-darkPink text-white">
                Archiver
              </th>
            </tr>
          </thead>
          <tbody>
            {candidatures &&
              candidatures.map((candidature) => (
                <tr>
                  <td className="text-center border border-slate-600 bg-white hover:text-darkPink text-xs hover:underline">
                    <Link to={`/offres/${candidature.offre_id}`}>
                      {candidature.poste}
                    </Link>
                  </td>
                  <td className="text-center border bg-white border-slate-600 text-xs">
                    {candidature.localisation}
                  </td>
                  <td className="text-center border bg-white border-slate-600 text-xs">
                    {candidature.dateCandidature.split("T").shift()}
                  </td>
                  <td className="text-center bg-white border border-slate-600 text-xs">
                    <a
                      href={`mailto:${candidature.email}`}
                      className="hover:text-darkPink hover:underline"
                    >
                      Email
                    </a>
                  </td>
                  <td className="text-center border bg-white border-slate-600 text-xs ">
                    <button
                      type="button"
                      className="hover:text-darkPink hover:underline"
                      onClick={() => handleUpdateCandidature(candidature.id)}
                    >
                      Archiver
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
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

export default CandidatureTable;
