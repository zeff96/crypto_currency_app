import { allCoins } from "../../utilis/allCoins";
import bitcoin from "../../asset/bitcoin.svg";
import Currency from "./Currency";

export default function Currencies() {
  const listCategories = allCoins.map((coin) => (
    <Currency key={coin.id} coin={coin} />
  ));

  return (
    <div className="container my-5 ">
      <div className="d-flex align-items-center">
        <div style={{ maxWidth: "15rem" }}>
          <img className="img-fluid" src={bitcoin} alt={bitcoin} />
        </div>
        <h2 className="fs-1 fw-bolder">
          Crypto <br /> Currency <br /> Ratings
        </h2>
      </div>
      <div className="row">{listCategories}</div>
    </div>
  );
}
