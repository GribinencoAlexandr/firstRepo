import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { ReactComponent as HotNumLogo } from "../svgComponents/HotNum.svg";
import { ReactComponent as ColdNumLogo } from "../svgComponents/ColdNum.svg";
import { ReactComponent as CloseButton } from "../svgComponents/Button.svg";
import { ReactComponent as MenuButton } from "../svgComponents/Menu.svg";
import { ReactComponent as LobbyIcon } from "../svgComponents/MenuIcons/LobbyIcon.svg";
import { ReactComponent as HistoryIcon } from "../svgComponents/MenuIcons/HistoryIcon.svg";
import { ReactComponent as SettingsIcon } from "../svgComponents/MenuIcons/SettingsIcon.svg";
import { ReactComponent as GameRulesIcon } from "../svgComponents/MenuIcons/GameRulesIcon.svg";
import { ReactComponent as LimitsIcon } from "../svgComponents/MenuIcons/LimitsIcon.svg";
import { ReactComponent as InfoIcon } from "../svgComponents/MenuIcons/InfoIcon.svg";
import { ReactComponent as StatisticIcon } from "../svgComponents/MenuIcons/StatisticIcon.svg";
import { ReactComponent as FavoriteIcon } from "../svgComponents/MenuIcons/FavoriteIcon.svg";
import { ReactComponent as UndoButton } from "../svgComponents/undoButton.svg";
import { ReactComponent as ConfirmButton } from "../svgComponents/confirnButton.svg";
import "./TokenComponent.css";
import {
  colorsData1,
  namesData1,
  namesData2,
  colorsData2,
  namesData3,
  colorsData3,
  numberColors,
  limitsTypes,
  BetPointsEnum,
} from "../config";

import Slider from "../svgComponents/slider";
import Roullete from "../svgComponents/roullete.js";
import Header from "./Header/Header";
import { statTabVisibilityAC } from "../store/getStatistic/actions";
import {
  gameRuleTabAC,
  infoTabAC,
  limitsTabAC,
  menuTabAC,
} from "../store/appData/actions";
import GameRules from "./GameRulesComponent/GameRules";
import Info from "./InfoComponent/Info";
import { allBetsAC, undoBetAC } from "../store/gameSpecific/actions";
import BettingChip from "../svgComponents/bettingChip";
import ChoosenChip from "../svgComponents/choosenChip";
import { placeBetAC } from "../store/placeBet/actions";
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: rgba(25, 28, 34, 1);
`;
const MainContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  position: relative;
  height: calc(100% - 40px);
`;
const MenuElementsContainer = styled.div`
  width: 94%;
  height: 100%;
  position: absolute;
  background: linear-gradient(
    45deg,
    rgba(62, 59, 78, 0.95) 0%,
    rgba(60, 66, 80, 0.95) 50%,
    rgba(62, 59, 78, 0.95) 100%
  );
  transition: transform 500ms ease 0s;
`;
const MenuElementsIconContainer = styled.div`
  width: 20px;
  padding: 2px;
  display: flex;
  margin-right: 10px;
`;
const MenuElementsSpan = styled.span`
  position: relative;
  font-size: 14px;
  text-transform: uppercase;
  line-height: normal;
`;
const GameRulesContainer = styled(MenuElementsContainer)`
  transform: translateX(
    ${({ gameRuleClose }) => (gameRuleClose ? "0" : "100%")}
  );
`;
const MenuElementsTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 100%;
  text-align: center;
  color: rgb(230, 230, 229);
  background-color: rgba(0, 0, 0, 0.3);
`;

const MenuElementsContent = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 40px);
`;
const ContentScroll = styled.div`
  position: relative;
  scroll-behavior: smooth;
  overscroll-behavior: contain;
  overflow: hidden scroll;
  height: 100%;
`;

const Container = styled.div`
  width: calc(100% - 60px);
  height: 91vh;
  background: rgba(48, 49, 67, 0.95);
  display: flex;
  transform: translateX(${({ stat }) => (stat ? "0" : "100%")});
  transition: transform 500ms ease 0s;
`;
const HotNumConteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 11px;
`;

const ColdNumConteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 11px;
`;
const StatBar = styled.div`
  position: relative;
  height: 30px;
  background-color: #0d0d0d80;
  opacity: 1;
  color: antiquewhite;
  border: 1px solid #ffffff4d;
  border-radius: 6px;
  font-size: 10px;
  display: flex;
  margin: 11px;
  overflow: hidden;
`;
const HotNumBar = styled.div`
  position: relative;
  height: 30px;
  width: 95%;
  background-color: #0d0d0d80;
  border: 1px solid #ff33334d;
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  align-items: center;
`;
const ColdNumBar = styled.div`
  position: relative;
  height: 30px;
  width: 95%;
  background-color: #0d0d0d80;
  border: 1px solid #009ad44d;
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  align-items: center;
`;
const HotNumTitle = styled.span`
  color: #ff3333;
  font-size: 12px;
  line-height: 14.4px;
  letter-spacing: 1.2px;
  margin-bottom: 10px;
`;
const ColdNumTitle = styled.span`
  color: #009ad4;
  font-size: 12px;
  line-height: 14.4px;
  letter-spacing: 1.2px;
  margin-bottom: 10px;
`;
const HotNumItem = styled.div`
  color: ${(props) => props.color};
  width: 48px;
  border-left: 1px solid #ff33334d;
  text-align: center;
`;
const ColdNumItem = styled.div`
  color: ${(props) => props.color};
  width: 48px;
  border-left: 1px solid #009ad44d;
  text-align: center;
`;
const HotNumbers = styled.div`
  display: flex;
`;
const IconContainer = styled.div`
  width: 46px;
  height: 30px;
  background-color: #ff3333;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IconContainer2 = styled.div`
  width: 46px;
  height: 30px;
  background-color: #009ad4;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StatBarConteiner = styled.div`
  width: 100%;
  display: flex;
  height: 14px;
  position: absolute;
  top: 14px;
`;
const BarItems = styled.div`
  width: 25%;
`;
const BarItemsFirst = styled(BarItems)`
  border-bottom: 9px solid ${(props) => props.color};
  width: ${(props) => props.width}%;
  transition: width 1s;
`;

const BarNames = styled.div`
  width: 100%;
  height: 19px;
  align-items: center;
  margin-left: 5px;
  display: flex;
`;
const ProgressBar = styled.div`
  height: 11px;
  background-color: ${(props) => props.color};
  width: ${(props) => props.value}%;
  transition: width 1s;
`;

const SpanNameFirst = styled.span`
  color: ${(props) => props.color};
`;
const SpanNameFirst2 = styled.div`
  padding-right: 90px;
  color: ${(props) => props.color};
`;
const NumRounds = styled.div`
  color: #e6e6e6;
  font-size: 14px;
  line-height: 14.4px;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
const StatSVG = styled.svg`
  width: 100%;
  padding: 20%;
`;
const MenuButtonContainer = styled.div`
  display: ${({ menuClose }) => (menuClose ? "none" : "block")};
  position: absolute;
  bottom: 21px;
  right: 30px;
  width: 46px;
  height: 46px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  color: rgb(255, 255, 255);
  background: rgb(26, 26, 26);
`;
const MenuMainContainer = styled.div`
  height: 100%;
  transform: translateX(${({ menuClose }) => (menuClose ? "0" : "100")}%);
  width: 35%;
  background: linear-gradient(
    45deg,
    rgb(62, 59, 78) 0%,
    rgb(60, 66, 80) 50%,
    rgb(62, 59, 78) 100%
  );
  box-shadow: rgb(0 0 0 / 50%) 2px 0px 7px;
  position: absolute;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: start;
  justify-content: flex-start;
  padding-top: 8px;
  transition: transform 500ms ease 0s;
`;
const MenuItem = styled.button`
  display: flex;
  flex-flow: column nowrap;
  text-decoration: none;
  outline: none;
  font-size: 14px;
  width: 100%;
  padding: 9px 9px 9px 20px;
  color: rgb(230, 230, 230);
  background: transparent;
  border-top: none;
  border-right: none;
  border-left: none;
  border-image: initial;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;
const CloseButtonContainer = styled.div`
  display: ${({
    closeStat,
    menuClose,
    closeGameRule,
    closeInfo,
    limitsClose,
  }) =>
    closeStat || menuClose || closeGameRule || closeInfo || limitsClose
      ? "block"
      : "none"};
  position: absolute;
  bottom: 20px;
  right: 30px;
`;
const MenuItemConteiner = styled.div`
  display: flex;
`;
const MenuItemIcon = styled.div`
  width: 25px;
  margin-right: 18px;
`;
const MenuItemTitle = styled.div`
  align-items: center;
  vertical-align: middle;
  font-weight: 500;
  font-size: 14px;
`;

const InfoMainContainer = styled(MenuElementsContainer)`
  transform: translateX(${({ infoClose }) => (infoClose ? "0" : "100%")});
`;
const LimitsMainContainer = styled(MenuElementsContainer)`
  transform: translateX(${({ limitsClose }) => (limitsClose ? "0" : "100%")});
`;
const LimitsContainer = styled.div`
  height: 100%;
  table {
    height: 100%;
    width: 100%;
    font-size: 14px;
    border-spacing: 0px;
  }
  tr:nth-child(2n) {
    background-color: rgba(0, 0, 0, 0.3);
  }
  td:first-of-type {
    width: 22%;
    color: rgb(179, 179, 179);
    border-right: 1px solid rgb(76, 76, 76);
  }
  td {
    width: 78%;
    padding: 8px 20px;
    color: rgb(230, 230, 230);
    height: 30px;
    line-height: 0;
  }
  th {
    height: 20px;
  }
`;
const Tr = styled.tr`
  // display: ${({ hidden2 }) => (hidden2 === -1 ? "none" : "flex!important")};
`;
const PastResultBar = styled.div`
  height: 244px;
  width: 30px;
  background: #000000b3;
  border: 1px solid #ffffff4d;
  border-radius: 15px;
  margin-top: 11px;
  margin-right: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PastResultBarItems = styled.div`
  font-size: 16px;
  padding: 3px;
  color: ${({ color }) => color};
  :first-of-type {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 28px;
    width: 100%;
    background: ${({ color }) =>
      color === "#FF3333"
        ? "rgb(255, 51, 51)"
        : color === "#00B233"
        ? "#00B233"
        : "rgba(255, 255, 255, 0.3)"};
    color: rgb(255, 255, 255);
    top: 0px;
    border-radius: 50%;
`;

const BettingAria = styled.div`
  position: absolute;
  display: flex;
  left: 100px;
  top: 51px;
`;
const BlackBlock = styled.div`
  background: black;
  height: 65px;
  width: 50px;
  border: 1px solid white;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 8px;
  font-weight: 600;
  pointer-events: ${({ disabled }) => (disabled ? "none" : "unset")};
  :nth-child(2n) {
    background: red;
  }
`;
const ChooseBetContainer = styled.div`
  position: absolute;
  width: 140px;
  height: 60px;
  bottom: 30px;
  right: 40%;
  color: white;
`;

const AllChips = styled.div`
  display: flex;
  justify-content: space-between;
`;

const UndoButtonConteiner = styled.div`
  position: absolute;
  bottom: 21px;
  left: 220px;
  width: 46px;
  display: flex;
  height: 46px;
  box-sizing: border-box;
  padding: 0;
  border-radius: 50%;
  vertical-align: top;
  margin: 0 auto;
  color: #fff;
  justify-content: center;
  align-items: center;
  border: 1px solid hsla(0, 0%, 100%, 0.3);
  svg {
    width: 32px;
    height: 32px;
    transform: rotate(345deg);
  }
`;
const ConfirmButtonContainer = styled.div`
  width: 46px;
  position: absolute;
  bottom: 22px;
  right: 228px;
  pointer-events: ${({ disabled }) => (disabled ? "none" : "unset")};
  circle {
    fill: ${({ disabled }) => (disabled ? "dimgrey" : "rgb(109, 193, 128)")};
  }
`;
const TokenComponent = () => {
  const {
    data1,
    data2,
    data3,
    hotNumData,
    coldNumData,
    roundsNumber,
    statTab,
    menuTab,
    gameRuleTab,
    infoTab,
    limitsTab,
    limits,
    chipsRangeColor,
    stats,
    bets,
    totalBetsAmount,

    chip,

    preBetsAllowed,
  } = useSelector((state) => ({
    data1: state.statistic.data1,
    data2: state.statistic.data2,
    data3: state.statistic.data3,
    hotNumData: state.statistic.hotNumData,
    coldNumData: state.statistic.coldNumData,
    roundsNumber: state.statistic.roundsNumber,
    statTab: state.statistic.statTab,
    menuTab: state.appData.menuTab,
    infoTab: state.appData.infoTab,
    limitsTab: state.appData.limitsTab,
    gameRuleTab: state.appData.gameRuleTab,
    limits: state.login.limits,
    chipsRangeColor: state.login.chipsRangeColor,
    stats: state.playerInfo.stats,
    bets: state.gameSpecific.allBets,
    totalBetsAmount: state.gameSpecific.totalBetsAmount,
    betsSequence: state.gameSpecific.betsSequence,
    chip: state.chipsAmount.chip,
    token: state.token,
    playerId: state.login.playerID,
    roundId: state.playerInfo.roundId,
    roundStatus: state.playerInfo.roundStatus,
    preBetsAllowed: state.firstReq.preBetsAllowed,
  }));
  const dispatch = useDispatch();
  const handleStat = (active, active2) => {
    dispatch(statTabVisibilityAC(active.statistic));
    dispatch(menuTabAC(active.menu));
    dispatch(gameRuleTabAC(active.gameRule));
    dispatch(infoTabAC(active.info));
    dispatch(limitsTabAC(active.limits));
  };

  let limitsValue = Object.values(limits);
  let fndIdx = Object.values(limits).findIndex((idx) => idx.type === -1);
  let sliced = limitsValue.splice(fndIdx, 1);
  limitsValue.splice(0, 0, sliced[0]);
  const handleBet = (type, value) => {
    dispatch(
      allBetsAC({
        type: type,
        betSize: value,
      })
    );
  };
  const handleUndo = () => {
    dispatch(undoBetAC());
  };
  const confirmBet = () => {
    dispatch(placeBetAC());
  };

  return (
    <Wrapper>
      <Header />
      <MainContainer>
        <PastResultBar>
          {stats.pastResults
            .slice()
            .reverse()
            .map((item, i) => {
              return (
                <PastResultBarItems color={numberColors[item]} key={i}>
                  {item}
                </PastResultBarItems>
              );
            })}
        </PastResultBar>

        <ConfirmButtonContainer
          onClick={() => confirmBet()}
          disabled={!preBetsAllowed}
        >
          <ConfirmButton />
        </ConfirmButtonContainer>
        <BettingAria>
          {limitsValue.map((item, i) => {
            // console.log(limitsTypes[item.type]);
            let limitValueNumber = BetPointsEnum[limitsTypes[item.type]];
            let limitVerification =
              typeof limitValueNumber === "object" ? limitValueNumber[0] : 157;
            return limitsTypes[item.type] === "Table" ? (
              ""
            ) : (
              <BlackBlock
                key={i}
                disabled={
                  bets[limitVerification]?.amount === item.max ||
                  totalBetsAmount >= 10000
                }
                onClick={() =>
                  handleBet(
                    limitVerification,
                    chip > item.max ? item.max : chip
                  )
                }
              >
                {bets[limitVerification]?.amount > 0 ? (
                  <BettingChip
                    key={i}
                    colorChip={chipsRangeColor[bets[limitVerification]?.amount]}
                    bets={bets[limitVerification]?.amount}
                  />
                ) : (
                  limitsTypes[item.type]
                )}
              </BlackBlock>
            );
          })}
        </BettingAria>

        <ChooseBetContainer>
          Choose your bet{" "}
          <AllChips>
            <ChoosenChip color="#cd95ff" chip={1} />
            <ChoosenChip color="green" chip={3} />
            <ChoosenChip color="red" chip={5} />
          </AllChips>
        </ChooseBetContainer>

        <UndoButtonConteiner>
          <UndoButton onClick={handleUndo} />
        </UndoButtonConteiner>

        <div className="openBtn">
          <StatSVG
            onClick={() => handleStat({ statistic: true })}
            viewBox="0 0 24 24"
          >
            <path
              d="M0 12a12 12 0 1 1 12 12A12 12 0 0 1 0 12zm12 10.154a10.154 10.154 0 0 0 9.355-14.1L12 12l8.687 1.2-.563 2.1L12 12l8.324 4.927-1.469 1.9L12 12l3.252 4.3-1.157.669L12 12l2.177 8.5-2.158.274L12 12l1.2-8.687 2.1.563L12 12l4.467-7.546 1.72 1.331L12 12l8.093-6.126A10.152 10.152 0 0 0 2.645 15.947L12 12l-6.01 1.541-.194-1.527L12 12l-8.687-1.2.563-2.1L12 12 8.748 7.7l1.157-.668L12 12l-1.2 8.687-2.1-.563L12 12l-4.468 7.547-1.72-1.332L12 12l-8.093 6.126A10.145 10.145 0 0 0 12 22.153zM12 12zm0 0zm0 0zm0 0zm0 0zm0 0zm0 0zm0 0zm0 0zM9.823 3.506l2.158-.274L12 12zM3.676 7.073l1.469-1.9L12 12zm14.334 3.388.194 1.526L12 12z"
              fill="#fff"
            />
          </StatSVG>
        </div>

        <MenuButtonContainer menuClose={menuTab}>
          <div className="menuButtonPadding">
            <MenuButton onClick={() => handleStat({ menu: true })} />
          </div>
        </MenuButtonContainer>

        <MenuMainContainer menuClose={menuTab}>
          <div className="scrollMenu">
            <MenuItem>
              <MenuItemConteiner>
                <MenuItemIcon>
                  <LobbyIcon />
                </MenuItemIcon>
                <MenuItemTitle>Lobby</MenuItemTitle>
              </MenuItemConteiner>
            </MenuItem>
            <MenuItem>
              <MenuItemConteiner>
                <MenuItemIcon>
                  <HistoryIcon />
                </MenuItemIcon>
                <MenuItemTitle>History</MenuItemTitle>
              </MenuItemConteiner>
            </MenuItem>
            <MenuItem>
              <MenuItemConteiner>
                <MenuItemIcon>
                  <SettingsIcon />
                </MenuItemIcon>
                <MenuItemTitle>Settings</MenuItemTitle>
              </MenuItemConteiner>
            </MenuItem>
            <MenuItem>
              <MenuItemConteiner>
                <MenuItemIcon>
                  <GameRulesIcon />
                </MenuItemIcon>
                <MenuItemTitle onClick={() => handleStat({ gameRule: true })}>
                  Game Rules
                </MenuItemTitle>
              </MenuItemConteiner>
            </MenuItem>
            <MenuItem onClick={() => handleStat({ limits: true })}>
              <MenuItemConteiner>
                <MenuItemIcon>
                  <LimitsIcon />
                </MenuItemIcon>
                <MenuItemTitle>Limits</MenuItemTitle>
              </MenuItemConteiner>
            </MenuItem>
            <MenuItem onClick={() => handleStat({ info: true })}>
              <MenuItemConteiner>
                <MenuItemIcon>
                  <InfoIcon />
                </MenuItemIcon>
                <MenuItemTitle>Info</MenuItemTitle>
              </MenuItemConteiner>
            </MenuItem>
            <MenuItem onClick={() => handleStat({ statistic: true })}>
              <MenuItemConteiner>
                <MenuItemIcon>
                  <StatisticIcon />
                </MenuItemIcon>
                <MenuItemTitle>Statistics</MenuItemTitle>
              </MenuItemConteiner>
            </MenuItem>
            <MenuItem>
              <MenuItemConteiner>
                <MenuItemIcon>
                  <FavoriteIcon />
                </MenuItemIcon>
                <MenuItemTitle>Favorite Bets</MenuItemTitle>
              </MenuItemConteiner>
            </MenuItem>
          </div>
        </MenuMainContainer>

        <GameRulesContainer gameRuleClose={gameRuleTab}>
          <MenuElementsTitleContainer>
            <MenuElementsIconContainer>
              <GameRulesIcon />
            </MenuElementsIconContainer>
            <MenuElementsSpan>GAME RULES</MenuElementsSpan>
          </MenuElementsTitleContainer>
          <MenuElementsContent>
            <ContentScroll>
              <GameRules />
            </ContentScroll>
          </MenuElementsContent>
        </GameRulesContainer>

        <InfoMainContainer infoClose={infoTab}>
          <MenuElementsTitleContainer>
            <MenuElementsIconContainer>
              <InfoIcon />
            </MenuElementsIconContainer>
            <MenuElementsSpan>info</MenuElementsSpan>
          </MenuElementsTitleContainer>
          <MenuElementsContent>
            <ContentScroll>
              <Info />
            </ContentScroll>
          </MenuElementsContent>
        </InfoMainContainer>

        <LimitsMainContainer limitsClose={limitsTab}>
          <MenuElementsTitleContainer>
            <MenuElementsIconContainer>
              <LimitsIcon />
            </MenuElementsIconContainer>
            <MenuElementsSpan>limits</MenuElementsSpan>
          </MenuElementsTitleContainer>
          <MenuElementsContent>
            <ContentScroll>
              <LimitsContainer>
                <table>
                  <tbody>
                    <tr>
                      <th></th>
                    </tr>

                    {limitsValue.map((item, i) => {
                      return (
                        <Tr key={i}>
                          <td>{limitsTypes[item.type]}</td>
                          <td>
                            {item.min}-{item.max}
                          </td>
                        </Tr>
                      );
                    })}
                    <tr>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </LimitsContainer>
            </ContentScroll>
          </MenuElementsContent>
        </LimitsMainContainer>

        <Container stat={statTab}>
          <div className="statBars">
            <StatBar>
              {Object.keys(data1).map((item, i) => {
                return (
                  <BarItems key={i}>
                    <div className="barItemName">
                      <SpanNameFirst color={colorsData1[item]}>
                        {namesData1[item]} {data1[item]}%
                      </SpanNameFirst>
                    </div>
                    <div className="barItemProgressbar">
                      <ProgressBar
                        value={data1[item]}
                        color={colorsData1[item]}
                      ></ProgressBar>
                    </div>
                  </BarItems>
                );
              })}
            </StatBar>
            <StatBar>
              <BarNames>
                {Object.keys(data2).map((item, i) => {
                  return (
                    <SpanNameFirst2
                      key={i}
                      color={colorsData2[item]}
                      className="someClass"
                    >
                      {namesData2[item]} {data2[item]}%
                    </SpanNameFirst2>
                  );
                })}
              </BarNames>
              <StatBarConteiner>
                {Object.keys(data2).map((item, i) => {
                  return (
                    <BarItemsFirst
                      key={i}
                      color={colorsData2[item]}
                      width={data2[item]}
                    ></BarItemsFirst>
                  );
                })}
              </StatBarConteiner>
            </StatBar>
            <StatBar>
              <BarNames>
                {Object.keys(data3).map((item, i) => {
                  return (
                    <SpanNameFirst2
                      key={i}
                      color={colorsData3[item]}
                      className="someClass"
                    >
                      {namesData3[item]} {data3[item]}%
                    </SpanNameFirst2>
                  );
                })}
              </BarNames>
              <StatBarConteiner>
                {Object.keys(data3).map((item, i) => {
                  return (
                    <BarItemsFirst
                      key={i}
                      color={colorsData3[item]}
                      width={data3[item]}
                    ></BarItemsFirst>
                  );
                })}
              </StatBarConteiner>
            </StatBar>
            <HotNumConteiner>
              <HotNumTitle>HOT NUMBERS</HotNumTitle>
              <HotNumBar>
                <IconContainer>
                  <HotNumLogo />
                </IconContainer>
                <HotNumbers>
                  {Object.keys(hotNumData).map((item, i) => {
                    return (
                      <HotNumItem
                        color={numberColors[hotNumData[item]]}
                        key={i}
                      >
                        {hotNumData[item]}
                      </HotNumItem>
                    );
                  })}
                </HotNumbers>
              </HotNumBar>
            </HotNumConteiner>
            <ColdNumConteiner>
              <ColdNumTitle>COLD NUMBERS</ColdNumTitle>
              <ColdNumBar>
                <IconContainer2>
                  <ColdNumLogo />
                </IconContainer2>
                <HotNumbers>
                  {Object.keys(coldNumData).map((item, i) => {
                    return (
                      <ColdNumItem
                        color={numberColors[coldNumData[item]]}
                        key={i}
                      >
                        {coldNumData[item]}
                      </ColdNumItem>
                    );
                  })}
                </HotNumbers>
              </ColdNumBar>
            </ColdNumConteiner>
            <Slider />
          </div>

          <div className="roulleteS">
            <Roullete />
            <NumRounds>LAST {roundsNumber} ROUNDS</NumRounds>
          </div>
        </Container>

        <CloseButtonContainer
          closeStat={statTab}
          menuClose={menuTab}
          closeGameRule={gameRuleTab}
          closeInfo={infoTab}
          limitsClose={limitsTab}
        >
          <CloseButton
            onClick={() => handleStat({ statistic: false }, { menu: false })}
          />
        </CloseButtonContainer>
      </MainContainer>
    </Wrapper>
  );
};

export default TokenComponent;
