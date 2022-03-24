import axios from "axios";
export const getStatistic = (url, data) => {
  return axios
    .post(url, data)
    .then((response) => {
      // console.log("stat", response.data);
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};
