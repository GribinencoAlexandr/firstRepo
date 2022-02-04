export const getLogin = (result) => {
  const data = {
    gameId: "5",
    token: result,
  };
  fetch("https://services.xpgtesting.com/BJService/Login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((result) => console.log(result));
};
