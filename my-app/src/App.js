// @flow
import "./App.css";
import React from "react";

import TokenComponent from "./Components/TokenComponent";
import { useSelector } from "react-redux";
import Loader from "./Components/LoaderComponent/Loader";

function App() {
  const { appData } = useSelector((state) => ({
    appData: state.appData.loader,
  }));
  return <>{appData ? <Loader /> : <TokenComponent />}</>;
  // return <Loader />;
}

export default App;
