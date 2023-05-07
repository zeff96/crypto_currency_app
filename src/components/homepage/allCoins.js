import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import {
  getCoinsAsync,
  selectCoins,
  selectError,
  selectStatus,
} from '../../redux/coins/coinsSlice';
import Coins from './coin';
import Header, { Homenav } from '../navbar/Header';
import logo from '../../asset/bitcoin.svg';

export default function AllCoins() {
  const coins = useAppSelector(selectCoins);
  const status = useAppSelector(selectStatus);
  const error = useAppSelector(selectError);

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCoins, setFilteredCoins] = useState(coins);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCoinsAsync());
  }, [dispatch]);

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
        <Homenav />
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
      {status === 'loading' && <h3>Loading...</h3>}
      {error && <h3>{error.message}</h3>}
      {coins && (
        <div className="row justify-content-center gap-2">{listCoins}</div>
      )}
    </div>
  );
}
