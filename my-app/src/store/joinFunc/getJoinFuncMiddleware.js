export const getJoinMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case "JOIN_FUNC":
      console.log("JoinFunc", action.payload);
      break;
    default:
  }
  next(action);
};
