import { NavLink } from "react-router-dom";

import { BsArrowRightCircle } from "react-icons/bs";

export default function Currency({ coin }) {
  return (
    <div className="card text-bg-danger p-2 mb-3">
      <div className="row">
        <div className="col-6">
          <img className="img-fluid" src={coin.img} alt={coin.name} />
        </div>
        <div className="col-6">
          <NavLink to={`/details/${coin.id}`}>
            <BsArrowRightCircle />
          </NavLink>
          <h2>{coin.name}</h2>
        </div>
      </div>
    </div>
  );
}
