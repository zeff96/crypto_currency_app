import { useEffect, useState } from 'react';
import useGetCoinsQuery from '../../redux/coins/coinsSlice';
import Coins from './coins';
import Header, { Homepagenav } from '../navbar/header';
import logo from '../../asset/bitcoin.svg';

export default function Allcoins() {
  const {
    data = [], isError, isLoading, isSuccess, error,
  } = useGetCoinsQuery();

  const coins = data;

  console.log(coins);

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCoins, setFilteredCoins] = useState(coins);

  useEffect(() => {
    const filtered = coins.filter(
      (coin) => coin.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredCoins(filtered);
  }, [coins, searchQuery]);

  const listCoins = filteredCoins.map((coin) => (
    <Coins key={coin.id} coin={coin} />
  ));

  return (
    <div className="container my-5 pt-5">
      <Header>
        <Homepagenav />
      </Header>
      <div className="mb-3 row justify-content-center">
        <div className="d-flex align-items-center col-md-5">
          <div>
            <img src={logo} alt="binance-svg" className="img-fluid" />
          </div>
          <div>
            <span className="text-white fs-2">
              CRYPTO
              <br />
              CURRENCY
              <br />
              DATA
            </span>
          </div>
        </div>
        <div className="form col-md-3 d-flex align-items-center">
          <input
            type="search"
            placeholder="Search coins"
            className="form-control"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <hr className="text-white" />
      {isLoading && <h3>Loading...</h3>}
      {isError && <h3>{error.message}</h3>}
      {isSuccess && (
        <div className="row justify-content-center gap-2">{listCoins}</div>
      )}
    </div>
  );
}
