import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchData from '../../api/getData';

const initialState = {
  details: [],
  status: 'idle',
  error: null,
};

export const getDetailsAsync = createAsyncThunk(
  'details/getDetailsAsync',
  async () => {
    const data = await fetchData();
    return data;
  },
);

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getDetailsAsync.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getDetailsAsync.fulfilled, (state, action) => {
        const details = action.payload.map((detail) => ({
          id: detail.id,
          name: detail.name,
          symbol: detail.symbol,
          marketData: detail.market_data,
        }));

        return {
          ...state,
          details,
          status: 'completed',
          error: null,
        };
      })
      .addCase(getDetailsAsync.rejected, (state, action) => ({
        ...state,
        status: 'rejected',
        error: action.error,
      }));
  },
});

export const selectDetails = (state) => state.details.details;
export const selectStatus = (state) => state.details.status;
export const selectError = (state) => state.details.error;

export default detailsSlice.reducer;
