import axios from "axios";
export const getStatistic = (url, data) => {
  return axios
    .post(url, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};
