import axios from "axios";

export const getFirstReq = (url) => {
  return axios
    .get(url)
    .then((res) => {
      //   console.log("1", res.data);
      return res.data;
    })
    .catch((error) => {
      return error;
    });
};
