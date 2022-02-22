import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  gameName: "",
  playerID: 0,
  playerName: "",
};

export default createReducer(initialState, {
  GET_LOGIN: (_, action) => {
    return {
      gameName: action.payload.gameName,
      playerID: action.payload.playerID,
      playerName: action.payload.playerName,
    };
  },
});
