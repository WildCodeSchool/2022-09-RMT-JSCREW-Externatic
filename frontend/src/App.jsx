import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "@components/Footer/footer";
import NosOffres from "@pages/Offres/NosOffres";
import Home from "./pages/Home";
import NavBar from "./components/NavBar/NavBar";

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
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}
export default App;
