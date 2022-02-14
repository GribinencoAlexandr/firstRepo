// @flow
import "./App.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getToken } from "./Services/tokenThunks";
import TokenComponent from "./Components/TokenComponent";
import { getTokenUrl, dataToken } from "./config/index";
import { getTokenAC } from "./store/getToken/actions";

function App() {
  return (
    <>
      <TokenComponent />
    </>
  );
}

export default App;
