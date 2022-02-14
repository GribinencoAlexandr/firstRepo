import { createReducer } from "@reduxjs/toolkit";

export default createReducer([], {
  GET_TOKEN: () => ({
    data: [],
    loading: true,
    error: false,
  }),
  GET_TOKEN_SUCCESS: (_, action) => ({
    data: action.payload,
    loading: true,
    error: false,
  }),
});
