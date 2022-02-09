import qs from "qs";
import axios from "axios";

export const getToken = (setFunc, url, data) => {
  axios
    .post(url, qs.stringify(data))
    .then((res) => {
      let parser = new DOMParser();
      let xmlFile = parser.parseFromString(res.data, "text/xml");
      setFunc(
        xmlFile.getElementsByTagName("description")[0].childNodes[0].nodeValue
      );
    })
    .catch((error) => console.log("ters", error));
};
