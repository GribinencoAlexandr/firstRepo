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
        console.log(allBets[type]?.isValid);

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
        action.payload.repeatBetsSequence = dataBetsSequence;
        action.payload.repeatBets = newBets;
        action.payload.repeatBetsAmount = newTotalBetsAmount;
        action.payload.repeatAllBets = newAllBets;
      }
      break;
    case "UNDO_BET":
      {
        const newGameSpecific = Object.assign(store.getState().gameSpecific);
        const newLimits = Object.assign(store.getState().login);
        const { roundStatus } = store.getState().playerInfo;

        const { allBets, bets, totalBetsAmount, betsSequence } =
          newGameSpecific;
        const { limits } = newLimits;
        const undoData = betsSequence[betsSequence.length - 1];
        let undoDataType = betsSequence[betsSequence.length - 1].type;
        let undoBetsSequence = betsSequence.filter((undo) => undo !== undoData);
        let sliceBetType = bets[undoDataType].slice();
        let spliceValue = sliceBetType.splice(sliceBetType.length - 1, 1);
        let undoBets = { ...bets, [undoDataType]: sliceBetType };
        let undoAllBetsAmount =
          roundStatus === 5
            ? ""
            : {
                ...allBets,
                [undoDataType]: {
                  amount: allBets[undoDataType].amount - spliceValue[0],
                  isValid: allBetsLimits(
                    allBets[undoDataType].amount - spliceValue[0],
                    undoDataType,
                    limits
                  ),
                  color: allBetsColor(
                    allBets[undoDataType].amount - spliceValue[0]
                  ),
                },
              };
        let undoTotalBetAmount = totalBetsAmount - spliceValue[0];
        console.log("415", undoData);
        action.payload = {
          allBets: undoAllBetsAmount,
          bets: undoBets,
          totalBetsAmount: undoTotalBetAmount,
          betsSequence: undoBetsSequence,
        };
      }
      break;
    case "CLEAR_ALL_BET":
      {
        action.payload = {
          allBets: {},
          bets: {},
          totalBetsAmount: 0,
          betsSequence: [],
        };
      }
      break;
    case "REPEAT_ALL_BET":
      {
        const newLimits = Object.assign(store.getState().login);
        const newGameSpecific = Object.assign(store.getState().gameSpecific);
        //   console.log(...action.payload?.items);
        const { repeatBetsSequence, repeatBets, repeatBetsAmount } =
          newGameSpecific;
        const { limits } = newLimits;
        let a = {};
        let x;
        Object.values(repeatBets).forEach((item, idx) => {
          //   console.log(
          //     Object.values(repeatBets)
          //       [idx]?.map((i) => (x += i), (x = 0))
          //       .reverse()[0]
          //   );
          let repeatAmount = Object.values(repeatBets)
            [idx]?.map((i) => (x += i), (x = 0))
            .reverse()[0];
          console.log(item.type);
          a[Number(Object.keys(repeatBets)[idx])] = {
            amount: repeatAmount,
            isValid: allBetsLimits(
              repeatAmount,
              Number(Object.keys(repeatBets)[idx]),
              limits
            ),
            color: allBetsColor(repeatAmount),
          };
        });
        action.payload = {
          allBets: a,
          betsSequence: repeatBetsSequence,
          bets: repeatBets,
          totalBetsAmount: repeatBetsAmount,
        };
      }
      break;
    case "REMOVE_INVALID_BETS":
      const newGameSpecific = Object.assign(store.getState().gameSpecific);
      const { allBets, bets, totalBetsAmount, betsSequence } = newGameSpecific;
      //   console.log(allBets);
      let allBetsValid = {};
      Object.values(allBets).forEach((item, idx) => {
        if (allBets[Number(Object.keys(allBets)[idx])].isValid)
          allBetsValid[Number(Object.keys(allBets)[idx])] = {
            amount: item.amount,
            isValid: item.isValid,
            color: item.color,
          };
      });
      let betsValid = {};
      //   let v = Object.keys(bets).filter(
      //     (item, idx) => item[idx] === Object.keys(allBetsValid)[idx]
      //   );
      Object.values(bets).forEach((item, idx) => {
        console.log(Object.keys(bets)[idx]);
        if (Object.keys(bets)[idx] === Object.keys(allBetsValid)[idx])
          betsValid[Number(Object.keys(bets)[idx])] = item;
      });

      let validSequence = [];

      Object.values(betsSequence).forEach((item, idx) => {
        if (betsSequence[idx].type === Object.keys(allBetsValid)[idx])
          validSequence.push({
            type: item.type,
            origin: "regular",
            combinadeType: item.type,
          });
      });
      console.log(validSequence);
      {
        action.payload = {
          allBets: allBetsValid,
          bets: betsValid,
          totalBetsAmount: 0,
          betsSequence: validSequence,
        };
      }
      break;
    default:
  }
  next(action);
};
