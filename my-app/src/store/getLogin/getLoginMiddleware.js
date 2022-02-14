import {
  dataJoinFunc,
  dataStat,
  getStatisticUrl,
  joinFuncUrl,
} from "../../config";
import { joinFunc } from "../../Services/joinThunks";
import { getStatistic } from "../../Services/statisticsThunk";
import { getStatisticAC } from "../getStatistic/actions";
import { joinFuncAC } from "../joinFunc/actions";

export const loginMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case "GET_LOGIN":
      const { data } = store.getState().token;
      const { playerID } = action.payload;
      let dataStatistics = dataStat(data);
      console.log("login", data);
      console.log(playerID);
      let dataJoin = dataJoinFunc(data, playerID);
      setInterval(
        () =>
          getStatistic(getStatisticUrl, dataStatistics).then((response) => {
            store.dispatch(getStatisticAC(response));
          }),
        10000
      );

      setInterval(
        () =>
          joinFunc(joinFuncUrl, dataJoin).then((response) =>
            store.dispatch(joinFuncAC(response))
          ),
        10000
      );

      break;
    default:
  }
  next(action);
};
