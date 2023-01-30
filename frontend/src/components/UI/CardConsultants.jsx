import React from "react";
// import { Link } from "react-router-dom";
import linkedin from "@assets/linkedin.png";
import "@components/UI/CardOffre/CartePrincipale.css";

function CardConsultants({ consultant }) {
  return (
    <div className="w-8/12 md:w-10/12 md:ml-6 lg:ml-5 m-3">
      <img
        src={consultant?.image_url}
        alt="profil linkedin"
        className="w-full "
      />
      <div className="bganimationcard h-60 text-white pb-3">
        <div className="flex align-items items-center justify-center h-20 mb-3">
          <h1 className="m-3">{consultant?.nom_consultant}</h1>
          <a href={consultant.LinkedIn}>
            <img src={linkedin} alt="logo linkedin" className="w-12 m-3" />
          </a>
        </div>
        <div className="my-3 text-center">
          <h2 className="m-3 my-3 font-bold h-16">{consultant?.role}</h2>
          <p className="m-3 my-3">📞 {consultant?.telephone}</p>
          <p className="my-3 mx-2 text-sm">{consultant?.email}</p>
        </div>
      </div>
    </div>
  );
}

export default CardConsultants;
