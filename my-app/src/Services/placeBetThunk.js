import axios from "axios";

export const placeBetFunc = (url, data) => {
  return axios
    .post(url, data)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });
};
