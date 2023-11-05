import apiSlice from '../apiSlice/apiSlice';

const coinsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCoins: builder.query({
      query: () => '/',
    }),
  }),
});

const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCoinsAsync.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getCoinsAsync.fulfilled, (state, action) => {
        const coins = action.payload.map((coin) => {
          const { id, name, image } = coin;
          const { large = null } = image || {};
          return { id, name, image: { large } };
        });

        return {
          ...state,
          coins,
          status: 'completed',
          error: null,
        };
      })
      .addCase(getCoinsAsync.rejected, (state, action) => ({
        ...state,
        status: 'rejected',
        error: action.error,
      }));
  },
});


export const {useGetCoinsQuery} = coinsApiSlice