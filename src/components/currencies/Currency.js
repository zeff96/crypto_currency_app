import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import { BsArrowRightCircle } from "react-icons/bs";
import { showDetails } from "../../redux/coins/coinsSlice";

export default function Currency({ coin }) {
  const dispatch = useAppDispatch();
  return (
    <div className="card p-2 mb-3 col-12 col-sm-3">
      <div className="d-flex" style={{ height: "10rem" }}>
        <div className="col col-sm-4">
          <img className="img-fluid" src={coin.img} alt={coin.name} />
        </div>
        <div className="col d-flex flex-column align-items-end justify-content-between">
          <Link to={`/details/${coin.id}`} className="text-white fs-2">
            <BsArrowRightCircle
              onClick={() => dispatch(showDetails(coin.id))}
            />
          </Link>
          <p className="f-4">{coin.name}</p>
        </div>
      </div>
    </div>
  );
}
