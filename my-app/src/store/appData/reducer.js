import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loader: true,
  menuTab: false,
  gameRuleTab: false,
  infoTab: false,
  limitsTab: false,
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
  GAME_RULE_TAB: (state, action) => {
    return {
      ...state,
      gameRuleTab: action.payload,
    };
  },
  INFO_TAB: (state, action) => {
    return {
      ...state,
      infoTab: action.payload,
    };
  },
  LIMITS_TAB: (state, action) => {
    return {
      ...state,
      limitsTab: action.payload,
    };
  },
});
