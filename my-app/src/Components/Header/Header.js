import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { numberColors } from "../../config";
import Timer from "./TimerComponent/Timer";
const HeaderWrapper = styled.div`
  width: 100%;
  height: 40px;
  background: radial-gradient(
    circle at 50% 50%,
    ${(props) => props.bkgColor} 0%,
    #191c22 80%
  );
`;
const HeaderContainer = styled.div`
  color: #ffffff;
  margin: 0 10px;
  display: flex;
  justify-content: space-between;
  letter-spacing: 0.12px;
  font-size: 12px;
`;
const YourBet = styled.div`
  display: flex;
  font-size: 13px;
  font-weight: 600;
`;
const GameStat1 = styled.div``;
const GameStat2 = styled.div`
  width: 133px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const GameStatItem1 = styled.div``;
const GameStatItem2 = styled.div`
  color: #b3b3b3;
`;
const Header = () => {
  const { roundId, gameName, currentBalance, roundResult, roundStatus } =
    useSelector((state) => ({
      roundId: state.playerInfo.roundId,
      gameName: state.login.gameName,
      currentBalance: state.playerInfo.currentBalance,
      roundResult: state.playerInfo.roundResult,
      roundStatus: state.playerInfo.roundStatus,
    }));

  const statusData = {
    1: { name: "PLACE YOUR BETS", color: "#00b233" },
    2: { name: "LAST BETS", color: "#B25F00" },
    3: { name: "NO MORE BETS", color: "#646464" },
    5: {
      name: `${roundResult} ${
        numberColors[roundResult] === "#E6E6E6" ? "BLACK" : "RED"
      }`,
      color: `${numberColors[roundResult] === "#E6E6E6" ? "black" : "#FF3333"}`,
    },
    0: {
      name: `${roundResult} ${
        numberColors[roundResult] === "#E6E6E6" ? "BLACK" : "RED"
      }`,
      color: `${numberColors[roundResult] === "#E6E6E6" ? "black" : "#FF3333"}`,
    },
  };
  return (
    <HeaderWrapper bkgColor={statusData[roundStatus].color}>
      <HeaderContainer>
        <GameStat1>
          <GameStatItem1>Bet: € 0</GameStatItem1>
          <GameStatItem2>{gameName} 1–10000 IDR</GameStatItem2>
        </GameStat1>
        <YourBet>
          {statusData[roundStatus].name} {""}
          {roundStatus > 1 ? "" : roundStatus === 0 ? "" : <Timer />}
        </YourBet>
        <GameStat2>
          <GameStatItem1>#{roundId}</GameStatItem1>
          <GameStatItem2>{Math.round(currentBalance)} IDR</GameStatItem2>
        </GameStat2>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
