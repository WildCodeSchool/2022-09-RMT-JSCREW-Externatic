import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Entreprises from "@pages/Entreprises/Entreprises";
import NosOffres from "@pages/Offres/NosOffres";
import Entreprise from "@pages/BackOffice/Entreprise";
import Profil from "@pages/Profil/Profil";
import Quisommesnous from "@pages/quisommesnous/qui";
import Home from "@pages/Home";
import UneOffre from "@pages/UneOffre/UneOffre";
import Offre from "@pages/BackOffice/Offre";
import AdminEntreprise from "@pages/BackOffice/AdminEntreprise";
import AdminOffres from "@pages/BackOffice/AdminOffres";
import Public from "@pages/Layout/Public";
import Private from "@pages/Layout/Private";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Public />}>
            <Route path="/" element={<Home />} />
            <Route path="/offres" element={<NosOffres />} />
            <Route path="/entreprises" element={<Entreprises />} />
            <Route path="/offres/:id" element={<UneOffre />} />
            <Route path="/entreprises" element={<Entreprise />} />
            <Route path="/offre" element={<Offre />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/infos" element={<Quisommesnous />} />
          </Route>
          <Route path="/dashboard/" element={<Private />}>
            <Route path="entreprises" element={<AdminEntreprise />} />
            <Route path="entreprises/:id" element={<AdminEntreprise />} />
            <Route path="offres" element={<AdminOffres />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
