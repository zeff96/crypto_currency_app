import { NavLink } from "react-router-dom";

import { BsArrowRightCircle } from "react-icons/bs";

export default function Currency({ coin }) {
  return (
    <div>
      <div>
        <img src={coin.img} alt={coin.name} />
      </div>
      <div>
        <NavLink to={`/details/${coin.id}`}>
          <BsArrowRightCircle />
        </NavLink>
        <h2>{coin.name}</h2>
      </div>
    </div>
  );
}
