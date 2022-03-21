import { configureStore } from "@reduxjs/toolkit";
import { tokenMiddleware } from "./getToken/getTokenMiddleware";
import { loginMiddleware } from "./getLogin/getLoginMiddleware";
import { statisticsMiddleware } from "./getStatistic/getStatisticMiddleware";
import { getJoinMiddleware } from "./joinFunc/getJoinFuncMiddleware";
import { gameSpecificMiddleware } from "./gameSpecific/gameSpecificMiddleware";
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
  ],
});

export default store;
