import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Allcoins from './modules/homepage/allCoins';
import Alldetails from './modules/details/allDetails';

function App() {
  return (
    <div className="my-5 p-3">
      <Routes>
        <Route exact path="/" element={<Allcoins />} />
        <Route path="/details/:id" element={<Alldetails />} />
      </Routes>
    </div>
  );
}

export default App;
