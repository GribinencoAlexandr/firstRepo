import React from "react";
import styled from "styled-components";

const GameRulesContentItems = styled.div`
  padding: 0px 20px 20px;
  color: rgb(255, 255, 255);
  font-size: 14px;
  line-height: 20px;
  table {
    width: 100%;
    border-collapse: collapse;
    background: rgb(42, 45, 55);
    font-size: 14px;
    color: rgb(255, 255, 255);
    text-align: left;
    line-height: 17px;
    letter-spacing: 0.15px;
  }
  th {
    padding: 6px 10px;
    vertical-align: middle;
    border: 1px solid rgb(77, 77, 77);
    font-weight: bold;
    width: 50%;
  }
  td {
    vertical-align: middle;
    border: 1px solid rgb(77, 77, 77);
    padding: 11px 10px;
  }
`;
const MainTitle = styled.p`
  font-weight: 500;
  margin: 20px 0px 15px;
`;
const SecondTitle = styled.p`
  font-weight: 500;
  text-decoration: underline;
  margin: 5px 0px;
`;
const GameRulesP = styled.p`
  margin: 0;
`;

const GameRules = () => {
  return (
    <GameRulesContentItems>
      <MainTitle>General</MainTitle>
      <SecondTitle>Rules</SecondTitle>
      <GameRulesP>
        Roulette is a game where players may choose to place bets on either a
        single number or a range of numbers, colors or whether the number is odd
        or even.
      </GameRulesP>
      <GameRulesP>
        The dealer spins the wheel in one direction and then spins the ball in
        the opposite direction.
      </GameRulesP>
      <GameRulesP>
        The ball eventually loses momentum and falls into one of the 37 pockets
        on the wheel.
      </GameRulesP>
      <SecondTitle>Game Flow</SecondTitle>
      <GameRulesP>
        Place a bet by clicking on a chip from the chips panel and placing it on
        the desired betting spot.
      </GameRulesP>
      <GameRulesP>
        The dealer spins the wheel, releases the ball and when the ball stops in
        one of the pockets, the dealer announces the winning number.
      </GameRulesP>
      <MainTitle>Bets and Payouts</MainTitle>
      <table>
        <thead>
          <tr>
            <th>Bets</th>
            <th>Payout</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Straight up </td>
            <td>35 to 1</td>
          </tr>
          <tr>
            <td>Split</td>
            <td>17 to 1</td>
          </tr>
          <tr>
            <td>Street</td>
            <td>11 to 1</td>
          </tr>
          <tr>
            <td>Corner</td>
            <td>8 to 1</td>
          </tr>
          <tr>
            <td>Six-Line</td>
            <td>5 to 1</td>
          </tr>
          <tr>
            <td>Dozen</td>
            <td>2 to 1</td>
          </tr>
          <tr>
            <td>Column</td>
            <td>2 to 1</td>
          </tr>
          <tr>
            <td>Low/High, Even/Odd, Red/Black</td>
            <td>1 to 1</td>
          </tr>
          <tr>
            <td>Maximum</td>
            <td>As for individual bets</td>
          </tr>
          <tr>
            <td>Neighbours</td>
            <td>As for individual bets</td>
          </tr>
          <tr>
            <td>Tier</td>
            <td>As for individual bets</td>
          </tr>
          <tr>
            <td>Orphans</td>
            <td>As for individual bets</td>
          </tr>
          <tr>
            <td>Neighbors of Zero/ Voisins du Zero</td>
            <td>As for individual bets</td>
          </tr>
        </tbody>
      </table>
    </GameRulesContentItems>
  );
};

export default GameRules;
