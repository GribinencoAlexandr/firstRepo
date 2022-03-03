import { dataJoinFunc, joinFuncUrl } from "../../config";
import { joinFunc } from "../../Services/joinThunks";

import { joinFuncAC } from "../joinFunc/actions";

export const loginMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case "GET_LOGIN":
      const { token } = store.getState();
      const { playerID } = action.payload;

      let dataJoin = dataJoinFunc(token, playerID);
      setInterval(
        () =>
          joinFunc(joinFuncUrl, dataJoin).then((response) => {
            console.log(response);
            store.dispatch(joinFuncAC(response));
          }),
        1000
      );

      break;
    default:
  }
  next(action);
};
