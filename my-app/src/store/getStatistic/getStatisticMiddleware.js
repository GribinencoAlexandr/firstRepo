import { dataStat, getStatisticUrl } from "../../config";
import { getStatistic } from "../../Services/statisticsThunk";
import { loadingBarAC } from "../appData/actions";
import { getStatisticSuccessAC } from "./actions";

export const statisticsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case "GET_STATISTIC":
      const { token } = store.getState();

      let dataStatistics = dataStat(token, action.payload);
      getStatistic(getStatisticUrl, dataStatistics).then((response) => {
        console.log("fa", response);
        store.dispatch(getStatisticSuccessAC(response));
      });
      store.dispatch(loadingBarAC(100));
      break;

    default:
  }
  next(action);
};
