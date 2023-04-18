import { configureStore } from '@reduxjs/toolkit';
import coinReducer from './coins/coinsSlice';

const store = configureStore({
  reducer: {
    coins: coinReducer,
  },
});

export default store;
