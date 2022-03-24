import { dataJoinFunc, joinFuncUrl } from "../../config";
import { joinFunc } from "../../Services/joinThunks";
import { loadingBarAC } from "../appData/actions";

import { joinFuncAC } from "../joinFunc/actions";

export const loginMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case "GET_LOGIN":
      {
        const { token } = store.getState();
        const { playerID } = action.payload;

        let dataJoin = dataJoinFunc(token, playerID);
        setInterval(
          () =>
            joinFunc(joinFuncUrl, dataJoin).then((response) => {
              store.dispatch(joinFuncAC(response));
            }),
          1000
        );
        store.dispatch(loadingBarAC(95));
      }
      break;
    default:
  }
  next(action);
};
