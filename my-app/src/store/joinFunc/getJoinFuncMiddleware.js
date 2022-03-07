import { getStatisticAC } from "../getStatistic/actions";
import { loaderAC } from "../appData/actions";

export const getJoinMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case "JOIN_FUNC":
      const payloadRoundId = action.payload.roundId;
      if (store.getState().playerInfo.roundId !== payloadRoundId) {
        store.dispatch(getStatisticAC());
      }

      if (store.getState().playerInfo.roundId === 0 && payloadRoundId !== 0) {
        store.dispatch(loaderAC(false));
      }
      break;
    default:
  }
  next(action);
};
