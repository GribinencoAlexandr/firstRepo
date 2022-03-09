import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const TimerComponent = styled.div`
  margin-left: 5px;
`;

const Timer = () => {
  const { miliSecondsLeftToWait, miliSecondsToWait, roundStatus } = useSelector(
    (state) => ({
      miliSecondsLeftToWait: (
        state.playerInfo.miliSecondsLeftToWait / 1000
      ).toFixed(0),
      miliSecondsToWait: state.playerInfo.miliSecondsToWait,
      roundStatus: state.playerInfo.roundStatus,
    })
  );
  const [secondsToLeft, setSecondsToLeft] = useState(miliSecondsLeftToWait);
  useEffect(() => {
    if (roundStatus !== 1 || miliSecondsLeftToWait < 0) {
      setSecondsToLeft(0);
    } else setSecondsToLeft(miliSecondsLeftToWait);
  }, [roundStatus, miliSecondsLeftToWait]);

  return <TimerComponent>{secondsToLeft}</TimerComponent>;
};

export default Timer;
