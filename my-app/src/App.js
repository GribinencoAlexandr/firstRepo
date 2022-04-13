// @flow
import "./App.css";
import React from "react";

import TokenComponent from "./Components/TokenComponent";
import { useSelector } from "react-redux";
import Loader from "./Components/LoaderComponent/Loader";
import ResizeContextProvider from "./Contexts/ResizeContext";

function App() {
  const { appData } = useSelector((state) => ({
    appData: state.appData.loader,
  }));
  return (
    <ResizeContextProvider>
      {appData ? <Loader /> : <TokenComponent />}
    </ResizeContextProvider>
  );
  // return <Loader />;
}

export default App;
