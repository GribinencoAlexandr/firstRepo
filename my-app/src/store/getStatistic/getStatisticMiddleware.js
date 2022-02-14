export const statisticsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case "GET_STATISTIC":
      console.log("StatisticMv");
      console.log("aga", action.payload);
      break;
    default:
  }
  next(action);
};
