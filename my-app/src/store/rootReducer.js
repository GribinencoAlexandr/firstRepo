import { combineReducers } from "redux";
import tokenReducer from "./getToken/reducer";
import loginReducer from "./getLogin/reducer";
import statisticReducer from "./getStatistic/reducer";
import joinFuncReducer from "./joinFunc/reducer";
import loaderReducer from "./appData/reducer";
import gameSpecificReducer from "./gameSpecific/reducer";
import chipsAmountReducer from "./chipsAmount/reducer";
export default combineReducers({
  token: tokenReducer,
  login: loginReducer,
  playerInfo: joinFuncReducer,
  statistic: statisticReducer,
  appData: loaderReducer,
  gameSpecific: gameSpecificReducer,
  chipsAmount: chipsAmountReducer,
});
