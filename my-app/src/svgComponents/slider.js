import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getStatisticAC } from "../store/getStatistic/actions";
const ReactCircle = styled.circle`
  fill: ${({ active, activeColor }) =>
    active ? "#ffff1a" : activeColor ? "#ffff1a" : "#e6e6e6"};
  r: ${({ active }) => (active ? "7" : "4")};
  transition: r 0.5s, fill 0.5s;
`;
const ReactText = styled.text`
  font-size: 11px;
  fill: ${({ active }) => (active ? "#ffff1a" : "#e6e6e6")};
`;
const Slider = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setIsActive("round1");
  }, []);
  const [isActive, setIsActive] = useState();
  const [yellowWidth, setYellowWidth] = useState(0);
  const [idx, setIdx] = useState();
  const circleData = {
    round1: { width: 0, dataNum: 100 },
    round2: { width: 50, dataNum: 200 },
    round3: { width: 90, dataNum: 300 },
    round4: { width: 130, dataNum: 400 },
    round5: { width: 170, dataNum: 500 },
  };

  const handleClick = (active) => {
    setIsActive(active);
    let inse = Object.keys(circleData).indexOf(active);
    setIdx(inse);
    setYellowWidth(circleData[active]);
    dispatch(getStatisticAC(circleData[active].dataNum));
  };
  return (
    <svg viewBox="-10 0 533 37">
      <g transform="translate(4 25)">
        <rect fill="#e6e6e6" width="31%" height="4" rx="2" />
        <rect fill="#ffff1a" width={yellowWidth.width} height="4" rx="2" />
      </g>
      <g transform="translate(4 -2)">
        <g transform="translate(0 0)">
          <ReactCircle
            cx="6"
            active={isActive === "round5"}
            activeColor={isActive === "round5"}
            cy="6"
            transform="translate(160 23)"
            onClick={() => handleClick("round5")}
          />
          <ReactText
            font-family="Roboto-Regular,Roboto"
            letter-spacing=".01em"
            transform="translate(168 15)"
            active={isActive === "round5"}
          >
            <tspan x="-9.375" y="0">
              500
            </tspan>
          </ReactText>
        </g>
        <g fill="#e6e6e6" transform="translate(0 0)">
          <ReactCircle
            cx="6"
            cy="6"
            active={isActive === "round4"}
            activeColor={idx > 3}
            r="4"
            transform="translate(120 23)"
            onClick={() => handleClick("round4")}
          />
          <ReactText
            fill="#e6e6e6"
            font-family="Roboto-Regular,Roboto"
            letter-spacing=".01em"
            transform="translate(128 15)"
            active={isActive === "round4"}
          >
            <tspan x="-9.375" y="0">
              400
            </tspan>
          </ReactText>
        </g>

        <g transform="translate(0 0)">
          <ReactCircle
            cx="6"
            cy="6"
            r="4"
            active={isActive === "round3"}
            activeColor={idx > 2}
            transform="translate(80 23)"
            onClick={() => handleClick("round3")}
          />
          <ReactText
            font-family="Roboto-Regular,Roboto"
            letter-spacing=".01em"
            active={isActive === "round3"}
            transform="translate(88 15)"
          >
            <tspan x="-9.375" y="0">
              300
            </tspan>
          </ReactText>
        </g>
        <g transform="translate(0 0)">
          <ReactCircle
            cx="6"
            cy="6"
            active={isActive === "round2"}
            activeColor={idx > 1}
            transform="translate(40 23)"
            onClick={() => handleClick("round2")}
          />
          <ReactText
            transform="translate(48 15)"
            active={isActive === "round2"}
            font-family="Roboto-Regular,Roboto"
            letter-spacing=".01em"
          >
            <tspan x="-9.375" y="0">
              200
            </tspan>
          </ReactText>
        </g>

        <g transform="translate(0 0)">
          <ReactCircle
            cx="6"
            cy="6"
            active={isActive === "round1"}
            activeColor={isActive !== "round1"}
            transform="translate(-3 23)"
            onClick={() => handleClick("round1")}
          />
          <ReactText
            font-family="Roboto-Regular,Roboto"
            active={isActive === "round1"}
            letter-spacing=".01em"
            transform="translate(4 15)"
          >
            <tspan x="-9.375" y="0">
              100
            </tspan>
          </ReactText>
        </g>
      </g>
    </svg>
  );
};
export default Slider;
