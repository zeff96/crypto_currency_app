import { allCoins } from "../utilis/allCoins";
import Currency from "./Currency";

export default function Currencies() {
  const listCategories = allCoins.map((coin) => (
    <Currency key={coin.id} coin={coin} />
  ));

  return <div className="container my-5">{listCategories}</div>;
}
