import { NotificationText } from "../../config";
import { notificationAC } from "./actions";

export const appDataMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case "NOTIFICATION":
      {
        let hasNote = !!action.payload.length;
        console.log(action.payload);
        action.payload = hasNote ? NotificationText[action.payload] : "";
        hasNote &&
          setTimeout(() => {
            store.dispatch(notificationAC(""));
          }, 3000);
      }
      break;
    default:
  }
  next(action);
};
