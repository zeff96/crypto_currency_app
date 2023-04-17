import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getAllCoins from "../../components/api/getData";

const initialState = {
  coins: [],
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
  extraReducers: (builder) => {
    builder.addCase();
  },
});

export default coinsSlice.reducer;
