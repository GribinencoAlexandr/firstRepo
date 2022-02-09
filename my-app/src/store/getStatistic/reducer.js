import { createReducer } from "@reduxjs/toolkit";
import { getStatisticAC } from "./actions";

export default createReducer([], {
  [getStatisticAC.type]: (_, action) => {
    return action.payload;
  },
});
