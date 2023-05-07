import PropTypes from 'prop-types';

export default function Details({ detail }) {
  return (
    <ul className="list-group">
      <li className="list-group-item d-flex justify-content-between text-white fs-5">
        <span>Id</span>
        <span>{detail.id}</span>
      </li>
      <li className="list-group-item d-flex justify-content-between text-white fs-5">
        <span>Symbol</span>
        <span>{detail.symbol}</span>
      </li>
      <li className="list-group-item d-flex justify-content-between text-white fs-5">
        <span>Name</span>
        <span>{detail.name}</span>
      </li>
      <li className="list-group-item d-flex justify-content-between text-white fs-5">
        <span>Current Price</span>
        <span>{detail.marketData?.current_price?.usd}</span>
      </li>
      <li className="list-group-item d-flex justify-content-between text-white fs-5">
        <span>Market Cap</span>
        <span>{detail.marketData?.market_cap?.usd}</span>
      </li>
      <li className="list-group-item d-flex justify-content-between text-white fs-5">
        <span>Market Cap Rank</span>
        <span>{detail.marketData?.market_cap_rank}</span>
      </li>
      <li className="list-group-item d-flex justify-content-between text-white fs-5">
        <span>Data High</span>
        <span>{detail.marketData?.high_24?.usd}</span>
      </li>
      <li className="list-group-item d-flex justify-content-between text-white fs-5">
        <span>Data Low</span>
        <span>{detail.marketData?.low_24h?.usd}</span>
      </li>
      <li className="list-group-item d-flex justify-content-between text-white fs-5">
        <span>Circulating Supply</span>
        <span>{detail.marketData?.circulating_supply}</span>
      </li>
      <li className="list-group-item d-flex justify-content-between text-white fs-5">
        <span>Total Supply</span>
        <span>{detail.marketData?.total_supply}</span>
      </li>
    </ul>
  );
}

Details.propTypes = {
  detail: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    symbol: PropTypes.string,
    marketData: PropTypes.shape({
      current_price: PropTypes.string,
      market_cap: PropTypes.string,
      market_cap_rank: PropTypes.string,
      high_24: PropTypes.string,
      low_24h: PropTypes.string,
      circulating_supply: PropTypes.string,
      total_supply: PropTypes.string,
    }),
  }).isRequired,
};
