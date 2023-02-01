import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import apiConnexion from "@services/apiConnexion";
import { ToastContainer, toast } from "react-toastify";
import CardStats from "@components/UI/CardStats";
import User from "../../contexts/User";

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

export default function ConsultantDashboard() {
  const { user } = useContext(User.UserContext);
  const [candidatures, setCandidatures] = useState([]);

  const getCandidatures = () => {
    apiConnexion
      .get(`/candidaturesForConsultants/${user.id}`)
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
        .put(`/candidaturesForConsultants/${id}`)
        .then(() => {
          getCandidatures();
          toast.success(`La candidature a bien été archivée.`, toastifyConfig);
        })
        .catch((err) => {
          toast.error(`Une erreur s'est produite`, toastifyConfig);
          console.warn(err);
        });
    }
  };
  return (
    <div className="flex flex-col items-center w-full h-screen ">
      <CardStats />
      <div className="mt-4">
        <h1 className="text-center text-2xl font-bold text-black mb-4">
          Candidatures à traiter
        </h1>
        <div className="w-full">
          <table className="table-fixed w-full border-collapse mb-8">
            <thead>
              <tr>
                <th className="text-center border border-slate-600 bg-darkPink text-white">
                  Entreprise
                </th>
                <th className="text-center border border-slate-600 bg-darkPink text-white">
                  Poste
                </th>
                <th className="text-center border border-slate-600 bg-darkPink text-white">
                  Date
                </th>
                <th className="text-center border border-slate-600 bg-darkPink text-white">
                  Candidat
                </th>
                <th className="text-center border border-slate-600 bg-darkPink text-white">
                  Téléphone
                </th>
                <th className="text-center border border-slate-600 bg-darkPink text-white">
                  Email
                </th>
                <th className="text-center border border-slate-600 bg-darkPink text-white">
                  CV
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
                    <td className="text-center border border-slate-600 bg-white hover:text-darkPink text-xs">
                      {candidature.nom_entreprise}
                    </td>
                    <td className="text-center border bg-white border-slate-600 text-xs ">
                      <Link to={`/offres/${candidature.id}`}>
                        {candidature.poste}
                      </Link>
                    </td>
                    <td className="text-center border bg-white border-slate-600 text-xs">
                      {candidature.dateCandidature.split("T").shift()}
                    </td>
                    <td className="text-center bg-white border border-slate-600 text-xs">
                      {`${candidature.prenom} ${candidature.nom}`}
                    </td>
                    <td className="text-center border bg-white border-slate-600 text-xs">
                      {candidature.telephone}
                    </td>
                    <td className="text-center border bg-white border-slate-600 text-xs">
                      <a
                        href={`mailto:${candidature.email}`}
                        className="hover:text-darkPink hover:underline"
                      >
                        Email
                      </a>
                    </td>
                    <td className="text-center border bg-white border-slate-600 text-xs">
                      <a
                        href={`${candidature.cv}`}
                        className="hover:text-darkPink hover:underline"
                      >
                        CV
                      </a>
                    </td>
                    <td className="text-center border bg-white border-slate-600 text-xs ">
                      <button
                        type="button"
                        className="hover:text-darkPink hover:underline"
                        onClick={() =>
                          handleUpdateCandidature(candidature.candidature_id)
                        }
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
    </div>
  );
}
