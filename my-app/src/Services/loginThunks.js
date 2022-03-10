import axios from "axios";
export const getLogin = (url, data) => {
  return axios
    .post(url, data)
    .then((result) => {
      console.log("login", result);
      return result.data;
    })
    .catch((error) => {
      return error;
    });
};
