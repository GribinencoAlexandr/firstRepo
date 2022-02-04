import React, { useState, useEffect } from "react";
import { testFunc } from "../getPlayerInfo/getToken";
import { getLogin } from "../getPlayerInfo/getLogin";
import { joinFunc } from "../getPlayerInfo/joinFunc";
const TokenComponent = () => {
  const [result, setResult] = useState("");

  useEffect(() => {
    console.log(result.substr(0, 5));
    getLogin(result);
  }, [result]);

  useEffect(() => {
    testFunc(setResult);
  }, []);

  return (
    <div>
      <button onClick={() => joinFunc(result)}>Get Token</button>
    </div>
  );
};

export default TokenComponent;
