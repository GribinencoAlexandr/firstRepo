// @flow
import "./App.css";
import React from "react";

import TokenComponent from "./Components/TokenComponent";
type Props = {
  bg: string,
  primary: boolean,
  weight: number,
};

function App(props: Props) {
  return (
    <>
      <TokenComponent />
    </>
  );
}

export default App;
