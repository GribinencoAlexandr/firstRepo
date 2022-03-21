import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

export default createReducer(initialState, {
  ALL_BETS: (state, action) => {
    return {
      ...state,
      allBets: {
        amount: action.payload.bets,
        isValid: true,
        color: action.payload.color,
      },
    };
  },
  BETS_BLACK: (state, action) => {
    return {
      ...state,
      23: {
        amount: action.payload.bets,
        isValid: true,
        color: action.payload.color,
      },
    };
  },
  BETS_RED: (state, action) => {
    return {
      ...state,
      13: {
        amount: action.payload.bets,
        isValid: true,
        color: action.payload.color,
      },
    };
  },
});
