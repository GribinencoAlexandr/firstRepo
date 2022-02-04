export const joinFunc = (token) => {
  const data = {
    ClientGameSequence: 0,
    CommKey: token.substr(0, 5),
    GameId: "5",
    PlayerId: 1256794085,
  };
  fetch("https://services.xpgtesting.com/BJService/GetGameStateBySequence", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((result) => console.log(result));
};
