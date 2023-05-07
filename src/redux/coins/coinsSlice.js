import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchData from '../../api/getData';

const initialState = {
  coins: [],
  status: 'idle',
  error: null,
};

export const getCoinsAsync = createAsyncThunk(
  'coins/getCoinsAsync',
  async () => {
    const data = await fetchData();
    return data.splice(0, 15);
  },
);

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

export const selectCoins = (state) => state.coins.coins;
export const selectStatus = (state) => state.coins.status;
export const selectError = (state) => state.coins.error;
export default coinsSlice.reducer;
