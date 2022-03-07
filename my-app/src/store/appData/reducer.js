import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loader: true,
};

export default createReducer(initialState, {
  LOADER: (state, action) => {
    return { loader: action.payload };
  },
  LOADING_BAR: (state, action) => {
    return {
      ...state,
      loadingPercent: action.payload,
    };
  },
});
