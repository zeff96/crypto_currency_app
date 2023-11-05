import PropTypes from 'prop-types';

export default function Details({ detail }) {
  return (
    <ul className="list-group">
      <li className="list-group-item d-flex justify-content-between">
        <span>Id</span>
        <span>{detail.id}</span>
      </li>
      <li className="list-group-item d-flex justify-content-between">
        <span>Symbol</span>
        <span>{detail.symbol}</span>
      </li>
      <li className="list-group-item d-flex justify-content-between">
        <span>Name</span>
        <span>{detail.name}</span>
      </li>
      <li className="list-group-item d-flex justify-content-between">
        <span>Current Price</span>
        <span>{detail.marketData?.currentPrice}</span>
      </li>
      <li className="list-group-item d-flex justify-content-between">
        <span>Market Cap</span>
        <span>{detail.marketData?.marketCap}</span>
      </li>
      <li className="list-group-item d-flex justify-content-between">
        <span>Market Cap Rank</span>
        <span>{detail.marketData?.marketCapRank}</span>
      </li>
      <li className="list-group-item d-flex justify-content-between">
        <span>Data High</span>
        <span>{detail.marketData?.dataHigh}</span>
      </li>
      <li className="list-group-item d-flex justify-content-between">
        <span>Data Low</span>
        <span>{detail.marketData?.dataLow}</span>
      </li>
      <li className="list-group-item d-flex justify-content-between">
        <span>Circulating Supply</span>
        <span>{detail.marketData?.circulatingSupply}</span>
      </li>
      <li className="list-group-item d-flex justify-content-between">
        <span>Total Supply</span>
        <span>{detail.marketData?.totalSupply}</span>
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
