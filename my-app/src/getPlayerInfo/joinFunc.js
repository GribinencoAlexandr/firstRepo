import axios from "axios";

export const joinFunc = (stat, url, data) => {
  // const data = {
  //   ClientGameSequence: 0,
  //   CommKey: token.substr(0, 5),
  //   GameId: "1",
  //   PlayerId: playerId,
  // };
  // console.log(playerId);
  console.log(stat);
  axios.post(url, data).then((result) => console.log("sda", result));
};
