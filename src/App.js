import './App.scss';
import { Routes, Route } from 'react-router-dom';
import AllCoins from './components/currencies/Currencies';
import AllDetails from './components/details/Details';

function App() {
  return (
    <div className="my-5 p-3 z-0 text-white">
      <Routes>
        <Route path="/" element={<AllCoins />} />
        <Route path="/details/:id" element={<AllDetails />} />
      </Routes>
    </div>
  );
}

export default App;
