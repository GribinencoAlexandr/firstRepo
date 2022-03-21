import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
const InfoConteiner = styled.div`
  height: 100%;
  overflow-y: auto;
  table {
    height: 100%;
    width: 100%;
    font-size: 14px;
    border-spacing: 0px;
  }
  tr:nth-child(2n) {
    background-color: rgba(0, 0, 0, 0.3);
  }
  tr:last-of-type {
    height: 100%;
  }
  td:first-of-type {
    color: rgb(179, 179, 179);
    border-right: 1px solid rgb(76, 76, 76);
  }
  td {
    padding: 8px 20px;
    color: rgb(230, 230, 230);
    height: 30px;
    line-height: 0;
  }
`;

const Info = () => {
  const { gameName, playerName, roundId, currentBalance, dealerName } =
    useSelector((state) => ({
      gameName: state.login.gameName,
      playerName: state.login.playerName,
      roundId: state.playerInfo.roundId,
      currentBalance: state.playerInfo.currentBalance,
      dealerName: state.playerInfo.dealerName,
    }));
  return (
    <InfoConteiner>
      <table>
        <tbody>
          <tr>
            <td width="22%">Game Name: </td>
            <td width="78%">{gameName}</td>
          </tr>
          <tr>
            <td>Account: </td>
            <td>{playerName}</td>
          </tr>
          <tr>
            <td>Round ID: </td>
            <td>{roundId}</td>
          </tr>
          <tr>
            <td>Balance: </td>
            <td>{currentBalance}</td>
          </tr>
          <tr>
            <td>Dealer: </td>
            <td>{dealerName}</td>
          </tr>
          <tr>
            <td>Table: </td>
            <td>1-10000</td>
          </tr>
          <tr>
            <td>Total Bet: </td>
            <td>740270</td>
          </tr>
          <tr>
            <td>Last win: </td>
            <td>4340</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </InfoConteiner>
  );
};

export default Info;
