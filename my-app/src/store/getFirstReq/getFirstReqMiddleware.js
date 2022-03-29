import { firstReqUrl } from "../../config";
import { mapFirstReq } from "../../config/mapper";
import { getFirstReq } from "../../Services/firstThunk";
import { getTokenAC } from "../getToken/actions";
import { getFirstReqSuccessAC } from "./actions";

export const firstReqMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case "GET_FIRST_REQ":
      getFirstReq(firstReqUrl).then((res) => {
        // console.log(res);
        store.dispatch(getFirstReqSuccessAC(mapFirstReq(res)));
      });

      store.dispatch(getTokenAC());
      break;
    default:
  }
  next(action);
};
