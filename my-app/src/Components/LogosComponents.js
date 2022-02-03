import React from "react";
import Logo from "../svgComponents/logo";
import { ReactComponent as Logo2 } from "../logo.svg";
import { ReactComponent as Kalendari } from "../kalendari.svg";
import styled from "styled-components";
const Conteiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
const LogosComponents = () => {
  return (
    <Conteiner>
      <Logo radius={50} />
      <Logo2 />
      <Kalendari />
    </Conteiner>
  );
};

export default LogosComponents;
