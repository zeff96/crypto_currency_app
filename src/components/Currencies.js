import { allCoins } from "../utilis/allCoins";
import Currency from "./Currency";

export default function Currencies() {
  const listCategories = allCoins.map((coin) => (
    <div key={coin.id}>
      <Currency coin={coin} />
    </div>
  ));
}
