import { useParams } from 'react-router-dom';
import { useGetCoinQuery } from '../../redux/coins/coinsSlice';
import Details from './details';
import Header, { Detailspagenav } from '../navbar/header';
import logo from '../../asset/bitcoin.svg';

export default function Alldetails() {
  const { id } = useParams();

  const {
    data = {}, isError, isLoading, isSuccess, error,
  } = useGetCoinQuery(id);

  const detail = data;

  return (
    <div className="container my-5 pt-5">
      <Header>
        <Detailspagenav />
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
      {isLoading && <h3>Loading...</h3>}
      {isError && <h3>{error.message}</h3>}
      {isSuccess && <Details key={detail?.id} detail={detail} />}
    </div>
  );
}
