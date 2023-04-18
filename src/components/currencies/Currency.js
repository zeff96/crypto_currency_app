import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useAppDispatch } from '../../hooks/hooks';
import { showDetails } from '../../redux/coins/coinsSlice';

export default function Currency({ coin }) {
  const dispatch = useAppDispatch();
  return (
    <div className="card p-2 col-6 col-sm-3">
      <div className="d-flex" style={{ height: '10rem' }}>
        <div className="col-2 col-sm-4">
          <img src={coin.img} alt={coin.name} style={{ width: '4rem' }} />
        </div>
        <div className="col d-flex flex-column align-items-end justify-content-between">
          <Link to={`/details/${coin.id}`} className="text-white fs-2">
            <BsArrowRightCircle
              onClick={() => dispatch(showDetails(coin.id))}
            />
          </Link>
          <p className="f-4 text-uppercase fw-bold">{coin.name}</p>
        </div>
      </div>
    </div>
  );
}

Currency.propTypes = {
  coin: PropTypes.shape({
    id: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};
