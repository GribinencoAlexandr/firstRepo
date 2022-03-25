import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  gameName: "",
  playerID: 0,
  playerName: "",
  limits: "",
  chipsRange: "",
  chipsRangeColor: "",
};

export default createReducer(initialState, {
  GET_LOGIN: (_, action) => {
    return {
      gameName: action.payload.gameName,
      playerID: action.payload.playerID,
      playerName: action.payload.playerName,
      limits: action.payload.limits,
      chipsRange: action.payload.chipsRange,
      chipsRangeColor: action.payload.chipsRangeColor,
    };
  },
});
