import { createAction } from "@reduxjs/toolkit";

export const allBetsAC = createAction("ALL_BETS");
export const undoBetAC = createAction("UNDO_BET");
export const clearAllBetAC = createAction("CLEAR_ALL_BET");
export const repeatAllBetAC = createAction("REPEAT_ALL_BET");
export const removeInValidBetsAC = createAction("REMOVE_INVALID_BETS");
