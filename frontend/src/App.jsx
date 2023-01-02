import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Footer from "@components/Footer/footer";
import NavBar from "./components/NavBar/NavBar";

import AllJobs from "@pages/AllJobs";
import Entreprise from "@pages/BackOffice/Entreprise";
import NosOffres from "@pages/Offres/NosOffres";
import Offre from "@pages/BackOffice/Offre";
import Home from "./pages/Home";
import Profil from "@pages/Profil/Profil";
import Quisommesnous from "@pages/quisommesnous/qui";






function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/offres" element={<NosOffres />} />
            <Route path="/entreprises" element={<Entreprise />} />
            <Route path="/offre" element={<Offre />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/infos" element={<Quisommesnous />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}
export default App;
