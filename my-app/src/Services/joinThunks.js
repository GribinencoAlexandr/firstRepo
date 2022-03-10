import axios from "axios";

export const joinFunc = (url, data) => {
  return axios
    .post(url, data)
    .then((result) => {
      console.log("join", result.data);
      return result.data;
    })
    .catch((error) => {
      return error;
    });
};
