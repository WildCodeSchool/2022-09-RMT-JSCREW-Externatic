import img2 from "@assets/test1.jpg";
import img3 from "@assets/test1-2.jpg";
import icon1 from "@assets/main.png";
import icon2 from "@assets/fusee.png";
import icon3 from "@assets/sablier.png";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <div className="block sm:hidden">
          <img alt="" src={img2} />
        </div>
        <div className="hidden sm:block">
          <img alt="" src={img3} />
        </div>
        <h1 className="absolute top-4 md:top-6 left-4 md:left-6 lg:text-5xl text-lg font-bold text-pink w-3/6">
          Nous cassons les codes du recrutement informatique
        </h1>
        <button
          type="button"
          className="absolute md:text-4xl bg-darkPink bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 hover:bg-pink text-white font-bold py-2 px-4 rounded-full border-2  border-solid border-white"
        >
          S'inscrire
        </button>
      </div>
      <div className="w-5/6 mx-auto  mt-4 flex flex-col items-center">
        <h1 className="text-xl font-bold md:text-3xl">
          Externatic est une plateforme créée pour les métiers de l'informatique
        </h1>
        <p className="md:text-2xl">
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
        <div className="flex flex-col md:flex-row">
          <div className="mt-5 w-11/12  md:w-96 mx-auto">
            <div className="flex space-x-16 items-center">
              <img alt="icone mains" src={icon1} className="w-12" />
              <h3 className="text-white font-bold ">Notre proximité</h3>
            </div>
            <p className="text-white md:mt-2">
              L’expérience professionnelle est une chose. L’expérience de vie en
              est une autre. Alors nos consultants prennent le temps de faire
              connaissance avec chaque personne, pour comprendre le contexte, le
              parcours, les envies et les projets.
            </p>
          </div>
          <div className="mt-5 w-11/12 md:w-96 mx-auto">
            <div className="flex space-x-16 items-center">
              <img alt="icone fusée" src={icon2} className="w-12" />
              <h3 className="text-white font-bold">Notre performance</h3>
            </div>
            <p className="text-white md:mt-2">
              Notre réseau est une force et nous y travaillons sans relâche.
              Notre expérience nous permet d’identifier les vrais besoins d’une
              entreprise et de ceux qui la rejoignent.
            </p>
          </div>
          <div className="mt-5 w-11/12 md:w-96 mx-auto">
            <div className="flex space-x-16 items-center">
              <img alt="icone sablier" src={icon3} className="w-12" />
              <h3 className="text-white font-bold text-center">
                Notre durabilité
              </h3>
            </div>
            <p className="text-white pb-4 md:mt-2">
              Notre challenge est de trouver l’équipe qui fonctionnera ensemble
              de manière professionnelle et personnelle, pour aller jusqu’au
              bout d’un projet commun. Notre responsabilité vis-à-vis des
              impacts de nos décisions et nos actions sur le long-terme
              correspondent également à notre politique RSE.
            </p>
          </div>
        </div>
        <iframe
          className="w-full aspect-video ..."
          src="https://www.youtube.com/embed/BYmNVsS5J58"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
