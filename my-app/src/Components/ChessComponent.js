import React, { useState } from "react";
import styled from "styled-components";
import { baseTheme } from "../Theme";
const GridConteiner = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(8, ${(props) => props.size}px);
  grid-template-rows: repeat(8, ${(props) => props.size}px);
`;
const Box = styled.div`
  display: grid;
  place-items: center;
  background-color: ${({ primary }) =>
    primary ? baseTheme.colors.boxBg2 : baseTheme.colors.boxBg1};
  @media (max-width: 1024px) {
    place-items: end;
  }
`;

const ChessContainer = styled.div`
  margin-top: 15px;
  border: 3px solid ${({ theme }) => theme.border};
  @media (max-height: 500px) {
    margin-top: 0;
  }
`;
const ChessDesk = () => {
  const [size, setSize] = useState(45);

  function isVertical() {
    let vertical = window.innerHeight > window.innerWidth;
    let orintationResult = vertical ? window.innerWidth : window.innerHeight;
    setSize(orintationResult / 10);
  }

  window.addEventListener("resize", isVertical);

  let result = [];
  let boxKey = 1;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (i % 2 === j % 2) {
        result.push(<Box key={boxKey} />);
      } else {
        result.push(<Box key={boxKey} primary />);
      }
      boxKey++;
    }
  }
  return <GridConteiner size={size}>{result}</GridConteiner>;
};

const ChessComponent = () => {
  return (
    <ChessContainer>
      <ChessDesk />
    </ChessContainer>
  );
};

export default ChessComponent;
