import img1 from "@assets/photo-homepage.jpg";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <img alt="" src={img1} />
        <h1 className="absolute top-4 left-4 text-lg font-bold text-pink bg-white/[.1] w-3/6">
          Nous cassons les codes du recrutement informatique
        </h1>
        <button
          type="button"
          className="absolute shadow bg-darkPink bottom-4 left-1/2 -translate-x-1/2 bg-blue-500 hover:bg-pink text-white font-bold py-2 px-4 rounded-full"
        >
          S'inscrire
        </button>
      </div>
      <div className="w-5/6 mx-auto flex flex-col items-center">
        <h1 className="text-xl font-bold">
          Externatic est une plateforme créée pour les métiers de l'informatique
        </h1>
        <p>
          ici, chaque visage a un nom. Nos consultants ne sont pas des robots,
          il n'y a pas d'algorithmes, de profils ou de liens automatisés.{" "}
        </p>
        <h2 className="text-3xl font-bold text-center mt-4">Rejoins nous!</h2>
        <button
          type="button"
          className="bg-white mt-4 hover:bg-pink hover:text-white text-darkPink border-2 border-solid border-darkPink font-bold py-2 px-4 rounded"
        >
          Voir plus
        </button>
      </div>
      <div className="mt-4 bg-darkPink">
        <h2 className="text-center text-white font-bold pt-4 text-2xl">
          La réussite d’un recrutement Externatic repose sur
        </h2>
        <div className="mt-4 w-11/12 mx-auto">
          <h3 className="text-white font-bold text-center">Notre proximité</h3>
          <p className="text-white">
            L’expérience professionnelle est une chose. L’expérience de vie en
            est une autre. Alors nos consultants prennent le temps de faire
            connaissance avec chaque personne, pour comprendre le contexte, le
            parcours, les envies et les projets.
          </p>
        </div>
        <div className="mt-4 w-11/12 mx-auto">
          <h3 className="text-white font-bold text-center">
            Notre performance
          </h3>
          <p className="text-white">
            Notre réseau est une force et nous y travaillons sans relâche. Notre
            expérience nous permet d’identifier les vrais besoins d’une
            entreprise et de ceux qui la rejoignent.
          </p>
        </div>
        <div className="mt-4 w-11/12 mx-auto">
          <h3 className="text-white font-bold text-center">Notre durabilité</h3>
          <p className="text-white pb-4">
            Notre challenge est de trouver l’équipe qui fonctionnera ensemble de
            manière professionnelle et personnelle, pour aller jusqu’au bout
            d’un projet commun. Notre responsabilité vis-à-vis des impacts de
            nos décisions et nos actions sur le long-terme correspondent
            également à notre politique RSE.
          </p>
        </div>
      </div>
    </div>
  );
}
