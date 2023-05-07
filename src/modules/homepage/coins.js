import { NavLink } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import PropTypes from 'prop-types';

export default function Coins({ coin }) {
  return (
    <div className="col-12 col-md-4 col-lg-3 border rounded-2 p-2">
      <div className="row">
        <div className="col">
          <img className="img-fluid" src={coin.image?.large} alt={coin.name} />
        </div>
        <div className="d-flex flex-column align-items-end justify-content-between col">
          <NavLink to={`/details/${coin.id}`}>
            <BsArrowRightCircle className="text-white fs-3" />
          </NavLink>
          <span className="fw-bold text-white fs-6">{coin.name}</span>
        </div>
      </div>
    </div>
  );
}

Coins.propTypes = {
  coin: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};
