import qs from "qs";
import axios from "axios";

export const getToken = (setFunc, url, data) => {
  axios
    .post(url, qs.stringify(data))
    .then((res) => {
      console.log("asfa", res);
      let parser = new DOMParser();
      let xmlFile = parser.parseFromString(res.data, "text/xml");
      console.log(
        "xml",
        xmlFile.getElementsByTagName("description")[0].childNodes[0].nodeValue
      );
      setFunc(
        xmlFile.getElementsByTagName("description")[0].childNodes[0].nodeValue
      );
    })
    .catch((error) => console.log("ters", error));
};
