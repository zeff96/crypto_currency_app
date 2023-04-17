import "./App.scss";

import { Routes, Route } from "react-router-dom";
import Header from "./components/navbar/Header";
import Currencies from "./components/currencies/Currencies";

function App() {
  return (
    <div className="my-5 p-3 z-0 text-white">
      <Header />
      <Routes>
        <Route path="/" element={<Currencies />} />
      </Routes>
    </div>
  );
}

export default App;
