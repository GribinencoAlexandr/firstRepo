import { createReducer } from "@reduxjs/toolkit";

const initialState = "";

export default createReducer(initialState, {
  GET_TOKEN: () => {
    return "";
  },
  GET_TOKEN_SUCCESS: (_, action) => {
    return action.payload;
  },
});
