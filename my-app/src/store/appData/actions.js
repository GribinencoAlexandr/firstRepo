import { createAction } from "@reduxjs/toolkit";

export const loaderAC = createAction("LOADER");
export const loadingBarAC = createAction("LOADING_BAR");
export const menuTabAC = createAction("MENU_TAB");
export const gameRuleTabAC = createAction("GAME_RULE_TAB");
export const infoTabAC = createAction("INFO_TAB");
export const limitsTabAC = createAction("LIMITS_TAB");
export const notificationAC = createAction("NOTIFICATION");
