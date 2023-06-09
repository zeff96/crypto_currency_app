import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Allcoins from './modules/homepage/allCoins';
import Alldetails from './modules/details/allDetails';

function App() {
  return (
    <div className="my-5 p-3">
      <Routes>
        <Route path="/" element={<Allcoins />} />
        <Route path="/details/:id" element={<Alldetails />} />
      </Routes>
    </div>
  );
}

export default App;
