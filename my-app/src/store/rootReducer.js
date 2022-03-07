import { combineReducers } from "redux";
import tokenReducer from "./getToken/reducer";
import loginReducer from "./getLogin/reducer";
import statisticReducer from "./getStatistic/reducer";
import joinFuncReducer from "./joinFunc/reducer";
import loaderReducer from "./appData/reducer";
export default combineReducers({
  token: tokenReducer,
  login: loginReducer,
  playerInfo: joinFuncReducer,
  statistic: statisticReducer,
  appData: loaderReducer,
});
