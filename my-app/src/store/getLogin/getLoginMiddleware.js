import { dataJoinFunc, joinFuncUrl } from "../../config";
import { joinFunc } from "../../Services/joinThunks";
import { loadingBarAC } from "../appData/actions";

import { joinFuncAC } from "../joinFunc/actions";

export const loginMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case "GET_LOGIN":
      {
        const { token } = store.getState();
        const { playerID, chipsRange } = action.payload;
        let a = /\s*,\s*/;
        let chipColors2 = store.getState().firstReq.chipColors.split(a);
        let chipRange2 = chipsRange.split(a);

        console.log(chipsRange);
        let dataJoin = dataJoinFunc(token, playerID);
        setInterval(
          () =>
            joinFunc(joinFuncUrl, dataJoin).then((response) => {
              store.dispatch(joinFuncAC(response));
            }),
          1000
        );
        store.dispatch(loadingBarAC(95));
        action.payload.chipsRangeColor = chipRange2.map(
          (item) => chipColors2[chipRange2.indexOf(item)]
        );
      }
      break;
    default:
  }
  next(action);
};
