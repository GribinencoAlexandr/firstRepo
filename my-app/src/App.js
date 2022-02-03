// @flow
import "./App.css";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

import { baseTheme, lightTheme, darkTheme } from "./Theme";
import React, { useState } from "react";
import { themeToggler } from "./Helper";
import LogosComponents from "./Components/LogosComponents";
import ChessComponent from "./Components/ChessComponent";
import CountriesComponent from "./Components/CountriesComponent";

type Props = {
  bg: string,
  primary: boolean,
  weight: number,
};

const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Open-Sans, Helvetica, Sans-Serif;
}
`;

const Conteiner = styled.div`
  // background-color: ${baseTheme.colors.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const TxtBtn = styled.button.attrs((props) => ({
  type: "submit",
  size: (props.size || 4) + "px",
}))`
  position: absolute;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.primary};
  padding: ${({ size }) => size};
`;

function App(props: Props) {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Conteiner>
          <TxtBtn onClick={() => themeToggler(setTheme, theme)} size={10}>
            Hell1234
          </TxtBtn>
          <LogosComponents />
          <ChessComponent />
        </Conteiner>
        <CountriesComponent />
      </ThemeProvider>
    </>
  );
}

export default App;
