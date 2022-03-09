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
import "./TokenComponent.css";
import {
  colorsData1,
  namesData1,
  namesData2,
  colorsData2,
  namesData3,
  colorsData3,
  numberColors,
} from "../config";

import Slider from "../svgComponents/slider";
import Roullete from "../svgComponents/roullete.js";
import Header from "./Header/Header";
import { statTabVisibilityAC } from "../store/getStatistic/actions";
import { menuTabAC } from "../store/appData/actions";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: rgba(25, 28, 34, 1);
`;
const MainContainer = styled.div`
  display: flex;
  justify-content: flex-end;
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
  height: calc(100% - 40px);
  top: 40px;
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
  display: ${({ closeStat, menuClose }) =>
    closeStat ? "block" : menuClose ? "block" : "none"};
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
  } = useSelector((state) => ({
    data1: state.statistic.data1,
    data2: state.statistic.data2,
    data3: state.statistic.data3,
    hotNumData: state.statistic.hotNumData,
    coldNumData: state.statistic.coldNumData,
    roundsNumber: state.statistic.roundsNumber,
    statTab: state.statistic.statTab,
    menuTab: state.appData.menuTab,
  }));
  const dispatch = useDispatch();
  const handleStat = (active, active2) => {
    dispatch(statTabVisibilityAC(active.statistic));
    dispatch(menuTabAC(active.menu));
    console.log(active.statistic);
  };
  return (
    <Wrapper>
      <Header />
      <MainContainer>
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
                <MenuItemTitle>Game Rules</MenuItemTitle>
              </MenuItemConteiner>
            </MenuItem>
            <MenuItem>
              <MenuItemConteiner>
                <MenuItemIcon>
                  <LimitsIcon />
                </MenuItemIcon>
                <MenuItemTitle>Limits</MenuItemTitle>
              </MenuItemConteiner>
            </MenuItem>
            <MenuItem>
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
        <Container stat={statTab}>
          <div className="statBars">
            <StatBar>
              {Object.keys(data1).map((item) => {
                return (
                  <BarItems>
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
                {Object.keys(data2).map((item) => {
                  return (
                    <SpanNameFirst2
                      color={colorsData2[item]}
                      className="someClass"
                    >
                      {namesData2[item]} {data2[item]}%
                    </SpanNameFirst2>
                  );
                })}
              </BarNames>
              <StatBarConteiner>
                {Object.keys(data2).map((item) => {
                  return (
                    <BarItemsFirst
                      color={colorsData2[item]}
                      width={data2[item]}
                    ></BarItemsFirst>
                  );
                })}
              </StatBarConteiner>
            </StatBar>
            <StatBar>
              <BarNames>
                {Object.keys(data3).map((item) => {
                  return (
                    <SpanNameFirst2
                      color={colorsData3[item]}
                      className="someClass"
                    >
                      {namesData3[item]} {data3[item]}%
                    </SpanNameFirst2>
                  );
                })}
              </BarNames>
              <StatBarConteiner>
                {Object.keys(data3).map((item) => {
                  return (
                    <BarItemsFirst
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
                  {Object.keys(hotNumData).map((item) => {
                    return (
                      <HotNumItem color={numberColors[hotNumData[item]]}>
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
                  {Object.keys(coldNumData).map((item) => {
                    return (
                      <ColdNumItem color={numberColors[coldNumData[item]]}>
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
        <CloseButtonContainer closeStat={statTab} menuClose={menuTab}>
          <CloseButton
            onClick={() => handleStat({ statistic: false }, { menu: false })}
          />
        </CloseButtonContainer>
      </MainContainer>
    </Wrapper>
  );
};

export default TokenComponent;
