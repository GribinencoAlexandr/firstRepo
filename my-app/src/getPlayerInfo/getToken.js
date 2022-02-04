import qs from "qs";

export const testFunc = (setFunc) => {
  const data = {
    accessPassword: "3fb09914-f38c-4604-8e0f-3073404e5fe2",
    gameID: "5",
    operatorID: "5",
    props: "limitsetid:2",
  };
  fetch(
    "https://apiclient.xpgtesting.com/Services/ExternalApi.svc/GetJoinToken",
    {
      method: "POST",
      body: qs.stringify(data),
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  )
    .then((response) => {
      response.text().then((res) => {
        // console.log(res);
        let parser = new DOMParser();
        let xmlFile = parser.parseFromString(res, "text/xml");

        setFunc(
          xmlFile.getElementsByTagName("description")[0].childNodes[0].nodeValue
        );
      });
    })
    .catch((error) => console.log("ters", error));
};
