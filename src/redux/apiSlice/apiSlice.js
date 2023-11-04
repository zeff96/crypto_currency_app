import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coingecko.com/api/v3/coins/' }),
  endpoints: () => ({}),
});

export default apiSlice;
