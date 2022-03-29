import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

export default createReducer(initialState, {
  PLACE_BET: (_, action) => {
    return action.payload;
  },
  PLACE_BET_SUCCESS: (_, action) => {
    return action.payload;
  },
});
