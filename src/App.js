import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import AllCoins from './components/homepage/allCoins';
import AllDetails from './components/details/allDetails';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<AllCoins />} />
        <Route path="/details/:id" element={<AllDetails />} />
      </Routes>
    </div>
  );
}

export default App;
