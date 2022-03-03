import axios from "axios";

export const joinFunc = (url, data) => {
  return axios
    .post(url, data)
    .then((result) => {
      console.log(result);
      return result.data;
    })
    .catch((error) => {
      return error;
    });
};
