import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  chip: 1,
};

export default createReducer(initialState, {
  CHIPS_AMOUNT: (_, action) => {
    return {
      chip: action.payload.chip,
    };
  },
});
