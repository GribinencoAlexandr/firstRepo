import axios from "axios";
export const getStatistic = (url, data) => {
  return axios
    .post(url, data)
    .then((response) => {
      console.log("1234", response.data);
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};
