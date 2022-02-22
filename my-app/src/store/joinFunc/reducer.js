import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  roundId: 0,
  dealerName: "",
  currentBalance: 0,
};

export default createReducer(initialState, {
  JOIN_FUNC: (_, action) => {
    return {
      roundId: action.payload.roundId,
      dealerName: action.payload.dealerName,
      currentBalance: action.payload.currentBalance,
    };
  },
});
