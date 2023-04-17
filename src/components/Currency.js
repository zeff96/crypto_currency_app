import { NavLink } from "react-router-dom";

import { BsArrowRightCircle } from "react-icons/bs";

export default function Currency({ coin }) {
  return (
    <div className="card p-3 mb-3">
      <div className="row">
        <div className="col-6">
          <img className="img-fluid" src={coin.img} alt={coin.name} />
        </div>
        <div className="col-6 d-flex flex-column align-items-end justify-content-between">
          <NavLink to={`/details/${coin.id}`} className="text-white fs-2">
            <BsArrowRightCircle />
          </NavLink>
          <h2>{coin.name}</h2>
        </div>
      </div>
    </div>
  );
}
