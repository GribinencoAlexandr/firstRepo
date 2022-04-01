export const getTokenUrl =
  "https://apiclient.xpgtesting.com/Services/ExternalApi.svc/GetJoinToken";
export const getLoginUrl = "https://services.xpgtesting.com/RService/Login";
export const getStatisticUrl =
  "https://services.xpgtesting.com/RService/GetGameStatistics";
export const joinFuncUrl =
  "https://services.xpgtesting.com/RService/GetGameStateBySequence";
export const placeBetUrl =
  "https://services.xpgtesting.com/RService/PlaceBetsWithResult";
export const firstReqUrl = "https://services.xpgtesting.com/ApiParams/Game/3/1";
const gameId = "1";

export const dataToken = {
  accessPassword: "d85fd6f5-6f11-4e88-a496-1f7d20f9f669",
  gameID: gameId,
  operatorID: "3",
  props: "limitsetid:7",
  headers: {
    "Content-Type": "multipart/form-data",
  },
};
export const dataLogin = (result) => {
  const data = {
    gameId: gameId,
    token: result,
  };
  return data;
};
export const dataJoinFunc = (token, playerId) => {
  const data = {
    ClientGameSequence: 0,
    CommKey: token.substr(0, 5),
    GameId: gameId,
    PlayerId: playerId,
  };
  return data;
};
export const dataStat = (token, statItems = 100) => {
  const data = {
    commKey: token.substr(0, 5),
    gameId: gameId,
    statisticsItems: statItems,
  };
  return data;
};
export const dataPlaceBet = (token, playerId, roundId, dataBet) => {
  const data = {
    commKey: token.substr(0, 5),
    bets: dataBet,
    gameId: gameId,
    playerId: playerId,
    roundId: roundId,
  };
  return data;
};
export const namesData1 = {
  racetrackTierPercent: "Tier",
  racetrackOrphelinsPercent: "Orph",
  racetrackVoisinsDuZeroPercent: "Voisins",
  zeroPercent: "Zero",
};
export const colorsData1 = {
  racetrackTierPercent: "gray",
  racetrackOrphelinsPercent: "lightgray",
  racetrackVoisinsDuZeroPercent: "lightgreen",
  zeroPercent: "green",
};

export const namesData2 = {
  blackPercent: "Black",
  redPercent: "Red",
  zeroPercent: "Zero",
};
export const colorsData2 = {
  blackPercent: "gray",
  redPercent: "red",
  zeroPercent: "green",
};

export const namesData3 = {
  evenPercent: "Even",
  zeroPercent: "Zero",
  oddPercent: "Odd",
};
export const colorsData3 = {
  evenPercent: "lightgray",
  zeroPercent: "green",
  oddPercent: "gray",
};
export const numberColors = {
  0: "#00B233",
  1: "#FF3333",
  2: "#E6E6E6",
  3: "#FF3333",
  4: "#E6E6E6",
  5: "#FF3333",
  6: "#E6E6E6",
  7: "#FF3333",
  8: "#E6E6E6",
  9: "#FF3333",
  10: "#E6E6E6",
  11: "#E6E6E6",
  12: "#FF3333",
  13: "#E6E6E6",
  14: "#FF3333",
  15: "#E6E6E6",
  16: "#FF3333",
  17: "#E6E6E6",
  18: "#FF3333",
  19: "#FF3333",
  20: "#E6E6E6",
  21: "#FF3333",
  22: "#E6E6E6",
  23: "#FF3333",
  24: "#E6E6E6",
  25: "#FF3333",
  26: "#E6E6E6",
  27: "#FF3333",
  28: "#E6E6E6",
  29: "#E6E6E6",
  30: "#FF3333",
  31: "#E6E6E6",
  32: "#FF3333",
  33: "#E6E6E6",
  34: "#FF3333",
  35: "#E6E6E6",
  36: "#FF3333",
};
export const numberRoulleteColors = {
  0: { color: "#00B233", number: 0 },
  1: { color: "#FF3333", number: 32 },
  2: { color: "rgb(0, 0, 0)", number: 15 },
  3: { color: "#FF3333", number: 19 },
  4: { color: "rgb(0, 0, 0)", number: 4 },
  5: { color: "#FF3333", number: 21 },
  6: { color: "rgb(0, 0, 0)", number: 2 },
  7: { color: "#FF3333", number: 25 },
  8: { color: "rgb(0, 0, 0)", number: 17 },
  9: { color: "#FF3333", number: 34 },
  10: { color: "rgb(0, 0, 0)", number: 6 },
  11: { color: "#FF3333", number: 27 },
  12: { color: "rgb(0, 0, 0)", number: 13 },
  13: { color: "#FF3333", number: 36 },
  14: { color: "rgb(0, 0, 0)", number: 11 },
  15: { color: "#FF3333", number: 30 },
  16: { color: "rgb(0, 0, 0)", number: 8 },
  17: { color: "#FF3333", number: 23 },
  18: { color: "rgb(0, 0, 0)", number: 10 },
  19: { color: "#FF3333", number: 5 },
  20: { color: "rgb(0, 0, 0)", number: 24 },
  21: { color: "#FF3333", number: 16 },
  22: { color: "rgb(0, 0, 0)", number: 33 },
  23: { color: "#FF3333", number: 1 },
  24: { color: "rgb(0, 0, 0)", number: 20 },
  25: { color: "#FF3333", number: 14 },
  26: { color: "rgb(0, 0, 0)", number: 31 },
  27: { color: "#FF3333", number: 9 },
  28: { color: "rgb(0, 0, 0)", number: 22 },
  29: { color: "#FF3333", number: 18 },
  30: { color: "rgb(0, 0, 0)", number: 29 },
  31: { color: "#FF3333", number: 7 },
  32: { color: "rgb(0, 0, 0)", number: 28 },
  33: { color: "#FF3333", number: 12 },
  34: { color: "rgb(0, 0, 0)", number: 35 },
  35: { color: "#FF3333", number: 3 },
  36: { color: "rgb(0, 0, 0)", number: 26 },
};
export const limitsTypes = {
  "-1": "Table",
  1: "StraightUp",
  2: "Split",
  3: "Trio",
  5: "Corner",
  6: "SixNumber",
  7: "Dozen",
  9: "Column",
  10: "OutsideHalf",
  11: "OutsideTotal",
};
export const BetPointsEnum = {
  StraightUp: [0, 36],
  Split: [37, 96],
  Trio: [97, 110],
  Corner: [111, 133],
  SixNumber: [134, 144],
  Dozen: [145, 147],
  Column: [148, 150],
  OutsideHalf: [151, 156],
  findPropFromVal: (v) => {
    return Object.keys(BetPointsEnum).find(
      (x) =>
        BetPointsEnum[x].length > 1 &&
        BetPointsEnum[x][0] <= v &&
        BetPointsEnum[x][1] >= v
    );
  },
};

export const RoundPhaseEnum = {
  StartRound: 0,
  PlaceYourBets: 1,
  LastBets: 2,
  NoMoreBets: 3,
  RoundResult: 5,
};

export const NotificationText = {
  betsAccepted: "Bets Accepted",
  error:
    "Some of your bets did not meet the minimum required. Those bets were cleared and funds returned",
};
