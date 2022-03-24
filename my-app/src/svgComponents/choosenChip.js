import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { chipsAmountAC } from "../store/chipsAmount/actions";

const ChipSVG = styled.svg`
  width: 50px;
  height: 50px;
`;
const CircleSVG = styled.circle`
  fill: ${({ color }) => color};
`;
const ChoosenChip = (props) => {
  const dispatch = useDispatch();

  return (
    <ChipSVG
      viewBox="0 0 130 130"
      className="chip"
      onClick={() => dispatch(chipsAmountAC({ chip: props.chip }))}
    >
      <g className="chipValue">
        <defs>
          <filter
            id="dropshadow-#cd95ff-1-1647959216411"
            width="150"
            height="150"
            x="-20"
            y="-20"
          >
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="6"
            ></feGaussianBlur>
            <feOffset dx="0" dy="0" result="offsetblur"></feOffset>
            <feComponentTransfer>
              <feFuncA type="linear"></feFuncA>
            </feComponentTransfer>
          </filter>
          <linearGradient
            id="outer-gradient-#cd95ff-1-1647959216411"
            x1="109.05"
            x2="110.05"
            y1="-.45"
            y2="-.45"
            gradientTransform="matrix(100 0 0 100 -10890 110)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#ffd0ff" stopOpacity="1"></stop>
            <stop offset="1" stopColor="#664a7f" stopOpacity="1"></stop>
          </linearGradient>
          <linearGradient
            id="light-gradient-#cd95ff-1-1647959216411"
            x1="109.14"
            x2="109.14"
            y1="-1.36"
            y2="-.36"
            gradientTransform="matrix(70 0 0 70 -7575 125)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#fff"></stop>
            <stop offset="1" stopColor="#dedede"></stop>
          </linearGradient>
          <linearGradient
            id="inner-gradient-#cd95ff-1-1647959216411"
            x1="108.56"
            x2="109.56"
            y1="-.94"
            y2="-.94"
            gradientTransform="matrix(66 0 0 66 -7133 127)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#333"></stop>
            <stop offset="1" stopColor="#7f7f7f"></stop>
          </linearGradient>
        </defs>
        <circle
          className="outerGradient"
          cx="65"
          cy="65"
          r="50"
          fill="url(#outer-gradient-#cd95ff-1-1647959216411)"
        ></circle>
        <CircleSVG
          className="decorationsBg"
          cx="65"
          cy="65"
          r="48"
          color={props.color}
        ></CircleSVG>
        <CircleSVG
          className="basicColor"
          cx="65"
          cy="65"
          r="38"
          color={props.color}
        ></CircleSVG>
        <circle
          className="lightGradient"
          cx="65"
          cy="65"
          r="35"
          fill="url(#light-gradient-#cd95ff-1-1647959216411)"
        ></circle>
        <circle
          className="innerLineGradient"
          cx="65"
          cy="65"
          r="33"
          fillOpacity="0"
          stroke="url(#inner-gradient-#cd95ff-1-1647959216411)"
        ></circle>
        <text
          fill="#333333"
          x="50%"
          y="50%"
          dy="1.5"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="34"
        >
          {props.chip}
        </text>
        <path
          fill="#fff"
          d="M33.7 88.6c-.3-.4-.5-.7-.8-1.1l-5.8 5.8c.5.7 1.1 1.4 1.7 2.1l5.8-5.8a9 9 0 0 1-.9-1m-4.9-54c-.6.7-1.1 1.4-1.7 2.1l5.8 5.8.8-1.1a7.63 7.63 0 0 0 .8-1.1zm3.7-4l-1.9 1.9 5.7 5.7a9 9 0 0 0 .9-1 9 9 0 0 1 1-.9zm4.8 62.1a9 9 0 0 1-.9-1l-5.7 5.7 1.9 1.9 5.7-5.7a9 9 0 0 1-1-.9m-.6-65.6c-.7.5-1.4 1.1-2.1 1.7l5.8 5.8a7.63 7.63 0 0 1 1.1-.8l1.1-.8zm4.7 69.2a7.63 7.63 0 0 0-1.1-.8l-5.8 5.8c.7.6 1.4 1.1 2.1 1.7l5.8-5.8a2.84 2.84 0 0 0-1-.9m48.3-.9a7.63 7.63 0 0 1-1.1.8l-1.1.8 5.8 5.8c.7-.5 1.4-1.1 2.1-1.7zm3.6-68.3l-5.8 5.8 1.1.8a7.63 7.63 0 0 0 1.1.8l5.8-5.8c-.7-.5-1.5-1-2.2-1.6m.3 64.6a9 9 0 0 0-.9 1 9 9 0 0 1-1 .9l5.7 5.7 1.9-1.9zm3.9-61.1l-5.7 5.7a9 9 0 0 0 1 .9 9 9 0 0 1 .9 1l5.7-5.7a17 17 0 0 1-1.9-1.9m-.4 56.9c-.3.4-.5.7-.8 1.1a7.63 7.63 0 0 0-.8 1.1l5.8 5.8c.6-.7 1.1-1.4 1.7-2.1zm4.1-52.9l-5.8 5.8a7.63 7.63 0 0 1 .8 1.1l.8 1.1 5.8-5.8a12.45 12.45 0 0 0-1.6-2.2M65 17.7a2.7 2.7 0 1 1-2.7 2.7 2.69 2.69 0 0 1 2.7-2.7M20.4 62.3a2.7 2.7 0 1 1-2.7 2.7 2.69 2.69 0 0 1 2.7-2.7m89.2 0a2.7 2.7 0 1 1-2.7 2.7 2.69 2.69 0 0 1 2.7-2.7M65 106.9a2.7 2.7 0 1 1-2.7 2.7 2.69 2.69 0 0 1 2.7-2.7"
        ></path>
      </g>
    </ChipSVG>
  );
};

export default ChoosenChip;
