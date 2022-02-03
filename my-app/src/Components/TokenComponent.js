import React, { useState } from "react";
import qs from "qs";

const TokenComponent = () => {
  const [result, setResult] = useState(null);

  const testFunc = () => {
    const data = {
      accessPassword: "9a742727-da10-4301-ba6d-8116b096d4fd",
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

          setResult(
            xmlFile.getElementsByTagName("description")[0].childNodes[0]
              .nodeValue
          );
          console.log(result);
        });
      })
      .catch((error) => console.log("ters", error));
  };
  return (
    <div>
      <button onClick={testFunc}>Get Token</button>
    </div>
  );
};

export default TokenComponent;
