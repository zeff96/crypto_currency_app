import { combineReducers, configureStore } from '@reduxjs/toolkit';
import coinsReducer from './coins/coinsSlice';
import detailsReducer from './details/detailsSlice';

const rootReducer = combineReducers({
  coins: coinsReducer,
  details: detailsReducer,
});

export default function setupStore(preloadedState) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}
