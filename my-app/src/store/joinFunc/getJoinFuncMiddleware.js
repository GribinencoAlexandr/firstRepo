import { getStatisticAC } from "../getStatistic/actions";

export const getJoinMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case "JOIN_FUNC":
      const payloadRoundId = action.payload.roundId;
      if (store.getState().playerInfo.roundId !== payloadRoundId) {
        store.dispatch(getStatisticAC());
      } else if (payloadRoundId) {
      }
      break;
    default:
  }
  next(action);
};
