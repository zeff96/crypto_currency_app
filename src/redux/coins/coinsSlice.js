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
        }));
        return coins.splice(0, 15);
      },
    }),
    getCoin: builder.query({
      query: (id) => `/${id}`,
      transformResponse: (data) => ({
        id: data?.id,
        name: data?.name,
        image: data?.image?.large,
        symbol: data?.symbol,
        marketData: {
          currentPrice: data?.market_data?.current_price?.usd,
          marketCap: data?.market_data?.market_cap?.usd,
          marketCapRank: data?.market_data?.market_cap_rank,
          dataHigh: data?.market_data?.high_24h?.usd,
          dataLow: data?.market_data?.low_24h?.usd,
          circulatingSupply: data?.market_data?.circulating_supply,
          totalSupply: data?.market_data?.total_supply,
        },
      }),
    }),
  }),
});
export const { useGetCoinsQuery, useGetCoinQuery } = coinsApiSlice;
