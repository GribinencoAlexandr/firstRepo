import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  roundId: 0,
  dealerName: "",
  currentBalance: 0,
  miliSecondsLeftToWait: 0,
  roundStatus: 0,
  roundResult: 0,
};

export default createReducer(initialState, {
  JOIN_FUNC: (_, action) => {
    return {
      roundId: action.payload.roundId,
      dealerName: action.payload.dealerName,
      currentBalance: action.payload.currentBalance,
      miliSecondsLeftToWait: action.payload.miliSecondsLeftToWait,
      roundResult: action.payload.roundResult,
      roundStatus: action.payload.roundStatus,
    };
  },
});
