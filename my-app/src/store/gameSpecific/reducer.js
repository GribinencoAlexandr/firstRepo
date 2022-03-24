import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  allBets: {},
  bets: {},
  totalBetsAmount: 0,
  betsSequence: [],
};

export default createReducer(initialState, {
  ALL_BETS: (state, action) => {
    return {
      ...state,
      allBets: action.payload.allBets,
      bets: action.payload.bets,
      totalBetsAmount: action.payload.totalBetsAmount,
      betsSequence: action.payload.betsSequence,
    };
  },
  UNDO_BET: (state, action) => {
    console.log(action.payload);
    return {
      ...state,
      allBets: action.payload.allBets,
      bets: action.payload.bets,
      totalBetsAmount: action.payload.totalBetsAmount,
      betsSequence: action.payload.betsSequence,
    };
  },
});
