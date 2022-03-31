import { configureStore } from "@reduxjs/toolkit";
import { tokenMiddleware } from "./getToken/getTokenMiddleware";
import { loginMiddleware } from "./getLogin/getLoginMiddleware";
import { statisticsMiddleware } from "./getStatistic/getStatisticMiddleware";
import { getJoinMiddleware } from "./joinFunc/getJoinFuncMiddleware";
import { gameSpecificMiddleware } from "./gameSpecific/gameSpecificMiddleware";
import { firstReqMiddleware } from "./getFirstReq/getFirstReqMiddleware";
import { placeBetMiddleware } from "./placeBet/placeBetMiddleware";
import { appDataMiddleware } from "./appData/appDataMiddleware";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: [
    thunk,
    tokenMiddleware,
    loginMiddleware,
    statisticsMiddleware,
    getJoinMiddleware,
    gameSpecificMiddleware,
    firstReqMiddleware,
    placeBetMiddleware,
    appDataMiddleware,
  ],
});

export default store;
