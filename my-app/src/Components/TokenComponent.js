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

const TokenComponent = () => {
  const [result, setResult] = useState("");
  const [playerId, setPlayerId] = useState(null);
  const [stat, setStat] = useState({});
  useEffect(() => {
    console.log(result.substr(0, 5));
    getLogin(setPlayerId, getLoginUrl, dataLogin(result));
    getStatistic(setStat, getStatisticUrl, dataStat(result));
  }, [result]);

  useEffect(() => {
    getToken(setResult, getTokenUrl, dataToken);
  }, []);
  return (
    <div>
      <button
        onClick={() =>
          joinFunc(stat, joinFuncUrl, dataJoinFunc(result, playerId))
        }
      >
        Get Token
      </button>
    </div>
  );
};

export default TokenComponent;
