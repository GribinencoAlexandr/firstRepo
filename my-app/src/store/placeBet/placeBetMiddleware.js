import { dataPlaceBet, placeBetUrl } from "../../config";
import { placeBetFunc } from "../../Services/placeBetThunk";
import { placeBetSuccessAC } from "./actions";

export const placeBetMiddleware = (store) => (next) => (action) => {
  const { token } = store.getState();
  const { playerID } = store.getState().login;
  const { roundId } = store.getState().playerInfo;
  switch (action.type) {
    case "PLACE_BET":
      {
        console.log("fasfaf");
        let sendBets = [
          {
            BetAmount: 50,
            BetPoint: 153,
          },
        ];
        let dataPlace = dataPlaceBet(token, playerID, roundId, sendBets);
        placeBetFunc(placeBetUrl, dataPlace).then((res) => {
          console.log("151", res.data);
          store.dispatch(placeBetSuccessAC(res.data));
        });
      }
      break;
    default:
  }
  next(action);
};
