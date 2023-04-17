import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  getCoinsAsyns,
  selectCoins,
  selectStatus,
  selectError,
} from "../../redux/coins/coinsSlice";
import { useEffect } from "react";

export default function Details() {
  const dispatch = useAppDispatch();

  const coins = useAppSelector(selectCoins);
  const error = useAppSelector(selectError);
  const status = useAppSelector(selectStatus);

  useEffect(() => {
    dispatch(getCoinsAsyns());
  }, [dispatch]);
}
