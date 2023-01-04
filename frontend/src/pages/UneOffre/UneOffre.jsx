import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UneOffre() {
  const [, setOffre] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`htpps/offres/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setOffre(data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="container">
      <p>slt</p>
    </div>
  );
}

export default UneOffre;
