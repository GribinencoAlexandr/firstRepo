import { getLogin } from "../../Services/loginThunks";
import {
  dataLogin,
  getLoginUrl,
  getTokenUrl,
  dataToken,
} from "../../config/index";
import { getLoginAC } from "../getLogin/actions";
import { getToken } from "../../Services/tokenThunks";
import { getTokenACSuccess } from "./actions";
import { loadingBarAC } from "../appData/actions";

export const tokenMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case "GET_TOKEN":
      getToken(getTokenUrl, dataToken).then((result) => {
        store.dispatch(getTokenACSuccess(result));
        let data = dataLogin(result);
        getLogin(getLoginUrl, data).then((response) => {
          console.log(response);
          store.dispatch(getLoginAC(response));
        });
      });
      break;
    case "GET_TOKEN_SUCCESS":
      store.dispatch(loadingBarAC(10));
      break;
    default:
  }
  next(action);
};
