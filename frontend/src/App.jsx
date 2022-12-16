import Home from "./pages/Home";
import AllJobs from "@pages/AllJobs";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Home />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div>
        <AllJobs />
      </div>
    </div>
  );
}

export default App;
