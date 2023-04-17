import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  getCoinsAsyns,
  selectCoins,
  selectStatus,
  selectError,
} from "../../redux/coins/coinsSlice";
import { useEffect } from "react";
import Detail from "./Detail";

export default function Details() {
  const dispatch = useAppDispatch();

  const coins = useAppSelector(selectCoins);
  const error = useAppSelector(selectError);
  const status = useAppSelector(selectStatus);

  useEffect(() => {
    dispatch(getCoinsAsyns());
  }, [dispatch]);

  const listsDetails = coins.map((item) => (
    <div key={item.id}>
      <Detail item={item} />
    </div>
  ));

  return (
    <div>
      {status === "Loading" && <h2>Loading</h2>}
      {error && <h2>{error.message}</h2>}
      {coins && <div>{listsDetails}</div>}
    </div>
  );
}
