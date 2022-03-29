import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  chipColors: "",
  mobileApiUrl: "",
  preBetsAllowed: "",
  serverCommUrl: "",
};

export default createReducer(initialState, {
  GET_FIRST_REQ: () => {
    return "";
  },
  GET_FIRST_REQ_SUCCESS: (state, action) => {
    return {
      ...state,
      chipColors: action.payload.chipColors,
      mobileApiUrl: action.payload.mobileApiUrl,
      preBetsAllowed: action.payload.preBetsAllowed,
      serverCommUrl: action.payload.serverCommUrl,
    };
  },
});
