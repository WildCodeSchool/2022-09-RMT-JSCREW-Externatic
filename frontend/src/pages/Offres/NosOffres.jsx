import Card from "@components/UI/Card";
import React from "react";

function NosOffres() {
  return (
    <div className="container">
      <div className="flex flex-col items-center text-dark my-5 mx-5">
        <div className="font-bold text-center mb-4">
          Vos opportunités d'emploi,
          <br />
          uniquement chez les clients finaux
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center space-x-7">
          <img
            src="src/assets/connaissance.png"
            alt="connaissance"
            className="w-10 mb-3"
          />
          <div className="text-justify w-12/12 md:w-8/12">
            Si vous recherchez des opportunités d’emploi dans le domaine
            informatique, le cabinet de recrutement Externatic peut mettre à
            votre disposition une équipe de consultants en technologie de
            l’information, pour vous aider à trouver l’emploi qui vous
            correspond.
          </div>
        </div>
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
}

export default NosOffres;
