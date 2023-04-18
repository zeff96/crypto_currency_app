import store from "../redux/store";
import { getCoinsAsyns } from "../redux/coins/coinsSlice";

describe("store", () => {
  test("empty initialstate", () => {
    const initialState = store.getState().coins;
    expect(initialState).toEqual({
      coins: [],
      status: "idle",
      error: null,
    });
  });

  test("loading state", () => {
    store.dispatch(getCoinsAsyns());
    const loadingState = store.getState().coins.status;
    expect(loadingState).toBe("Loading");
  });

  test("state changes", () => {
    const newCoins = [
      { id: 1, name: "Bitcoin" },
      { id: 2, name: "Ethereum" },
    ];
    store.dispatch(getCoinsAsyns());
    store.dispatch({
      type: "coins/getCoinsAsyns/fulfilled",
      payload: newCoins,
    });
    const newStatus = store.getState().coins;
    expect(newStatus).toEqual({
      coins: newCoins,
      status: "completed",
      error: null,
    });
  });
});
