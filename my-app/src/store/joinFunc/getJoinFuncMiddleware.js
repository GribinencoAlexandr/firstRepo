import { getStatisticAC } from "../getStatistic/actions";
import { loaderAC } from "../appData/actions";
import { roundStatusChangeAC } from "./actions";
import { RoundPhaseEnum } from "../../config";
import { placeBetAC } from "../placeBet/actions";

export const getJoinMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case "JOIN_FUNC": {
      const payloadRoundId = action.payload.roundId;
      const payloadRoundStatus = action.payload.roundStatus;
      if (store.getState().playerInfo.roundId !== payloadRoundId) {
        store.dispatch(getStatisticAC());
      }

      if (store.getState().playerInfo.roundId === 0 && payloadRoundId !== 0) {
        store.dispatch(loaderAC(false));
      }
      if (store.getState().playerInfo.roundStatus !== payloadRoundStatus) {
        store.dispatch(roundStatusChangeAC(payloadRoundStatus));
      }
      break;
    }
    case "ROUND_STATUS_CHANGE": {
      const { preBetsAllowed } = store.getState().firstReq;

      switch (action.payload) {
        case RoundPhaseEnum.StartRound:
          console.log("start");
          break;
        case RoundPhaseEnum.PlaceYourBets:
          console.log("Place Your Bets");
          break;
        case RoundPhaseEnum.LastBets:
          console.log("Last Bets");
          break;
        case RoundPhaseEnum.NoMoreBets:
          !preBetsAllowed && store.dispatch(placeBetAC());
          break;
        case RoundPhaseEnum.RoundResult:
          console.log("Round Result ");
          break;
        default:
          break;
      }
      break;
    }
    default:
  }
  next(action);
};
