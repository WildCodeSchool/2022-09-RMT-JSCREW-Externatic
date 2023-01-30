import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NosOffres from "@pages/Offres/NosOffres";
import Profil from "@pages/Profil/Profil";
import Quisommesnous from "@pages/quisommesnous/qui";
import Home from "@pages/Home";
import UneOffre from "@pages/UneOffre/UneOffre";
import AdminEntreprise from "@pages/BackOffice/AdminEntreprise";
import AdminOffres from "@pages/BackOffice/AdminOffres";
import Public from "@pages/Layout/Public";
import PublicCandidat from "@pages/Layout/PublicCandidat";
import Private from "@pages/Layout/Private";
import PrivateAdmin from "@pages/Layout/PrivateAdmin";
import PrivateConsultant from "@pages/Layout/PrivateConsultant";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Public />}>
            <Route path="/" element={<Home />} />
            <Route path="/offres" element={<NosOffres />} />
            <Route path="/offres/:id" element={<UneOffre />} />
            <Route path="" element={<PublicCandidat />}>
              <Route path="/profil" element={<Profil />} />
              <Route path="/profil/:id" element={<Profil />} />
            </Route>
            <Route path="/infos" element={<Quisommesnous />} />
          </Route>
          <Route path="/dashboard/" element={<Private />}>
            <Route path="consultant" element={<PrivateConsultant />}>
              <Route path="offres" element={<AdminOffres />} />
            </Route>
            <Route path="admin" element={<PrivateAdmin />}>
              <Route path="entreprises" element={<AdminEntreprise />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
