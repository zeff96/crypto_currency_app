import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getAllCoins from "../../api/getData";

const initialState = {
  coins: [],
  status: "idle",
  error: null,
};

export const getCoinsAsyns = createAsyncThunk(
  "coins/getCoinsAsyns",
  async () => {
    const coins = await getAllCoins();
    return coins;
  }
);

const coinsSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    showDetails: (state, action) => ({
      ...state,
      coins: state.coins.filter((item) => item.id === action.payload),
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCoinsAsyns.pending, (state) => ({
        ...state,
        status: "Loading",
      }))
      .addCase(getCoinsAsyns.fulfilled, (state, action) => ({
        ...state,
        coins: action.payload,
        status: "completed",
      }))
      .addCase(getCoinsAsyns.rejected, (state, action) => ({
        ...state,
        status: "rejected",
        error: action.error,
      }));
  },
});

export const selectCoins = (state) => state.coins.coins;
export const selectStatus = (state) => state.coins.status;
export const selectError = (state) => state.coins.error;

export const { showDetails } = coinsSlice.actions;
export default coinsSlice.reducer;
