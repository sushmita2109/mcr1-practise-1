import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Homes } from "./Pages/Homes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homes />} />
      </Routes>
    </div>
  );
}

export default App;
