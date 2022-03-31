import { dataPlaceBet, placeBetUrl } from "../../config";
import { placeBetFunc } from "../../Services/placeBetThunk";
import { notificationAC } from "../appData/actions";

export const placeBetMiddleware = (store) => (next) => (action) => {
  const { token } = store.getState();
  const { playerID } = store.getState().login;
  const { roundId } = store.getState().playerInfo;
  const { allBets } = store.getState().gameSpecific;
  switch (action.type) {
    case "PLACE_BET":
      {
        let sendBets = [];

        Object.values(allBets).forEach((item, idx) => {
          sendBets.push({
            BetAmount: item.amount,
            BetPoint: Number(Object.keys(allBets)[idx]),
          });
        });
        console.log(sendBets);
        let dataPlace = dataPlaceBet(token, playerID, roundId, sendBets);
        placeBetFunc(placeBetUrl, dataPlace).then((res) => {
          console.log("151", res.data);
          if (res.data.errorCode === 0) {
            store.dispatch(notificationAC("betsAccepted"));
          } else {
            store.dispatch(notificationAC("error"));
          }
        });
      }
      break;
    default:
  }
  next(action);
};
