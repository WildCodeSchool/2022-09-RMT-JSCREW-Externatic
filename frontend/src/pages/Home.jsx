import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Card from "@components/UI/Card";
import RegisterModal from "@components/UI/RegisterModal";
import Carousel from "@components/Carousel/Carousel";
import img3 from "@assets/test1-2.jpg";
import icon1 from "@assets/main.png";
import icon2 from "@assets/fusee.png";
import icon3 from "@assets/sablier.png";
import icon4 from "../../public/externatic_favicon.png";

export default function Home() {
  const [randomData, setRandomData] = useState([]);
  const [registerModalIsVisible, setregisterModalIsVisible] = useState(false);

  const handleOnCloseRegisterModal = () => {
    setregisterModalIsVisible(false);
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/offres/rand`)
      .then((res) => res.json())
      .then((data) => setRandomData(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Accueil</title>
        <meta name="description" content="Page d'accueil du site Externatic" />
        <link rel="icon" type="image/png" href={icon4} />
      </Helmet>
      <div className="relative">
        <div className="">
          <img alt="" src={img3} />
        </div>
        <button
          type="button"
          onClick={() => {
            setregisterModalIsVisible(true);
          }}
          className="absolute transition-colors duration-300 md:text-5xl bg-darkPink bottom-1/4 md:px-10 md:bottom-1/3 left-1/2 -translate-x-1/2 hover:bg-pink text-white font-bold py-2 px-4 rounded-full border-2  border-solid border-white"
        >
          S'inscrire
        </button>
      </div>
      <div className="w-5/6 mx-auto  mt-8 flex flex-col items-center">
        <h1 className="text-xl font-bold md:text-3xl text-center">
          Externatic est une plateforme créée pour les métiers de l'informatique
        </h1>
        <p className="md:text-2xl text-center mt-4">
          Ici, chaque visage a un nom. Nos consultants ne sont pas des robots,
          il n'y a pas d'algorithmes, de profils ou de liens automatisés.{" "}
        </p>
        <h2 className="text-3xl font-bold text-center mt-4">Rejoins-nous!</h2>
        <div className="lg:flex lg:justify-around lg:w-full">
          {randomData.map((offre) => (
            <Link to={`/offres/${offre.id}`}>
              <Card key={offre.id} offre={offre} />
            </Link>
          ))}
        </div>
        <Link to="/offres">
          <button
            type="button"
            className="bg-white mt-4 transition duration-300 hover:bg-pink hover:text-white text-darkPink border-2 border-solid border-darkPink font-bold py-2 px-4 rounded"
          >
            Voir plus
          </button>
        </Link>
      </div>
      <div className="mt-4 bg-darkPink">
        <h2 className="text-center text-white font-bold pt-4 text-2xl md:text-3xl md:mb-10">
          La réussite d’un recrutement Externatic repose sur
        </h2>
        <div className="flex flex-col lg:flex-row md:pb-6">
          <div className="mt-5 w-11/12  lg:w-96 mx-auto">
            <div className="flex space-x-16 items-center">
              <img alt="icone mains" src={icon1} className="w-12" />
              <h3 className="text-white font-bold md:text-2xl">
                Notre proximité
              </h3>
            </div>
            <p className="text-white md:mt-2 md:text-2xl">
              L’expérience professionnelle est une chose. L’expérience de vie en
              est une autre. Alors nos consultants prennent le temps de faire
              connaissance avec chaque personne, pour comprendre le contexte, le
              parcours, les envies et les projets.
            </p>
          </div>
          <div className="mt-5 w-11/12 lg:w-96 mx-auto">
            <div className="flex space-x-16 items-center">
              <img alt="icone fusée" src={icon2} className="w-12" />
              <h3 className="text-white font-bold md:text-2xl">
                Notre performance
              </h3>
            </div>
            <p className="text-white md:mt-2 md:text-2xl">
              Notre réseau est une force et nous y travaillons sans relâche.
              Notre expérience nous permet d’identifier les vrais besoins d’une
              entreprise et de ceux qui la rejoignent.
            </p>
          </div>
          <div className="mt-5 w-11/12 lg:w-96 mx-auto">
            <div className="flex space-x-16 items-center">
              <img alt="icone sablier" src={icon3} className="w-12" />
              <h3 className="text-white font-bold md:text-2xl">
                Notre durabilité
              </h3>
            </div>
            <p className="text-white pb-4 md:mt-2 md:text-2xl">
              Notre challenge est de trouver l’équipe qui fonctionnera ensemble
              de manière professionnelle et personnelle, pour aller jusqu’au
              bout d’un projet commun. Notre responsabilité vis-à-vis des
              impacts de nos décisions et nos actions sur le long-terme
              correspondent également à notre politique RSE.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8 mb-8">
        <iframe
          className="w-full lg:w-3/4 aspect-video "
          src="https://www.youtube.com/embed/BYmNVsS5J58"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="2xl:container 2xl:mx-auto 2xl:px-0">
        <Carousel />
      </div>
      <RegisterModal
        visible={registerModalIsVisible}
        onclose={handleOnCloseRegisterModal}
      />
    </div>
  );
}
