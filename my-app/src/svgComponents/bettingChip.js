import React from "react";
import styled from "styled-components";

const CircleSVG = styled.circle`
  fill: ${({ color }) => color};
`;
const SVGChip = styled.svg`
  display: ${({ bet }) => (bet > 0 ? "block" : "none")};
`;
const BettingChip = (props) => {
  return (
    <SVGChip
      id="2dc-layer-1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      bet={props.bets}
    >
      <defs>
        <linearGradient id="2dc-linear-gradient-3-1647351747804-20">
          <stop offset="0" stopColor="#4bb100"></stop>
          <stop offset="1" stopColor="#1b3f00"></stop>
        </linearGradient>
      </defs>
      <circle id="2dc-circle-1" cx="20" cy="20" r="20" fill="#307200"></circle>
      <CircleSVG
        id="2dc-circle-2"
        data-name="Ellipse 25"
        cx="20"
        cy="20"
        r="20"
        color={props.colorChip}
      ></CircleSVG>
      <path
        id="Path_34"
        data-name="Path 34"
        d="M35.68 20a15.55 15.55 0 0 1-3.18 9.44 15.3 15.3 0 0 1-3.06 3.06 15.65 15.65 0 0 1-18.89 0 15.84 15.84 0 0 1-3.06-3.06 15.65 15.65 0 0 1 0-18.89 16.42 16.42 0 0 1 3.06-3.06 15.65 15.65 0 0 1 18.89 0 15.84 15.84 0 0 1 3.06 3.06A15.6 15.6 0 0 1 35.68 20z"
        fill="none"
      ></path>
      <path
        id="Path_35"
        data-name="Path 35"
        d="M20 0a20 20 0 1 0 20 20A20 20 0 0 0 20 0zm12.07 29.12a14.73 14.73 0 0 1-2.95 2.95 15.08 15.08 0 0 1-18.23 0 14.72 14.72 0 0 1-3-2.95 15.12 15.12 0 0 1 0-18.24 14.71 14.71 0 0 1 3-3 15.08 15.08 0 0 1 18.23 0 14.47 14.47 0 0 1 2.95 3 15.09 15.09 0 0 1 0 18.24z"
        opacity="0.1"
      ></path>
      <circle
        id="center-chip"
        cx="20"
        cy="20"
        r="14.05"
        fill="#e8e8e8"
      ></circle>
      <path
        id="Path_36"
        data-name="Path 36"
        d="M20 6.49A13.51 13.51 0 1 0 33.51 20 13.51 13.51 0 0 0 20 6.49zM20 33a13 13 0 1 1 13-13 13 13 0 0 1-13 13z"
        fill="#444"
      ></path>
      <path
        id="Path_37"
        data-name="Path 37"
        fill="#fff"
        d="M7.5 29.44L7.17 29l-2.32 2.32c.22.3.45.58.68.86l2.3-2.3zm-2-21.62c-.23.28-.46.56-.68.86L7.17 11l.33-.44.33-.44zM7 6.25L6.25 7l2.29 2.3.38-.38c.12-.13.25-.25.38-.38zm1.92 24.83c-.13-.12-.25-.25-.38-.38L6.25 33l.76.76 2.29-2.3c-.13-.13-.3-.25-.38-.38zM8.68 4.85c-.3.22-.58.45-.86.68l2.31 2.3.43-.33.44-.33zm1.88 27.65c-.15-.1-.29-.22-.44-.33l-2.3 2.3c.28.23.56.46.86.68L11 32.83zm19.32-.33c-.15.11-.29.23-.44.33l-.44.33 2.32 2.32c.3-.22.58-.45.86-.68zm1.44-27.32L29 7.17l.44.33.44.33 2.3-2.3c-.28-.23-.56-.46-.86-.68zm.14 25.85l-.38.38c-.12.13-.25.25-.38.38l2.3 2.29.76-.76zM33 6.25l-2.3 2.29.38.38.38.38L33.75 7zM32.83 29l-.33.44-.33.43 2.3 2.3c.23-.28.46-.56.68-.85zm1.64-21.18l-2.3 2.3.33.44.33.44 2.32-2.32c-.22-.3-.45-.58-.68-.86z"
      ></path>
      <g id="Group_19" data-name="Group 19">
        <circle
          id="Ellipse_177"
          data-name="Ellipse 177"
          fill="#fff"
          cx="20"
          cy="2.16"
          r="1.08"
        ></circle>
        <circle
          id="Ellipse_178"
          data-name="Ellipse 178"
          fill="#fff"
          cx="2.16"
          cy="20"
          r="1.08"
        ></circle>
        <circle
          id="Ellipse_179"
          data-name="Ellipse 179"
          fill="#fff"
          cx="37.84"
          cy="20"
          r="1.08"
        ></circle>
        <circle
          id="Ellipse_180"
          data-name="Ellipse 180"
          fill="#fff"
          cx="20"
          cy="37.84"
          r="1.08"
        ></circle>
      </g>
      <path
        id="Path_38"
        data-name="Path 38"
        d="M20 0a20 20 0 1 0 20 20A20 20 0 0 0 20 0zm0 39.46A19.46 19.46 0 1 1 39.46 20 19.48 19.48 0 0 1 20 39.46z"
        fill="url(#2dc-linear-gradient-3-1647351747804-20)"
      ></path>
      <text x="50%" y="50%" dy="5" fontSize="15" textAnchor="middle">
        {props.bets}
      </text>
    </SVGChip>
  );
};
export default BettingChip;
