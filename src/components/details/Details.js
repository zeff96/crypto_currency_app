import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import {
  getCoinsAsyns,
  selectCoins,
  selectStatus,
  selectError,
} from '../../redux/coins/coinsSlice';
import Detail from './Detail';
import bitcoin from '../../asset/bitcoin.svg';

export default function Details() {
  const dispatch = useAppDispatch();

  const coins = useAppSelector(selectCoins);
  const error = useAppSelector(selectError);
  const status = useAppSelector(selectStatus);

  useEffect(() => {
    dispatch(getCoinsAsyns());
  }, [dispatch]);

  const { id } = useParams();

  const coin = coins.find((item) => item.id === id);

  return (
    <div className="container" data-testid="details">
      <div className="d-flex align-items-center">
        <div style={{ maxWidth: '15rem' }}>
          <img className="img-fluid" src={bitcoin} alt={bitcoin} />
        </div>
        <h2 className="fs-1 fw-bolder">
          Crypto
          {' '}
          <br />
          {' '}
          Currency
          {' '}
          <br />
          {' '}
          Metrics
        </h2>
      </div>
      {status === 'Loading' && <h2>Loading</h2>}
      {error && <h2>{error.message}</h2>}
      {coin && <Detail item={coin} key={coin.id} />}
    </div>
  );
}
