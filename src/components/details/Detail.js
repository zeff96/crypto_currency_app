import { BsArrowRightCircle } from "react-icons/bs";

export default function Detail({ item }) {
  return (
    <ul className="list-unstyled list-group mb-3">
      <li className="list-group-item d-flex justify-content-between">
        <span>Rank</span>
        <span>{item.rank}</span>
      </li>
      <li className="list-group-item d-flex justify-content-between">
        <span>Symbol</span>
        <span>{item.symbol}</span>
      </li>
      <li className="list-group-item d-flex justify-content-between">
        <span>Name</span>
        <span>{item.name}</span>
      </li>
      <li className="list-group-item d-flex justify-content-between">
        <span>Supply</span>
        <span>{item.supply}</span>
      </li>
      <li className="list-group-item d-flex justify-content-between">
        <span>MaxSupply</span>
        <span>{item.maxSupply}</span>
      </li>
      <li className="list-group-item d-flex justify-content-between">
        <span>MarketCapUsd</span>
        <span>{item.marketCapUsd}</span>
      </li>
      <li className="list-group-item d-flex justify-content-between">
        <span>VolumeUsd24Hr</span>
        <span>{item.volumeUsd24Hr}</span>
      </li>
      <li className="list-group-item d-flex justify-content-between">
        <span>PriceUsd</span>
        <span>{item.priceUsd}</span>
      </li>
      <li className="list-group-item d-flex justify-content-between">
        <span>ChangePercent24Hr</span>
        <span>{item.changePercent24Hr}</span>
      </li>
      <li className="list-group-item d-flex justify-content-between">
        <span>Vwap24Hr</span>
        <span>{item.vwap24Hr}</span>
      </li>
      <li className="list-group-item d-flex justify-content-between">
        <span>Explorer</span>
        <a href={item.explorer} target="_blank" rel="noopener noreferrer">
          <BsArrowRightCircle />
        </a>
      </li>
    </ul>
  );
}
