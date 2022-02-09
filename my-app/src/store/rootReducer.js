import { combineReducers } from "redux";
import tokenReducer from "./getToken/reducer";
import loginReducer from "./getLogin/reducer";
import statisticReducer from "./getStatistic/reducer";
export default combineReducers({
  token: tokenReducer,
  login: loginReducer,
  statistic: statisticReducer,
});
