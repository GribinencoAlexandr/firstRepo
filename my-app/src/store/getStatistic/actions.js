import { createAction } from "@reduxjs/toolkit";

export const getStatisticAC = createAction("GET_STATISTIC");
export const getStatisticSuccessAC = createAction("GET_STATISTIC_SUCCESS");
export const statTabVisibilityAC = createAction("STAT_TAB_VISIBILITY");
export const statTabVisibilitySuccessAC = createAction(
  "STAT_TAB_VISIBILITY_SUCCESS"
);
