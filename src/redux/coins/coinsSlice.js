import apiSlice from '../apiSlice/apiSlice';

const coinsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCoins: builder.query({
      query: () => '/',
      transformResponse: (data) => {
        const coins = data.map((coin) => ({
          id: coin?.id,
          name: coin?.name,
          image: coin?.image?.large,
          symbol: coin?.symbol,
          markertData: {
            currentPrice: coin?.market_data?.current_price?.usd,
            marketCap: coin?.market_data?.market_cap?.usd,
            marketCapRank: coin?.market_data?.market_cap_rank,
            dataHigh: coin?.market_data?.high_24?.usd,
            dataLow: coin?.market_data?.low_24h?.usd,
            circulatingSupply: coin?.market_data?.circulating_supply,
            totalSupply: coin?.market_data?.total_supply,
          },
        }));
        return coins.splice(0, 15);
      },
    }),
  }),
});
const { useGetCoinsQuery } = coinsApiSlice;

export default useGetCoinsQuery;
