import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NosOffres from "@pages/Offres/NosOffres";
import Entreprise from "@pages/BackOffice/Entreprise";
import Profil from "@pages/Profil/Profil";
import Quisommesnous from "@pages/quisommesnous/qui";
import Home from "@pages/Home";
import AdminEntreprise from "@pages/BackOffice/AdminEntreprise";
import Public from "@pages/Layout/Public";
import Private from "@pages/Layout/Private";
import Offre from "@pages/BackOffice/Offre";

import "./App.css";


import Footer from "@components/Footer/footer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <Router> 
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Public />}>
            <Route path="" element={<Home />} />
            <Route path="offres" element={<NosOffres />} />
            <Route path="entreprises" element={<Entreprise />} />
            <Route path="profil" element={<Profil />} />
            <Route path="infos" element={<Quisommesnous />} />
          </Route>
          <Route path="/dashboard/" element={<Private />}>
            <Route path="entreprises" element={<AdminEntreprise />} />
          </Route>
        </Routes>
         <Footer />
        </div>
      </Router>
    </div>
  );
}
export default App;
