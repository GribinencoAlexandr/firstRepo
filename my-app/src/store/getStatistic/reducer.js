import { createReducer } from "@reduxjs/toolkit";

export default createReducer([], {
  GET_STATISTIC: (_, action) => {
    return {
      data: action.payload,
      loading: false,
      error: false,
    };
  },
});
