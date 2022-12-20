import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "@components/Footer/footer";
import NosOffres from "@pages/Offres/NosOffres";
import Entreprise from "@pages/BackOffice/Entreprise";
import Quisommesnous from "@pages/quisommesnous/qui";
import Home from "@pages/Home";
import NavBar from "@components/NavBar/NavBar";

import "./App.css";

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
            <Route path="/infos" element={<Quisommesnous />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}
export default App;
