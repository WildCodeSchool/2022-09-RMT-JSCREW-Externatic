import React, { useState, useEffect } from "react";
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
      <h1 className="text-black text-3xl font-bold ml-10 lg:ml-28">
        Offres similaires :
      </h1>
      <div className="caroussel my-3 lg:flex lg:w-full">
        {random.map((offre) => (
          <Card key={offre.id} offre={offre} />
        ))}
      </div>
    </>
  );
}

export default ListOfOffers;
