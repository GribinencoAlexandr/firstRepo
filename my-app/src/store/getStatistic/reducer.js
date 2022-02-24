import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  data1: {
    racetrackTierPercent: 0,
    racetrackOrphelinsPercent: 0,
    racetrackVoisinsDuZeroPercent: 0,
    zeroPercent: 0,
  },
  data2: {
    redPercent: 0,
    zeroPercent: 0,
    blackPercent: 0,
  },
  data3: {
    evenPercent: 0,
    zeroPercent: 0,
    oddPercent: 0,
  },
  hotNumData: [],
  coldNumData: [],
  wheelStatistic: [0],
};

export default createReducer(initialState, {
  GET_STATISTIC: () => {
    return initialState;
  },
  GET_STATISTIC_SUCCESS: (_, action) => {
    return {
      data1: {
        racetrackTierPercent: action.payload.racetrackTierPercent,
        racetrackOrphelinsPercent: action.payload.racetrackOrphelinsPercent,
        racetrackVoisinsDuZeroPercent:
          action.payload.racetrackVoisinsDuZeroPercent,
        zeroPercent: action.payload.zeroPercent,
      },
      data2: {
        redPercent: action.payload.redPercent,
        zeroPercent: action.payload.zeroPercent,
        blackPercent: action.payload.blackPercent,
      },
      data3: {
        evenPercent: action.payload.evenPercent,
        zeroPercent: action.payload.zeroPercent,
        oddPercent: action.payload.oddPercent,
      },
      hotNumData: action.payload.hotNumbers,
      coldNumData: action.payload.coldNumbers,
      wheelStatistic: action.payload.wheelStatistic,
    };
  },
});
