import { dataPlaceBet, placeBetUrl } from "../../config";
import { placeBetFunc } from "../../Services/placeBetThunk";
import { notificationAC } from "../appData/actions";

export const placeBetMiddleware = (store) => (next) => (action) => {
  const { token } = store.getState();
  const { playerID } = store.getState().login;
  const { roundId } = store.getState().playerInfo;
  switch (action.type) {
    case "PLACE_BET":
      {
        const { allBets } = store.getState().gameSpecific;
        let sendBets = [];
        let a = {};
        Object.values(allBets).forEach((item, idx) => {
          if (allBets[Number(Object.keys(allBets)[idx])].isValid)
            sendBets.push({
              BetAmount: item.amount,
              BetPoint: Number(Object.keys(allBets)[idx]),
            });
        });
        Object.values(allBets).forEach((item, idx) => {
          if (allBets[Number(Object.keys(allBets)[idx])].isValid)
            a[Number(Object.keys(allBets)[idx])] = {
              amount: item.amount,
              isValid: item.isValid,
              color: item.color,
            };
          // a.push({
          //   amount: item.amount,
          //   isValid: item.isValid,
          //   color: item.color,
          // });
        });
        // console.log(a);
        // store.dispatch(repeatAllBetAC(a));
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
