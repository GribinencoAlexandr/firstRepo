import { createReducer } from "@reduxjs/toolkit";
import { getLoginAC } from "./actions";

export default createReducer([], {
  [getLoginAC.type]: (_, action) => {
    return action.payload;
  },
});
