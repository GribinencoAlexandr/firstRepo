import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loader: true,
  menuTab: false,
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
  MENU_TAB: (state, action) => {
    return {
      ...state,
      menuTab: action.payload,
    };
  },
});
