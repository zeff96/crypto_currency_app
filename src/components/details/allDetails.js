import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import {
  selectDetails,
  selectError,
  selectStatus,
  getDetailsAsync,
} from '../../redux/details/detailsSlice';
import Details from './details';
import Header, { Detailsnav } from '../navbar/header';
import logo from '../../asset/bitcoin.svg';

export default function AllDetails() {
  const { id } = useParams();

  const details = useAppSelector(selectDetails);
  const status = useAppSelector(selectStatus);
  const error = useAppSelector(selectError);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDetailsAsync());
  }, [dispatch]);

  const detail = details.find((item) => item.id === id);

  return (
    <div className="container my-5 pt-5">
      <Header>
        <Detailsnav />
      </Header>
      <div className="mb-3 d-flex align-items-center">
        <div>
          <img src={logo} alt="binance-svg" style={{ width: '15rem' }} />
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
      <hr className="text-white" />
      {status === 'loading' && <h3>Loading...</h3>}
      {error && <h3>{error.message}</h3>}
      {detail && <Details key={detail.id} detail={detail} />}
    </div>
  );
}
