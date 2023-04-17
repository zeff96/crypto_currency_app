import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  getCoinsAsyns,
  selectCoins,
  selectStatus,
  selectError,
} from "../../redux/coins/coinsSlice";
import { useEffect } from "react";
import Detail from "./Detail";
import { useParams } from "react-router-dom";

export default function Details() {
  const dispatch = useAppDispatch();

  const coins = useAppSelector(selectCoins);
  const error = useAppSelector(selectError);
  const status = useAppSelector(selectStatus);

  useEffect(() => {
    dispatch(getCoinsAsyns());
  }, [dispatch]);

  const { id } = useParams();

  const coin = coins.find((item) => item.id === id);

  return (
    <div className="container">
      {status === "Loading" && <h2>Loading</h2>}
      {error && <h2>{error.message}</h2>}
      {coin && <Detail item={coin} key={coin.id} />}
    </div>
  );
}
