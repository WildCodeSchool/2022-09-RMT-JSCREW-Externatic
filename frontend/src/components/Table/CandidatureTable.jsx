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
      .get(`/candidatures/${user.id}`)
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
    <div className="mt-4 w-11/12 md:w-9/12 lg:px-14 lg:ml-8">
      <h1 className="text-center text-2xl font-bold text-black mb-8">
        Vos candidatures en cours
      </h1>
      <div className="w-full">
        <table className="table-fixed w-full border-collapse mb-10">
          <thead>
            <tr>
              <th className="text-center text-darkPink underline underline-offset-4">
                Poste
              </th>
              <th className="text-center text-darkPink underline underline-offset-4">
                Lieu
              </th>
              <th className="text-center text-darkPink underline underline-offset-4">
                Date
              </th>
              <th className="text-center text-darkPink underline underline-offset-4">
                Contact
              </th>
            </tr>
          </thead>
          <tbody>
            {candidatures &&
              candidatures.map((candidature) => (
                <tr>
                  <td className="text-center border-b-2 hover:text-darkPink text-xs md:text-base lg:text-lg hover:underline text-black">
                    <Link to={`/offres/${candidature.offre_id}`}>
                      {candidature.poste}
                    </Link>
                  </td>
                  <td className="text-center border-b-2 text-xs md:text-base lg:text-lg text-black">
                    {candidature.localisation}
                  </td>
                  <td className="text-center border-b-2 text-xs md:text-base lg:text-lg text-black">
                    {candidature.dateCandidature.split("T").shift()}
                  </td>
                  <td className="text-center border-b-2 text-xs text-black">
                    <a
                      href={`mailto:${candidature.email}`}
                      className="flex justify-center hover:text-darkPink hover:underline my-8"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 md:w-8 md:h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </a>
                  </td>
                  <td className="text-center border-b-2 w-4 text-black pl-6 pt-2">
                    <button
                      type="button"
                      className="hover:text-darkPink hover:underline"
                      onClick={() => handleUpdateCandidature(candidature.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 md:w-8 md:h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                        />
                      </svg>
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
