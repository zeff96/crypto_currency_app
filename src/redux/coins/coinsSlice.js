import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  coins: [],
};

const coinsSlice = createSlice({
  name: "coins",
  initialState,
  extraReducers: (builder) => {
    builder.addCase();
  },
});

export default coinsSlice.reducer;
