/* eslint-disable */
import apiSlice from '../apiSlice/apiSlice';

const coinsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCoins: builder.query({
      query: () => '/',
      transformResponse: (data) => {
        const coins = data.map((coin) => {
          const {id, name, image} = coin
          const {large = null} = image || {}
          return {id, name, image: {large}}
        })
        return coins
      }
    }),
  }),
});
export const { useGetCoinsQuery } = coinsApiSlice;
