import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  roundId: 0,
  dealerName: "",
  currentBalance: 0,
  miliSecondsLeftToWait: 0,
  roundStatus: 0,
  roundResult: 0,
  stats: { pastResults: [1, 2, 3] },
};

export default createReducer(initialState, {
  JOIN_FUNC: (state, action) => {
    return {
      ...state,
      roundId: action.payload.roundId,
      dealerName: action.payload.dealerName,
      currentBalance: action.payload.currentBalance,
      miliSecondsLeftToWait: action.payload.miliSecondsLeftToWait,
      miliSecondsToWait: action.payload.miliSecondsToWait,
      roundResult: action.payload.roundResult,
      roundStatus: action.payload.roundStatus,
      stats: action.payload.stats,
    };
  },
});
