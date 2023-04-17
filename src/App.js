import "./App.scss";

import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Currencies from "./components/Currencies";

function App() {
  return (
    <div className="text-bg-danger">
      <Header />
      <Routes>
        <Route path="/" element={<Currencies />} />
      </Routes>
    </div>
  );
}

export default App;
