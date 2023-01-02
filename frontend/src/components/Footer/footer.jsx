import linkedin from "@assets/linkedin.png";
import instagram from "@assets/instagram.png";
import twitter from "@assets/twitter.png";

function Footer() {
  return (
    <div className="bg-pink text-white">
      <div className="flex flex-col md:flex-row p-10">
        <div className="flex flex-col md:w-1/3">
          <h1 className="font-bold text-xl mb-2">
            Externatic, cabinet de recrutement informatique
          </h1>
          <p className="mb-5">
            Un cabinet de recrutement informatique et de conseil RH qui répond
            aux vrais besoins de vraies personnes.
          </p>
        </div>
        <div className="flex flex-row justify-center items-center mb-4 md:w-1/3">
          <a href="https://www.linkedin.com/company/externatic?originalSubdomain=fr">
            <img src={linkedin} alt="logo linkedin" className="w-12 m-3" />
          </a>
          <a href="https://www.instagram.com/externatic/">
            <img src={instagram} alt="logo instagram" className="w-12 m-3" />
          </a>
          <a href="https://twitter.com/Externatic">
            <img src={twitter} alt="logo twitter" className="w-12 m-3" />
          </a>
        </div>
        <div className="md:w-1/3 md:text-right">
          <p className="font-bold text-xl">Contact</p>
          <div className="mb-7">
            <br />
            Tél. +33 (0)2 85 52 26 33
            <br />
            Mail : contact@externatic.fr
            <br />
            Adresse : 1 rue Racine – 44000
            <br />
            NANTES – France
          </div>
        </div>
      </div>
      <p className="text-center">
        Copyright - Externatic 2022 - Tous droits réservés
      </p>
    </div>
  );
}

export default Footer;
