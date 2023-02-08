import React, { useRef, useEffect } from "react";

import "./PageDefault.css";

function PageDefault() {
  const starsRef = useRef([]);

  const createStar = () => {
    const right = Math.random() * 500;
    const top = Math.random() * window.innerHeight;
    const star = (
      <div className="star" key={right + top} style={{ right, top }} />
    );
    starsRef.current = [...starsRef.current, star];
  };

  useEffect(() => {
    const intervalId = setInterval(createStar, 100);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="star-field">{starsRef.current.map((star) => star)}</div>
  );
}

export default PageDefault;
