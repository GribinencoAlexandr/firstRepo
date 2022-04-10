import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  allBets: {},
  bets: {},
  totalBetsAmount: 0,
  betsSequence: [],
  repeatBetsSequence: [],
  repeatBets: {},
  repeatBetsAmount: 0,
};

export default createReducer(initialState, {
  ALL_BETS: (state, action) => {
    return {
      ...state,
      allBets: action.payload.allBets,
      bets: action.payload.bets,
      totalBetsAmount: action.payload.totalBetsAmount,
      betsSequence: action.payload.betsSequence,
      // repeatBetsSequence: action.payload.betsSequence,
      // repeatBets: action.payload.bets,
      // repeatBetsAmount: action.payload.totalBetsAmount,
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
  CLEAR_ALL_BET: (state, action) => {
    return {
      ...state,
      allBets: action.payload.allBets,
      bets: action.payload.bets,
      totalBetsAmount: action.payload.totalBetsAmount,
      betsSequence: action.payload.betsSequence,
    };
  },
  REMOVE_INVALID_BETS: (state, action) => {
    return {
      ...state,
      allBets: action.payload.allBets,
      bets: action.payload.bets,
      totalBetsAmount: action.payload.totalBetsAmount,
      betsSequence: action.payload.betsSequence,
      repeatBetsSequence: action.payload.betsSequence,
      repeatBets: action.payload.bets,
      repeatBetsAmount: action.payload.totalBetsAmount,
    };
  },
  REPEAT_ALL_BET: (state, action) => {
    return {
      ...state,
      allBets: action.payload.allBets,
      bets: action.payload.bets,
      totalBetsAmount: action.payload.totalBetsAmount,
      betsSequence: action.payload.betsSequence,
      repeatBetsSequence: action.payload.betsSequence,
      repeatBets: action.payload.bets,
      repeatBetsAmount: action.payload.totalBetsAmount,
    };
  },
});
