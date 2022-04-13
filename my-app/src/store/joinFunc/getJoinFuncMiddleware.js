import { getStatisticAC } from "../getStatistic/actions";
import { addPerspectiveAC, loaderAC } from "../appData/actions";
import { roundStatusChangeAC } from "./actions";
import { RoundPhaseEnum } from "../../config";
import { placeBetAC } from "../placeBet/actions";
import { clearAllBetAC, removeInValidBetsAC } from "../gameSpecific/actions";

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
          store.dispatch(addPerspectiveAC(""));
          console.log("start");
          break;
        case RoundPhaseEnum.PlaceYourBets:
          console.log("Place Your Bets");
          break;
        case RoundPhaseEnum.LastBets:
          console.log("Last Bets");
          break;
        case RoundPhaseEnum.NoMoreBets:
          // let validItems = {};
          // Object.values(allBets).forEach((item, idx) => {
          //   if (allBets[Number(Object.keys(allBets)[idx])].isValid) {
          //     validItems[Object.keys(allBets)[idx]].push({
          //       [Object.keys(allBets)[idx]]: {
          //         amount: item.amount,
          //         isValid: item.isValid,
          //         color: item.color,
          //       },
          //     });
          //   }
          // });
          // console.log(validItems);
          // store.dispatch(clearAllBetAC({ status: 3, items: validItems }));
          store.dispatch(addPerspectiveAC("1"));
          store.dispatch(removeInValidBetsAC());
          !preBetsAllowed && store.dispatch(placeBetAC());
          setTimeout(() => {
            store.dispatch(addPerspectiveAC("2"));
          }, 2000);
          break;
        case RoundPhaseEnum.RoundResult:
          store.dispatch(clearAllBetAC());
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
