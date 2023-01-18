import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import Card from "@components/UI/Card";

function ListOfOffers() {
  const [random, setRandom] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/offres/rand`)
      .then((res) => res.json())
      .then((data) => setRandom(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <h1 className="text-black text-3xl font-bold mt-7 ml-10 lg:ml-28">
        Envie de voir d'autres offres ?
      </h1>
      <div className="caroussel flex flex-col md:flex md:flex-row justify-center items-center space-around my-3 mb-10 lg:flex lg:w-full">
        {random &&
          random.map((offre) => (
            <HashLink to={`/offres/${offre.id}#`}>
              <Card key={offre.id} offre={offre} />
            </HashLink>
          ))}
      </div>
    </>
  );
}

export default ListOfOffers;
