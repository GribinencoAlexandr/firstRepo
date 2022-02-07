import axios from "axios";
export const getLogin = (setId, url, dataLogin) => {
  axios.post(url, dataLogin).then((result) => {
    setId(result.data.playerID);
    console.log(result.data.playerID);
    console.log("asd", result);
  });
};
