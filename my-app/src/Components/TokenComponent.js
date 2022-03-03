import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ReactComponent as HotNumLogo } from "../svgComponents/HotNum.svg";
import { ReactComponent as ColdNumLogo } from "../svgComponents/ColdNum.svg";
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

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Container = styled.div`
  width: calc(100% - 60px);
  height: 91vh;
  background: rgba(48, 49, 67, 0.95);
  display: flex;
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

const TokenComponent = () => {
  const { data1, data2, data3, hotNumData, coldNumData, roundsNumber } =
    useSelector((state) => ({
      data1: state.statistic.data1,
      data2: state.statistic.data2,
      data3: state.statistic.data3,
      hotNumData: state.statistic.hotNumData,
      coldNumData: state.statistic.coldNumData,
      roundsNumber: state.statistic.roundsNumber,
    }));
  return (
    <Wrapper>
      <Header />

      <Container>
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
    </Wrapper>
  );
};

export default TokenComponent;
