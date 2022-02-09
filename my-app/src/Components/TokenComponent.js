import React, { useState, useEffect } from "react";
import { getToken } from "../getPlayerInfo/getToken";
import { getLogin } from "../getPlayerInfo/getLogin";
import { joinFunc } from "../getPlayerInfo/joinFunc";
import { getStatistic } from "../getPlayerInfo/getStatistic";
import {
  getLoginUrl,
  getTokenUrl,
  getStatisticUrl,
  joinFuncUrl,
  dataToken,
  dataLogin,
  dataStat,
  dataJoinFunc,
} from "../config/index";
import { useDispatch } from "react-redux";
import { getTokenAC } from "../store/getToken/actions";
import { getLoginAC } from "../store/getLogin/actions";
import { getStatisticAC } from "../store/getStatistic/actions";

const TokenComponent = () => {
  const [result, setResult] = useState("");
  const [playerId, setPlayerId] = useState(null);
  const [stat, setStat] = useState({});
  const [playerInf, setPlayerInf] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    let data = dataLogin(result);

    getLogin(setPlayerId, setPlayerInf, getLoginUrl, data);
  }, [result]);
  useEffect(() => {
    dispatch(getTokenAC(result));
  }, [dispatch, result]);
  useEffect(() => {
    dispatch(getLoginAC(playerInf));
  }, [dispatch, playerInf]);
  useEffect(() => {
    dispatch(getStatisticAC(stat));
  }, [dispatch, stat]);
  useEffect(() => {
    getToken(setResult, getTokenUrl, dataToken);
  }, []);

  const handleClick = () => {
    let dataStatistics = dataStat(result);
    joinFunc(stat, joinFuncUrl, dataJoinFunc(result, playerId));
    getStatistic(setStat, getStatisticUrl, dataStatistics);
  };
  return (
    <div>
      <button onClick={handleClick}>Get Token</button>
    </div>
  );
};

export default TokenComponent;
