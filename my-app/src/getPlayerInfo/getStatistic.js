import axios from "axios";

export const getStatistic = (setStat, url, data) => {
  //   const data = {
  //     commKey: token.substr(0, 5),
  //     gameId: "1",
  //     statisticsItems: 100,
  //   };
  axios.post(url, data).then((response) => {
    setStat(response.data);
    console.log("1234", response);
  });
};
