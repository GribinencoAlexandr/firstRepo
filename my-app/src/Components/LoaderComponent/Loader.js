import React from "react";
import styled from "styled-components";
import LoadSVG from "../../svgComponents/loaderSVG.js";
const LoaderDiv = styled.div`
  width: 100%;
  height: 100vh;
  background: radial-gradient(
    at 50% 100%,
    rgb(2, 89, 73) 0%,
    rgb(2, 11, 38) 120%
  );
`;
const Loader = () => {
  return (
    <LoaderDiv>
      <LoadSVG />
    </LoaderDiv>
  );
};
export default Loader;
