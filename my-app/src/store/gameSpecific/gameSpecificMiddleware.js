export const gameSpecificMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case "ALL_BETS":
      const { num } = action.payload;
      break;
    default:
  }
  next(action);
};
