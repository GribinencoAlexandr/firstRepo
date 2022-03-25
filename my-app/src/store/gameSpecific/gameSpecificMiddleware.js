import {
  allBetsAmount,
  allBetsColor,
  allBetsLimits,
} from "../../config/limits";

export const gameSpecificMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case "ALL_BETS":
      {
        const { type, betSize } = action.payload;
        // console.log(type, betSize);
        const newGameSpecific = Object.assign(store.getState().gameSpecific);
        const newLimits = Object.assign(store.getState().login);

        const { allBets, bets, totalBetsAmount, betsSequence } =
          newGameSpecific;
        const { limits } = newLimits;

        let newAllBets = {
          ...allBets,
          [type]: {
            amount: allBetsAmount(
              betSize + (allBets[type]?.amount || 0),
              type,
              limits,
              totalBetsAmount,
              allBets[type]?.amount || 0
            ),
            isValid: allBetsLimits(
              betSize + (allBets[type]?.amount || 0),
              type,
              limits
            ),
            color: allBetsColor(betSize + (allBets[type]?.amount || 0)),
          },
        };

        let newBets = {
          ...bets,
          [type]: [...(bets[type] || []), betSize],
        };
        let newTotalBetsAmount =
          totalBetsAmount + betSize >= 10000
            ? 10000
            : totalBetsAmount + betSize;
        let dataBetsSequence = [
          ...betsSequence,
          {
            type: type,
            origin: "regular",
            combinadeType: type,
          },
        ];
        action.payload.allBets = newAllBets;
        action.payload.bets = newBets;
        action.payload.totalBetsAmount = newTotalBetsAmount;
        action.payload.betsSequence = dataBetsSequence;
      }
      break;
    case "UNDO_BET":
      {
        const newGameSpecific = Object.assign(store.getState().gameSpecific);
        const newLimits = Object.assign(store.getState().login);

        const { allBets, bets, totalBetsAmount, betsSequence } =
          newGameSpecific;
        const { limits } = newLimits;
        const undoData = betsSequence[betsSequence.length - 1];
        let undoDataType = betsSequence[betsSequence.length - 1].type;
        let undoBetsSequence = betsSequence.filter((undo) => undo !== undoData);
        let sliceBetType = bets[undoDataType].slice();
        let spliceValue = sliceBetType.splice(sliceBetType.length - 1, 1);
        let undoBets = { ...bets, [undoDataType]: sliceBetType };
        let undoAllBetsAmount = {
          ...allBets,
          [undoDataType]: {
            amount: allBets[undoDataType].amount - spliceValue[0],
            isValid: allBetsLimits(
              allBets[undoDataType].amount - spliceValue[0],
              undoDataType,
              limits
            ),
            color: allBetsColor(allBets[undoDataType].amount - spliceValue[0]),
          },
        };
        let undoTotalBetAmount = totalBetsAmount - spliceValue[0];
        console.log("415", totalBetsAmount);
        action.payload = {
          allBets: undoAllBetsAmount,
          bets: undoBets,
          totalBetsAmount: undoTotalBetAmount,
          betsSequence: undoBetsSequence,
        };
      }
      break;
    default:
  }
  next(action);
};
