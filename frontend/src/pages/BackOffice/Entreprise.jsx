import React, { useState, useEffect } from "react";
import axios from "axios";

function Entreprise() {
  const [entreprises, setEntreprises] = useState([]);

  // Fonction qui gère la récupération des données "entreprise" avec axios
  const getAllEntreprises = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/entreprises`)
      .then((entreprises) => setEntreprises(entreprises.data))
      .catch((error) => console.error(error));
  };

  // Données "entreprise" update
  useEffect(() => {
    getAllEntreprises();
  }, []);

  return <div>Entreprise</div>;
}

export default Entreprise();
