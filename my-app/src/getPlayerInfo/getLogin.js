import axios from "axios";
export const getLogin = (setId, setInfo, url, data) => {
  axios.post(url, data).then((result) => {
    setId(result.data.playerID);
    setInfo(result.data);
    // console.log(result.data.playerID);
    // console.log("asd", result);
  });
};
