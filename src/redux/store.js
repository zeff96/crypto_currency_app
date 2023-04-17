import { configureStore } from "@reduxjs/toolkit";
import coinReducer from "./coins/coinsSlice";

export default configureStore({
  reducer: {
    coins: coinReducer,
  },
});
