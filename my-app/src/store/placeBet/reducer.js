import { createReducer } from "@reduxjs/toolkit";

const initialState = { errorCode: "", verirfication: false };

export default createReducer(initialState, {
  PLACE_BET: (_, action) => {
    return action.payload;
  },
  PLACE_BET_SUCCESS: (state, action) => {
    return {
      ...state,
      errorCode: action.payload.errorCode,
    };
  },
  PLACE_BET_VERIFICATION: (state, action) => {
    return { ...state, verirfication: action.payload };
  },
});
