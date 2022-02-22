import axios from "axios";

export const joinFunc = (url, data) => {
  return axios
    .post(url, data)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return error;
    });
};
