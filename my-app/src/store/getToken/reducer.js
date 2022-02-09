import { createReducer } from "@reduxjs/toolkit";
import { getTokenAC } from "./actions";

export default createReducer([], {
  [getTokenAC.type]: (_, action) => {
    return action.payload;
  },
});
