export const getTokenUrl =
  "https://apiclient.xpgtesting.com/Services/ExternalApi.svc/GetJoinToken";
export const getLoginUrl = "https://services.xpgtesting.com/RService/Login";
export const getStatisticUrl =
  "https://services.xpgtesting.com/RService/GetGameStatistics";
export const joinFuncUrl =
  "https://services.xpgtesting.com/RService/GetGameStateBySequence";

const gameId = "2";

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
