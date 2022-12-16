import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "@components/Footer/footer";
import Home from "./pages/Home";
import AllJobs from "@pages/AllJobs";
import NavBar from "./components/NavBar/NavBar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Home />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div>
        <AllJobs />
      </div>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}
export default App;
