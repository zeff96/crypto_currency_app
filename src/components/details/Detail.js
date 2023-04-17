import { BsArrowRightCircle } from "react-icons/bs";

export default function Detail({ item }) {
  return (
    <div className="mt-3">
      <div>
        <h2 className="text-center mb-3">Crypto Currency Data</h2>
      </div>
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
          <span>{parseFloat(item.supply).toFixed(2)}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>MaxSupply</span>
          <span>{parseFloat(item.maxSupply).toFixed(4)}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>MarketCapUsd</span>
          <span>{parseFloat(item.marketCapUsd).toFixed(4)}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>VolumeUsd24Hr</span>
          <span>{parseFloat(item.volumeUsd24Hr).toFixed(4)}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>PriceUsd</span>
          <span>{parseFloat(item.priceUsd).toFixed(4)}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>ChangePercent24Hr</span>
          <span>{parseFloat(item.changePercent24Hr).toFixed(4)}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Vwap24Hr</span>
          <span>{parseFloat(item.vwap24Hr).toFixed(4)}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Explorer</span>
          <a href={item.explorer} target="_blank" rel="noopener noreferrer">
            <BsArrowRightCircle />
          </a>
        </li>
      </ul>
    </div>
  );
}
