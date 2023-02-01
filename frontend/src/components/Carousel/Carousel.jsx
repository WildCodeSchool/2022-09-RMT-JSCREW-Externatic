import { useState, useRef, useEffect } from "react";
import "../../App.css";

function Carousel() {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [logos, setLogos] = useState([]);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/entreprises/rand`)
      .then((res) => res.json())
      .then((data) => setLogos(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, [logos]);

  return (
    <div className="carousel font-roboto my-8 mx-auto">
      <h2 className="text-black text-xl md:text-3xl leading-8 font-semibold text-slate-700 text-center mb-4">
        Ils nous font confiance
      </h2>
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-64">
          <button
            type="button"
            onClick={movePrev}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("prev")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            type="button"
            onClick={moveNext}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("next")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {logos.map((logo) => {
            return (
              <div
                key={logo.logo}
                className="carousel-item text-center relative w-20 h-20 md:w-40 md:h-40 snap-start"
              >
                <div
                  className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                  style={{ backgroundImage: `url(${logo.logo || ""})` }}
                >
                  <img
                    src={logo.logo}
                    alt="logo entreprise"
                    className=" w-full aspect-square"
                  />
                </div>
                <div className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
