export const getTokenUrl =
  "https://apiclient.xpgtesting.com/Services/ExternalApi.svc/GetJoinToken";
export const getLoginUrl = "https://services.xpgtesting.com/RService/Login";
export const getStatisticUrl =
  "https://services.xpgtesting.com/RService/GetGameStatistics";
export const joinFuncUrl =
  "https://services.xpgtesting.com/RService/GetGameStateBySequence";
export const dataToken = {
  accessPassword: "d85fd6f5-6f11-4e88-a496-1f7d20f9f669",
  gameID: "1",
  operatorID: "3",
  props: "limitsetid:1",
  headers: {
    "Content-Type": "multipart/form-data",
  },
};
export const dataLogin = (result) => {
  const data = {
    gameId: "1",
    token: result,
  };
  return data;
};
export const dataJoinFunc = (token, playerId) => {
  const data = {
    ClientGameSequence: 0,
    CommKey: token.substr(0, 5),
    GameId: "1",
    PlayerId: playerId,
  };
  return data;
};
export const dataStat = (token) => {
  const data = {
    commKey: token.substr(0, 5),
    gameId: "1",
    statisticsItems: 100,
  };
  return data;
};
