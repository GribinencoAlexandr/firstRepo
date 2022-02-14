import { createReducer } from "@reduxjs/toolkit";

export default createReducer([], {
  JOIN_FUNC: (_, action) => {
    return {
      data: action.payload,
      loading: false,
      error: false,
    };
  },
});
